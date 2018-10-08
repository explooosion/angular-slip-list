(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title | uppercase }}</h1>\n<app-slip-list [lists]=\"lists\" (update)=\"updateList($event)\" (delete)=\"deleteList($event)\"></app-slip-list>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/list.service */ "./src/app/service/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(listService) {
        this.listService = listService;
        this.title = 'angular slip list';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.getLists().subscribe(function (lists) { return _this.lists = lists; });
    };
    AppComponent.prototype.updateList = function (list) {
        this.listService.update(list);
    };
    AppComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listService.delete(list).subscribe(function (lists) { return _this.lists = lists; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_slip_list_slip_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slip-list/slip-list.component */ "./src/app/components/slip-list/slip-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_slip_list_slip_list_component__WEBPACK_IMPORTED_MODULE_6__["SlipListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/slip-list/slip-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/slip-list/slip-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"slip-list\">\n  <li class=\"list\" [id]=\"list.name\" [ngClass]=\"{ select : list.select }\" *ngFor=\"let list of lists\">\n    <div class=\"list-view\" (click)=\"onSelect(list)\">\n      <div class=\"list-row\">\n        <div class=\"list-name\">{{ list.name }}</div>\n        <div class=\"list-time\">{{ list.time }}</div>\n      </div>\n      <div class=\"list-message\">{{ list.message }}</div>\n    </div>\n    <a class=\"list-delete\" href=\"#\" (click)=\"onDelete(list)\"><fa-icon [icon]=\"faTrashAlt\" size=\"2x\"></fa-icon></a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/slip-list/slip-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/slip-list/slip-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slip-list {\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  width: 350px;\n  min-height: 30px;\n  font-size: 1rem;\n  font-family: 'Microsoft JhengHei', sans-serif;\n  border: 8px solid #444;\n  border-radius: 1rem;\n  list-style: none; }\n  .slip-list .list {\n    position: relative;\n    width: inherit;\n    height: 80px;\n    background-color: #ff1c57;\n    transition: all 0.4s ease; }\n  .slip-list .list.select .list-view {\n      left: -80px; }\n  .slip-list .list.select .list-view .list-time {\n        opacity: 0;\n        transition: all 0.5s ease; }\n  .slip-list .list .list-view {\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      padding: 1rem;\n      width: calc(100% - 2rem);\n      background-color: #fff;\n      z-index: 1;\n      transition: all 0.6s ease; }\n  .slip-list .list .list-view:hover {\n        background-color: #fafafa; }\n  .slip-list .list .list-view .list-row {\n        display: flex;\n        justify-content: space-between;\n        margin: 0.2rem 0; }\n  .slip-list .list .list-view .list-row .list-name {\n          font-weight: bold; }\n  .slip-list .list .list-view .list-row .list-time {\n          font-size: 0.8rem;\n          color: #ccc; }\n  .slip-list .list .list-view .list-message {\n        overflow: hidden;\n        width: 80%;\n        font-size: 0.9rem;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #999;\n        cursor: default;\n        opacity: 1; }\n  .slip-list .list .list-delete {\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 80px;\n      height: inherit;\n      text-align: center;\n      text-decoration: none;\n      color: #fff; }\n"

/***/ }),

/***/ "./src/app/components/slip-list/slip-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/slip-list/slip-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SlipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlipListComponent", function() { return SlipListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlipListComponent = /** @class */ (function () {
    function SlipListComponent() {
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SlipListComponent.prototype.ngOnInit = function () { };
    SlipListComponent.prototype.onSelect = function (list) {
        this.update.emit(list);
    };
    SlipListComponent.prototype.onDelete = function (list) {
        var _this = this;
        // scale
        var node = document.querySelector("#" + list.name + " .list-view");
        setTimeout(function () {
            // tslint:disable-next-line
            node.style.transform = 'rotate(-5deg) scale(0.4)';
            // tslint:disable-next-line
            node.style.left = '10px';
        }, 100);
        setTimeout(function () {
            // tslint:disable-next-line
            node.style.transform = 'rotate(0deg) scale(0.1)';
            // tslint:disable-next-line
            node.style.left = '150px';
            node.style.opacity = '0';
        }, 600);
        // disappear
        setTimeout(function () { return document.getElementById(list.name).style.height = '0'; }, 1200);
        setTimeout(function () { return _this.delete.emit(list); }, 1400);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SlipListComponent.prototype, "lists", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SlipListComponent.prototype, "update", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SlipListComponent.prototype, "delete", void 0);
    SlipListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slip-list',
            template: __webpack_require__(/*! ./slip-list.component.html */ "./src/app/components/slip-list/slip-list.component.html"),
            styles: [__webpack_require__(/*! ./slip-list.component.scss */ "./src/app/components/slip-list/slip-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlipListComponent);
    return SlipListComponent;
}());



/***/ }),

/***/ "./src/app/mock/mock-lists.ts":
/*!************************************!*\
  !*** ./src/app/mock/mock-lists.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MockLists = [
    {
        name: 'Robby',
        message: 'Hi! Where are you going now?',
        time: '2m ago',
        select: false,
    },
    {
        name: 'Annie',
        message: 'Hello Dux, how are you today?',
        time: '3m ago',
        select: false,
    },
    {
        name: 'Andy',
        message: 'We have a meeting tonight.',
        time: 'yesterday',
        select: false,
    },
    {
        name: 'Jack',
        message: 'Hi Robby, where are you?',
        time: '2d ago',
        select: false,
    },
    {
        name: 'Peny',
        message: 'I will go to school this weekend, how about you?',
        time: '4d ago',
        select: false,
    },
];
/* harmony default export */ __webpack_exports__["default"] = (MockLists);


/***/ }),

/***/ "./src/app/service/list.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/list.service.ts ***!
  \*****************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_mock_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/mock-lists */ "./src/app/mock/mock-lists.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = /** @class */ (function () {
    function ListService() {
        this.lists = _mock_mock_lists__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ListService.prototype.getLists = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.lists);
    };
    ListService.prototype.update = function (list) {
        // console.log('update', list);
        this.lists.map(function (l) {
            l.select = l.name === list.name && !l.select;
        });
    };
    ListService.prototype.delete = function (list) {
        // console.log('delete', list);
        this.lists = this.lists.filter(function (l) {
            return l.name !== list.name;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.lists);
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ListService);
    return ListService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robbymac/Desktop/Robby/Project/Angular/angular-slip-list/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map