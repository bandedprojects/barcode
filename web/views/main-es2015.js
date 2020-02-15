(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-dialog/app-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-dialog/app-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\n\n<mat-dialog-content>  \n <p>{{ description}} </p>     \n \n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button *ngIf=\"confirmDlg\" (click) = \"yes()\">Yes</button>\n    <button *ngIf=\"confirmDlg\" (click) = \"close()\">No</button>\n    <button *ngIf=\"!confirmDlg\" class=\"mat-raised-button\" [mat-dialog-close]=\"true\" (click)=\"close()\">OK</button>\n    <!--<button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button> -->\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlexFill>\n<app-header *ngIf=\"isAuth\"></app-header>  \n<mat-sidenav-container fxFlex fxLayout=\"column\">   \n        <mat-sidenav #sidenav  mode=\"side\" opened  *ngIf=\"isAuth\"\n        fixedInViewport=\"false\" fixedTopGap=\"0\"\n        fixedBottomGap=\"0\">\n            <mat-nav-list fxFlex fxLayout=\"column\">\n                <a mat-list-item *ngFor=\"let panel of sideNav\" [routerLink]=\"panel.url\" routerLinkActive=\"active-list-item\">{{ panel.name }}</a>\n            </mat-nav-list>\n        </mat-sidenav>\n     \n        <mat-sidenav-content>\n            <router-outlet></router-outlet>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<section id=\"login_container\" fxLayout=\"row\" fxFlexFill fxLayoutAlign=\"space-evenly center\">\n    <section id=\"login-left\" fxFlex=\"60%\">\n \n     </section>\n     <section id=\"login-form\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n         <mat-card fxLayout=\"column\" fxLayoutAlign=\"start\">\n             <mat-card-title>Account Login</mat-card-title>\n             <mat-card-content>\n                     <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"start start\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                             <mat-form-field>\n                             <input \n                                 type=\"text\" \n                                 matInput \n                                 placeholder=\"User Name\"\n                                 formControlName=\"username\"\n                                 required>\n                             </mat-form-field>\n                             <mat-form-field>\n                             <input \n                                 type=\"password\" \n                                 matInput \n                                 placeholder=\"Password\"\n                                 formControlName=\"password\"\n                                 required\n                                 minlength=\"6\">\n                             </mat-form-field>    \n                             <mat-error *ngIf=\"loginError\">{{loginError}}</mat-error>\n                             <div fxLayout=\"row\" fxFlex fxLayoutGap=\"20px\" fxLayoutAlign=\"space-evenly center\">\n                                 <mat-checkbox>Remember Me</mat-checkbox>\n                                 <a href=\"#\">Forgot Password</a>\n                             </div>                       \n                             \n                         \n                             <button mat-raised-button color=\"primary\">Login</button>                           \n                             \n                     </form>\n             </mat-card-content>\n             \n         </mat-card>    \n     </section>    \n </section>\n \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/barcode/barcode.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/barcode/barcode.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>              \n                <mat-card-content>      \n                <form fxLayout=\"column\" [formGroup]=\"printBarcodeForm\" (ngSubmit) = \"onSaveAndPrintClick()\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">         \n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\"  placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>       \n                  \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batchname\" required>\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <input type=\"number\" matInput placeholder=\"Serial Number\" formControlName=\"serialnumber\" required>\n                    </mat-form-field>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" fxFlex =\"100%\" >\n                        <mat-form-field >\n                            <input type=\"number\" matInput placeholder=\"Weight (In kg)\" formControlName=\"weight\" required>                           \n                        </mat-form-field>        \n                        <button type=\"button\" (click)=\"refreshWeight()\" mat-raised-button color=\"primary\">Refresh</button>                \n                    </div>\n                   \n                    <div fxLayout=\"row\" fxfill fxLayoutAlign=\"space-evenly center\" fxFlex =\"100%\" >\n                        <button mat-raised-button color=\"primary\">Generate</button>\n                      \n                    </div>    \n                </form>     \n                       \n                </mat-card-content>\n        </mat-card>\n    </section>\n    \n    <!--<section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showBarCode\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end\" fxFlex=\"500px\" style=\"text-align:right\">\n            <div>\n                    <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"barcode_section_print\" ngxPrint>Print</button>  \n            </div>                  \n        </div>                \n    </section>  \n\n   <section id=\"barcode_section\" fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center stretch\" *ngIf=\"showBarCode\" >              \n            \n        <div fxLayout=\"column\" id=\"barcode_section_print\" fxLayoutAlign=\"center\" style=\"width:3in;height:2in;padding:0px;border:0px;\"> \n            <div style=\"width:100%\" style=\"padding-top:5px;\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                <div>KSFPL</div>\n                <div style=\"margin-left:1in\">{{Subslot}}</div>\n            </div>\n            <div style=\"width:100%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n               <div> {{ printBarcodeForm.value.batchname}} </div>\n               <div style=\"margin-left:0.5in\"> Weight (kg): {{barcode_weight}}</div>\n            </div>\n            <div id=\"barcode_div\" style=\"width:100%\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                <ngx-barcode \n                [bc-value]=\"barcode_txt\" \n                [bc-width]=1.1\n                [bc-height]=75\n                [bc-display-value]=\"false\"\n                [bc-text-align]=\"center\">\n                </ngx-barcode>\n            </div>\n            <div style=\"width:100%\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap =\"0px\">\n                <div> Serial Number: {{ serial_no }} </div>\n            </div>\n        </div>\n    </section>    \n\n<div></div>-->\n   <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showBarCode\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end\" fxFlex=\"500px\" style=\"text-align:right\">\n            <div>\n                    <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"barcode_section_print1\" ngxPrint>Print</button>  \n            </div>                  \n        </div>                \n    </section>  \n\n    <section id=\"barcode_section\" fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center stretch\" *ngIf=\"showBarCode\" >              \n            \n        <div fxLayout=\"column\" id=\"barcode_section_print1\" fxLayoutAlign=\"center\" style=\"font-size:10px;width:5cm;height: 2.5cm;padding:0px;border:0px;\"> \n           <div fxLayout=\"row\" style=\"margin-left: 10px; margin-right: 10px\" fxLayoutAlign=\"space-between center\">\n                <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n                    <div style=\"font-size:10px;font-weight:bold\">KSFPL</div>\n                    <div> Weight:{{barcode_weight}}</div>\n                    <div>Lot: {{Subslot}}</div>                            \n                </div>\n                <div fxLayout=\"column\"  fxLayoutAlign=\"center end\">\n                    <div style=\"font-size:14px;font-weight:bold\"> {{ printBarcodeForm.value.batchname}} </div>                \n                    <div> SR.No:<b>{{ barcode_slno }}</b> </div>     \n                </div>\n           </div>\n            \n            <div id=\"barcode_div\" style=\"width:100%\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n                <ngx-barcode \n                [bc-value]=\"serial_no\" \n                [bc-width]=2\n                [bc-margin]=\"0\" \n                [bc-text-margin]=\"0\"\n                [bc-margin-top]=\"2\" \n                [bc-margin-bottom]=\"2\"\n                [bc-height]=45\n                [bc-display-value]=\"false\"\n                [bc-text-align]=\"center\">\n                </ngx-barcode>\n            </div>\n           \n        </div>\n    </section>    \n\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/batch.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/batch/batch.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/create-batch/create-batch.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/batch/create-batch/create-batch.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title> Create Batch Form </mat-card-title>                  \n                <mat-card-content style=\"padding:20px;\" >      \n                <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"createBatchForm\" (ngSubmit)=\"onSubmit()\">\n                        <mat-form-field>\n                            <mat-select formControlName=\"batchtype\" (selectionChange)=\"batchTypeSelect()\" placeholder=\"Batch Type\">\n                                <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                                {{batchtype.viewValue}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batchname\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input type=\"number\" matInput placeholder=\"Starting S/N\" formControlName=\"serial_start\" required>\n                        </mat-form-field>\n        \n                        <mat-form-field>\n                            <input type=\"number\" matInput placeholder=\"Ending S/N\" formControlName=\"serial_end\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <input type=\"text\" matInput placeholder=\"Batch Creator\" formControlName=\"batch_creator\" required>\n                        </mat-form-field>\n\n                        <mat-form-field>\n                            <input type=\"text\" matInput placeholder=\"Punching Instructor\" formControlName=\"punching_instructor\" required>\n                        </mat-form-field>\n    \n        \n                        <div fxLayout=\"row\" fxFill fxLayoutAlign=\"center center\">\n                            <button mat-raised-button color=\"primary\">Create Batch</button>\n                        </div>\n                    </form>       \n                </mat-card-content>      \n        </mat-card>\n    </section>\n\n    <!--<section id=\"create-batch-form\" class=\"mat-elevation-z8\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">        \n            <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"createBatchForm\" (ngSubmit)=\"onSubmit()\">\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batchname\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"number\" matInput placeholder=\"Starting S/N\" formControlName=\"serial_start\" required>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input type=\"number\" matInput placeholder=\"Ending S/N\" formControlName=\"serial_end\" required>\n                </mat-form-field>\n\n                <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                    <button mat-raised-button color=\"primary\">Create Batch</button>\n                </div>\n            </form>       \n        </section>-->\n    <!--<section id=\"create_batch_table\"  fxLayout=\"column\" class=\"mat-elevation-z8\">\n        <section fxFlex fxLayout=\"row\" fxLayoutAlign=\"center start\">\n            <table mat-table [dataSource]=\"dataSource\">\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\n                    <td mat-cell *matCellDef=\"let element\"> \n                      {{ element.name }}\n                    </td>\n                </ng-container>        \n                <ng-container matColumnDef=\"sl_no_range\">\n                    <th mat-header-cell *matHeaderCellDef> Serial No. Range </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.sl_no_range}} </td>\n                </ng-container>      \n      \n                <ng-container matColumnDef=\"cylinders_count\">\n                    <th mat-header-cell *matHeaderCellDef> No. of cylinders </th>\n                    <td mat-cell *matCellDef=\"let element\"> \n                      {{element.cylinders_count}}\n                    </td>\n                </ng-container>\n                \n                <ng-container matColumnDef=\"rejections_count\">\n                    <th mat-header-cell *matHeaderCellDef> No. of rejections </th>\n                    <td mat-cell *matCellDef=\"let element\"> \n                       {{ element.rejections_count }}\n                    </td>\n                </ng-container>  \n                \n                <ng-container matColumnDef=\"status\">\n                    <th mat-header-cell *matHeaderCellDef> Status </th>\n                    <td mat-cell *matCellDef=\"let element\"> \n                        {{element.status}}\n                    </td>\n                </ng-container>   \n               \n                \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n            </table>\n    </section> -->\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/prepare-batch/prepare-batch.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/batch/prepare-batch/prepare-batch.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title> Prepare Batch Form </mat-card-title>                  \n                <mat-card-content style=\"padding:20px;\" >      \n                <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"prepareBatchForm\" (ngSubmit)=\"onSubmit()\">\n                        <mat-form-field>\n                            <mat-select formControlName=\"batchtype\" (selectionChange)=\"batchTypeSelect()\" placeholder=\"Batch Type\">\n                                <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                                {{batchtype.viewValue}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batch_name\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <input type=\"number\" matInput placeholder=\"Starting S/N\" formControlName=\"starting_serial_no\" required>\n                        </mat-form-field>\n        \n                        <mat-form-field>\n                            <input type=\"number\" matInput placeholder=\"Ending S/N\" formControlName=\"ending_serial_no\" required>\n                        </mat-form-field>\n        \n                        <div fxLayout=\"row\" fxFill fxLayoutAlign=\"center center\">\n                            <button mat-raised-button color=\"primary\">Prepare Batch</button>\n                        </div>\n                    </form>       \n                </mat-card-content>      \n        </mat-card>\n    </section>\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"displayBatchSection\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"500px\">\n            <div>\n                    <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"prepare_batch_list\" ngxPrint>Print</button>  \n            </div>                  \n        </div>                \n    </section>  \n\n    <section fxLayout fxLayoutAlign=\"center\" *ngIf=\"displayBatchSection\"  >   \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"850px\">          \n            <mat-card-content id=\"prepare_batch_list\"  style=\"padding:20px\" fxLayout=\"column\" fxLayoutAlign=\"center\" >   \n                    <div style=\"border:1px solid #000; border-bottom:0px;\" fxLayout=\"column\">\n                            <div style=\"width:100%;padding:10px;padding-bottom:5px\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                                <div fxLayout = \"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n                                   \n                                    <div>\n                                        Batch Name: {{ batchName}}\n                                    </div>\n                                    <div>\n                                        <span style=\"margin-right:10px\">Starting Serial Number: {{ prepareBatchForm.value.starting_serial_no}}</span> \n                                        \n                                    </div>\n                                    <div>\n                                            <span> Ending Serial Number: {{ prepareBatchForm.value.ending_serial_no}}</span>\n                                    </div>\n                                    <div>\n                                        Total Number of cylinders: {{ total_cylinder }}\n                                    </div>\n                                    <div>\n                                        QC in charge: \n                                    </div>\n                                    <div>\n                                        Inspector Name: \n                                    </div>\n                                </div>                               \n                              \n                            </div>\n                           \n                        </div>\n                        \n                       \n                        \n                                                    \n                    <!--<div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n                            <h1>{{batchName}}</h1>\n                            <div>Date: {{ today | date}}</div>\n                    </div>-->\n                <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" id=\"prepare_batch_table\">\n                    <ng-container matColumnDef=\"serial_no1\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"audited1\">\n                        <th mat-header-cell *matHeaderCellDef> Inspected </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox *ngIf=\"element.audited1 != undefined\" [(ngModel)]=\"element.audited1\" disabled=\"true\"></mat-checkbox> \n                        </td>\n                    </ng-container>        \n        \n                    <ng-container matColumnDef=\"serial_no2\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no2}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"audited2\">\n                        <th mat-header-cell *matHeaderCellDef> Inspected </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox *ngIf=\"element.audited2 != undefined\" [(ngModel)]=\"element.audited2\"  disabled=\"true\"></mat-checkbox> \n                        </td>\n                    </ng-container>  \n                    \n                    <ng-container matColumnDef=\"serial_no3\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no3}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"audited3\">\n                        <th mat-header-cell *matHeaderCellDef> Inspected </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox *ngIf=\"element.audited3 != undefined\" [(ngModel)]=\"element.audited3\"  disabled=\"true\"></mat-checkbox> \n                        </td>\n                    </ng-container>       \n\n                    <ng-container matColumnDef=\"serial_no4\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no4}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"audited4\">\n                            <th mat-header-cell *matHeaderCellDef> Inspected </th>\n                            <td mat-cell *matCellDef=\"let element\"> \n                                <mat-checkbox *ngIf=\"element.audited4 != undefined\" [(ngModel)]=\"element.audited4\"  disabled=\"true\"></mat-checkbox> \n                            </td>\n                        </ng-container>       \n    \n                        <ng-container matColumnDef=\"serial_no5\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_no5}} </td>\n                        </ng-container>\n            \n                    <ng-container matColumnDef=\"audited5\">\n                        <th mat-header-cell *matHeaderCellDef> Inspected </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox *ngIf=\"element.audited5 != undefined\" [(ngModel)]=\"element.audited5\"  disabled=\"true\"></mat-checkbox> \n                        </td>\n                    </ng-container>       \n                    <ng-container matColumnDef=\"serial_no6\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no6}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"audited6\">\n                        <th mat-header-cell *matHeaderCellDef> Inspected </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox  *ngIf=\"element.audited6 != undefined\" [(ngModel)]=\"element.audited6\"  disabled=\"true\"></mat-checkbox> \n                        </td>\n                    </ng-container>       \n                    \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n                </table>     \n            </mat-card-content>          \n        </mat-card>\n    </section>\n</section>\n\n<!--<section fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <section id=\"prepare-batch-form\" class=\"mat-elevation-z8\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <h2>Prepare Batch Form </h2>\n            <hr/>\n            <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"prepareBatchForm\" (ngSubmit)=\"onSubmit()\">\n                <mat-form-field>\n                    <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batch_name\" required>\n                </mat-form-field>\n                <mat-form-field>\n                    <input type=\"number\" matInput placeholder=\"Starting S/N\" formControlName=\"starting_serial_no\" required>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input type=\"number\" matInput placeholder=\"Ending S/N\" formControlName=\"ending_serial_no\" required>\n                </mat-form-field>\n\n                <div fxLayout=\"row\" fxFill fxLayoutAlign=\"center center\">\n                    <button mat-raised-button color=\"primary\">Prepare Batch</button>\n                </div>\n            </form>       \n    </section>\n    <section id=\"prepare_batch_print\" fxLayout=\"column\" fxLayoutAlign=\"end end\" *ngIf=\"displayBatchSection\">      \n            <button mat-raised-button color=\"primary\" printSectionId=\"prepare_batch_list\" ngxPrint>Print</button>       \n    </section>\n\n\n    <section id=\"prepare_batch_list\"  *ngIf=\"displayBatchSection\" fxLayout=\"column\" class=\"mat-elevation-z8\">\n        <section fxLayout=\"column\" fxLayoutAlign=\"start start\">\n            <h1>{{batchName}}</h1>\n            <div>Date: {{ today | date}}</div>\n        </section>\n        <section fxFlex fxLayout=\"row\" fxLayoutAlign=\"center start\">\n        <table mat-table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"serial_no\">\n                <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.serial_no}} </td>\n            </ng-container>\n  \n            <ng-container matColumnDef=\"audited\">\n                <th mat-header-cell *matHeaderCellDef> Audited </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                    <mat-checkbox  [(ngModel)]=\"element.audited\"></mat-checkbox> \n                </td>\n            </ng-container>        \n\n            <ng-container matColumnDef=\"serial_no1\">\n                <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n            </ng-container>\n  \n            <ng-container matColumnDef=\"audited1\">\n                <th mat-header-cell *matHeaderCellDef> Audited </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                    <mat-checkbox *ngIf=\"element.audited1 != undefined\" [(ngModel)]=\"element.audited1\"></mat-checkbox> \n                </td>\n            </ng-container>        \n           \n            \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n        </table>\n      \n        </section>\n       \n    </section>\n\n</section>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/view-batch/view-batch.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/batch/view-batch/view-batch.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"view_batch_list\" fxLayout fxLayoutAlign=\"center\"  fxFlex=\"100%\">  \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"800px\">          \n    <table mat-table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"batchname\">\n            <th mat-header-cell *matHeaderCellDef> Batch Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.batchname}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"batchtype\">\n            <th mat-header-cell *matHeaderCellDef> Batch Type </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.batchtype}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"serial_start\">\n            <th mat-header-cell *matHeaderCellDef> Serial Start </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.serial_start}}</td>\n        </ng-container>        \n\n        <ng-container matColumnDef=\"serial_end\">\n            <th mat-header-cell *matHeaderCellDef> Serial End </th>\n            <td mat-cell *matCellDef=\"let element\">{{element.serial_end}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"total_cylinders\">\n            <th mat-header-cell *matHeaderCellDef> Total Cylinders </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.total_cylinders}}</td>            \n        </ng-container> \n\n        <ng-container matColumnDef=\"batchcreator\">\n            <th mat-header-cell *matHeaderCellDef> Batch Creator </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.batchcreator}}</td>            \n        </ng-container> \n        <ng-container matColumnDef=\"punchinginstructor\">\n            <th mat-header-cell *matHeaderCellDef> Punching instructor </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.punchinginstructor}}</td>            \n        </ng-container> \n        \n        <!--<ng-container matColumnDef=\"audited1\">\n            <th mat-header-cell *matHeaderCellDef> Number of Rejections </th>\n            <td mat-cell *matCellDef=\"let element\"> </td>            \n        </ng-container>-->   \n       \n        \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n    </table>\n   <!-- <table style=\"border-left: 1px solid #e0e0e0;\" mat-table [dataSource]=\"dataSource | slice:500:1000\">\n            <ng-container matColumnDef=\"serial_no\" sticky>\n                <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                <td mat-cell *matCellDef=\"let element\"> {{element.serial_no}} </td>\n            </ng-container>\n            \n            <ng-container matColumnDef=\"audited\" stickyEnd>\n                <th mat-header-cell *matHeaderCellDef> Audited </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                    <mat-checkbox  [(ngModel)]=\"element.audited\"></mat-checkbox> \n                </td>\n            </ng-container>        \n            \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n        </table> -->\n        </mat-card>\n   \n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Dashboard works\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dispatch/dispatch/dispatch.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dispatch/dispatch/dispatch.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>              \n                <mat-card-content >      \n                <form fxLayout=\"column\" [formGroup]=\"dispatchForm\" (ngSubmit) = \"onDownload()\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">         \n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\"  placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>       \n                  \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batchname\" required>\n                    </mat-form-field>                   \n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Download</button>\n                    </div>    \n                </form>     \n                       \n                </mat-card-content>\n        </mat-card>\n    </section>\n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n        <section fxLayout fxLayoutAlign=\"center\">   \n            <mat-card fxFlex=\"500px\">\n                <mat-card-title> Modify Dispatch Info </mat-card-title>                  \n                    <mat-card-content style=\"padding:20px;\" >      \n                    <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"prepareBatchForm\" (ngSubmit)=\"onSubmit()\">\n                            <mat-form-field>\n                                <mat-select formControlName=\"batchtype\" placeholder=\"Batch Type\">\n                                    <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                                    {{batchtype.viewValue}}\n                                    </mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batch_name\" required>\n                            </mat-form-field>\n                          \n            \n                            <div fxLayout=\"row\" fxFill fxLayoutAlign=\"center center\">\n                                <button mat-raised-button color=\"primary\">Search</button>\n                            </div>\n                        </form>       \n                    </mat-card-content>      \n            </mat-card>\n        </section>\n        <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"displayBatchSection\">\n            <!--<div fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"500px\">\n                <div>\n                        <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"prepare_batch_list\" ngxPrint>Print</button>  \n                </div>                  \n            </div>-->                \n        </section>  \n    \n        <section fxLayout fxLayoutAlign=\"center\" *ngIf=\"displayBatchSection\"  >   \n            <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"850px\">          \n                <mat-card-content id=\"prepare_batch_list\"  style=\"padding:20px\" fxLayout=\"column\" fxLayoutAlign=\"center\" >   \n                    <div style=\"width:200px\">\n                        <form [formGroup]=\"filterForm\" fxLayoutAlign=\"end\" fxLayoutGap=\"10px\">  \n                        <mat-form-field fxLayout=\"column\">                                      \n                            <mat-select formControlName=\"filterValue\"  placeholder=\"Choose filter\"  (selectionChange)=\"onFilterChange()\">\n                                <mat-option  [value]=\"2\">\n                                    All\n                                </mat-option>\n                                        \n                                <mat-option  [value]=\"0\">\n                                Not Dispatched\n                                </mat-option>\n                                <mat-option  [value]=\"1\">\n                                    Dispatched\n                                </mat-option>\n                                \n                            </mat-select>\n                        </mat-form-field>\n                        </form>\n                    </div>\n                    \n                    <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" id=\"prepare_batch_table\">\n                        <ng-container matColumnDef=\"serial_no1\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                        </ng-container>\n                \n                        <ng-container matColumnDef=\"audited1\">\n                            <th mat-header-cell *matHeaderCellDef> Dispatch </th>\n                            <td mat-cell *matCellDef=\"let element\"> \n                                <mat-checkbox *ngIf=\"element.audited1 != undefined\" [checked]=\"element.audited1\"\n                                (change)=\"onChange($event,element.serial_no1); false\" [(ngModel)]=\"element.audited1\"></mat-checkbox> \n                            </td>\n                        </ng-container>        \n            \n                        <ng-container matColumnDef=\"serial_no2\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_no2}} </td>\n                        </ng-container>\n                \n                        <ng-container matColumnDef=\"audited2\">\n                            <th mat-header-cell *matHeaderCellDef> Dispatch </th>\n                            <td mat-cell *matCellDef=\"let element\"> \n                                <mat-checkbox *ngIf=\"element.audited2 != undefined\" [checked]=\"element.audited2\"\n                                (change)=\"onChange($event,element.serial_no2); false\" [(ngModel)]=\"element.audited2\"></mat-checkbox> \n                            </td>\n                        </ng-container>  \n                        \n                        <ng-container matColumnDef=\"serial_no3\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_no3}} </td>\n                        </ng-container>\n                \n                        <ng-container matColumnDef=\"audited3\">\n                            <th mat-header-cell *matHeaderCellDef> Dispatch </th>\n                            <td mat-cell *matCellDef=\"let element\"> \n                                <mat-checkbox *ngIf=\"element.audited3 != undefined\" (change)=\"onChange($event,element.serial_no3); false\" [checked]=\"element.audited3\" [(ngModel)]=\"element.audited3\"></mat-checkbox> \n                            </td>\n                        </ng-container>       \n    \n                        <ng-container matColumnDef=\"serial_no4\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_no4}} </td>\n                        </ng-container>\n    \n                        <ng-container matColumnDef=\"audited4\">\n                                <th mat-header-cell *matHeaderCellDef> Dispatch </th>\n                                <td mat-cell *matCellDef=\"let element\"> \n                                    <mat-checkbox *ngIf=\"element.audited4 != undefined\" (change)=\"onChange($event,element.serial_no4); false\" [checked]=\"element.audited4\" [(ngModel)]=\"element.audited4\"></mat-checkbox> \n                                </td>\n                            </ng-container>       \n        \n                            <ng-container matColumnDef=\"serial_no5\">\n                                <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                                <td mat-cell *matCellDef=\"let element\"> {{element.serial_no5}} </td>\n                            </ng-container>\n                \n                        <ng-container matColumnDef=\"audited5\">\n                            <th mat-header-cell *matHeaderCellDef> Dispatch </th>\n                            <td mat-cell *matCellDef=\"let element\"> \n                                <mat-checkbox *ngIf=\"element.audited5 != undefined\" [checked]=\"element.audited5\" (change)=\"onChange($event,element.serial_no5); false\" [(ngModel)]=\"element.audited5\"></mat-checkbox> \n                            </td>\n                        </ng-container>       \n                        <ng-container matColumnDef=\"serial_no6\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_no6}} </td>\n                        </ng-container>\n                \n                        <ng-container matColumnDef=\"audited6\">\n                            <th mat-header-cell *matHeaderCellDef> Dispatch </th>\n                            <td mat-cell *matCellDef=\"let element\"> \n                                <mat-checkbox  *ngIf=\"element.audited6 != undefined\" (change)=\"onChange($event,element.serial_no6); false\" [checked]=\"element.audited6\" [(ngModel)]=\"element.audited6\"></mat-checkbox> \n                            </td>\n                        </ng-container>       \n                        \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n                    </table>     \n                </mat-card-content>          \n            </mat-card>\n        </section>\n    </section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>  \n            \n                <mat-card-content >      \n                    <form [formGroup]=\"searchSerialNoForm\" (ngSubmit) = \"onSearchClick()\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\"  placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>                \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Serial Number\" formControlName=\"serialno\" required>\n                    </mat-form-field>\n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Search</button>\n                    </div>    \n                </form>           \n                </mat-card-content>                           \n            \n        </mat-card>\n    </section>\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showRejectForm\" >   \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"500px\">          \n                <mat-card-content > \n                    <form  [formGroup]=\"modifyRejectionsForm\" (ngSubmit) = \"onRejectSubmit()\" fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\">\n                            <mat-form-field>\n                                    <input \n                                        type=\"text\" \n                                        matInput \n                                        placeholder=\"Batch Name\"\n                                        formControlName=\"batchname\"                                       \n                                        required>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                    <input \n                                        type=\"text\" \n                                        matInput \n                                        placeholder=\"Serial number\"\n                                        formControlName=\"serialnumber\"               \n                                        required>\n                                    </mat-form-field>    \n                                    <mat-form-field fxLayout=\"column\">                                      \n                                        <mat-select formControlName=\"rejectionstatus\"  placeholder=\"Status\">\n                                            <mat-option *ngFor=\"let status of status_list\" [value]=\"status.value\">\n                                            {{status.viewValue}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                    <mat-form-field fxLayout=\"column\">                                      \n                                        <mat-select formControlName=\"rejectiontype\"  placeholder=\"Reject Reason\">\n                                            <mat-option *ngFor=\"let rejection_type of rejection_types\" [value]=\"rejection_type.value\">\n                                            {{rejection_type.viewValue}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                            <input \n                                                type=\"text\" \n                                                matInput \n                                                placeholder=\"Reason\"\n                                                formControlName=\"comments\"               \n                                                required>\n                                            </mat-form-field>    \n                                    <div>\n                                            <button mat-raised-button color=\"primary\">Modify</button>        \n                                    </div>\n                            \n                    </form>\n                        \n                \n                </mat-card-content>                           \n            \n        </mat-card>\n    </section>\n\n   \n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>  \n            \n                <mat-card-content >      \n                    <form [formGroup]=\"searchSerialNoForm\" (ngSubmit) = \"onSearchClick()\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">  \n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\"  placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>       \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Serial Number\" formControlName=\"serialno\" required>\n                    </mat-form-field>\n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Search</button>\n                    </div>    \n                </form>           \n                </mat-card-content>                           \n            \n        </mat-card>\n    </section>\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showRejectForm\" >   \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"500px\">          \n                <mat-card-content > \n                    <form  [formGroup]=\"rejectCylinderForm\" (ngSubmit) = \"onRejectSubmit()\" fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\">\n                            <mat-form-field>\n                                    <input \n                                        type=\"text\" \n                                        matInput \n                                        placeholder=\"Batch Name\"\n                                        readOnly\n                                        [readonly]=\"isReadonly\"\n                                        formControlName=\"batchname\"                                       \n                                        required>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                        <input \n                                            type=\"text\" \n                                            matInput \n                                            placeholder=\"Batch Type\"\n                                            readonly\n                                            [readonly]=\"isReadonly\"\n                                            formControlName=\"batchtype\"               \n                                            required>\n                                        </mat-form-field>    \n                                       \n                                    <mat-form-field>\n                                    <input \n                                        type=\"text\" \n                                        matInput \n                                        placeholder=\"Serial number\"\n                                        readonly\n                                        [readonly]=\"isReadonly\"\n                                        formControlName=\"serialnumber\"               \n                                        required>\n                                    </mat-form-field>    \n                                    <mat-form-field fxLayout=\"column\">\n                                      \n                                        <mat-select formControlName=\"rejectiontype\"  placeholder=\"Rejection Stage\">\n                                            <mat-option *ngFor=\"let rejection_type of rejection_types\" [value]=\"rejection_type.value\">\n                                            {{rejection_type.viewValue}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                    <mat-form-field>\n                                            <input \n                                                type=\"text\" \n                                                matInput \n                                                placeholder=\"Reason\"\n                                                formControlName=\"comments\"               \n                                                required>\n                                            </mat-form-field>    \n                                    <div>\n                                            <button mat-raised-button color=\"primary\">Reject</button>        \n                                    </div>\n                            \n                    </form>\n                        \n                \n                </mat-card-content>                           \n            \n        </mat-card>\n    </section>\n\n   \n</section>\n         \n                  \n              \n    \n    \n    \n\n    <!--        \n\n\n    <section id=\"reject-cylinders-form\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">        \n        <form fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\" [formGroup]=\"rejectCylindersForm\" (ngSubmit)=\"onSubmit()\">\n            <mat-form-field>\n                <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batchname\" required>\n            </mat-form-field>\n            <mat-form-field>\n                <input type=\"number\" matInput placeholder=\"Serial number\" formControlName=\"serial_number\" required>\n            </mat-form-field>\n\n            <mat-form-field>\n              \n            </mat-form-field>\n\n            <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                <button mat-raised-button color=\"primary\">Reject</button>\n            </div>\n        </form>   \n    </section>    \n</section>-->\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>  \n            \n                <mat-card-content >      \n                    <form [formGroup]=\"searchBatchNameForm\" (ngSubmit) = \"onSearchClick()\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">\n                            <mat-form-field>\n                                    <mat-select formControlName=\"batchtype\"  placeholder=\"Batch Type\">\n                                        <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                                        {{batchtype.viewValue}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>                \n                                        \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Batch Name\" formControlName=\"batchname\"  required>\n                       <!-- <mat-autocomplete  #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                                {{ option }}\n                            </mat-option>\n                        </mat-autocomplete>-->\n                    </mat-form-field>\n\n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Show</button>\n                    </div>    \n                </form>           \n                </mat-card-content>\n        </mat-card>\n    </section>\n   <!-- <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showRejectForm\" >   \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"500px\">          \n            <mat-card-content > \n                <form  [formGroup]=\"rejectCylinderForm\" (ngSubmit) = \"onRejectSubmit()\" fxLayout =\"column\" fxLayoutGap =\"10px\" fxLayoutAlign=\"center center\">\n                        <mat-form-field>\n                        </mat-form-field>  \n                </form>\n            </mat-card-content>\n        </mat-card>\n    </section> -->\n\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"displayRejectedCylinders\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"800px\">\n                <div>\n                        <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"rejected-cylinders\" ngxPrint>Print</button>  \n                </div>                  \n            </div>                \n        </section>  \n    \n    <section id=\"rejected-cylinders\" fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"displayRejectedCylinders\"  >   \n            <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"800px\">          \n                <mat-card-content style=\"padding:20px\">\n                    <div style=\"width:200px\">\n                        <form [formGroup]=\"filterForm\" fxLayoutAlign=\"end\" fxLayoutGap=\"10px\">  \n                        <mat-form-field fxLayout=\"column\">                                      \n                            <mat-select formControlName=\"filterValue\"  placeholder=\"Rejection Type\"  (selectionChange)=\"onFilterChange()\"> \n                                <mat-option *ngFor=\"let rejection_type of rejection_types\" [value]=\"rejection_type\">\n                                {{rejection_type}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        </form>\n                    </div>\n                    <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\">\n                        <ng-container matColumnDef=\"position\">\n                            <th mat-header-cell *matHeaderCellDef> No. </th>\n                            <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i+1}} </td>\n                          </ng-container>\n                        <ng-container matColumnDef=\"batchname\">\n                            <th mat-header-cell *matHeaderCellDef> Batch Name </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.batchname}} </td>\n                        </ng-container>       \n            \n                        <ng-container matColumnDef=\"serial_number\">\n                            <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.serial_number}} </td>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"rejection_type\">\n                            <th mat-header-cell *matHeaderCellDef> Rejection Type </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.rejection_type}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"comments\">\n                            <th mat-header-cell *matHeaderCellDef> Comments </th>\n                            <td mat-cell *matCellDef=\"let element\"> {{element.comments}} </td>\n                        </ng-container>\n                \n                      \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n                    </table>     \n                </mat-card-content>          \n            </mat-card>\n        </section> \n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/reports/hstreports/hstreports.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/reports/hstreports/hstreports.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>\n                <mat-card-content >      \n                <form [formGroup]=\"generateReportForm\" (ngSubmit) = \"onGenerateClick()\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">        \n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\" placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field> \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Enter Batch Name\" formControlName=\"batch_name\" required>\n                    </mat-form-field>\n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Generate Report</button>\n                    </div>    \n                </form>           \n                </mat-card-content>\n        </mat-card>\n    </section>\n\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showHSTReport\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end\" fxFlex=\"800px\" style=\"text-align:right\">\n            <div>\n                    <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"hst_reports_div\" ngxPrint>Print</button>  \n            </div>                  \n        </div>                \n    </section>  \n\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showHSTReport\" >  \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"800px\">          \n            <mat-card-content style=\"padding:20px\" id=\"hst_reports_div\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <div style=\"border:1px solid #000; border-bottom:0px;\" fxLayout=\"column\">\n                    <div fxLayout=\"column\" style=\"width:100%\" fxLayoutAlign=\"center\" style=\"text-align:center\">   \n                        <h3 class=\"mat-h3\" style=\"border-bottom:1px solid #000;margin-bottom:0px;\">KAIRALI STRUCTURAL FABRICATION PVT LTD</h3>\n                    \n                        <div class=\"mat-body\">SIDCO INDUSTRIAL PARK, ANGAMALY</div>                 \n                    </div>\n    \n                    <div style=\"width:100%;padding:10px;padding-bottom:5px\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div>\n                            <div>\n                                    STAGE: HST\n                            </div>\n                            <div>\n                                BATCH NO: {{ batchName}}\n                            </div>\n                        \n                        </div>\n                        <div>\n                            <div>\n                                    Test Pressure: 25 Kg/Cm2    \n                            </div>\n                            <div>\n                                Retention Time: 30 Sec.min\n                            </div>\n                        </div>\n                        <div>\n                            <div>\n                                Date: \n                            </div> \n                            <div style=\"margin-right:80px\">\n                                Inspected by: \n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"width:100%;padding-left:10px; padding-bottom:10px;\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n                        <div>\n                            <span style=\"margin-right:10px\">Cylinder Sl No. From: {{ serial_start}}</span> <span> To: {{ serial_end}}</span> \n                        </div>\n                    </div>\n                </div>\n                \n               \n                \n                <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" id=\"hst_reports\">\n                    <ng-container matColumnDef=\"serial_no1\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status1\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status1}} </td>\n                    </ng-container> \n                    \n                    <ng-container matColumnDef=\"serial_no2\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no2}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status2\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status2}} </td>\n                    </ng-container>   \n                    \n                    <ng-container matColumnDef=\"serial_no3\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no3}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status3\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status3}} </td>\n                    </ng-container>   \n                    \n                    <ng-container matColumnDef=\"serial_no4\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no4}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status4\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status4}} </td>\n                    </ng-container>  \n                    \n                    <ng-container matColumnDef=\"serial_no5\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no5}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status5\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status5}} </td>\n                    </ng-container>       \n\n                    <ng-container matColumnDef=\"serial_no6\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no6}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status6\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status6}} </td>\n                    </ng-container>       \n        \n        \n                    <!--<ng-container matColumnDef=\"serial_no1\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"audited1\">\n                        <th mat-header-cell *matHeaderCellDef> Result</th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox *ngIf=\"element.audited1 != undefined\" [(ngModel)]=\"element.audited1\"></mat-checkbox> \n                        </td>\n                    </ng-container>   -->\n            \n                  \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n                </table>    \n                <div style=\"border:1px solid #000; border-top:0px;\" fxLayout=\"column\">\n                    <div style=\"width:100%;padding:10px;\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                        <div>\n                            GE INSPECTOR: \n                        </div> \n                        <div style=\"margin-right:80px\">\n                            QUALITY IN CHARGE: \n                        </div>\n                    </div>\n                </div> \n            </mat-card-content>          \n        </mat-card>\n    </section>\n\n   \n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>  \n            \n                <mat-card-content >      \n                <form [formGroup]=\"generateReportForm\" (ngSubmit) = \"onGenerateClick()\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">      \n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\" placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>    \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Enter Batch Name\" formControlName=\"batch_name\" required>\n                    </mat-form-field>\n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Generate Report</button>\n                    </div>    \n                </form>           \n                </mat-card-content>\n        </mat-card>\n    </section>\n\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showHSTReport\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"end\" fxFlex=\"800px\" style=\"text-align:right\">\n                <div>\n                        <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"hst_reports_div\" ngxPrint>Print</button>  \n                </div>                  \n            </div>                \n        </section>  \n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showHSTReport\" >   \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"800px\" id=\"hst_reports_div\">          \n            <mat-card-content style=\"padding:20px\" id=\"hst_reports_div\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <div style=\"border:1px solid #000; border-bottom:0px;\" fxLayout=\"column\">\n                    <div fxLayout=\"column\" style=\"width:100%\" fxLayoutAlign=\"center\" style=\"text-align:center\">   \n                        <h3 class=\"mat-h3\" style=\"border-bottom:1px solid #000;margin-bottom:0px;\">KAIRALI STRUCTURAL FABRICATION PVT LTD</h3>\n                    \n                        <div class=\"mat-body\">SIDCO INDUSTRIAL PARK, ANGAMALY</div>                 \n                    </div>\n    \n                    <div style=\"width:100%;padding:10px;\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div>\n                            <div>\n                                    STAGE: Pneumatic\n                            </div>\n                            <div>\n                                BATCH NO: {{ batchName}}\n                            </div>\n                        </div>\n                        <div>\n                            <div>\n                                    Test Pressure: 12 Kg/Cm2    \n                            </div>\n                            <div>\n                                Retention Time: 60 Sec\n                            </div>\n                        </div>\n                        <div>\n                            <div>\n                                Date: \n                            </div> \n                            <div style=\"margin-right:80px\">\n                                Inspected by: \n                            </div>\n                        </div>\n                    </div>\n                    <div style=\"width:100%;padding-left:10px; padding-bottom:10px;\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n                        <div>\n                            <span style=\"margin-right:10px\">Cylinder Sl No. From: {{ batch.serial_start}}</span> <span> To: {{ batch.serial_end}}</span> \n                        </div>\n                    </div>\n                </div>\n               \n                \n                <table style=\"width:auto\" mat-table [dataSource]=\"dataSource\" id=\"hst_reports\">\n                    <ng-container matColumnDef=\"serial_no1\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status1\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status1}} </td>\n                    </ng-container> \n                    \n                    <ng-container matColumnDef=\"serial_no2\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no2}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status2\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status2}} </td>\n                    </ng-container>   \n                    \n                    <ng-container matColumnDef=\"serial_no3\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no3}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status3\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status3}} </td>\n                    </ng-container>   \n                    \n                    <ng-container matColumnDef=\"serial_no4\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no4}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status4\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status4}} </td>\n                    </ng-container>  \n                    \n                    <ng-container matColumnDef=\"serial_no5\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no5}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status5\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status5}} </td>\n                    </ng-container>       \n\n                    <ng-container matColumnDef=\"serial_no6\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no6}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status6\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status6}} </td>\n                    </ng-container>       \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n                </table>    \n                <div style=\"border:1px solid #000; border-top:0px;\" fxLayout=\"column\">\n                    <div style=\"width:100%;padding:10px;\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                        <div>\n                            GE INSPECTOR: \n                        </div> \n                        <div style=\"margin-right:80px\">\n                            QUALITY IN CHARGE: \n                        </div>\n                    </div>\n                </div> \n            </mat-card-content>          \n        </mat-card>\n    </section>\n\n   \n</section>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/reports/tareweight/tareweight.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/reports/tareweight/tareweight.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlex=\"100%\" fxLayoutAlign=\"center\" fxLayoutGap =\"30px\" >\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\">   \n        <mat-card fxFlex=\"500px\">\n            <mat-card-title></mat-card-title>  \n            \n                <mat-card-content >      \n                <form [formGroup]=\"tareweightReportForm\" (ngSubmit) = \"onGenerateClick()\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\">      \n                    <mat-form-field>\n                        <mat-select formControlName=\"batchtype\" placeholder=\"Batch Type\">\n                            <mat-option *ngFor=\"let batchtype of batchtypes\" [value]=\"batchtype.value\">\n                            {{batchtype.viewValue}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>    \n                    <mat-form-field>\n                        <input type=\"text\" matInput placeholder=\"Enter Batch Name\" formControlName=\"batch_name\" required>\n                    </mat-form-field>\n                    \n                    <div fxLayout=\"row\" fxfill fxLayoutGap =\"20px\" fxLayoutAlign=\"space-evenly center\">\n                        <button mat-raised-button color=\"primary\">Generate Report</button>\n                    </div>    \n                </form>           \n                </mat-card-content>\n        </mat-card>\n    </section>\n\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showReport\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"end\" fxFlex=\"800px\" style=\"text-align:right\">\n            <div>\n                    <button mat-raised-button color=\"primary\" [useExistingCss]=\"true\" printSectionId=\"hst_reports_div\" ngxPrint>Print</button>  \n            </div>                  \n        </div>                \n    </section>  \n\n    <section fxLayout fxFlex =\"100%\" fxLayoutAlign=\"center\" *ngIf=\"showReport\" >              \n            \n        <mat-card fxLayout=\"column\" fxLayoutAlign=\"center\" fxFlex=\"800px\">          \n            <mat-card-content style=\"padding:20px\" id=\"hst_reports_div\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n                <div style=\"border:1px solid #000; border-bottom:0px;\" fxLayout=\"column\">\n                    <div fxLayout=\"column\" style=\"width:100%\" fxLayoutAlign=\"center\" style=\"text-align:center\">   \n                        <h3 class=\"mat-h3\" style=\"border-bottom:1px solid #000;margin-bottom:0px;\">KAIRALI STRUCTURAL FABRICATION PVT LTD</h3>\n                    \n                        <div class=\"mat-body\">SIDCO INDUSTRIAL PARK, ANGAMALY</div>                 \n                    </div>\n    \n                    <div style=\"width:100%;padding:10px;padding-bottom:5px\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\" fxLayoutGap=\"20px\">\n                        <div>\n                            <div>\n                                    STAGE: TAREWEIGHT REPORT\n                            </div>\n                            <div>\n                                Name of Inspector: \n                            </div>\n                            <div>\n                                BATCH NO: {{ batchName}}\n                            </div>\n                        \n                        </div>\n                       \n                        <div>\n                            <div>\n                                Date: \n                            </div> \n                            <div>\n                                Shift: \n                            </div>\n                        </div>\n                        <div fxFlex=\"10%\">\n\n                        </div>\n                    </div>\n                    <div style=\"width:100%;padding-left:10px; padding-bottom:10px;\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n                        <div>\n                            <span style=\"margin-right:10px\">Cylinder Sl No. From: {{ serial_start}}</span> <span> To: {{ serial_end}}</span> \n                        </div>\n                    </div>\n                </div>\n                \n               \n                \n                <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" id=\"hst_reports\">\n                    <ng-container matColumnDef=\"serial_no1\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"tare_weight1\">\n                        <th mat-header-cell *matHeaderCellDef> Tare weight (kg) </th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <div style=\"width:100%;\">\n                                <table style=\"width:100%\" style=\"border:0px;\">\n                                    <tr>\n                                        <td style=\"border-bottom:0px;\">\n                                            {{element.tare_weight_left1}} \n                                        </td>\n                                        <td style=\"border:0px;\">\n                                            {{element.tare_weight_right1}}\n                                        </td>\n                                    </tr>\n                                </table>                                  \n                            </div>\n                        </td>\n                        \n                    </ng-container> \n                    \n                    <ng-container matColumnDef=\"tareweight1\">\n                        <th mat-header-cell *matHeaderCellDef> Tare weight (kg)  </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.tareweight1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"serial_no2\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No.  </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no2}} </td>\n                    </ng-container>   \n                    \n                    <ng-container matColumnDef=\"tare_weight2\">\n                        <th mat-header-cell *matHeaderCellDef> Tare weight (kg)</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <div style=\"width:100%;\">\n                                <table style=\"width:100%\" style=\"border:0px;\">\n                                    <tr>\n                                        <td style=\"border-bottom:0px;\">\n                                            {{element.tare_weight_left2}} \n                                        </td>\n                                        <td style=\"border:0px;\">\n                                            {{element.tare_weight_right2}}\n                                        </td>\n                                    </tr>\n                                </table>                                  \n                            </div> \n                        </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"tareweight2\">\n                        <th mat-header-cell *matHeaderCellDef> Tare weight (kg)</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.tareweight2}} </td>\n                    </ng-container>   \n                    \n                    <!--<ng-container matColumnDef=\"serial_no4\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no4}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status4\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status4}} </td>\n                    </ng-container>  \n                    \n                    <ng-container matColumnDef=\"serial_no5\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no5}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status5\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status5}} </td>\n                    </ng-container>       \n\n                    <ng-container matColumnDef=\"serial_no6\">\n                        <th mat-header-cell *matHeaderCellDef> Sl No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no6}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"status6\">\n                        <th mat-header-cell *matHeaderCellDef> Result </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status6}} </td>\n                    </ng-container>       -->\n        \n        \n                    <!--<ng-container matColumnDef=\"serial_no1\">\n                        <th mat-header-cell *matHeaderCellDef> Serial No. </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.serial_no1}} </td>\n                    </ng-container>\n            \n                    <ng-container matColumnDef=\"audited1\">\n                        <th mat-header-cell *matHeaderCellDef> Result</th>\n                        <td mat-cell *matCellDef=\"let element\"> \n                            <mat-checkbox *ngIf=\"element.audited1 != undefined\" [(ngModel)]=\"element.audited1\"></mat-checkbox> \n                        </td>\n                    </ng-container>   -->\n            \n                  \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>         \n                </table>    \n                <div style=\"border:1px solid #000; border-top:0px;\" fxLayout=\"column\">\n                    <div style=\"width:100%;padding:10px;\" fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                        <div>\n                            GE INSPECTOR: \n                        </div> \n                        <div style=\"margin-right:80px\">\n                            QUALITY IN CHARGE: \n                        </div>\n                    </div>\n                </div> \n            </mat-card-content>          \n        </mat-card>\n    </section>\n\n   \n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <div fxFlex fxLayout fxLayoutAlign=\"flex-start\" fxLayoutGap=\"20px\">\n          <div fxFlex=\"30%\"><span> Kalliyath </span></div>\n          <div *ngFor=\"let nav of navList\">\n              <button mat-button (click)=\"navBarClick(nav);\" [routerLink]=\"nav.url\" [color]=\"nav.color\">{{ nav.title }}</button>\n          </div>\n         \n      </div>\n     \n      <div fxFlex fxLayout fxLayoutAlign=\"flex-end\">\n        <!--<ul fxLayout fxLayoutGap=\"20px\">\n          <li fxHide.xs>\n            <button mat-icon-button>\n              <mat-icon>settings</mat-icon>\n            </button>\n          </li>\n          <li fxHide.xs>\n            <button mat-icon-button>\n              <mat-icon>help_outline</mat-icon>\n            </button>\n          </li>\n          <li>\n            <button mat-icon-button>\n              <mat-icon>person_outline</mat-icon>\n            </button>\n            <mat-menu #auth=\"matMenu\">\n              <button mat-menu-item (click)=\"logout()\">\n                <mat-icon>exit_to_app</mat-icon>\n                <span>Sign out</span>\n              </button>\n            </mat-menu>\n          </li>\n    \n        </ul>-->\n\n        <mat-menu #profileMenu=\"matMenu\">\n          <button mat-menu-item (click)=\"onLogout()\">\n            <mat-icon>exit_to_app</mat-icon>\n            <span>Sign out</span>\n          </button>\n        </mat-menu>\n\n        <button mat-icon-button [matMenuTriggerFor]=\"profileMenu\">\n          <mat-icon>person_outline</mat-icon>\n        </button>\n       \n    \n      </div>\n    \n    </mat-toolbar-row>\n    \n    </mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav/sidenav.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/sidenav/sidenav.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav #sidenav  mode=\"side\" opened \nfixedInViewport=\"false\" fixedTopGap=\"0\"\nfixedBottomGap=\"0\">\n    <mat-nav-list fxFlex fxLayout=\"column\">\n    <a mat-list-item routerLink=\"/preparebatch\"> <mat-icon matListIcon>info</mat-icon>Prepare Batch</a>\n    <a mat-list-item routerLink=\"/createbatch\"><mat-icon matListIcon>info</mat-icon>Create Batch</a>\n    <a mat-list-item> <mat-icon matListIcon>info</mat-icon>View Batches</a>\n    </mat-nav-list>\n</mat-sidenav>"

