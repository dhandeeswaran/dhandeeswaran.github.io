webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 16px;\r\n    border-bottom: 1px solid gray;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav a {font-size: 18px;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"col-md-12 text-center\">\n      <h1>{{title}}</h1>\n    </div>\n  </div>\n</div>-->\n<!--<div class=\"container\">\n  <div class=\"text-center\"><button class=\"btn btn-primary\" routerLink=\"/userdetails\">Click To User LIST</button></div>\n    \n    <router-outlet></router-outlet>\n    <app-messages></app-messages>\n</div>-->\n<div class=\"container-fluid\">\n<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/userdetails\">Customer</a>\n  <a routerLink=\"/things\">Things</a>\n  <a routerLink=\"\">Master Service Center</a>\n</div>\n<div>  \n    <span style=\"font-size:30px;cursor:pointer\" onclick=\"openNav()\">&#9776;</span>\n  </div>\n<div id=\"main\" class=\"text-center\">\n  <h2>OPTERNA</h2>\n  <p>AMIOT</p>\n</div>\n  \n  <router-outlet></router-outlet>\n  <app-messages></app-messages>\n<app-userdetails></app-userdetails>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'USER DETAILS';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userdetails_userdetails_component__ = __webpack_require__("../../../../../src/app/userdetails/userdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_detail_view_detail_component__ = __webpack_require__("../../../../../src/app/view-detail/view-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__things_things_component__ = __webpack_require__("../../../../../src/app/things/things.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__userdetails_userdetails_component__["a" /* UserdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__view_detail_view_detail_component__["a" /* ViewDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__things_things_component__["a" /* ThingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'userdetails',
                        component: __WEBPACK_IMPORTED_MODULE_5__userdetails_userdetails_component__["a" /* UserdetailsComponent */]
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'things',
                        component: __WEBPACK_IMPORTED_MODULE_11__things_things_component__["a" /* ThingsComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__message_service__["a" /* MessageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 text-center\">\n  <h3>We believe connectivity is a basic need of all human beings.</h3>\n  <p>We are passionate about empowering people around the world with solutions that help fulfill this need better and faster.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  \n</p>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/things/things.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/things/things.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 text-center\">\n<p>This is Things Module</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/things/things.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThingsComponent = (function () {
    function ThingsComponent() {
    }
    ThingsComponent.prototype.ngOnInit = function () {
    };
    ThingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-things',
            template: __webpack_require__("../../../../../src/app/things/things.component.html"),
            styles: [__webpack_require__("../../../../../src/app/things/things.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThingsComponent);
    return ThingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_userdetails_master_user__ = __webpack_require__("../../../../../src/app/userdetails/master-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Of } from 'rxjs/Observable/of';





var UserService = (function () {
    /*getUsers(): User[]
    {
      return USERS;
    }*/
    function UserService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        this.messageService.add('UserService: fetched users');
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__app_userdetails_master_user__["a" /* USERS */]);
    };
    UserService.prototype.getapidata = function (id, url) {
        var urlwithID = url + id;
        console.log(urlwithID);
        return this.http.get(urlwithID).map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/userdetails/master-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
/*export const USERS: User[]=[
{id:11, name:'vinoth'},
{ id: 12, name: 'Narco' }
];*/
var USERS = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": { "lat": "-37.3159", "lng": "81.1496" }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/userdetails/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/userdetails/userdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-details-list\r\n{\r\n    background:gray;\r\n   /* width: 200px;*/\r\n    padding: 5px;\r\n    margin: 2px;\r\n    box-sizing: border-box;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.view-det\r\n{\r\n    text-align: right !important;\r\n}\r\n\r\n.user-details-list p\r\n{\r\n    text-align: left;\r\n    color: #fff;\r\n}\r\n\r\n.user-details-list:hover\r\n{\r\n    cursor: pointer;\r\n    color: brown;\r\n}\r\n\r\n\r\n.user-detail-view li\r\n{\r\n    list-style: none;\r\n    background: lightslategray;\r\n    margin-bottom: 2px;\r\n    padding: 10px;\r\n    color:#fff;\r\n    margin-left: -20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userdetails/userdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>{{user.name}} Details</p>\n<div>\n  <p><span>id:</span>{{user.id}}</p>\n  <p><span>name:</span>{{user.name}}</p>\n</div>\n<div>\n  <label>name:<input [(ngModel)]=\"selectedUSer.name\" placeholder=\"name\"></label>\n</div>\n\n<ul>\n  <li *ngFor=\"let user for users\" (click)=\"onSelect(hero)\">\n    <span>{{user.id}}</span> {{user.name}}\n  </li>\n</ul>-->\n\n\n<!-- <ul>\n  <li *ngFor=\"let user of users\" [class.selected]=\"user == selectedUser\" (click)=\"onSelect(user)\">\n    <p><span>{{user.id}}</span> <span>{{user.name}}</span></p>\n    \n  </li> -->\n  \n\n  <!--<select #selecElem (change)=\"onSelect(user)\" >\n   <option *ngFor=\"let user of users\"  [class.selected]=\"user == selectedUser\" (click)=\"onSelect(user)\" value=\"user.id\" >{{user.name}}</option>\n  </select>\n</ul>-->\n<div>\n  <div class=\"col-md-12\">\n      <h3 class=\"text-center\">Customer Details</h3>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"user-details-list \" *ngFor=\"let user of users\" [class.selected]=\"user == selectedUser\" (click)=\"onSelect(user)\">\n      \n        <p><span>{{user.id}}</span> <span>{{user.name}}</span></p>\n        <p class=\"view-det\">View Details</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-6\">\n   <div *ngIf=\"selectedUser\" style=\"display:block\" class=\"user-detail-view\">\n      <!-- <h2 class=\"text-center\">Details of {{ selectedUser.name}}</h2> -->\n \n          <!--<div>\n            <p><span>id:</span> <span>{{selectedUser.id}}</span></p>\n            <p>{{selectedUser.username}}</p>\n            <p>{{selectedUser.email}}</p>\n            <p>{{selectedUser.address.street}}</p>\n            <p>{{selectedUser.address.suite}}</p>\n            <p>{{selectedUser.address.city}}</p>\n            <p>{{selectedUser.address.zipcode}}</p>\n            <p>{{selectedUser.address.geo.lat}}</p>\n            <p>{{selectedUser.address.geo.lng}}</p>\n            <p>{{selectedUser.phone}}</p>\n            <p>{{selectedUser.website}}</p>\n            <p>{{selectedUser.company.name}}</p>\n            <p>{{selectedUser.company.catchPhrase}}</p>\n            <p>{{selectedUser.company.bs}}</p>\n          </div> -->\n        <ul class=\"user-detail-view\">\n          \n          <li>\n                <span>Name:</span> <input [(ngModel)]=\"selectedUser.name\" placeholder=\"name\" class=\"form-control\">\n              <p class=\"text-center\">You can edit the name</p>\n          </li>\n\n          <li><span>Id:</span><span>{{selectedUser.id}}</span></li>\n          <li><span>Username :</span>{{selectedUser.username}}</li>\n          <li><span>Email: {{selectedUser.email}}</span></li>\n          \n          <li><span>Street:</span>{{selectedUser.address.street}}</li>\n          <li><span>Suite: </span>{{selectedUser.address.suite}}</li>\n          <li><span>City: </span>{{selectedUser.address.city}}</li>\n          <li><span>zipcode: </span>{{selectedUser.address.zipcode}}</li>\n          <li><span>Latitude: </span>{{selectedUser.address.geo.lat}}</li>\n          <li><span>Longitude: </span>{{selectedUser.address.geo.lng}}</li>\n          <li><span>phone: </span>{{selectedUser.phone}}</li>\n          <li><span>website: </span>{{selectedUser.website}}</li>\n          <li><span>Company Name:</span>{{selectedUser.company.name}}</li>\n          <li><span>CatchPhrase: </span>{{selectedUser.company.catchPhrase}}</li>\n          <li><span>Bs: </span>{{selectedUser.company.bs}}</li>\n        </ul>\n \n  </div>\n</div>\n\n<app-view-detail [user]=\"selectedUser\"></app-view-detail>\n<input type=\"text\" [(ngModel)]=\"enterval\" > \n<button (click)=\"api()\">click</button>\n<ul >\n  <li>{{name}}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/userdetails/userdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {USERS } from './master-user';


var UserdetailsComponent = (function () {
    function UserdetailsComponent(userService) {
        this.userService = userService;
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.api();
    };
    UserdetailsComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UserdetailsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UserdetailsComponent.prototype.api = function () {
        var _this = this;
        this.id = this.enterval;
        this.url = 'https://jsonplaceholder.typicode.com/photos/';
        this.userService.getapidata(this.id, this.url).subscribe(function (respon) {
            console.log(respon);
            console.log("id" + respon.id);
            console.log("id" + respon.albumId);
            console.log("thimnail" + respon.thumbnailUrl);
            console.log(_this.url);
            _this.name = respon.thumbnailUrl;
        }, function (error) {
            console.log(error);
        });
    };
    UserdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userdetails',
            template: __webpack_require__("../../../../../src/app/userdetails/userdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userdetails/userdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedUser\">\n    <h2>{{ selectedUser.name}} Details</h2>\n    <div>\n      <p><span>id:</span> <span>{{selectedUser.id}}</span></p>\n      <p><span>id:</span> <span>{{selectedUser.address.street}}</span></p>\n    </div>\n    <div>\n      <label>\n        name: <input [(ngModel)]=\"selectedUser.name\" placeholder=\"name\">\n      </label>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "../../../../../src/app/view-detail/view-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userdetails_user__ = __webpack_require__("../../../../../src/app/userdetails/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Input } from '@angular/core/src/metadata/directives';
var ViewDetailComponent = (function () {
    function ViewDetailComponent() {
    }
    ViewDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__userdetails_user__["a" /* User */])
    ], ViewDetailComponent.prototype, "user", void 0);
    ViewDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-detail',
            template: __webpack_require__("../../../../../src/app/view-detail/view-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-detail/view-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewDetailComponent);
    return ViewDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map