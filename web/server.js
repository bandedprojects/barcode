if (process.env.NODE_ENV !=='production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
var bodyParser = require('body-parser');
const dbconnctor = require('./db_connector/mysql-connector')

dbconnctor.connectDB();
//dbconnctor.executeQuery();

const initializePassport = require('./passport-config')
initializePassport(
passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)  
)

const users = []

app.use(express.static(__dirname + '/views'));
app.set('view-engine', 'ejs')
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
	console.log("Main Page requested!");	
  //res.render('index.ejs', { name: req.user.name })
  res.sendFile('views/index.html', {root: __dirname })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
	console.log("Login Page requested!");
  res.render('login.ejs')
})

app.post('/loginpassport', checkNotAuthenticated, passport.authenticate('local', {
  
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
	console.log("Register Page requested!");	
  res.render('register.ejs')
})

app.post('/createbatch',  (req, res) => {
  console.log(req.body);
	var batch = {};
  batch.name = req.body.batchname;
  batch.type = req.body.batchtype;
  batch.serial_start = req.body.serial_start;
  batch.serial_end = req.body.serial_end;
  batch.batch_creator = req.body.batch_creator;
  batch.punching_instructor = req.body.punching_instructor;

  dbconnctor.executeQuery('SELECT * FROM batches_info WHERE batchname="'+batch.name+'"', (err, data)=>{
    console.log(data);
    if (data.length == 0) {
      console.log("No Batch Name with"+batch.name)
      dbconnctor.executeQuery("INSERT INTO batches_info (batchname, batchtype, serial_start, serial_end, date,batch_creator,punching_instructor) VALUES ('"+batch.name+"','"+batch.type+"','"+batch.serial_start+"','"+batch.serial_end+"','"+Date.now().toString()+"','"+batch.batch_creator+"','"+batch.punching_instructor+"')", (err, data)=>{
        if (err) console.log("Error inserting database:"+err);
        else {
          console.log("Batch has been created");
          res.json({"status":"1",data:{"batchname":batch.name}});
        }
      });
    }
    else{
      res.json({"status":"0",data:{"batchname":batch.name}});
    }
  });

})

app.post('/login',  (req, res) => {
  console.log(req.body);
	if(req.body.username == "root" && req.body.password == "kalliyath"){
    res.json({"status":"1",data:{"username":"Administrator"}});
  }
  else{
    res.json({"status":"0",data:{"username":null}});
  }
})

app.post('/downloadDispatch', (req,res) => { 

  dbconnctor.executeQuery('SELECT * FROM batch_rejections WHERE batchname="'+req.body.batchname+'" AND batchtype="'+req.body.batchtype+'"', (err, data)=>{
    if (err || data.lengh == 0){
      console.log("Error fetchiing batch rejections:"+err);
      res.json({"status":"0",data:{"lastserialnuber":null}});
    } else {
      var restult = {
        batchname: "",
        rejectedSerialNo: [],
        starting_sl_no: 1,
        ending_sl_no: 100
      }
      var responseData = JSON.stringify(restult); // so let's encode it

      var filename = 'batchname_dispatch.json'; // or whatever
      var mimetype = 'application/json';
    
      res.setHeader('Content-disposition', 'attachment; filename=' + filename);
      res.setHeader('Content-type', mimetype);
      res.write(responseData);
    }
  });
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    
    dbconnctor.executeQuery("INSERT INTO users (date, username, displayname, password) VALUES ('"+Date.now().toString()+"','"+req.body.email+"','"+req.body.name+"','"+hashedPassword+"')", (err, data)=>{
      if (err) console.log("Error inserting database:"+err);
      res.redirect('/login') 
    });
    
  } catch(e) {
    console.log(e);
    res.redirect('/register')
  }
})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

app.post('/lastserial', (req, res) => {
  dbconnctor.executeQuery('SELECT MAX(serial_end) AS lastserialnumber from batches_info WHERE batchtype="'+req.body.batchtype+'"', (err, data)=>{
    if (err || data.lengh == 0){
      console.log("Error fetchiing last serila number:"+err);
      res.json({"status":"0",data:{"lastserialnuber":null}});
    }
    else {
      console.log("last serial number"+JSON.stringify(data));
      res.json({"status":"1",data:{"lastserialnuber":data[0].lastserialnumber}});
      
    }
  });
})