/***/ }),

/***/ "./src/app/app-dialog/app-dialog.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-dialog/app-dialog.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1kaWFsb2cvYXBwLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app-dialog/app-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-dialog/app-dialog.component.ts ***!
  \****************************************************/
/*! exports provided: AppDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogComponent", function() { return AppDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



//import { FormGroup, FormBuilder } from '@angular/forms';
let AppDialogComponent = class AppDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.description = data.description;
        this.confirmDlg = data.confirmDlg != undefined ? data.confirmDlg : false;
    }
    ngOnInit() {
        /*this.form = this.fb.group({
          description: [this.description, []]
      });*/
    }
    save() {
        //this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close('close');
    }
    yes() {
        this.dialogRef.close('yes');
    }
};
AppDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AppDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-dialog',
        template: __webpack_require__(/*! raw-loader!./app-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-dialog/app-dialog.component.html"),
        styles: [__webpack_require__(/*! ./app-dialog.component.css */ "./src/app/app-dialog/app-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AppDialogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _dashboard_batch_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/batch/create-batch/create-batch.component */ "./src/app/dashboard/batch/create-batch/create-batch.component.ts");
/* harmony import */ var _dashboard_batch_prepare_batch_prepare_batch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/batch/prepare-batch/prepare-batch.component */ "./src/app/dashboard/batch/prepare-batch/prepare-batch.component.ts");
/* harmony import */ var _dashboard_batch_view_batch_view_batch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/batch/view-batch/view-batch.component */ "./src/app/dashboard/batch/view-batch/view-batch.component.ts");
/* harmony import */ var _dashboard_batch_batch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/batch/batch.component */ "./src/app/dashboard/batch/batch.component.ts");
/* harmony import */ var _dashboard_quality_audit_reject_cylinders_reject_cylinders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/quality-audit/reject-cylinders/reject-cylinders.component */ "./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.ts");
/* harmony import */ var _dashboard_quality_audit_modify_rejections_modify_rejections_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/quality-audit/modify-rejections/modify-rejections.component */ "./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.ts");
/* harmony import */ var _dashboard_quality_audit_rejected_cylinders_rejected_cylinders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component */ "./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.ts");
/* harmony import */ var _dashboard_reports_hstreports_hstreports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/reports/hstreports/hstreports.component */ "./src/app/dashboard/reports/hstreports/hstreports.component.ts");
/* harmony import */ var _dashboard_reports_pneumatic_pneumaticreport_pneumaticreport_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component */ "./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.ts");
/* harmony import */ var _dashboard_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/barcode/barcode.component */ "./src/app/dashboard/barcode/barcode.component.ts");
/* harmony import */ var _dashboard_reports_tareweight_tareweight_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/reports/tareweight/tareweight.component */ "./src/app/dashboard/reports/tareweight/tareweight.component.ts");
/* harmony import */ var _dashboard_dispatch_dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dispatch/dispatch/dispatch.component */ "./src/app/dashboard/dispatch/dispatch/dispatch.component.ts");
/* harmony import */ var _dashboard_dispatch_edit_dispatch_edit_dispatch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dispatch/edit-dispatch/edit-dispatch.component */ "./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.ts");



















