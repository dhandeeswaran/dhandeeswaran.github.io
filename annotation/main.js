(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HCL POC\annotation\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "QyoJ":
/*!********************************************!*\
  !*** ./src/app/drawPOC/drawing.service.ts ***!
  \********************************************/
/*! exports provided: DrawingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingService", function() { return DrawingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class DrawingService {
    constructor(http) {
        this.http = http;
    }
    postShape(data) {
        console.log('service', data);
        return this.http.post('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/', data);
    }
    putShape(data, id) {
        console.log('service', data);
        return this.http.put('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/' + id, data);
    }
    getShape() {
        return this.http.get('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/');
    }
    deleteShape(id) {
        return this.http.delete('https://6026ea65186b4a0017780c7d.mockapi.io/get/draw/USERS/' + id);
    }
}
DrawingService.ɵfac = function DrawingService_Factory(t) { return new (t || DrawingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DrawingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DrawingService, factory: DrawingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _drawPOC_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawPOC/drawing/drawing.component */ "oJSn");



class AppComponent {
    constructor() {
        this.title = 'rochePOC';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-drawing");
    } }, directives: [_drawPOC_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_1__["DrawingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _drawPOC_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawPOC/drawing/drawing.component */ "oJSn");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "SqCe");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _drawPOC_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_5__["DrawingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _drawPOC_drawing_drawing_component__WEBPACK_IMPORTED_MODULE_5__["DrawingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"]
                ],
                providers: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "oJSn":
/*!******************************************************!*\
  !*** ./src/app/drawPOC/drawing/drawing.component.ts ***!
  \******************************************************/
/*! exports provided: DrawingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingComponent", function() { return DrawingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "4b23");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _drawing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawing.service */ "QyoJ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "Nv++");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");


















function DrawingComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("dasfa ", ctx_r0.getData.length, "");
} }
function DrawingComponent_div_58_div_1_mat_list_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r6.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faVectorSquare);
} }
function DrawingComponent_div_58_div_1_mat_list_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r7.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faCircle);
} }
function DrawingComponent_div_58_div_1_mat_list_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r8.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faDrawPolygon);
} }
function DrawingComponent_div_58_div_1_mat_list_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r9.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faArrowRight);
} }
function DrawingComponent_div_58_div_1_mat_list_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r10.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r10.faTextHeight);
} }
function DrawingComponent_div_58_div_1_mat_list_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r11.getData[i_r5].stroke);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.faPencilAlt);
} }
function DrawingComponent_div_58_div_1_mat_list_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_div_58_div_1_mat_list_2_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r5 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.selectItem(ctx_r18.getData[i_r5], i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DrawingComponent_div_58_div_1_mat_list_2_span_4_Template, 2, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DrawingComponent_div_58_div_1_mat_list_2_span_5_Template, 2, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DrawingComponent_div_58_div_1_mat_list_2_span_6_Template, 2, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DrawingComponent_div_58_div_1_mat_list_2_span_7_Template, 2, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DrawingComponent_div_58_div_1_mat_list_2_span_8_Template, 2, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DrawingComponent_div_58_div_1_mat_list_2_span_9_Template, 2, 3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_div_58_div_1_mat_list_2_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r5 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.delete(ctx_r20.getData[i_r5].id, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "Rect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "polyline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "i-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.getData[i_r5].type === "pencil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("shape ID : ", ctx_r3.getData[i_r5].sid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Type : ", ctx_r3.getData[i_r5].type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faTrashAlt);
} }
function DrawingComponent_div_58_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DrawingComponent_div_58_div_1_mat_list_2_Template, 18, 10, "mat-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.getData);
} }
function DrawingComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DrawingComponent_div_58_div_1_Template, 3, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getData.length >= 1);
} }
class DrawingComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
        this.shapeType = '';
        this.startPointX = 0;
        this.startPointY = 0;
        this.endPointX = 0;
        this.endPointY = 0;
        //shapeCollection:Array<{}> = []
        this.shapeCollection = [];
        this.mouseMoveEnable = false;
        this.consolidated = [];
        this.undoRedo = [];
        this.polyLinePointCollection = [];
        this.shapeKey = [];
        this.isExistingShap = false;
        this.strokeColor = 'Red';
        this.tilesData = [];
        this.shapeFormat = {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            stroke: '',
            strokeWidth: 0,
            type: '',
            sid: '',
            radius: 0,
            points: [],
            text: '',
            angle: 0,
            path: []
        };
        /* ICON */
        this.faVectorSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVectorSquare"];
        this.faCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"];
        this.faDrawPolygon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDrawPolygon"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"];
        this.faTextHeight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTextHeight"];
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        //@slider
        this.sliderDisabled = false;
        this.sliderVertical = false;
        this.rotateMin = 0;
        this.rotateMax = 360;
        this.rotateStep = 1;
        this.rotateValue = 0;
        this.rotateDegrees = 0;
        this.rotageTileIndex = NaN;
    }
    formControl() {
        this.shapesGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            customColor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
    }
    ngOnInit() {
        this.formControl();
    }
    enableRef(event) {
        console.log('enable ref');
    }
    enableCanvas(event) {
        console.log('enable canvas', event);
    }
    ngAfterViewInit() {
        this.osdTiles();
        this.OSDLayer();
        this.subscribeShape();
        // this.loadPath();
        // this.testClick();
        //this.imgMoveStart();
        //this.viewer.addHandler('canvas-click', this.clickHandler, this);
        // this.fabricCanvas.on('object:modified', this.enableRef)
        // this.fabricCanvas.addHandler('canvas-click', this.enableCanvas, this )
    }
    osdTiles() {
        this.tileSource1 = {
            Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: "http://openseadragon.github.io/example-images/highsmith/highsmith_files/",
                Format: "jpg",
                Overlap: "2",
                TileSize: "256",
                Size: {
                    Height: "9221",
                    Width: "7026",
                }
            }
        };
        this.tileSource2 = {
            "@context": "http://iiif.io/api/image/2/context.json",
            "@id": "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2",
            "height": 7200,
            "width": 5233,
            "profile": ["http://iiif.io/api/image/2/level2.json"],
            "protocol": "http://iiif.io/api/image",
            "tiles": [{
                    "scaleFactors": [1, 2, 4, 8, 16, 32],
                    "width": 1024
                }]
        };
        const osdMetaInfo = {
            Image: {
                xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
                Url: '//openseadragon.github.io/example-images/duomo/duomo_files/',
                Format: 'jpg',
                Overlap: '2',
                TileSize: '256',
                Size: {
                    Width: '13920',
                    Height: '10200',
                },
            },
        };
    }
    OSDLayer() {
        let image1 = {
            type: 'image',
            url: 'https://cdn.pixabay.com/photo/2017/04/23/05/56/ankle-2253057_960_720.jpg'
        };
        let image2 = {
            type: 'image',
            url: 'https://cdn.pixabay.com/photo/2018/01/03/07/36/radiography-3057768_960_720.jpg'
        };
        let image3 = {
            type: 'image',
            url: "https://cdn.pixabay.com/photo/2016/01/08/22/35/xray-1129430_960_720.jpg"
        };
        this.viewer = new OpenSeadragon.Viewer({
            id: 'openseadragon-holder',
            zoomPerClick: 2,
            // prefixUrl: '//openseadragon.github.io/openseadragon/images/',
            // tileSources: image1,  // osdMetaInfo,// single image
            tileSources: [
                {
                    tileSource: this.tileSource1,
                    width: 1,
                    degrees: this.rotateValue ? this.rotateValue : 0,
                    y: 0,
                    x: 0,
                },
            ],
            //  collectionMode:true,
            // sequenceMode: true,    
            //showReferenceStrip: true,
            // referenceStripScroll: 'vertical',
            //debugMode: true,
            // minZoomImageRatio:  5,
            // maxZoomImageRatio:5,
            // degrees: 90,
            // showRotationControl: true,
            //   collectionMode:       true,
            // collectionRows:       2, 
            // collectionTileSize:   1024,
            // collectionTileMargin: 256,
            //collectionLayout:     'horizontal',
            controlsFadeDelay: 90000,
            gestureSettingsTouch: {
                pinchRotate: true,
            },
        });
        this.fabricCanvas = this.viewer.fabricjsOverlay({ scale: 1000 }).fabricCanvas();
        this.viewer.setMouseNavEnabled(false);
    }
    getImagePosition(webPoint) {
        let item, box, containsPoint;
        //let point= this.viewer.viewport.pointFromPixel(webPoint)
        for (let i = 0; i < this.viewer.world.getItemCount(); i++) {
            item = this.viewer.world.getItemAt(i);
            box = item.getBounds();
            // console.log('dfa', this.viewer.containsPoint(webPoint))
            containsPoint = box.containsPoint(webPoint);
        }
        console.log('image status', box, containsPoint);
    }
    clickHandler(event) {
        console.log('canvas-click', event);
    }
    osdMouseClick(event) {
        this.fabricCanvas.on('mouse:down', this.osdMouseDown);
        this.fabricCanvas.on('mouse:up', this.osdMouseUp);
        this.fabricCanvas.on('mouse:move', this.osdMouseMove);
        let imageIndex = [];
        for (let i = 0; i < this.viewer.source.levels.length; i++) {
            console.log('url', this.viewer.source.levels[i].url);
            let s = this.viewer.tileSources.findIndex(x => x.tileSource.url === this.viewer.source.levels[i].url);
            console.log('sssss', s);
            for (let k = 0; k < this.viewer.tileSources.length; k++) {
                console.log('tiles', this.viewer.tileSources[k].tileSource.url);
                console.log('index', this.viewer.tileSources[k].tileSource.url.indexOf(this.viewer.source.levels[i].url));
                // imageIndex.push(imageIndex)
            }
        }
        // index = a.findIndex(x => x.prop2 ==="yutu");
        //let s =this.viewer.tileSources(x =>x.tileSource.url == )
        console.log('select', imageIndex);
        //this.viewer.a
        this.getImagePosition(this.fabricCanvas.getPointer(event));
        console.log("###### POINTER #####", this.fabricCanvas.getPointer(event), event);
        console.log('viewr%%%%%', this.viewer);
        this.zoomvalue = this.viewer.viewport.getZoom();
        console.log('flag', this.isExistingShap);
        console.log('mouse click shape Index', this.shapeIndex, this.shapeSID, this.getData);
        let shapeId = this.shapeSID;
        var results = this.getData.filter(function (x) { return x.sid === shapeId; });
        if (this.shapeSID !== '') {
            console.log('put', this.shapeSID, results);
            this.put(this.selectedShape, this.shapeIndex);
        }
        console.log('result', results);
        this.selectedShape = this.fabricCanvas.getActiveObject();
        if (this.selectedShape) {
            this.shapeType = this.selectedShape.type;
        }
        console.log('Mouse Click', this.mouseMoveEnable, event);
        if (this.shapeType === 'PolyLine') {
            let polyLinePoint = this.fabricCanvas.getPointer(event);
            this.polyLinePointCollection.push(polyLinePoint);
            this.startPolyLinePoint = this.polyLinePointCollection[0];
            console.log('poly', this.startPolyLinePoint, this.polyLinePointCollection);
            this.shadowPolyLine(this.polyLinePointCollection, this.strokeColor);
        }
        console.log('selected from viewer', this.selectedShape, this.shapeType, this.isExistingShap);
        if (this.isExistingShap) {
            this.formateObject(this.selectedShape);
        }
    }
    formateObject(data) {
        console.log('Format Object SAVE ---', data);
        console.log('Shape Index', this.shapeIndex, this.selectedShape);
        if (this.shapeFormat) {
            this.shapeFormat.width = data.width;
            this.shapeFormat.height = data.height;
            this.shapeFormat.top = data.top;
            this.shapeFormat.left = data.left;
            this.shapeFormat.type = data.type;
            this.shapeFormat.strokeWidth = data.strokeWidth;
            this.shapeFormat.stroke = data.stroke;
            this.shapeFormat.sid = data.id;
            this.shapeFormat.radius = data.radius;
            this.shapeFormat.points = data.points;
            this.shapeFormat.text = data.text;
            this.shapeFormat.angle = data.angle;
            this.shapeFormat.path = data.path;
        }
        if (this.isExistingShap) {
            console.log('#### PUT #####');
            this.put(this.shapeFormat, this.shapeIndex);
        }
        else {
            console.log('#### POST #####');
            this.save(this.shapeFormat);
        }
    }
    osdMouseDoubleClick(event) {
        this.viewer.collectionMode = false;
        this.viewer.sequenceMode = true;
        console.log('Mouse Double Click', event);
        if (this.shapeType === 'polyline') {
            this.polyLinePointCollection.push(this.startPolyLinePoint);
            this.shapeType = 'completePolyLine';
            this.shapeData = null;
        }
        if (this.shapeType === 'completePolyLine') {
            this.shapeData = this.createPolyLine(this.polyLinePointCollection, this.strokeColor);
            this.fabricCanvas.add(this.shapeData);
            this.fabricCanvas.renderAll();
            // var obj = this.fabricCanvas.getActiveObject();
            //let Myid= this.fabricCanvas.getActiveObject().get('id');
            //console.log('myID', Myid);
            //this.fabricCanvas.remove(obj)
            console.log('poly complet', this.polyLinePointCollection);
            console.log('poly', this.shapeData, this.createPolyLine);
            if (this.shapeData) {
                this.shapeCollection.push(this.shapeData);
                this.formateObject(this.shapeData);
                this.shapeType = 'null';
            }
            console.log('this.shapeTyp', this.shapeType);
            this.polyLinePointCollection = [];
        }
    }
    // @HostListener('mousedown', ['$event'])
    osdMouseDown(event) {
        console.log('Mouse Down', this.shapeType);
        console.log('Shape Index', this.shapeIndex);
        this.mouseMoveEnable = true;
        if (event.offsetX !== undefined) {
            this.startPointX = this.fabricCanvas.getPointer(event).x;
            this.startPointY = this.fabricCanvas.getPointer(event).y;
            if (this.shapeType === 'Rectangle' || this.shapeType === 'Rect') {
                //this.imgMoveStop();
                console.log('Mouse Down #####', event);
                console.log('starting Point', this.fabricCanvas.getPointer(event));
                this.createRectangleShape(this.startPointX, this.startPointY, 0, 0, this.strokeColor);
            }
            if (this.shapeType === 'Circle') {
                console.log('DRAW CIRCLE');
                this.createCircle(this.startPointX, this.startPointY, 0, this.strokeColor);
            }
            if (this.shapeType === 'Text') {
                console.log('DRAW CIRCLE');
                this.creatItext(this.startPointX, this.startPointY, 'hai', this.strokeColor);
            }
        }
    }
    // @HostListener('mouseup', ['$event'])
    osdMouseUp(event) {
        console.log('mouse UP selected Data', this.shapeData);
        console.log('mouse up selected Index', this.shapeIndex);
        if (event.target !== undefined) {
            console.log('Mouse UP ############');
            console.log('mouseup cord', event.target);
        }
        if (event.offsetX !== undefined) {
            if (this.shapeType === 'Rect' || this.shapeType === 'Rectangle' || this.shapeType === 'Circle' || this.shapeType === 'Text' || this.shapeType === 'pencil') {
                if (this.fabricCanvas.freeDrawingBrush._points.length > 1) {
                    this.shapeData.set({ path: this.fabricCanvas.freeDrawingBrush._points });
                }
                if (this.shapeData) {
                    // this.shapeData.angle = this.rotateValue; // revisit 
                    this.shapeCollection.push(this.shapeData);
                    console.log('cre', this.shapeData);
                    this.formateObject(this.shapeData);
                    this.shapeType = 'null';
                }
                this.mouseMoveEnable = false;
                this.viewer.setMouseNavEnabled(true);
            }
            if (this.shapeType === 'LineArrow') {
                let arrowUpPoints = this.fabricCanvas.getPointer(event);
                let endX = arrowUpPoints.x;
                let endY = arrowUpPoints.y;
                this.drawArrow(this.startPointX, this.startPointY, endX, endY, this.strokeColor);
                if (this.shapeData) {
                    this.shapeCollection.push(this.shapeData);
                    this.formateObject(this.shapeData);
                    this.shapeType = 'null';
                }
            }
        }
        this.selectedShape = true;
    }
    // @HostListener('mousemove', ['$event'])
    osdMouseMove(event) {
        if (event.offsetX !== undefined) {
            let movedPoint = this.fabricCanvas.getPointer(event);
            // console.log('****WIDTH ****', Math.abs(this.startPointX - movedPoint.x))
        }
        if (event.offsetX !== undefined) {
            let movedPoint = this.fabricCanvas.getPointer(event);
            if (this.mouseMoveEnable && movedPoint && this.startPointX && this.shapeData !== undefined) {
                // console.log('Mouse MOVE width',  Math.abs(this.startPointX - movedPoint.x))
                if (this.shapeType === 'Rectangle' || this.shapeType === 'Rect') {
                    this.shapeData.set({
                        left: this.startPointX < movedPoint.x ? this.startPointX : movedPoint.x,
                        top: this.startPointY < movedPoint.y ? this.startPointY : movedPoint.y,
                        width: Math.abs(this.startPointX - movedPoint.x),
                        height: Math.abs(this.startPointY - movedPoint.y)
                    });
                    console.log('dsadfasfasdfdasfasfds');
                    this.fabricCanvas.setActiveObject(this.shapeData);
                    this.fabricCanvas.renderAll();
                }
                if (this.shapeType === 'Circle') {
                    this.shapeData.set({
                        radius: Math.abs(this.startPointX - movedPoint.x)
                    });
                    this.fabricCanvas.setActiveObject(this.shapeData);
                    this.fabricCanvas.renderAll();
                }
            }
        }
    }
    drawShape(shapeAction) {
        this.isExistingShap = false;
        console.log('shape type', shapeAction, Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])());
        this.shapeType = shapeAction;
        // this.imgMoveStop();
        this.viewer.setMouseNavEnabled(false);
        if (shapeAction === "pencil") {
            this.shapeType = "pencil";
            this.shapeData = new fabric.Canvas('freeDraw', {});
            this.shapeData.type = 'pencil';
            this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
            this.fabricCanvas.freeDrawingBrush.color = 'green';
            this.fabricCanvas.freeDrawingBrush.width = 5;
            this.fabricCanvas.isDrawingMode = true;
            this.viewer.setMouseNavEnabled(false);
        }
        if (shapeAction === "pencilBrush") {
            //  this.fabricCanvas.isDrawingMode = true;
            let shapdata = new fabric.PencilBrush({
                left: 100,
                top: 300,
                decimate: 8, color: 'red', width: 10
            });
            this.fabricCanvas.add(shapdata).renderAll();
        }
    }
    createRectangleShape(x, y, w, h, color, angle) {
        console.log('cee');
        this.shapeData = new fabric.Rect({
            type: 'Rect',
            left: x,
            top: y,
            width: w ? w : 0,
            height: h ? h : 0,
            fill: '',
            stroke: color ? color : 'red',
            strokeWidth: 5,
            angle: angle ? angle : 0,
            cornerColor: 'green',
            cornerSize: 6,
            transparentCorners: false
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    createCircle(x, y, r, color) {
        console.log('cirlce', x, y, r);
        this.shapeData = new fabric.Circle({
            type: 'circle',
            left: x,
            top: y,
            radius: r ? r : 0,
            fill: '',
            stroke: color ? color : 'red',
            strokeWidth: 10,
            originX: 'center',
            originY: 'center'
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
    }
    createPolyLine(points, color) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: color ? color : 'orange',
            strokeWidth: 5,
        });
        if (this.shapeType === 'completePolyLine') {
            this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
            this.shapeCollection.push(this.shapeData);
            console.log('poly data', this.shapeData);
            console.log('poly Arrya', this.shapeCollection);
            this.shapeType = 'finish';
            this.mouseMoveEnable = false;
            // this.fabricCanvas.add(this.shapeData);
            // this.fabricCanvas.renderAll();
            //this.fabricCanvas.setActiveObject(this.shapeData)
        }
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    shadowPolyLine(points, color) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: color ? color : 'orange',
            strokeWidth: 5
        });
        if (this.shapeType === 'completePolyLine') {
            this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
            this.shapeData = {};
            this.shapeCollection.push(this.shapeData);
            console.log('poly data', this.shapeData);
            console.log('poly Arrya', this.shapeCollection);
            this.shapeType = 'finish';
            // this.fabricCanvas.add(this.shapeData);
            // this.fabricCanvas.renderAll();
        }
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    loadPath() {
        const temp = ["M", 281.6495878092448, 111.995];
        this.shapeData = new fabric.Path(temp, {
            strokeWidth: 3,
            stroke: 'green',
            fill: 'green',
            selectable: false,
            hasRotatingPoint: false
        });
        // as CustomFabricPath;
        // path.id = uuid();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    loadPolyline(points, x, y) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: 'orange',
            strokeWidth: 5,
            left: x ? x : null,
            top: y ? y : null
        });
        this.fabricCanvas.add(this.shapeData);
    }
    unsetEvent() {
        this.viewer.setMouseNavEnabled(!this.mouseMoveEnable); // revisit
    }
    selectItem(details, index) {
        this.mouseEventOn();
        let objectData = this.fabricCanvas.getActiveObject();
        this.fabricCanvas.setActiveObject(this.fabricCanvas.item(index + 1));
        //this.fabricCanvas.setActiveObject(0)
        this.shapeIndex = details.id;
        this.shapeSID = details.sid;
        this.shapeType = details.type;
        this.editedShape = details.type; // this.shapeData = details;
        this.isExistingShap = true;
        console.log('select Item', details.id, details.type, this.shapeIndex);
        this.viewer.setMouseNavEnabled(false);
        //let objectData =  this.fabricCanvas.getActiveObject();
        //this.viewer.world.getItemAt(0).setRotation(180, true);
        // console.log('totad', objectData)
        // this.shapeType = objectData.type
        //this.mouseMoveEnable = true;
        // this.fabricCanvas.setActiveObject(this.fabricCanvas.item(0));
        // this.fabricCanvas.setActiveObject(0);
        // this.fabricCanvas.requestRenderAll();
        //this.fabricCanvas.setActiveObject(objectData);
        this.fabricCanvas.renderAll();
    }
    save(shapData) {
        this.service.postShape(shapData).subscribe(a => {
            console.log('SAVE SUBCRIBE', a);
            if (a) {
                this.subscribeShape();
            }
        });
    }
    subscribeShape() {
        this.service.getShape().subscribe(res => {
            this.getData = res;
            console.log('PAGE LOAD SUBCRIBE DATA', this.getData);
            for (let i = 0; i < this.getData.length; i++) {
                if (this.getData[i].type === 'Rect') {
                    // this.createRectangleShape(this.getData[i].left, this.getData[i].top, this.getData[i].width, this.getData[i].height, this.getData[i].stroke, this.getData[i].angle);
                    this.fabricCanvas.clear();
                    // this.rotateValue = 120;
                    this.reCreateObjects();
                }
                if (this.getData[i].type === 'circle') {
                    this.createCircle(this.getData[i].left, this.getData[i].top, this.getData[i].radius, this.getData[i].stroke);
                }
                if (this.getData[i].type === 'arrow') {
                    this.loadArrowLine(this.getData[i].points, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
                if (this.getData[i].type === 'polyline') {
                    this.loadArrowLine(this.getData[i].points, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
                if (this.getData[i].type === 'i-text') {
                    console.log('arrow', this.getData[i]);
                    this.creatItext(this.getData[i].left, this.getData[i].top, this.getData[i].text, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
                if (this.getData[i].type === 'pencil') {
                    this.loadArrowLine(this.getData[i].path, this.getData[i].stroke);
                    //this.drawArrow(this.getData[i].left, this.getData[i].top, this.getData[i].radius);
                }
            }
        });
    }
    put(shapeData, id) {
        this.service.putShape(shapeData, id).subscribe(a => {
            console.log('put', a);
        });
    }
    mouseEventOn() {
        this.fabricCanvas.on('mouse:down', this.osdMouseDown);
        this.fabricCanvas.on('mouse:up', this.osdMouseUp);
        this.fabricCanvas.on('mouse:move', this.osdMouseMove);
    }
    mouseEventOff() {
        this.fabricCanvas.off('mouse:down', this.osdMouseDown);
        this.fabricCanvas.off('mouse:up', this.osdMouseUp);
        this.fabricCanvas.off('mouse:move', this.osdMouseMove);
    }
    loadArrowLine(points, color) {
        this.shapeData = new fabric.Polyline(points, {
            fill: '',
            stroke: color ? color : 'red',
            background: 'red',
            opacity: 1,
            strokeWidth: 5,
            originX: 'left',
            originY: 'top',
            selectable: true,
            type: 'arrow'
        });
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    creatItext(x, y, text, color) {
        let txt = text ? text : 'hello';
        this.shapeData = new fabric.IText(txt, {
            left: x,
            top: y,
            fill: color ? color : 'red',
            stroke: color ? color : 'red',
            strokeWidth: 2,
            lineHeight: 2
            // originX: 'center',
            // originY: 'center'
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    drawArrow(fromX, fromY, toX, toY, color) {
        console.log('drwarrow');
        let arrowAngle = Math.atan2(toY - fromY, toX - fromX);
        let arrowHeadSize = 15;
        toX = toX - (arrowHeadSize) * Math.cos(arrowAngle);
        toY = toY - (arrowHeadSize) * Math.sin(arrowAngle);
        let points = [
            {
                x: fromX,
                y: fromY
            },
            {
                x: fromX - (arrowHeadSize / 4) * Math.cos(arrowAngle - Math.PI / 2),
                y: fromY - (arrowHeadSize / 4) * Math.sin(arrowAngle - Math.PI / 2)
            },
            {
                x: toX - (arrowHeadSize / 4) * Math.cos(arrowAngle - Math.PI / 2),
                y: toY - (arrowHeadSize / 4) * Math.sin(arrowAngle - Math.PI / 2)
            },
            {
                x: toX - (arrowHeadSize) * Math.cos(arrowAngle - Math.PI / 2),
                y: toY - (arrowHeadSize) * Math.sin(arrowAngle - Math.PI / 2)
            },
            {
                x: toX + (arrowHeadSize) * Math.cos(arrowAngle),
                y: toY + (arrowHeadSize) * Math.sin(arrowAngle)
            },
            {
                x: toX - (arrowHeadSize) * Math.cos(arrowAngle + Math.PI / 2),
                y: toY - (arrowHeadSize) * Math.sin(arrowAngle + Math.PI / 2)
            },
            {
                x: toX - (arrowHeadSize / 4) * Math.cos(arrowAngle + Math.PI / 2),
                y: toY - (arrowHeadSize / 4) * Math.sin(arrowAngle + Math.PI / 2)
            },
            {
                x: fromX - (arrowHeadSize / 4) * Math.cos(arrowAngle + Math.PI / 2),
                y: fromY - (arrowHeadSize / 4) * Math.sin(arrowAngle + Math.PI / 2)
            },
            {
                x: fromX,
                y: fromY
            }
        ];
        console.log('arrow points', points);
        this.shapeData = new fabric.Polyline(points, {
            fill: color ? color : 'red',
            stroke: color ? color : 'red',
            background: 'red',
            opacity: 1,
            strokeWidth: 5,
            originX: 'left',
            originY: 'top',
            selectable: true,
            type: 'arrow'
        });
        this.shapeData.id = Object(nanoid__WEBPACK_IMPORTED_MODULE_2__["nanoid"])();
        this.fabricCanvas.add(this.shapeData);
        this.fabricCanvas.renderAll();
    }
    clk(event) {
        // this.viewer.goToPage(0)
        // var tiledImage = this.viewer.world.getItemAt(0);
        // var viewportPosRect = new OpenSeadragon.Rect(20, 30, 10,10);
        //             var tileSourcePosRect = tiledImage._viewportToTiledImageRectangle(viewportPosRect);
        // console.log('image', this.viewer.world.getIndexOfItem())
        // this.viewer.addHandler('canvas-click', function (event:any) {
        //   console.log('canvas...', event.target)
        // });
    }
    imgMoveStop() {
        this.viewer.addHandler('canvas-drag', function (event) {
            event.preventDefaultAction = true;
        });
    }
    imgMoveStart() {
        this.viewer.addHandler('canvas-drag', function (event) {
            event.preventDefaultAction = false;
        });
    }
    selectStrokeColor(event) {
        this.strokeColor = event.value;
    }
    selectTile(tile) {
        this.rotageTileIndex = tile;
        this.viewer.world.getItemAt(0).setRotation(90, true);
    }
    delete(id, index) {
        // this.fabricCanvas.setActiveObject(this.fabricCanvas.item(index+1))
        let del;
        console.log('delete', id, index);
        this.service.deleteShape(id).subscribe(res => {
            if (res) {
                del = res;
                console.log('delete res', res);
                this.subscribeShape();
            }
        });
        var activeObject = this.fabricCanvas.getActiveObject();
        console.log('delete res', activeObject);
        //this.fabricCanvas.item(index+1)
        if (confirm('Are you sure?')) {
            this.fabricCanvas.remove(activeObject);
        }
        this.fabricCanvas.renderAll();
    }
    getTile() {
        var i, tiledImage;
        var count = this.viewer.world.getItemCount();
        var tilesData;
        for (i = 0; i < count; i++) {
            var tileData = this.tilesData[i];
            var imagePoint = new OpenSeadragon.Point(tileData.x, tileData.y);
            const viewerPoint = tiledImage.imageToViewportCoordinates(imagePoint);
            tiledImage = this.viewer.world.getItemAt(i);
            tiledImage.setPosition(viewerPoint);
            console.log('tileimag', tiledImage);
        }
    }
    reCreateObjects() {
        let annotations = this.getData;
        console.log('RECREATED object', this.fabricCanvas.getObjects(), this.getData);
        //let annotations =  this.fabricCanvas.getObjects();
        // console.log('rere', new fabric.Point(annotations[1].left, annotations[1].top))
        for (let i = 0; i < annotations.length; i++) {
            console.log('annotation', annotations[i].type); //this.fabricCanvas.getVpCenter()
            if (annotations[i].type === 'Rect') {
                let posNewCenter = fabric.util.rotatePoint(new fabric.Point(annotations[i].left, annotations[i].top), this.fabricCanvas.getVpCenter(), fabric.util.degreesToRadians(this.rotateValue));
                this.createRectangleShape(posNewCenter.x, posNewCenter.y, annotations[i].width, annotations[i].height, annotations[i].color, this.rotateValue);
            }
        }
    }
    rotateSlider() {
        // this.viewer.world.getItemAt(this.rotageTileIndex).setRotation(this.rotateValue, false);
        this.viewer.world.getItemAt(0).setRotation(this.rotateValue, true);
        this.fabricCanvas.clear();
        setTimeout(() => {
            this.reCreateObjects();
        }, 500);
        var objs = this.fabricCanvas.getObjects().map(function (o) {
            return o.set('active', true);
        });
        console.log("all objs", objs);
        // this.fabricCanvas.clear();
        // let fabRect =  new fabric.Rect({
        //   type:'Rect',
        //   left:345.9638005503369,
        //   top:374.0371352208498,
        //   width:200,
        //   height:300,
        //   fill:'',
        //   stroke:'blue',
        //   strokeWidth:5,
        //   angle:this.rotateValue
        // });
        // this.fabricCanvas.add(fabRect);
        // this.fabricCanvas.renderAll();
        // let posNewCenter = fabric.util.rotatePoint(
        //   new fabric.Point(3.279277730334943,2.952911082815316),
        //   this.fabricCanvas.getVpCenter(),
        //   fabric.util.degreesToRadians(this.rotateValue)
        // )
        //(178.5,234)
        let posNewCenter = fabric.util.rotatePoint(new fabric.Point(3.279277730334943, 2.952911082815316), new fabric.Point(358.8560208105469, 551.8799423217773), fabric.util.degreesToRadians(this.rotateValue));
        console.log('rect xy', posNewCenter, this.fabricCanvas.getVpCenter());
        // console.log('center', this.fabricCanvas.getVpCenter(), new fabric.Point(3.279277730334943,2.952911082815316))
        console.log("osgetContentSized##", this.viewer.world.getItemAt(0).getContentSize());
        console.log("bounds##", this.viewer.world.getItemAt(0).getBounds());
        console.log('tile det', this.viewer.world.getItemAt(0));
        let bounds = this.viewer.world.getItemAt(0).getBounds();
        console.log('bounds', bounds);
        //let check=  this.viewer.viewport.imageToViewportCoordinates(bounds.x, bounds.y)
        //console.log('count', this.viewer.world.getItemCount(), check)
        let tiledImage = this.viewer.world.getItemAt(0);
        let box = tiledImage.getBounds(true);
        console.log(box);
        //var viewportCenter = this.viewer.viewport.getCenter();
        //var imageCenter = this.viewer.viewport.viewportToImageCoordinates(viewportCenter.x, viewportCenter.y);
        // console.log('center', imageCenter)
        //console.log('size', this.viewer.world.getSize())
        // var box = new OpenSeadragon.Rect(0.25, 0.25, 0.5, 0.5);
        // this.viewer.viewport.fitBounds(box, true);
        //   rect.set({
        //     left: posNewCenter.x,
        //     top: posNewCenter.y,
        //     angle: this.value
        // });
        // this.shapeData.set({
        //        left: posNewCenter.x,
        //     top: posNewCenter.y,
        //     angle: this.rotateValue
        // });
        /* this.fabricCanvas.clear();
         let fabRect =  new fabric.Rect({
             type:'Rect',
             left:posNewCenter.x,
             top: posNewCenter.y,
             width:186.91883062909196,
             height:224.7503914033589,
             fill:'',
             stroke:'red',
             strokeWidth:5,
             angle:this.rotateValue
        });
       this.fabricCanvas.add(fabRect);
      
       this.fabricCanvas.renderAll();*/
        console.log('alla', this.shapeData);
    }
    resetRotation() {
        this.viewer.world.getItemAt(0).setRotation(0, true);
        this.viewer.world.getItemAt(1).setRotation(0, true);
        this.rotateValue = 0;
        //this.subscribeShape();
        console.log('fab', this.fabricCanvas.getObjects());
        /* var group = new fabric.Group(this.fabricCanvas.getObjects());
     
                     group.rotate(90);
     
                     this.fabricCanvas.centerObject(group);
                     group.setCoords();
                     this.fabricCanvas.renderAll();*/
    }
    rotateShape() {
        var group = new fabric.Group(this.fabricCanvas.getObjects(), {
            width: 600,
            height: 750,
            top: 100,
            left: 400,
            originX: 'center',
            originY: 'center',
            angle: 90
        });
        //  group.rotate(90);
        //  this.fabricCanvas.centerObject(group);
        group.setCoords();
        group.remove();
        this.fabricCanvas.renderAll();
    }
    //pathCreated
    createPath(data) {
        let path;
        console.log('final path', this.fabricCanvas.freeDrawingBrush._points);
        this.shapeData.path = this.fabricCanvas.freeDrawingBrush._points;
        this.fabricCanvas.on('path:created', function (opt) {
            // opt.path is a fabric.Path ready to use and already on the canvas
            console.log("path createeeeeee", data);
            console.log("path createeeeeee", this, opt.path instanceof fabric.Path, opt);
            console.log(opt.path.path);
            if (opt.path.path) {
                // this.shapeData.set({path:opt.path.path})
            }
            path = opt.path.path;
            console.log(opt.path.path.map(chunk => {
                return chunk.join(' ');
            }).join(' '));
            // return opt.path.path
        });
    }
    newCoordinate() {
        let x = 350.88271714583925;
        let y = 300.21402647309986;
        let x1 = 10, x2 = 50, y1 = 40, y2 = 70;
        let deltaX = x2 - x1;
        let deltaY = y2 - y1;
        let deg = Math.atan2(deltaY, deltaX) * 180.0 / Math.PI;
        console.log('new cor', deg);
        let m = x * Math.sin(90);
        let n = y * Math.cos(90);
        console.log("test co", m, n);
        // this.createRectangleShape(m,n,  42.6306104943543, 42.65335895246227, 'blue', 0)
        this.createRectangleShape(300.2140264731, -350.88271714584, 42.65335895246227, 42.65335895246227, 'blue', 0);
    }
    //Handler
    testClick() {
        this.viewer.addHandler('canvas-click', this.osdAction, { service: this, handler: this.osdAction });
    }
    osdAction(event) {
        console.log('canvas click event, event', event);
    }
}
DrawingComponent.ɵfac = function DrawingComponent_Factory(t) { return new (t || DrawingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
DrawingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DrawingComponent, selectors: [["app-drawing"]], decls: 59, vars: 15, consts: [[1, "container-fluid"], [1, "row"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Rectangle", 3, "click"], [3, "icon"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Poly Line", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Line Arrow", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Text", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Free Hand", 3, "click"], [1, "col"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "customColor", 3, "selectionChange"], ["value", "red"], ["value", "green"], ["value", "blue"], ["value", "black"], ["value", "#ADFF2F"], ["value", "orangered"], ["value", "blueviolet"], ["value", "white"], ["mat-icon-button", "", "color", "primary ", "matTooltip", "Tile 1", 1, "tile", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Tile 2", 1, "tile", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Reset", 1, "tile", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Remove shape", 1, "tile", 3, "click"], [1, "example-margin", 3, "disabled", "max", "min", "step", "ngModel", "vertical", "ngModelChange", "click"], [1, "col-6", "justify-content-md-center"], ["id", "openseadragon-holder", 2, "width", "750px", "height", "600px", 3, "click", "dblclick", "mousemove", "mousedown", "mouseup"], [4, "ngIf"], ["class", "detail", 4, "ngIf"], [1, "detail"], [4, "ngFor", "ngForOf"], [3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Remove shape", 1, "del", 3, "click"], [2, "color", "red", 3, "icon"]], template: function DrawingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_3_listener() { return ctx.drawShape("Rectangle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_5_listener() { return ctx.drawShape("PolyLine"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_7_listener() { return ctx.drawShape("LineArrow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_9_listener() { return ctx.drawShape("Text"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_11_listener() { return ctx.drawShape("pencil"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_13_listener() { return ctx.drawShape("pencilBrush"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " FREE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stroke Color (Default color is RED)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DrawingComponent_Template_mat_select_selectionChange_22_listener($event) { return ctx.selectStrokeColor($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Red");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Green");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Black");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "GreenYellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "OrangeRed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "BlueViolet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_39_listener() { return ctx.selectTile(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Select Tile 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_41_listener() { return ctx.selectTile(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Select Tile 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_43_listener() { return ctx.resetRotation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Reset Tile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_45_listener() { return ctx.rotateShape(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ROTATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_button_click_47_listener() { return ctx.newCoordinate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " New cordinate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-slider", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DrawingComponent_Template_mat_slider_ngModelChange_53_listener($event) { return ctx.rotateValue = $event; })("click", function DrawingComponent_Template_mat_slider_click_53_listener() { return ctx.rotateSlider(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawingComponent_Template_div_click_55_listener($event) { return ctx.clk($event); })("click", function DrawingComponent_Template_div_click_55_listener($event) { return ctx.osdMouseClick($event); })("dblclick", function DrawingComponent_Template_div_dblclick_55_listener($event) { return ctx.osdMouseDoubleClick($event); })("mousemove", function DrawingComponent_Template_div_mousemove_55_listener($event) { return ctx.osdMouseMove($event); })("mousedown", function DrawingComponent_Template_div_mousedown_55_listener($event) { return ctx.osdMouseDown($event); })("mouseup", function DrawingComponent_Template_div_mouseup_55_listener($event) { return ctx.osdMouseUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, DrawingComponent_div_57_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DrawingComponent_div_58_Template, 2, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faVectorSquare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDrawPolygon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTextHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPencilAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.shapesGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tile Rotate : ", ctx.rotateValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sliderDisabled)("max", ctx.rotateMax)("min", ctx.rotateMin)("step", ctx.rotateStep)("ngModel", ctx.rotateValue)("vertical", ctx.sliderVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getData);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDivider"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  padding: 0 0 !important;\n  border: none;\n  background-color: black;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n  .mat-list-base .mat-list-item .mat-list-item-content {\n  padding: 0px !important;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: white;\n  padding-top: 25px;\n  padding-bottom: 55px;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n  list-style-type: none;\n}\n\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: grey;\n}\n\n.tile[_ngcontent-%COMP%] {\n  color: white !important;\n  width: 200px !important;\n  margin-bottom: 25px !important;\n  background: #333232;\n}\n\n.detail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 50px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n  .mat-form-field-flex {\n  background: #333232 !important;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  background: #333232;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #333232;\n}\n\n  .mat-slider-horizontal {\n  min-width: 200px !important;\n}\n\ndel[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhd1BPQy9kcmF3aW5nL2RyYXdpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFBO0VBQ0ksWUFBQTtBQUxKOztBQVFBO0VBQ0ksdUJBQUE7QUFMSjs7QUFRQTtFQVNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBYko7O0FBR0k7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBRFI7O0FBSUk7RUFDSSxtQkFBQTtBQUZSOztBQVNBO0VBQ0ksc0JBQUE7QUFOSjs7QUFzQkE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQW5CSjs7QUFxQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxnQkFBQTtBQWxCSjs7QUFvQkE7RUFDSSw4QkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxtQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxtQkFBQTtBQWpCSjs7QUFxQkE7RUFDSSwyQkFBQTtBQWxCSjs7QUFxQkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQWxCSiIsImZpbGUiOiJzcmMvYXBwL2RyYXdQT0MvZHJhd2luZy9kcmF3aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI29wZW5zZWFkcmFnb24taG9sZGVye1xyXG4vLyAgICAgd2lkdGg6IDc1MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiA2MDBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbi8vIH1cclxuIFxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiBcclxuZmEtaWNvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbiBcclxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4gXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgIHVse1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICB9XHJcbiBcclxuICAgIHNwYW57XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG4gXHJcbi5tYXQtZGl2aWRlcntcclxuICAgIGJvcmRlci10b3AtY29sb3I6Z3JleTtcclxufVxyXG4gXHJcbi8vICNmcmVlaGFuZHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHdpZHRoOiA3NTBweDtcclxuLy8gICAgIGhlaWdodDogNjAwcHg7XHJcbi8vICAgICBsZWZ0OiAwcHg7XHJcbi8vICAgICB0b3A6IDBweDtcclxuLy8gICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuLy8gICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4vLyAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogODhweDtcclxuLy8gICAgIHotaW5kZXg6IDk5OTk7XHJcbi8vIH1cclxuIFxyXG4udGlsZXtcclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7IFxyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MCwgNTApO1xyXG59XHJcbi5kZXRhaWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4gXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4e1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MCwgNTApICFpbXBvcnRhbnQ7XHJcbn0gXHJcbiBcclxubWF0LXNsaWRlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYig1MSwgNTAsIDUwKTtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDUxLCA1MCwgNTApO1xyXG5cclxufVxyXG4gXHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci1ob3Jpem9udGFse1xyXG4gICAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuZGVse1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drawing',
                templateUrl: './drawing.component.html',
                styleUrls: ['./drawing.component.scss']
            }]
    }], function () { return [{ type: _drawing_service__WEBPACK_IMPORTED_MODULE_4__["DrawingService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map