app.get('/batches', (req, res) => {
  dbconnctor.executeQuery('SELECT * from batches_info', (err, data)=>{
    if (err || data.lengh == 0){
      console.log("Error fetchiing batch details:"+err);
      res.json({"status":"0",data:{"batches":null}});
    }
    else {
      console.log("last serial number"+JSON.stringify(data));
      res.json({"status":"1",data:{"batches":data}});
      
    }
  });
})

app.get('/searchcylinder', (req, res) => {
  dbconnctor.executeQuery("SELECT batchname from batches_info where", (err, data)=>{
    if (err || data.lengh == 0){
      console.log("Error fetchiing batch details:"+err);
      res.json({"status":"0",data:{"batches":null}});
    }
    else {
      console.log("last serial number"+JSON.stringify(data));
      res.json({"status":"1",data:{"batches":data}});
      
    }
  });
})

app.post('/rejectcilinder',  (req, res) => {
  console.log(req.body);
	var cylinder = {};
  cylinder.batch_name = req.body.batchname;
  cylinder.batch_type = req.body.batchtype;
  cylinder.serial_num = req.body.serialnumber;
  cylinder.rejection_type = req.body.rejectiontype;
  cylinder.comments = req.body.comments;
  
  dbconnctor.executeQuery('SELECT * FROM batch_rejections WHERE serial_number="'+cylinder.serial_num+'" AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
    console.log(data);
    if (data.length == 0) {
      console.log("No cylinder with:"+cylinder.serial_num)
      dbconnctor.executeQuery("INSERT INTO batch_rejections (batchname,batchtype, serial_number, rejection_type, comments) VALUES ('"+cylinder.batch_name+"','"+cylinder.batch_type+"','"+cylinder.serial_num+"','"+cylinder.rejection_type+"','"+cylinder.comments+"')", (err, data)=>{
        if (err) console.log("Error inserting rejected cylinder:"+err);
        else {
          console.log("cylinder has been rejected");
          res.json({"status":"1",data:{"cylindername":cylinder.serial_num}});
        }
      });
    }
    else{
      res.json({"status":"2",data:{"cylindername":cylinder.serial_num}});
    }
  });

})

app.post('/updaterejection',  (req, res) => {
  console.log(req.body);
	var cylinder = {};
  cylinder.batch_name = req.body.batchname;
  cylinder.batch_type = req.body.batchtype;
  cylinder.serial_num = req.body.serialnumber;
  cylinder.rejection_status = req.body.rejectionstatus;
  cylinder.rejection_type = req.body.rejectiontype;
  cylinder.comments = req.body.comments;
  
  dbconnctor.executeQuery('SELECT * FROM batch_rejections WHERE serial_number="'+cylinder.serial_num+'" AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
    console.log(data);
    if (data.length > 0) {
      console.log("serial number present in rejection list :"+cylinder.serial_num)
        if(1 == cylinder.rejection_status){
          dbconnctor.executeQuery('UPDATE batch_rejections SET rejection_type="'+cylinder.rejection_type+'",comments="'+cylinder.comments + '"WHERE  serial_number="'+cylinder.serial_num+'"AND batchtype="'+cylinder.batch_type+'', (err, data)=>{
            if (err) console.log("Error updating rejected cylinder:"+err);
            else {
              console.log("cylinder has been updated");
              res.json({"status":"1",data:{"cylindername":cylinder.serial_num}});
            }
          });
        } else {
          dbconnctor.executeQuery('DELETE FROM batch_rejections WHERE  serial_number="'+cylinder.serial_num+'"AND batchtype="'+cylinder.batch_type+'', (err, data)=>{
            if (err) console.log("Error updating rejected cylinder:"+err);
            else {
              console.log("cylinder has been updated");
              res.json({"status":"1",data:{"cylindername":cylinder.serial_num}});
            }
          });
        }
    }

    else{
      res.json({"status":"2",data:{"cylindername":cylinder.serial_num}});
    }
  });

})