const routes = [
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'batch', component: _dashboard_batch_batch_component__WEBPACK_IMPORTED_MODULE_9__["BatchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'createbatch', component: _dashboard_batch_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_6__["CreateBatchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'preparebatch', component: _dashboard_batch_prepare_batch_prepare_batch_component__WEBPACK_IMPORTED_MODULE_7__["PrepareBatchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'viewbatch', component: _dashboard_batch_view_batch_view_batch_component__WEBPACK_IMPORTED_MODULE_8__["ViewBatchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'modifyrejections', component: _dashboard_quality_audit_modify_rejections_modify_rejections_component__WEBPACK_IMPORTED_MODULE_11__["ModifyRejectionsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'rejectcylinders', component: _dashboard_quality_audit_reject_cylinders_reject_cylinders_component__WEBPACK_IMPORTED_MODULE_10__["RejectCylindersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'rejectedcylinders', component: _dashboard_quality_audit_rejected_cylinders_rejected_cylinders_component__WEBPACK_IMPORTED_MODULE_12__["RejectedCylindersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'hstreport', component: _dashboard_reports_hstreports_hstreports_component__WEBPACK_IMPORTED_MODULE_13__["HstreportsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'pneumaticreport', component: _dashboard_reports_pneumatic_pneumaticreport_pneumaticreport_component__WEBPACK_IMPORTED_MODULE_14__["PneumaticreportComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'tareweight', component: _dashboard_reports_tareweight_tareweight_component__WEBPACK_IMPORTED_MODULE_16__["TareweightComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'printbarcode', component: _dashboard_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_15__["BarcodeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'dispatch', component: _dashboard_dispatch_dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_17__["DispatchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'editdispatch', component: _dashboard_dispatch_edit_dispatch_edit_dispatch_component__WEBPACK_IMPORTED_MODULE_18__["EditDispatchComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nmat-sidenav {\n    width: 200px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _navigation_navlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navlist.service */ "./src/app/navigation/navlist.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, navListService) {
        this.authService = authService;
        this.navListService = navListService;
        this.title = 'kalliyath';
        this.sideNav = [];
    }
    ngOnInit() {
        this.authSubscription = this.authService.authChange.subscribe(authChange => {
            this.isAuth = authChange;
        });
        //this.navList = this.navListService.getNavList('batches')
        /*this.navListSubscription = this.navListService.navListChange.subscribe(navList => {
           this.sideNav = navList.sidenav;
         })*/
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.navListSubscription = this.navListService.navListChange.subscribe(navList => {
                this.sideNav = navList.sidenav;
            });
        });
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
        this.navListSubscription.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _navigation_navlist_service__WEBPACK_IMPORTED_MODULE_3__["NavListService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm2015/ngx-print.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_login_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/login/user.service */ "./src/app/auth/login/user.service.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "./src/app/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _dashboard_batch_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/batch/create-batch/create-batch.component */ "./src/app/dashboard/batch/create-batch/create-batch.component.ts");
/* harmony import */ var _dashboard_batch_prepare_batch_prepare_batch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/batch/prepare-batch/prepare-batch.component */ "./src/app/dashboard/batch/prepare-batch/prepare-batch.component.ts");
/* harmony import */ var _dashboard_batch_batch_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/batch/batch.component */ "./src/app/dashboard/batch/batch.component.ts");
/* harmony import */ var _dashboard_batch_batch_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _navigation_navlist_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navigation/navlist.service */ "./src/app/navigation/navlist.service.ts");
/* harmony import */ var _dashboard_batch_view_batch_view_batch_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/batch/view-batch/view-batch.component */ "./src/app/dashboard/batch/view-batch/view-batch.component.ts");
/* harmony import */ var _app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");
/* harmony import */ var _dashboard_quality_audit_reject_cylinders_reject_cylinders_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/quality-audit/reject-cylinders/reject-cylinders.component */ "./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.ts");
/* harmony import */ var _dashboard_quality_audit_modify_rejections_modify_rejections_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/quality-audit/modify-rejections/modify-rejections.component */ "./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.ts");
/* harmony import */ var _dashboard_quality_audit_rejected_cylinders_rejected_cylinders_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component */ "./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.ts");
/* harmony import */ var _dashboard_reports_hstreports_hstreports_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/reports/hstreports/hstreports.component */ "./src/app/dashboard/reports/hstreports/hstreports.component.ts");
/* harmony import */ var _dashboard_reports_pneumatic_pneumaticreport_pneumaticreport_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component */ "./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.ts");
/* harmony import */ var _dashboard_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/barcode/barcode.component */ "./src/app/dashboard/barcode/barcode.component.ts");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var _dashboard_reports_tareweight_tareweight_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dashboard/reports/tareweight/tareweight.component */ "./src/app/dashboard/reports/tareweight/tareweight.component.ts");
/* harmony import */ var _dashboard_dispatch_dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard/dispatch/dispatch/dispatch.component */ "./src/app/dashboard/dispatch/dispatch/dispatch.component.ts");
/* harmony import */ var _dashboard_dispatch_edit_dispatch_edit_dispatch_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard/dispatch/edit-dispatch/edit-dispatch.component */ "./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.ts");



































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_16__["SidenavComponent"],
            _dashboard_batch_create_batch_create_batch_component__WEBPACK_IMPORTED_MODULE_17__["CreateBatchComponent"],
            _dashboard_batch_prepare_batch_prepare_batch_component__WEBPACK_IMPORTED_MODULE_18__["PrepareBatchComponent"],
            _dashboard_batch_view_batch_view_batch_component__WEBPACK_IMPORTED_MODULE_22__["ViewBatchComponent"],
            _dashboard_batch_batch_component__WEBPACK_IMPORTED_MODULE_19__["BatchComponent"],
            _app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_23__["AppDialogComponent"],
            _dashboard_quality_audit_reject_cylinders_reject_cylinders_component__WEBPACK_IMPORTED_MODULE_24__["RejectCylindersComponent"],
            _dashboard_quality_audit_modify_rejections_modify_rejections_component__WEBPACK_IMPORTED_MODULE_25__["ModifyRejectionsComponent"],
            _dashboard_quality_audit_rejected_cylinders_rejected_cylinders_component__WEBPACK_IMPORTED_MODULE_26__["RejectedCylindersComponent"],
            _dashboard_reports_hstreports_hstreports_component__WEBPACK_IMPORTED_MODULE_27__["HstreportsComponent"],
            _dashboard_reports_pneumatic_pneumaticreport_pneumaticreport_component__WEBPACK_IMPORTED_MODULE_28__["PneumaticreportComponent"],
            _dashboard_barcode_barcode_component__WEBPACK_IMPORTED_MODULE_29__["BarcodeComponent"],
            _dashboard_reports_tareweight_tareweight_component__WEBPACK_IMPORTED_MODULE_31__["TareweightComponent"],
            _dashboard_dispatch_dispatch_dispatch_component__WEBPACK_IMPORTED_MODULE_32__["DispatchComponent"],
            _dashboard_dispatch_edit_dispatch_edit_dispatch_component__WEBPACK_IMPORTED_MODULE_33__["EditDispatchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_print__WEBPACK_IMPORTED_MODULE_5__["NgxPrintModule"],
            ngx_barcode__WEBPACK_IMPORTED_MODULE_30__["NgxBarcodeModule"]
        ],
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _dashboard_batch_batch_service__WEBPACK_IMPORTED_MODULE_20__["BatchService"], _navigation_navlist_service__WEBPACK_IMPORTED_MODULE_21__["NavListService"], _auth_login_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_23__["AppDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.authChange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    login(data) {
        this.user = {
            username: data.username,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
        this.router.navigate(['/viewbatch']);
    }
    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['']);
    }
    getUser() {
        return Object.assign({}, this.user);
    }
    isAuth() {
        return this.user != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {    \n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    padding:50px;\n  }\n\n  #login_container {    \n    height: 100%   \n  }\n\n  section {\n      vertical-align: middle\n  }\n\n  mat-form-field {\n    width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtNQUNJO0VBQ0o7O0VBRUE7SUFDRSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQgeyAgICBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzo1MHB4O1xuICB9XG5cbiAgI2xvZ2luX2NvbnRhaW5lciB7ICAgIFxuICAgIGhlaWdodDogMTAwJSAgIFxuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gIH1cblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/auth/login/user.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.loginError = null;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    }
    onSubmit() {
        this.userService.login({
            username: this.loginForm.value.username,
            password: this.loginForm.value.password
        }).subscribe(responseData => {
            if (responseData.status && responseData.status == '1') {
                this.authService.login(responseData.data);
            }
            else {
                this.loginError = "Login Failiure";
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/login/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    login(authData) {
        return this.http.post('/login', authData);
    }
    getUser() {
        return Object.assign({}, this.user);
    }
    isAuth() {
        return this.user != null;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



/***/ }),

/***/ "./src/app/dashboard/barcode/barcode.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/barcode/barcode.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#barcode_section mart-card {\n    padding:0px;\n    background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JhcmNvZGUvYmFyY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9iYXJjb2RlL2JhcmNvZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJjb2RlX3NlY3Rpb24gbWFydC1jYXJkIHtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/barcode/barcode.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/barcode/barcode.component.ts ***!
  \********************************************************/
/*! exports provided: BarcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeComponent", function() { return BarcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");






let BarcodeComponent = class BarcodeComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.Subslot = "";
        this.batchesList = [];
        this.barcode_txt = "";
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        this.showBarCode = false;
    }
    ngOnInit() {
        this.printBarcodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            serialnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.batchService.getBatchList().subscribe(responseData => {
            if (responseData.status == "1") {
                this.batchesList = responseData.data.batches;
            }
        });
    }
    onSaveAndPrintClick() {
        this.serial_no = this.printBarcodeForm.value.serialnumber;
        this.barcode_slno = this.serial_no.toString().padStart(6, '0');
        const batchtype = this.printBarcodeForm.value.batchtype;
        let dialogConfig;
        let batch = this.batchesList.find(element => {
            if (element.batchtype == this.printBarcodeForm.value.batchtype && element.batchname == this.printBarcodeForm.value.batchname) {
                return element;
            }
        });
        let found = this.batchesList.find(element => {
            if (element.batchtype == this.printBarcodeForm.value.batchtype && (parseInt(element.serial_start) <= parseInt(this.serial_no) && parseInt(element.serial_end) >= parseInt(this.serial_no))) {
                return element;
            }
        });
        if (batch) {
            if (found) {
                let data = {
                    "batchname": this.printBarcodeForm.value.batchname,
                    "batchtype": this.printBarcodeForm.value.batchtype
                };
                this.barcode_txt = this.printBarcodeForm.value.batchname + "-" + this.serial_no + "-" + this.printBarcodeForm.value.weight;
                console.log(this.barcode_txt);
                this.batchService.rejectedCylindersList(data).subscribe(responseData => {
                    let rejectionsList;
                    if (responseData.status == '1') {
                        rejectionsList = responseData.data.rejectionslist;
                        let rejected_batch = rejectionsList.find(element => element.serial_number == this.serial_no);
                        if (rejected_batch) {
                            dialogConfig = {
                                description: "The Cylinder " + this.serial_no + "is already rejected in quality audit."
                            };
                            this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                                data: dialogConfig
                            });
                            return;
                        }
                    }
                    this.barcode_weight = parseFloat(this.printBarcodeForm.value.weight).toFixed(1) + "kg";
                    this.Subslot = this.batchService.getSubSlot(this.serial_no, batch.serial_start);
                    this.batchService.saveBarCode(this.printBarcodeForm.value).subscribe(responseData => {
                        if (responseData.status == '1') {
                            this.showBarCode = true;
                            this.printBarcodeForm.patchValue({
                                serialnumber: "",
                                weight: ""
                            });
                        }
                        else if (responseData.status == '3') {
                            let cylinder = responseData.data.cylindername;
                            dialogConfig = {
                                description: "Tareweight exists for the cylinder " + cylinder + ". Do you want to update",
                                confirmDlg: true
                            };
                            const dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                                data: dialogConfig
                            });
                            dialogRef.afterClosed().subscribe(result => {
                                if (result == 'yes') {
                                    this.batchService.updateBarCode(this.printBarcodeForm.value).subscribe(responseData => {
                                        if (responseData.status == '1') {
                                            dialogConfig = {
                                                description: "Success."
                                            };
                                            this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                                                data: dialogConfig
                                            });
                                            this.showBarCode = true;
                                            this.printBarcodeForm.patchValue({
                                                serialnumber: "",
                                                weight: ""
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        return;
                    });
                });
            }
            else {
                dialogConfig = {
                    description: "Invalid Serial Number."
                };
            }
        }
        else {
            dialogConfig = {
                description: "Invalid Batch Name."
            };
        }
        if (dialogConfig) {
            let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                data: dialogConfig
            });
            this.showBarCode = false;
            return;
        }
    }
    refreshWeight() {
        this.batchService.getTareWeight().subscribe(responseData => {
            if (responseData.status == "1") {
                let tareweight = responseData.data.weight;
                console.log('weight' + tareweight);
                this.printBarcodeForm.patchValue({
                    weight: tareweight
                });
            }
        });
        return false;
    }
};
BarcodeComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
BarcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-barcode',
        template: __webpack_require__(/*! raw-loader!./barcode.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/barcode/barcode.component.html"),
        styles: [__webpack_require__(/*! ./barcode.component.css */ "./src/app/dashboard/barcode/barcode.component.css")]
    })
], BarcodeComponent);



