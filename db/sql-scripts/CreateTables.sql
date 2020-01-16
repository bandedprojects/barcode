CREATE TABLE batch_rejections (
    batchname VARCHAR(256),
	serial_number BIGINT(20),
	rejection_type VARCHAR(256),
    comments VARCHAR(256)
);

CREATE TABLE users (
    date VARCHAR(45),
    username VARCHAR(256),
	displayname VARCHAR(256),
	password  VARCHAR(256)
);

CREATE TABLE batches_info (
    batchname VARCHAR(256),
	serial_start BIGINT(20),
	serial_end  BIGINT(20),
    date VARCHAR(45)
);

CREATE TABLE tare_weight_info (
    batchname VARCHAR(256),
	serial_number BIGINT(20),
	weight  VARCHAR(256)
    
);