app.post('/rejectedcylinderlist',  (req, res) => {
  console.log(req.body);
	var cylinder = {};
  cylinder.batch_name = req.body.batchname;
  cylinder.batch_type = req.body.batchtype;
    
  dbconnctor.executeQuery('SELECT * FROM batch_rejections WHERE batchname="'+cylinder.batch_name+'"AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
    console.log(data);
    if (data.length != 0) {
      res.json({"status":"1",data:{"rejectionslist":data}});
    }
    else{
      res.json({"status":"0",data:{"rejectionslist":null}});
    }
  });

})

app.post('/tareweight',  (req, res) => {
  console.log(req.body);
	var cylinder = {};
  cylinder.batch_name = req.body.batchname;
  cylinder.batch_type = req.body.batchtype;
  cylinder.serial_num = req.body.serialnumber;
  cylinder.weight = req.body.weight;
  
  
  dbconnctor.executeQuery('SELECT * FROM batch_rejections WHERE serial_number="'+cylinder.serial_num+'"AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
    console.log(data);
    if (data.length == 0) {
      console.log("No cylinder with:"+cylinder.serial_num)
      
      dbconnctor.executeQuery('SELECT weight as weight FROM tare_weight_info WHERE serial_number="'+cylinder.serial_num+'"AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
        console.log(data);
        if (data.length != 0) {
          console.log("Tare weight "+data[0].weight+"already present for serial number:"+cylinder.serial_num)
          res.json({"status":"3",data:{"cylindername":cylinder.serial_num, "weight": data[0].weight}});
          
        }else {
              
          
          dbconnctor.executeQuery("INSERT INTO tare_weight_info (batchname, batchtype, serial_number, weight) VALUES ('"+cylinder.batch_name+"','"+cylinder.batch_type+"','"+cylinder.serial_num+"','"+cylinder.weight+"')", (err, data)=>{
            if (err) {
              console.log("Error inserting tare weight:"+err);
              res.json({"status":"0",data:{"cylindername":cylinder.serial_num}});
            }
            else {
              console.log("tare weight has been updatd in the db");
              res.json({"status":"1",data:{"cylindername":cylinder.serial_num}});
            }
          });
        }
      });
    }


    else{
      res.json({"status":"2",data:{"cylindername":cylinder.serial_num}});
    }
  });

})





app.post('/tareweightupdate',  (req, res) => {
  console.log(req.body);
	var cylinder = {};
  cylinder.batch_name = req.body.batchname;
  cylinder.batch_type = req.body.batchtype;
  cylinder.serial_num = req.body.serialnumber;
  cylinder.weight = req.body.weight;
  
  
  dbconnctor.executeQuery('SELECT * FROM batch_rejections WHERE serial_number="'+cylinder.serial_num+'"AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
    console.log(data);
    if (data.length == 0) {
      console.log("No cylinder with:"+cylinder.serial_num)
      
                    
          
          dbconnctor.executeQuery('UPDATE tare_weight_info SET weight="'+cylinder.weight+'"WHERE  serial_number="'+cylinder.serial_num+'"AND batchtype="'+cylinder.batch_type+'"', (err, data)=>{
            if (err) {
              console.log("Error inserting tare weight:"+err);
              res.json({"status":"0",data:{"cylindername":cylinder.serial_num}});
            }
            else {
              console.log("tare weight has been updatd in the db");
              res.json({"status":"1",data:{"cylindername":cylinder.serial_num}});
            }
          });
        
      
    }


    else{
      res.json({"status":"2",data:{"cylindername":cylinder.serial_num}});
    }
  });

})


app.post('/tareweightcylinders',  (req, res) => {
  console.log(req.body);
  var cylinder = {};
  cylinder.batch_name = req.body.batchname;
    
  dbconnctor.executeQuery('SELECT * FROM tare_weight_info WHERE batchname="'+cylinder.batch_name+'"', (err, data)=>{
    console.log(data);
    if (data.length != 0) {
      res.json({"status":"1",data:{"tareweight":data}});
    }
    else{
      res.json({"status":"0",data:{"tareweight":null}});
    }
  });

})


function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}
app.listen(8080)