/***/ }),

/***/ "./src/app/dashboard/batch/batch.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/batch/batch.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9iYXRjaC9iYXRjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/batch/batch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/batch/batch.component.ts ***!
  \****************************************************/
/*! exports provided: BatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchComponent", function() { return BatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _batch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batch.service */ "./src/app/dashboard/batch/batch.service.ts");



let BatchComponent = class BatchComponent {
    constructor(batchService) {
        this.batchService = batchService;
    }
    ngOnInit() {
    }
};
BatchComponent.ctorParameters = () => [
    { type: _batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"] }
];
BatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-batch',
        template: __webpack_require__(/*! raw-loader!./batch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/batch.component.html"),
        styles: [__webpack_require__(/*! ./batch.component.css */ "./src/app/dashboard/batch/batch.component.css")]
    })
], BatchComponent);



/***/ }),

/***/ "./src/app/dashboard/batch/batch.service.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/batch/batch.service.ts ***!
  \**************************************************/
/*! exports provided: BatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchService", function() { return BatchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

class BatchService {
    constructor(http) {
        this.http = http;
        this.batchData = [];
        this.batch = [];
    }
    getBatchDataSource() {
        this.batch = [
            {
                name: "test",
                sl_no_range: "100-200",
                cylinders_count: 20,
                rejections_count: 2,
                status: "on"
            }
        ];
        return this.batch.slice();
    }
    prepareReportDataSource(start, end, report, rejectionsList) {
        this.batchData = [];
        let batchItem;
        let status = "OK";
        let col_length = Math.ceil((end - start) / 6);
        let start_row_sl_no = start;
        for (let i = 0; i < col_length; i++) {
            batchItem = {};
            for (var j = 1; j <= 6; j++) {
                let start_slno = start_row_sl_no + (j - 1) * col_length;
                if (start_slno > end)
                    continue;
                let rejectedSerialNo;
                if (rejectionsList.length) {
                    rejectedSerialNo = rejectionsList.find(element => element.serial_number == start_slno);
                }
                if (rejectedSerialNo != undefined && rejectedSerialNo.rejection_type == report) {
                    status = "REJECTED";
                }
                else {
                    status = "OK";
                }
                let serial_no_index = "serial_no" + j;
                let status_key = "status" + j;
                batchItem = Object.assign({}, batchItem, { [serial_no_index]: start_slno.toString().padStart(6, '0'), [status_key]: status });
            }
            this.batchData.push(batchItem);
            ++start_row_sl_no;
        }
        return this.batchData.slice();
    }
    prepareTareWeigthReportDataSource(start, end, tareweightCylinders) {
        this.batchData = [];
        let batchItem;
        let status = "OK";
        let col_length = Math.ceil((end - start) / 2);
        let start_row_sl_no = start;
        for (let i = 0; i < col_length; i++) {
            batchItem = {};
            for (var j = 1; j <= 2; j++) {
                const start_slno = start_row_sl_no + (j - 1) * col_length;
                if (start_slno > end)
                    continue;
                let batch_tareweight;
                if (tareweightCylinders.length) {
                    batch_tareweight = tareweightCylinders.find(element => element.serial_number == start_slno);
                }
                let tare_weight_left_value = "0";
                let tare_weight_right_value = "0";
                let tareweight_value = "0";
                if (batch_tareweight != undefined) {
                    tareweight_value = batch_tareweight.weight;
                    let tareweight_array = String(tareweight_value).split('.');
                    if (tareweight_array.length) {
                        tare_weight_left_value = tareweight_array[0];
                    }
                    if (tareweight_array.length > 1) {
                        tare_weight_right_value = tareweight_array[1];
                    }
                    tareweight_value = parseFloat(tareweight_value).toFixed(1);
                }
                //const tareweight_value = batch_tareweight == undefined ? 0 : 0;
                let serial_no_index = "serial_no" + j;
                let tare_weight_left = "tare_weight_left" + j;
                let tare_weight_right = "tare_weight_right" + j;
                let tareweight = "tareweight" + j;
                batchItem = Object.assign({}, batchItem, { [serial_no_index]: start_slno.toString().padStart(6, '0'), [tare_weight_left]: tare_weight_left_value, [tare_weight_right]: tare_weight_right_value, [tareweight]: tareweight_value });
            }
            this.batchData.push(batchItem);
            ++start_row_sl_no;
        }
        console.log(this.batchData);
        return this.batchData.slice();
    }
    getSubSlot(serial_no, start_serial) {
        const index = Math.ceil(((serial_no + 1) - start_serial) / 250);
        return String.fromCharCode(96 + index).toUpperCase();
    }
    prepareDispatchDataSource(data) {
        this.batchData = [];
        let batchItem;
        batchItem = {};
        let k = 1;
        for (let i = 0; i < data.length; i++) {
            let serial_no_index = "serial_no" + k;
            let status_key = "audited" + k;
            let status = data[i].dispatch_status == "1" ? true : false;
            batchItem = Object.assign({}, batchItem, { [serial_no_index]: data[i].serial_number.toString().padStart(6, '0'), [status_key]: status });
            if (k == 6 || i == data.length - 1) {
                k = 1;
                this.batchData.push(batchItem);
                batchItem = {};
            }
            else {
                ++k;
            }
        }
        return this.batchData.slice();
    }
    prepareBatchDataSource(start, end) {
        /*this.batchData = [];
       let end_serial_no =  Math.floor((start + end)/6);

       let serial_number1 =  end_serial_no+1;

        for(let i= start; i <= end_serial_no;i++) {
            let batchItem;

            if(serial_number1 > end) {
                batchItem =  {
                    serial_no: i,
                    audited: false,
                }
            } else {
                batchItem =  {
                    serial_no: i,
                    audited: false,
                    serial_no1: serial_number1,
                    audited1: false
                }
            }
            this.batchData.push(batchItem);
            ++serial_number1;
        }*/
        /* this.batchData = [];
         let batchItem;
         
         let col_length =  Math.ceil((end - start)/6);
         let start_row_sl_no = start;
 
         for(let i=0;i<col_length;i++) {
             batchItem = {};
             
             for(var j=1;j<=6;j++) {
                 let start_slno = start_row_sl_no + (j-1)*col_length;
                 if(start_slno > end) continue;
                 let serial_no_index = "serial_no"+j;
                 let status_key = "audited"+j;
             
                 batchItem = {
                     ...batchItem,
                     [serial_no_index]: start_slno.toString().padStart(6,'0'),
                     [status_key]: false
                 }
             }
             this.batchData.push(batchItem);
             ++start_row_sl_no;
             
         }*/
        this.batchData = [];
        let batchItem;
        batchItem = {};
        let k = 1;
        let end_serial_no = Math.floor((start + end) / 6);
        let serial_number1 = end_serial_no + 1;
        for (let i = start; i <= end; i++) {
            let serial_no_index = "serial_no" + k;
            let status_key = "audited" + k;
            batchItem = Object.assign({}, batchItem, { [serial_no_index]: i.toString().padStart(6, '0'), [status_key]: false });
            if (k == 6 || i == end) {
                k = 1;
                this.batchData.push(batchItem);
                batchItem = {};
            }
            else {
                ++k;
            }
        }
        return this.batchData.slice();
    }
    createBatch(data) {
        return this.http.post('/createbatch', data);
    }
    getBatchList() {
        return this.http.get('/batches');
    }
    getBatch(id) {
        return this.http.get('/batches/' + id);
    }
    getLastSerial(data) {
        return this.http.post('/lastserial', data);
    }
    rejectCylinder(data) {
        return this.http.post('/rejectcilinder', data);
    }
    rejectedCylindersList(data) {
        return this.http.post('/rejectedcylinderlist', data);
    }
    modifyRejection(data) {
        return this.http.post('/updaterejection', data);
    }
    saveBarCode(data) {
        return this.http.post('/tareweight', data);
    }
    updateBarCode(data) {
        return this.http.post('/tareweightupdate', data);
    }
    tareweightCylindersList(data) {
        return this.http.post('/tareweightcylinders', data);
    }
    getTareWeight() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.get('http://localhost:8081/api/scale/read', { headers: headers });
    }
    changeDispatch(data) {
        return this.http.post('/editdispatch', data);
    }
}
BatchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];


/***/ }),

/***/ "./src/app/dashboard/batch/create-batch/create-batch.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/batch/create-batch/create-batch.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width:100%\n}\n\n#create-batch-form, #create_batch_table {\n    width:50%;\n    margin:50px;\n    padding:20px;\n    padding-top:0px;\n    margin-top:10px;\n}\n\n#create-batch-form {\n    margin-top:20px;\n}\n\ntd.mat-column-audited, td.mat-column-audited1  {\n    background-color:rgb(234, 238, 241);\n    text-align: center;\n    padding-right:0px;\n}\n\ntd {\n    text-align: center;\n}\n\n.mat-header-cell {\n   \n    text-align:center;\n   }\n\ntd.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\n    padding-right: 0px;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n    padding-left:0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JhdGNoL2NyZWF0ZS1iYXRjaC9jcmVhdGUtYmF0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7R0FDbEI7O0FBRUg7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYmF0Y2gvY3JlYXRlLWJhdGNoL2NyZWF0ZS1iYXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOjEwMCVcbn1cblxuI2NyZWF0ZS1iYXRjaC1mb3JtLCAjY3JlYXRlX2JhdGNoX3RhYmxlIHtcbiAgICB3aWR0aDo1MCU7XG4gICAgbWFyZ2luOjUwcHg7XG4gICAgcGFkZGluZzoyMHB4O1xuICAgIHBhZGRpbmctdG9wOjBweDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG59XG5cbiNjcmVhdGUtYmF0Y2gtZm9ybSB7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG50ZC5tYXQtY29sdW1uLWF1ZGl0ZWQsIHRkLm1hdC1jb2x1bW4tYXVkaXRlZDEgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzQsIDIzOCwgMjQxKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDowcHg7XG59XG5cbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICAgXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICB9XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSwgdGQubWF0LWZvb3Rlci1jZWxsOmxhc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG50ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgdGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDowcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/batch/create-batch/create-batch.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/batch/create-batch/create-batch.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBatchComponent", function() { return CreateBatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");







let CreateBatchComponent = class CreateBatchComponent {
    constructor(batchService, dialog, router) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.router = router;
        this.batchName = "";
        this.displayedColumns = ['name', 'sl_no_range', 'cylinders_count', 'rejections_count', 'status'];
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        //dataSource = new BehaviorSubject([]);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.lastSerialNumber = -1;
        this.batch = [];
        this.batchesList = [];
        this.displayBatchSection = false;
    }
    ngOnInit() {
        this.createBatchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            batchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            serial_start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            serial_end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            batch_creator: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            punching_instructor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        /* this.dataSource.data = this.batchService.getBatchDataSource();
         this.batchService.getBatchList().subscribe(responseData => {
           if(responseData.status == "1") {
             this.batchesList = responseData.data.batches;
           }
         });*/
        /*this.batchService.getLastSerial().subscribe(responseData => {
          if(responseData.data.lastserialnuber) {
            this.lastSerialNumber = responseData.data.lastserialnuber;
            this.createBatchForm.patchValue({
              serial_start: this.lastSerialNumber
            });
            //this.createBatchForm.get('serial_start').disable();
          }
        })*/
    }
    batchTypeSelect() {
        let data = {
            batchtype: this.createBatchForm.value.batchtype
        };
        this.batchService.getLastSerial(data).subscribe(responseData => {
            if (responseData.data.lastserialnuber) {
                this.lastSerialNumber = parseInt(responseData.data.lastserialnuber) + 1;
                this.createBatchForm.patchValue({
                    serial_start: this.lastSerialNumber
                });
            }
            else {
                this.lastSerialNumber = -1;
                this.createBatchForm.patchValue({
                    serial_start: ""
                });
            }
        });
    }
    onSubmit() {
        let start = this.createBatchForm.value.serial_start;
        let end = this.createBatchForm.value.serial_end;
        var dialogConfig = {};
        let error = false;
        if (this.createBatchForm.value.batchname.indexOf('-') != -1) {
            dialogConfig = {
                description: "Invalid character '-' in batchname."
            };
            error = true;
        }
        else if (this.lastSerialNumber && this.lastSerialNumber != -1) {
            if (start < this.lastSerialNumber) {
                dialogConfig = {
                    description: "Starting Serial number is not valid."
                };
                error = true;
            }
            else if (end <= this.lastSerialNumber) {
                error = true;
                dialogConfig = {
                    description: "Ending Serial number is not valid."
                };
            }
        }
        else if (start == undefined || start <= 0) {
            dialogConfig = {
                description: "Starting Serial number is not valid."
            };
            error = true;
        }
        else if (end <= start) {
            error = true;
            dialogConfig = {
                description: "Ending Serial number is not valid."
            };
        }
        if (error) {
            let dialogRef = this.dialog.open(_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppDialogComponent"], {
                data: dialogConfig
            });
            return;
        }
        this.batchService.createBatch(this.createBatchForm.value)
            .subscribe(responseData => {
            var dialogConfig = {};
            if (responseData.status == '1') {
                dialogConfig = {
                    description: "Batch has been created successfully."
                };
            }
            else if (responseData.status == '0') {
                dialogConfig = {
                    description: "Duplicate Batch name."
                };
            }
            let dialogRef = this.dialog.open(_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppDialogComponent"], {
                data: dialogConfig
            });
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/viewbatch']);
            });
        });
    }
};
CreateBatchComponent.ctorParameters = () => [
    { type: _batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CreateBatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-batch',
        template: __webpack_require__(/*! raw-loader!./create-batch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/create-batch/create-batch.component.html"),
        styles: [__webpack_require__(/*! ./create-batch.component.css */ "./src/app/dashboard/batch/create-batch/create-batch.component.css")]
    })
], CreateBatchComponent);



/***/ }),

/***/ "./src/app/dashboard/batch/prepare-batch/prepare-batch.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/batch/prepare-batch/prepare-batch.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#prepare_batch_list, #prepare-batch-form, #prepare_batch_print {    \n    padding-top:0px;\n    margin-top:10px;\n}\n\n#prepare-batch-form {\n    margin:20px;\n    padding:20px;\n}\n\nmat-form-field.mat-form-field {\n    width: 400px;\n}\n\n/*td.mat-column-audited, td.mat-column-audited1  {\n    background-color:rgb(234, 238, 241);\n    text-align: center;\n    padding-right:0px;\n}\n\ntd {\n    text-align: center;\n}\n\n.mat-header-cell {\n   \n    text-align:center;\n   }\n\ntd.mat-cell:last-of-type, td.mat-footer-cell:last-of-type, th.mat-header-cell:last-of-type {\n    padding-right: 0px;\n}\n\ntd.mat-cell:first-of-type, td.mat-footer-cell:first-of-type, th.mat-header-cell:first-of-type {\n    padding-left:0px;\n}*/\n\ntable {\n    border-left: 1px solid #000;\n    border-top: 1px solid #000;\n}\n\n#prepare_batch_table th, #prepare_batch_table td {\n    color: #000;\n    border-right:1px solid #000;\n    border-bottom: 1px solid #000;  \n    width: 70px;    \n    padding: 0px 5px;    \n}\n\n#prepare_batch_table th {\n    font-weight: bold;    \n}\n\n#prepare_batch_table tr {\n    height: 20px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JhdGNoL3ByZXBhcmUtYmF0Y2gvcHJlcGFyZS1iYXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFxQkU7O0FBRUY7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYmF0Y2gvcHJlcGFyZS1iYXRjaC9wcmVwYXJlLWJhdGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNwcmVwYXJlX2JhdGNoX2xpc3QsICNwcmVwYXJlLWJhdGNoLWZvcm0sICNwcmVwYXJlX2JhdGNoX3ByaW50IHsgICAgXG4gICAgcGFkZGluZy10b3A6MHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbn1cblxuI3ByZXBhcmUtYmF0Y2gtZm9ybSB7XG4gICAgbWFyZ2luOjIwcHg7XG4gICAgcGFkZGluZzoyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4vKnRkLm1hdC1jb2x1bW4tYXVkaXRlZCwgdGQubWF0LWNvbHVtbi1hdWRpdGVkMSAge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzNCwgMjM4LCAyNDEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OjBweDtcbn1cblxudGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICBcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIH1cblxudGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLCB0ZC5tYXQtZm9vdGVyLWNlbGw6bGFzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlLCB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbn0qL1xuXG50YWJsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xufVxuI3ByZXBhcmVfYmF0Y2hfdGFibGUgdGgsICNwcmVwYXJlX2JhdGNoX3RhYmxlIHRkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7ICBcbiAgICB3aWR0aDogNzBweDsgICAgXG4gICAgcGFkZGluZzogMHB4IDVweDsgICAgXG59XG5cbiNwcmVwYXJlX2JhdGNoX3RhYmxlIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgICAgXG59XG5cbiNwcmVwYXJlX2JhdGNoX3RhYmxlIHRyIHtcbiAgICBoZWlnaHQ6IDIwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/batch/prepare-batch/prepare-batch.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/batch/prepare-batch/prepare-batch.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrepareBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepareBatchComponent", function() { return PrepareBatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");







//import { MatTable } from '@angular/material';
let PrepareBatchComponent = class PrepareBatchComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.batchName = "";
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        this.displayedColumns = ['serial_no1', 'audited1', 'serial_no2', 'audited2', 'serial_no3', 'audited3', 'serial_no4', 'audited4', 'serial_no5', 'audited5', 'serial_no6', 'audited6'];
        //dataSource = new BehaviorSubject([]);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.batch = [];
        this.displayBatchSection = false;
        this.lastSerialNumber = -1;
        this.start = 0;
        this.end = 100;
    }
    ngOnInit() {
        this.prepareBatchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            batch_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            starting_serial_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ending_serial_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    batchTypeSelect() {
        let data = {
            batchtype: this.prepareBatchForm.value.batchtype
        };
        this.batchService.getLastSerial(data).subscribe(responseData => {
            if (responseData.data.lastserialnuber) {
                this.lastSerialNumber = parseInt(responseData.data.lastserialnuber) + 1;
                this.prepareBatchForm.patchValue({
                    starting_serial_no: this.lastSerialNumber
                });
            }
            else {
                this.lastSerialNumber = -1;
                this.prepareBatchForm.patchValue({
                    starting_serial_no: ""
                });
            }
        });
    }
    onSubmit() {
        let start = this.prepareBatchForm.value.starting_serial_no;
        let end = this.prepareBatchForm.value.ending_serial_no;
        var dialogConfig = {};
        let error = false;
        if (this.prepareBatchForm.value.batch_name.indexOf('-') != -1) {
            dialogConfig = {
                description: "Invalid character '-' in batchname."
            };
            error = true;
        }
        else if (this.lastSerialNumber && this.lastSerialNumber != -1) {
            if (start < this.lastSerialNumber) {
                dialogConfig = {
                    description: "Starting Serial number is not valid."
                };
                error = true;
            }
            else if (end <= this.lastSerialNumber) {
                error = true;
                dialogConfig = {
                    description: "Ending Serial number is not valid."
                };
            }
        }
        else if (start == undefined || start <= 0) {
            dialogConfig = {
                description: "Starting Serial number is not valid."
            };
            error = true;
        }
        else if (end <= start) {
            error = true;
            dialogConfig = {
                description: "Ending Serial number is not valid."
            };
        }
        if (error) {
            this.displayBatchSection = false;
            let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                data: dialogConfig
            });
            return;
        }
        this.batchName = this.prepareBatchForm.value.batch_name;
        this.total_cylinder = (end - start) + 1;
        this.dataSource.data = this.batchService.prepareBatchDataSource(start, end);
        if (this.dataSource.data.length) {
            this.displayBatchSection = true;
        }
        //this.dataSource.next([...this.data]);
        //this.dataSource.paginator = this.data;
        this.today = Date.now();
    }
    openDialog() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: 'Angular For Beginners'
        };
        const dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => console.log(data));
    }
};
PrepareBatchComponent.ctorParameters = () => [
    { type: _batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
PrepareBatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prepare-batch',
        template: __webpack_require__(/*! raw-loader!./prepare-batch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/prepare-batch/prepare-batch.component.html"),
        styles: [__webpack_require__(/*! ./prepare-batch.component.css */ "./src/app/dashboard/batch/prepare-batch/prepare-batch.component.css")]
    })
], PrepareBatchComponent);



/***/ }),

/***/ "./src/app/dashboard/batch/view-batch/view-batch.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/batch/view-batch/view-batch.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n\n  #view_batch_list {\n    width:95%;    \n    padding-top:0px;\n    margin-top:10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JhdGNoL3ZpZXctYmF0Y2gvdmlldy1iYXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2JhdGNoL3ZpZXctYmF0Y2gvdmlldy1iYXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3ZpZXdfYmF0Y2hfbGlzdCB7XG4gICAgd2lkdGg6OTUlOyAgICBcbiAgICBwYWRkaW5nLXRvcDowcHg7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/batch/view-batch/view-batch.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/batch/view-batch/view-batch.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBatchComponent", function() { return ViewBatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_navigation_navlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/navigation/navlist.service */ "./src/app/navigation/navlist.service.ts");






let ViewBatchComponent = class ViewBatchComponent {
    constructor(batchService, navListService) {
        this.batchService = batchService;
        this.navListService = navListService;
        this.displayedColumns = ['batchname', 'batchtype', 'serial_start', 'serial_end', 'total_cylinders', 'batchcreator', 'punchinginstructor'];
        //dataSource = new BehaviorSubject([]);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ngOnInit() {
        let nav = {
            name: 'batch',
            title: 'Batches',
            url: '/viewbatch',
            sidenav: [
                { name: 'Prepare Batch', url: '/preparebatch' },
                { name: 'Create Batch', url: '/createbatch' },
                { name: 'View Batch', url: '/viewbatch' }
            ]
        };
        this.navListService.onNavListChange(nav);
        this.batchService.getBatchList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(responseData => {
            const batchesArray = [];
            console.log(responseData.data.batches);
            for (const key in responseData.data.batches) {
                const batch = responseData.data.batches[key];
                const total_cylinders = parseInt(batch.serial_end) - parseInt(batch.serial_start);
                batchesArray.push({
                    batchname: batch.batchname,
                    batchtype: batch.batchtype,
                    serial_start: batch.serial_start.toString().padStart(6, '0'),
                    serial_end: batch.serial_end.toString().padStart(6, '0'),
                    total_cylinders: total_cylinders + 1,
                    batchcreator: batch.batch_creator,
                    punchinginstructor: batch.punching_instructor
                });
            }
            return batchesArray;
        }))
            .subscribe(batches => {
            this.dataSource.data = batches;
        });
    }
};
ViewBatchComponent.ctorParameters = () => [
    { type: _batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"] },
    { type: src_app_navigation_navlist_service__WEBPACK_IMPORTED_MODULE_5__["NavListService"] }
];
ViewBatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-batch',
        template: __webpack_require__(/*! raw-loader!./view-batch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/batch/view-batch/view-batch.component.html"),
        styles: [__webpack_require__(/*! ./view-batch.component.css */ "./src/app/dashboard/batch/view-batch/view-batch.component.css")]
    })
], ViewBatchComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dispatch/dispatch/dispatch.component.css":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/dispatch/dispatch/dispatch.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kaXNwYXRjaC9kaXNwYXRjaC9kaXNwYXRjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/dispatch/dispatch/dispatch.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/dispatch/dispatch/dispatch.component.ts ***!
  \*******************************************************************/
/*! exports provided: DispatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchComponent", function() { return DispatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let DispatchComponent = class DispatchComponent {
    constructor(batchService, dialog, sanitizer) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.batchesList = [];
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
    }
    ngOnInit() {
        this.dispatchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.batchService.getBatchList().subscribe(responseData => {
            if (responseData.status == "1") {
                this.batchesList = responseData.data.batches;
            }
        });
    }
    onDownload() {
        let dialogConfig;
        let batch = this.batchesList.find(element => {
            if (element.batchtype == this.dispatchForm.value.batchtype && element.batchname == this.dispatchForm.value.batchname) {
                return element;
            }
        });
        if (batch) {
            let data = {
                "batchname": this.dispatchForm.value.batchname,
                "batchtype": this.dispatchForm.value.batchtype
            };
            this.filename = this.dispatchForm.value.batchname + "_dispatch.json";
            this.batchService.rejectedCylindersList(data).subscribe(responseData => {
                let rejection_list = [];
                if (responseData.status == '1') {
                    rejection_list = responseData.data.rejectionslist.map(element => element.serial_number);
                }
                this.batchService.tareweightCylindersList(data).subscribe(responseData => {
                    let tareWeightData = [];
                    if (responseData.status == "1") {
                        tareWeightData = responseData.data.tareweight.map(element => {
                            return {
                                serialno: element.serial_number,
                                weight: element.weight
                            };
                        });
                    }
                    let json_data = {
                        batchname: batch.batchname,
                        rejectedCylinders: rejection_list,
                        starting_serialno: batch.serial_start,
                        ending_serialno: batch.serial_end,
                        tareweight: tareWeightData
                    };
                    const blob = new Blob([JSON.stringify(json_data)], { type: 'application/json' });
                    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
                    let url = window.URL.createObjectURL(blob);
                    //window.open(url);
                    const element = document.createElement('a');
                    element.href = url;
                    element.download = this.filename;
                    document.body.appendChild(element);
                    element.click();
                });
            });
        }
        else {
            let dialogConfig = {
                description: "Invalid Batch Name"
            };
            this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppDialogComponent"], {
                data: dialogConfig
            });
            return;
        }
    }
};
DispatchComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
DispatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dispatch',
        template: __webpack_require__(/*! raw-loader!./dispatch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dispatch/dispatch/dispatch.component.html"),
        styles: [__webpack_require__(/*! ./dispatch.component.css */ "./src/app/dashboard/dispatch/dispatch/dispatch.component.css")]
    })
], DispatchComponent);



/***/ }),

/***/ "./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ntable {\n    border-left: 1px solid #000;\n    border-top: 1px solid #000;\n}\n#prepare_batch_table th, #prepare_batch_table td {\n    color: #000;\n    border-right:1px solid #000;\n    border-bottom: 1px solid #000;  \n    width: 70px;    \n    padding: 0px 5px;    \n}\n#prepare_batch_table th {\n    font-weight: bold;    \n}\n#prepare_batch_table tr {\n    height: 20px\n}\n.mat-checkbox-checked {\n    color: blue;\n    }\n.mat-checkbox-input {\n     color: blue\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rpc3BhdGNoL2VkaXQtZGlzcGF0Y2gvZWRpdC1kaXNwYXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYO0FBRUg7S0FDSTtDQUNKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rpc3BhdGNoL2VkaXQtZGlzcGF0Y2gvZWRpdC1kaXNwYXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50YWJsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xufVxuI3ByZXBhcmVfYmF0Y2hfdGFibGUgdGgsICNwcmVwYXJlX2JhdGNoX3RhYmxlIHRkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7ICBcbiAgICB3aWR0aDogNzBweDsgICAgXG4gICAgcGFkZGluZzogMHB4IDVweDsgICAgXG59XG5cbiNwcmVwYXJlX2JhdGNoX3RhYmxlIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgICAgXG59XG5cbiNwcmVwYXJlX2JhdGNoX3RhYmxlIHRyIHtcbiAgICBoZWlnaHQ6IDIwcHhcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG5cbiAubWF0LWNoZWNrYm94LWlucHV0IHtcbiAgICAgY29sb3I6IGJsdWVcbiB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditDispatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDispatchComponent", function() { return EditDispatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");







let EditDispatchComponent = class EditDispatchComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.batchName = "";
        this.batches = [];
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        this.displayedColumns = ['serial_no1', 'audited1', 'serial_no2', 'audited2', 'serial_no3', 'audited3', 'serial_no4', 'audited4', 'serial_no5', 'audited5', 'serial_no6', 'audited6'];
        //dataSource = new BehaviorSubject([]);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.batch = [];
        this.displayBatchSection = false;
        this.lastSerialNumber = 0;
        this.start = 0;
        this.end = 100;
        this.tareWeghtBkp = [];
    }
    ngOnInit() {
        this.prepareBatchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            batch_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.batchService.getBatchList()
            .subscribe(responseData => {
            this.batches = responseData.data.batches;
        });
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            filterValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.filterForm.patchValue({
            filterValue: 'All'
        });
    }
    batchTypeSelect() {
    }
    onFilterChange() {
        const value = this.filterForm.value.filterValue;
        if (value == 'All') {
            this.dataSource.data = this.batchService.prepareDispatchDataSource(this.tareWeghtBkp);
            //this.dataSource.data = this.searchData;
        }
        else {
            let filteredTareWeight = this.tareWeghtBkp.filter(element => element.dispatch_status == value);
            console.log(filteredTareWeight);
            this.dataSource.data = this.batchService.prepareDispatchDataSource(filteredTareWeight);
        }
    }
    changeDispatch(slno) {
        console.log('in change dispatch' + slno);
    }
    onChange(event, slno) {
        // can't event.preventDefault();
        let data = {
            serialnumber: slno,
            dispatch_status: (event.checked ? '1' : '0'),
            batchname: this.prepareBatchForm.value.batch_name,
            batchtype: this.prepareBatchForm.value.batchtype
        };
        this.batchService.changeDispatch(data).subscribe(responseData => {
            this.updateDispatch();
            let dialogConfig;
            if (responseData.status == '2') {
                dialogConfig = {
                    description: "Tare weight inform not found. This info has never been updated."
                };
                event.checked = false;
            }
            else if (responseData.status == '1') {
                dialogConfig = {
                    description: "Dispatch Successfully Updated."
                };
            }
            else {
                dialogConfig = {
                    description: "Error updating Tare weight."
                };
            }
            let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppDialogComponent"], {
                data: dialogConfig
            });
        });
    }
    updateDispatch() {
        this.batchService.tareweightCylindersList(this.TareWeightPostData).subscribe(responseData => {
            let tareweight_cylinders = {};
            var dialogConfig = {};
            if (responseData.status == '1') {
                this.tareWeghtBkp = tareweight_cylinders = responseData.data.tareweight;
                this.displayBatchSection = true;
                this.dataSource.data = this.batchService.prepareDispatchDataSource(tareweight_cylinders);
            }
            else if (responseData.status == '0') {
                dialogConfig = {
                    description: "Tareweight list is empty."
                };
                let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppDialogComponent"], {
                    data: dialogConfig
                });
                return;
            }
        });
    }
    onSubmit() {
        if (this.batches.length) {
            const serialno = parseInt(this.prepareBatchForm.value.serialno);
            const batchtype = this.prepareBatchForm.value.batchtype;
            this.TareWeightPostData = {
                "batchname": this.prepareBatchForm.value.batch_name,
                "batchtype": this.prepareBatchForm.value.batchtype
            };
            const searchBatch = this.batches.find(element => {
                if (element.batchtype == batchtype && element.batchname == this.prepareBatchForm.value.batch_name) {
                    return element;
                }
            });
            if (searchBatch && searchBatch.batchname) {
                let start = searchBatch.serial_start;
                let end = searchBatch.serial_end;
                var dialogConfig = {};
                let error = false;
                if (this.prepareBatchForm.value.batch_name.indexOf('-') != -1) {
                    dialogConfig = {
                        description: "Invalid character '-' in batchname."
                    };
                    error = true;
                }
                if (error) {
                    this.displayBatchSection = false;
                    let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppDialogComponent"], {
                        data: dialogConfig
                    });
                    return;
                }
                this.updateDispatch();
            }
        }
    }
};
EditDispatchComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_5__["BatchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
EditDispatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-dispatch',
        template: __webpack_require__(/*! raw-loader!./edit-dispatch.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.html"),
        styles: [__webpack_require__(/*! ./edit-dispatch.component.css */ "./src/app/dashboard/dispatch/edit-dispatch/edit-dispatch.component.css")]
    })
], EditDispatchComponent);



/***/ }),

/***/ "./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9xdWFsaXR5LWF1ZGl0L21vZGlmeS1yZWplY3Rpb25zL21vZGlmeS1yZWplY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ModifyRejectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyRejectionsComponent", function() { return ModifyRejectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");






let ModifyRejectionsComponent = class ModifyRejectionsComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.showRejectForm = false;
        this.batches = [];
        this.rejection_types = [
            { value: 'HST', viewValue: 'HST' },
            { value: 'Pneumatic', viewValue: 'Pneumatic Test' },
            { value: 'BIS', viewValue: 'BIS Audit' },
            { value: 'Custom', viewValue: 'Custom' }
        ];
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        this.status_list = [
            { value: '1', viewValue: 'Rejected' },
            { value: '0', viewValue: 'OK' }
        ];
    }
    ngOnInit() {
        this.searchSerialNoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            serialno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.modifyRejectionsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            serialnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rejectiontype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rejectionstatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.batchService.getBatchList()
            .subscribe(responseData => {
            this.batches = responseData.data.batches;
        });
        this.modifyRejectionsForm.patchValue({
            status: "Rejected"
        });
    }
    invalidSerialNumber() {
        let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
            data: {
                description: "Serial number found in this batch."
            }
        });
        this.showRejectForm = false;
    }
    showCustomMessage(message) {
        let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
            data: {
                description: message
            }
        });
    }
    onSearchClick() {
        if (this.batches.length) {
            const serialno = parseInt(this.searchSerialNoForm.value.serialno);
            const batchtype = this.searchSerialNoForm.value.batchtype;
            const searchBatch = this.batches.find(element => {
                if (element.batchtype == batchtype && (parseInt(element.serial_start) <= serialno && parseInt(element.serial_end) >= serialno)) {
                    return element;
                }
            });
            if (searchBatch && searchBatch.batchname) {
                let data = {
                    "batchname": searchBatch.batchname,
                    "batchtype": searchBatch.batchtype
                };
                this.batchService.rejectedCylindersList(data).subscribe(responseData => {
                    if (responseData.status == '1') {
                        const rejectedCylinder = responseData.data.rejectionslist.find(element => {
                            if (element.serial_number == this.searchSerialNoForm.value.serialno) {
                                return element;
                            }
                        });
                        if (rejectedCylinder != undefined) {
                            this.modifyRejectionsForm.patchValue({
                                batchname: searchBatch.batchname,
                                serialnumber: rejectedCylinder.serial_number,
                                rejectiontype: rejectedCylinder.rejection_type,
                                rejectionstatus: '1',
                                comments: rejectedCylinder.comments
                            });
                            this.showRejectForm = true;
                        }
                        else {
                            this.showCustomMessage('Cylinder not found in rejected cylinders list');
                            this.showRejectForm = false;
                        }
                    }
                });
            }
            else {
                this.invalidSerialNumber();
            }
        }
        else {
            this.invalidSerialNumber();
        }
    }
    onRejectSubmit() {
        let data = this.modifyRejectionsForm.value;
        data.batchtype = this.searchSerialNoForm.value.batchtype;
        this.batchService.modifyRejection(data).subscribe(responseData => {
            let message = "";
            if (responseData.status == '0') {
                message = "Success";
            }
            else if (responseData.status == "1") {
                message = "Cylinder Rejection updated.";
            }
            else if (responseData.status == "2") {
                message = "cylinder not present in the rejection list";
            }
            else {
                message = "Failed to reject cylinder.";
            }
            let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                data: {
                    description: message
                }
            });
        });
    }
};
ModifyRejectionsComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
ModifyRejectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-rejections',
        template: __webpack_require__(/*! raw-loader!./modify-rejections.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.html"),
        styles: [__webpack_require__(/*! ./modify-rejections.component.css */ "./src/app/dashboard/quality-audit/modify-rejections/modify-rejections.component.css")]
    })
], ModifyRejectionsComponent);



/***/ }),

/***/ "./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9xdWFsaXR5LWF1ZGl0L3JlamVjdC1jeWxpbmRlcnMvcmVqZWN0LWN5bGluZGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RejectCylindersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectCylindersComponent", function() { return RejectCylindersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");






let RejectCylindersComponent = class RejectCylindersComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.showRejectForm = false;
        this.isReadonly = false;
        this.batches = [];
        this.rejection_types = [
            { value: 'HST', viewValue: 'HST' },
            { value: 'Pneumatic', viewValue: 'Pneumatic Test' },
            { value: 'BIS', viewValue: 'BIS Audit' },
            { value: 'Custom', viewValue: 'Custom' }
        ];
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
    }
    ngOnInit() {
        this.searchSerialNoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            serialno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.rejectCylinderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            serialnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            rejectiontype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.batchService.getBatchList()
            .subscribe(responseData => {
            this.batches = responseData.data.batches;
        });
    }
    invalidSerialNumber(batchtype) {
        let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
            data: {
                description: "Serial number not found in batch type " + batchtype
            }
        });
        this.showRejectForm = false;
    }
    onSearchClick() {
        if (this.batches.length) {
            const serialno = parseInt(this.searchSerialNoForm.value.serialno);
            const batchtype = this.searchSerialNoForm.value.batchtype;
            const searchBatch = this.batches.find(element => {
                if (element.batchtype == batchtype && (parseInt(element.serial_start) <= serialno && parseInt(element.serial_end) >= serialno)) {
                    return element;
                }
            });
            if (searchBatch && searchBatch.batchname) {
                this.showRejectForm = true;
                this.rejectCylinderForm.patchValue({
                    batchname: searchBatch.batchname,
                    serialnumber: serialno,
                    batchtype: searchBatch.batchtype
                });
                this.isReadonly = true;
            }
            else {
                this.invalidSerialNumber(batchtype);
            }
        }
        else {
            let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                data: {
                    description: "No batch found "
                }
            });
            this.showRejectForm = false;
        }
    }
    onRejectSubmit() {
        this.batchService.rejectCylinder(this.rejectCylinderForm.value).subscribe(responseData => {
            let message = "";
            this.showRejectForm = false;
            this.rejectCylinderForm.reset();
            this.searchSerialNoForm.reset();
            if (responseData.status == "1") {
                message = "Cylinder has been rejected.";
            }
            else if (responseData.status == "2") {
                message = "cylinder already present in the rejected list. if you want to modify, please use modify rejections page.";
            }
            else {
                message = "Failed to reject cylinder.";
            }
            let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                data: {
                    description: message
                }
            });
        });
    }
};
RejectCylindersComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
RejectCylindersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reject-cylinders',
        template: __webpack_require__(/*! raw-loader!./reject-cylinders.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.html"),
        styles: [__webpack_require__(/*! ./reject-cylinders.component.css */ "./src/app/dashboard/quality-audit/reject-cylinders/reject-cylinders.component.css")]
    })
], RejectCylindersComponent);



/***/ }),

/***/ "./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9xdWFsaXR5LWF1ZGl0L3JlamVjdGVkLWN5bGluZGVycy9yZWplY3RlZC1jeWxpbmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RejectedCylindersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedCylindersComponent", function() { return RejectedCylindersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");






let RejectedCylindersComponent = class RejectedCylindersComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.searchData = [];
        this.displayRejectedCylinders = false;
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        this.options = ['One', 'Two', 'Three'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.displayedColumns = ['position', 'batchname', 'serial_number', 'rejection_type', 'comments'];
        this.rejection_types = ['All'];
    }
    ngOnInit() {
        this.searchBatchNameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batchname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            filterValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.filterForm.patchValue({
            filterValue: 'All'
        });
        this.displayRejectedCylinders = false;
    }
    onSearchClick() {
        let data = {
            "batchname": this.searchBatchNameForm.value.batchname,
            "batchtype": this.searchBatchNameForm.value.batchtype
        };
        this.batchService.rejectedCylindersList(data).subscribe(responseData => {
            if (responseData.status == '1') {
                this.displayRejectedCylinders = true;
                this.filterForm.patchValue({
                    filterValue: 'All'
                });
                this.searchData = this.dataSource.data = responseData.data.rejectionslist;
                let rejection_types_array = this.dataSource.data.map(element => element.rejection_type);
                rejection_types_array = [...new Set(rejection_types_array)];
                this.rejection_types = ['All', ...rejection_types_array];
                this.searchBatchNameForm.reset();
            }
            else {
                this.displayRejectedCylinders = false;
                var message = "No Data Found";
                let dialogRef = this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppDialogComponent"], {
                    data: {
                        description: message
                    }
                });
            }
        });
    }
    onFilterChange() {
        const value = this.filterForm.value.filterValue;
        if (value == 'All') {
            this.dataSource.data = this.searchData;
        }
        else {
            this.dataSource.data = this.searchData.filter(element => element.rejection_type == value);
        }
    }
};
RejectedCylindersComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_3__["BatchService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
RejectedCylindersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rejected-cylinders',
        template: __webpack_require__(/*! raw-loader!./rejected-cylinders.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.html"),
        styles: [__webpack_require__(/*! ./rejected-cylinders.component.css */ "./src/app/dashboard/quality-audit/rejected-cylinders/rejected-cylinders.component.css")]
    })
], RejectedCylindersComponent);



/***/ }),

/***/ "./src/app/dashboard/reports/hstreports/hstreports.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/reports/hstreports/hstreports.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-left: 1px solid #000;\n    border-top: 1px solid #000;\n}\n#hst_reports th, #hst_reports td {\n    color: #000;\n    border-right:1px solid #000;\n    border-bottom: 1px solid #000;  \n    width: 70px;    \n    padding: 0px 5px;    \n}\n#hst_reports th {\n    font-weight: bold;    \n}\n#hst_reports tr {\n    height: 20px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3JlcG9ydHMvaHN0cmVwb3J0cy9oc3RyZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcmVwb3J0cy9oc3RyZXBvcnRzL2hzdHJlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG59XG4jaHN0X3JlcG9ydHMgdGgsICNoc3RfcmVwb3J0cyB0ZCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAgXG4gICAgd2lkdGg6IDcwcHg7ICAgIFxuICAgIHBhZGRpbmc6IDBweCA1cHg7ICAgIFxufVxuXG4jaHN0X3JlcG9ydHMgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcbn1cblxuI2hzdF9yZXBvcnRzIHRyIHtcbiAgICBoZWlnaHQ6IDIwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/reports/hstreports/hstreports.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/reports/hstreports/hstreports.component.ts ***!
  \**********************************************************************/
/*! exports provided: HstreportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HstreportsComponent", function() { return HstreportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");







let HstreportsComponent = class HstreportsComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.showHSTReport = false;
        this.batchesList = [];
        this.batchName = "";
        this.displayedColumns = ['serial_no1', 'status1', 'serial_no2', 'status2', 'serial_no3', 'status3', 'serial_no4', 'status4', 'serial_no5', 'status5', 'serial_no6', 'status6'];
        //dataSource = new BehaviorSubject([]);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
    }
    ngOnInit() {
        this.generateReportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batch_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.batchService.getBatchList().subscribe(responseData => {
            if (responseData.status == "1") {
                this.batchesList = responseData.data.batches;
            }
        });
    }
    onGenerateClick() {
        this.batchName = this.generateReportForm.value.batch_name;
        let data = {
            "batchname": this.batchName
        };
        this.batch = this.batchesList.find(element => {
            if (element.batchtype == this.generateReportForm.value.batchtype && element.batchname == this.generateReportForm.value.batch_name) {
                return element;
            }
        });
        if (this.batch) {
            this.serial_start = this.batch.serial_start;
            this.serial_end = this.batch.serial_end;
        }
        else {
            let dialogConfig = {
                description: "Invalid Batch Name"
            };
            this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppDialogComponent"], {
                data: dialogConfig
            });
            return;
        }
        this.batchService.rejectedCylindersList(data).subscribe(responseData => {
            let rejectionsList = {};
            if (responseData.status == '1') {
                rejectionsList = responseData.data.rejectionslist;
            }
            this.dataSource.data = this.batchService.prepareReportDataSource(this.batch.serial_start, this.batch.serial_end, "HST", rejectionsList);
            this.showHSTReport = true;
        });
    }
};
HstreportsComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
HstreportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hstreports',
        template: __webpack_require__(/*! raw-loader!./hstreports.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/reports/hstreports/hstreports.component.html"),
        styles: [__webpack_require__(/*! ./hstreports.component.css */ "./src/app/dashboard/reports/hstreports/hstreports.component.css")]
    })
], HstreportsComponent);



/***/ }),

/***/ "./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-left: 1px solid #000;\n    border-top: 1px solid #000;\n}\n#hst_reports th, #hst_reports td {\n    color: #000;\n    border-right:1px solid #000;\n    border-bottom: 1px solid #000;  \n    width: 70px;    \n    padding: 0px 5px;    \n}\n#hst_reports th {\n    font-weight: bold;    \n}\n#hst_reports tr {\n    height: 20px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3JlcG9ydHMvcG5ldW1hdGljL3BuZXVtYXRpY3JlcG9ydC9wbmV1bWF0aWNyZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9yZXBvcnRzL3BuZXVtYXRpYy9wbmV1bWF0aWNyZXBvcnQvcG5ldW1hdGljcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwO1xufVxuI2hzdF9yZXBvcnRzIHRoLCAjaHN0X3JlcG9ydHMgdGQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDsgIFxuICAgIHdpZHRoOiA3MHB4OyAgICBcbiAgICBwYWRkaW5nOiAwcHggNXB4OyAgICBcbn1cblxuI2hzdF9yZXBvcnRzIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgICAgXG59XG5cbiNoc3RfcmVwb3J0cyB0ciB7XG4gICAgaGVpZ2h0OiAyMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PneumaticreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PneumaticreportComponent", function() { return PneumaticreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");







let PneumaticreportComponent = class PneumaticreportComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.showHSTReport = false;
        this.batchesList = [];
        this.batchName = "";
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
        this.displayedColumns = ['serial_no1', 'status1', 'serial_no2', 'status2', 'serial_no3', 'status3', 'serial_no4', 'status4', 'serial_no5', 'status5', 'serial_no6', 'status6'];
        //dataSource = new BehaviorSubject([]);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    ngOnInit() {
        this.generateReportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            batch_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.batchService.getBatchList().subscribe(responseData => {
            if (responseData.status == "1") {
                this.batchesList = responseData.data.batches;
            }
        });
    }
    onGenerateClick() {
        this.batchName = this.generateReportForm.value.batch_name;
        let data = {
            "batchname": this.batchName
        };
        //this.batch = this.batchesList.find(element => element.batchname == this.batchName);  
        this.batch = this.batchesList.find(element => {
            if (element.batchtype == this.generateReportForm.value.batchtype && element.batchname == this.generateReportForm.value.batch_name) {
                return element;
            }
        });
        if (this.batch) {
        }
        else {
            let dialogConfig = {
                description: "Invalid Batch Name"
            };
            this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppDialogComponent"], {
                data: dialogConfig
            });
            return;
        }
        this.batchService.rejectedCylindersList(data).subscribe(responseData => {
            let rejectionsList = {};
            if (responseData.status == '1') {
                rejectionsList = responseData.data.rejectionslist;
            }
            this.dataSource.data = this.batchService.prepareReportDataSource(this.batch.serial_start, this.batch.serial_end, "Pneumatic", rejectionsList);
            this.showHSTReport = true;
        });
    }
};
PneumaticreportComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_4__["BatchService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
PneumaticreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pneumaticreport',
        template: __webpack_require__(/*! raw-loader!./pneumaticreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.html"),
        styles: [__webpack_require__(/*! ./pneumaticreport.component.css */ "./src/app/dashboard/reports/pneumatic/pneumaticreport/pneumaticreport.component.css")]
    })
], PneumaticreportComponent);



/***/ }),

/***/ "./src/app/dashboard/reports/tareweight/tareweight.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/reports/tareweight/tareweight.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    border-left: 1px solid #000;\n    border-top: 1px solid #000;\n}\n#hst_reports th, #hst_reports td {\n    color: #000;\n    border-right:1px solid #000;\n    border-bottom: 1px solid #000;  \n    width: 70px;    \n    padding: 0px 5px;    \n}\n#hst_reports th {\n    font-weight: bold;    \n}\n#hst_reports tr {\n    height: 20px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3JlcG9ydHMvdGFyZXdlaWdodC90YXJld2VpZ2h0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcmVwb3J0cy90YXJld2VpZ2h0L3RhcmV3ZWlnaHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG59XG4jaHN0X3JlcG9ydHMgdGgsICNoc3RfcmVwb3J0cyB0ZCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwOyAgXG4gICAgd2lkdGg6IDcwcHg7ICAgIFxuICAgIHBhZGRpbmc6IDBweCA1cHg7ICAgIFxufVxuXG4jaHN0X3JlcG9ydHMgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcbn1cblxuI2hzdF9yZXBvcnRzIHRyIHtcbiAgICBoZWlnaHQ6IDIwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/reports/tareweight/tareweight.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/reports/tareweight/tareweight.component.ts ***!
  \**********************************************************************/
/*! exports provided: TareweightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareweightComponent", function() { return TareweightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _batch_batch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../batch/batch.service */ "./src/app/dashboard/batch/batch.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-dialog/app-dialog.component */ "./src/app/app-dialog/app-dialog.component.ts");







let TareweightComponent = class TareweightComponent {
    constructor(batchService, dialog) {
        this.batchService = batchService;
        this.dialog = dialog;
        this.showReport = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.batchesList = [];
        this.batchName = "";
        this.displayedColumns = ['serial_no1', 'tare_weight1', 'tareweight1', 'serial_no2', 'tare_weight2', 'tareweight2'];
        this.batchtypes = [
            { value: 'KI', viewValue: 'KI' },
            { value: 'KB', viewValue: 'KB' },
            { value: 'KH', viewValue: 'KH' },
            { value: 'IC', viewValue: 'IC' },
            { value: 'HC', viewValue: 'HC' },
            { value: 'BC', viewValue: 'BC' }
        ];
    }
    ngOnInit() {
        this.tareweightReportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            batch_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            batchtype: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.batchService.getBatchList().subscribe(responseData => {
            if (responseData.status == "1") {
                this.batchesList = responseData.data.batches;
            }
        });
    }
    onGenerateClick() {
        this.batchName = this.tareweightReportForm.value.batch_name;
        let data = {
            "batchname": this.batchName,
            "batchtype": this.tareweightReportForm.value.batchtype
        };
        this.batch = this.batchesList.find(element => {
            if (element.batchtype == this.tareweightReportForm.value.batchtype && element.batchname == this.tareweightReportForm.value.batch_name) {
                return element;
            }
        });
        if (this.batch) {
            this.serial_start = this.batch.serial_start;
            this.serial_end = this.batch.serial_end;
        }
        else {
            let dialogConfig = {
                description: "Invalid Batch Name"
            };
            this.dialog.open(src_app_app_dialog_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AppDialogComponent"], {
                data: dialogConfig
            });
            return;
        }
        this.batchService.tareweightCylindersList(data).subscribe(responseData => {
            let tareweight_cylinders = {};
            if (responseData.status == '1') {
                tareweight_cylinders = responseData.data.tareweight;
            }
            this.dataSource.data = this.batchService.prepareTareWeigthReportDataSource(this.batch.serial_start, this.batch.serial_end, tareweight_cylinders);
            this.showReport = true;
        });
    }
};
TareweightComponent.ctorParameters = () => [
    { type: _batch_batch_service__WEBPACK_IMPORTED_MODULE_2__["BatchService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
TareweightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tareweight',
        template: __webpack_require__(/*! raw-loader!./tareweight.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/reports/tareweight/tareweight.component.html"),
        styles: [__webpack_require__(/*! ./tareweight.component.css */ "./src/app/dashboard/reports/tareweight/tareweight.component.css")]
    })
], TareweightComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-button.mat-warn {\n    color: white;\n    font-weight: bold;\n    font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtYnV0dG9uLm1hdC13YXJuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _navlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navlist.service */ "./src/app/navigation/navlist.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authService, navListService) {
        this.authService = authService;
        this.navListService = navListService;
        this.navList = [];
    }
    ngOnInit() {
        this.authSubscription = this.authService.authChange.subscribe(authChange => {
            this.isAuth = authChange;
        });
        this.navList = this.navListService.getNavList();
    }
    navBarClick(nav) {
        nav.disabled = true;
        this.navListService.onNavListChange(nav);
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _navlist_service__WEBPACK_IMPORTED_MODULE_3__["NavListService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/navigation/navlist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/navigation/navlist.service.ts ***!
  \***********************************************/
/*! exports provided: NavListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListService", function() { return NavListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");



let NavListService = class NavListService {
    constructor() {
        this.navListChange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.navList = [
            {
                name: 'batch',
                title: 'Batches',
                url: '/viewbatch',
                color: "basic",
                sidenav: [
                    { name: 'Prepare Batch', url: '/preparebatch' },
                    { name: 'Create Batch', url: '/createbatch' },
                    { name: 'View Batch', url: '/viewbatch' }
                ]
            },
            {
                name: 'quality_audit',
                title: 'Quality Audit',
                url: '/rejectcylinders',
                color: "basic",
                sidenav: [
                    { name: 'Reject Cylinders', url: '/rejectcylinders' },
                    { name: 'Modify Rejections', url: '/modifyrejections' },
                    { name: 'Rejected Cylinders', url: '/rejectedcylinders' }
                ]
            },
            {
                name: 'barcode',
                title: 'BarCode',
                url: '/printbarcode',
                color: "basic",
                sidenav: [
                    { name: 'Print BarCode', url: '/printbarcode' }
                ]
            },
            {
                name: 'reports',
                title: 'Reports',
                url: '/hstreport',
                color: "basic",
                sidenav: [
                    { name: 'HST Report', url: '/hstreport' },
                    { name: 'Pneumatic Report', url: '/pneumaticreport' },
                    { name: 'Tare Weight Report', url: '/tareweight' }
                ]
            },
            {
                name: 'dispatch',
                title: 'Dispatch',
                url: '/dispatch',
                color: "basic",
                sidenav: [
                    { name: 'Dispatch', url: '/dispatch' },
                    { name: 'Edit Dispatch', url: '/editdispatch' }
                ]
            }
        ];
    }
    onNavListChange(navList) {
        this.navList.map(element => {
            if (element.name == navList.name) {
                element.color = "warn";
            }
            else {
                element.color = "basic";
            }
            return element;
        });
        this.navListChange.next(navList);
    }
    getNavList() {
        return this.navList;
    }
};
NavListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavListService);



/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/navigation/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/navigation/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidenavComponent = class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav/sidenav.component.html"),
        styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/navigation/sidenav/sidenav.component.css")]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/prasad/projects/kalliyath/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map