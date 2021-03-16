(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Zsy":
/*!*************************************************!*\
  !*** ./src/app/services/validations.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsService", function() { return ValidationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ValidationsService {
    constructor() {
        /*===========Validations Expression Start here ===========*/
        this.notRequired_validator = [];
        this.onlyRequired_validator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required];
        this.email_validator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,25}$')];
        this.password_validator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)];
        this.mobile_validator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')];
        this.name_validation = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)];
        this.location_validation = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)];
        this.postcode_validator = [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')];
    }
}
ValidationsService.ɵfac = function ValidationsService_Factory(t) { return new (t || ValidationsService)(); };
ValidationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ValidationsService, factory: ValidationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ValidationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/pro1/dev/kellysarmy/Frontened/src/main.ts */"zUnb");


/***/ }),

/***/ "0glK":
/*!************************************************************************!*\
  !*** ./src/app/users/delete-my-account/delete-my-account.component.ts ***!
  \************************************************************************/
/*! exports provided: DeleteMyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMyAccountComponent", function() { return DeleteMyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");



class DeleteMyAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleteMyAccountComponent.ɵfac = function DeleteMyAccountComponent_Factory(t) { return new (t || DeleteMyAccountComponent)(); };
DeleteMyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteMyAccountComponent, selectors: [["app-delete-my-account"]], decls: 42, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "delete-account"], [1, "row"], [1, "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "po-sub-title"], [1, "reason-container"], [1, "list-inline"], [1, "rc-box"], ["type", "radio", "name", "a", "id", "1", 1, "rd-box"], ["for", "1"], ["type", "radio", "name", "a", "id", "2", 1, "rd-box"], ["for", "2"], ["type", "radio", "name", "a", "id", "3", 1, "rd-box"], ["for", "3"], ["type", "radio", "name", "a", "id", "4", "checked", "", 1, "rd-box"], ["for", "4"], [1, "notes-container", "mt-40"], [1, "form-control"], [1, "action-btns", "mt-20"], [1, "btn", "btn-primary", "rounded-pill"]], template: function DeleteMyAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Samosys, we\u2019re sorry to see you go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tell us why you\u2019re closing your account:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "I have a duplicate account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I\u2019m getting too many emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "I\u2019m not getting any value from my membership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Your feedback matters. Is there anything else you\u2019d like us to know?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Delete My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2RlbGV0ZS1teS1hY2NvdW50L2RlbGV0ZS1teS1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteMyAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-my-account',
                templateUrl: './delete-my-account.component.html',
                styleUrls: ['./delete-my-account.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Domestic Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "and it's. getting chaotic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let's get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Domestic Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "and it's. getting chaotic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let's get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Deep Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "and it's. getting chaotic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let's get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Deep Cleaning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "and it's. getting chaotic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Let's get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.userId = localStorage.getItem('userId');
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 217, vars: 4, consts: [[1, "slider-area--home"], [1, "container", "caption", "pt-130", "pb-130"], [1, "row", "justify-content-center"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], [1, "content-wrap"], [1, "text-center"], [1, "search-wrapper", "shadow-sm", "mt-4"], [1, "fal", "fa-map-marker-alt", "icon"], ["type", "text", "placeholder", "Enter your postcode", 1, "form-control", "form-control-lg"], ["type", "submit", "name", "", "value", "BOOK NOW", 1, "btn", "btn-primary"], [1, "image-bg", 2, "background-image", "url('./assets/images/ffbc7970d37e9c5b15704de5ad1297a9.jpg')"], [1, "service-area", "pt-70", "pb-70", "pt-md-50", "pb-md-50", "pt-xs-50", "pb-xs-30"], [1, "container"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-xs-12"], [1, "text-muted", "font-weight-400", "text-center"], [1, "row", "justify-content-center", "mt-40"], ["class", "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12", 4, "ngIf"], ["routerLink", "/deep-cleaning", "class", "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12", 4, "ngIf"], ["routerLink", "/login", "class", "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12", 4, "ngIf"], [1, "insurance-area", "mt-70", "mb-70", "mt-md-50", "mb-md-70", "mt-xs-30", "mb-xs-40"], [1, "row", "no-gutters"], [1, "insurance-box", "left", "pt-120", "pb-120", "pl-130", "pr-130"], [1, "content-box"], [1, "font-weight-300", "text-white"], [1, "text-white", "mb-4"], [1, "list-inline", "links"], ["href", ""], [1, "icons-bg", 2, "background-image", "url('images/pattern-bg.png')"], [1, "insurance-box", "right"], [1, "insurance-image"], ["src", "./assets/images/axa-uk.png"], [1, "image-box"], ["src", "./assets/images/insurance-image.png"], [1, "why-choose-area", "pt-70", "pb-70", "pt-md-30", "pb-md-30", "pt-xs-30", "pb-xs-30"], [1, "row"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12", "order-xl-2", "order-lg-2"], [1, "key-points"], [1, "list-inline"], [1, "kp-box"], [1, "kp-icon"], ["src", "./assets/images/trusted_cleaning_professionals.png"], [1, "kp-content"], ["src", "./assets/images/pease_of-mind.png"], ["src", "./assets/images/happiness_policy.png"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-xs-12", "order-xl-1", "order-lg-1"], [1, "image-wrapper"], [1, "section--title"], [1, "image-large"], ["src", "./assets/images/why-choose-img-1.png"], [1, "image-small"], ["src", "./assets/images/why-choose-img-2.png"], [1, "hr-container"], [1, "key-functions-area", "pt-50", "pb-70", "pt-md-30", "pb-md-30", "pt-xs-30", "pb-xs-30"], [1, "row", "row-1"], [1, "col-xl-6", "col-lg-6", "col-sm-12", "col-xs-12"], [1, "img"], ["src", "./assets/images/function-img-1.png"], [1, "dotted-image"], ["src", "./assets/images/dotted-img.png"], [1, "kf-content"], [1, "mb-4"], ["href", "", 1, "btn", "btn-primary", "rounded-pill"], [1, "row", "row-2"], ["src", "./assets/images/function-img-2.png"], [1, "testimonials-area", "pt-70", "pb-70", "pt-md-60", "pb-md-30", "pt-xs-60", "pb-xs-30", "mt-70", "mt-md-50"], [1, "row", "align-items-center"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12"], [1, "testi-box"], [1, "mb-35"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12", "col-xs-12"], [1, "testimonial-slider", "testi-box"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "swiper-item"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "flexitem"], [1, "stars"], [1, "fas", "fa-star"], ["src", "./assets/images/testimonial-img-1.png", 1, "rounded-circle"], ["src", "images/testimonial-img-1.png", 1, "rounded-circle"], [1, "slider-navigations"], [1, "testi_swiper_nav_prev"], [1, "testi_swiper_nav_next"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12"], ["routerLink", "/login", 1, "service-box", "text-center"], [1, "service-image", "mb-30"], ["src", "./assets/images/domestinc-cleaning.png"], [1, "mb-1"], ["href", "", 1, "btn", "btn-outline-secondary", "rounded-pill"], ["routerLink", "/domestic-cleaning", 1, "service-box", "text-center"], [1, "btn", "btn-outline-secondary", "rounded-pill"], ["routerLink", "/deep-cleaning", 1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12"], [1, "service-box", "text-center"], ["src", "./assets/images/deel-cleaning.png"], ["routerLink", "/login", 1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The easiest way to book trusted Cleaning Professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CHOOSE YOUR SERVICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "So, what brings you here today?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 11, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 11, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 11, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_24_Template, 11, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Your home is covered by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Axa Insurance up to \u00A3150,000!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Our priority is to give you peace of mind. Axa Insurance provides cover for unlikely events. In the unlikely event of damages during the cleaning service, we have you covered up to \u00A3150,000.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Learn more \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Damage & Loss Management Process \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Trusted Cleaning Professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Following a rigorous interview process, Cleaning Professionals become a part of the CleanRex culture where constant lear...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Read more \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Peace of Mind with AXA Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Our trusted partner AXA insures your home up to \u00A3150,000. While you focus on other things that matter, we have got your...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Read more \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "100% Happiness Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Our vision is to leave our customers delighted after each session. We invest in extensive training for the Cleaning...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Read more \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Why choose us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Experience the Level of Quality Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "You can be assured that your home is in safe hands. All our cleaning professionals go through extensive and regular training during their time at CleanRex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Recommend CleanRex and win \u20AC 1,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Are you ready to win \u20AC 1,000 by recommending CleanRex during September?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "CleanRex Professionals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Become a pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "I\u2019m very proud to be working with CleanRex. I moved to the city recently, and got to know the city and my surroundings whilst working. I\u2019m making the most of it thanks to CleanRex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Ava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "I\u2019m very proud to be working with CleanRex. I moved to the city recently, and got to know the city and my surroundings whilst working. I\u2019m making the most of it thanks to CleanRex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Ava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "I\u2019m very proud to be working with CleanRex. I moved to the city recently, and got to know the city and my surroundings whilst working. I\u2019m making the most of it thanks to CleanRex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Ava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "I\u2019m very proud to be working with CleanRex. I moved to the city recently, and got to know the city and my surroundings whilst working. I\u2019m making the most of it thanks to CleanRex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Ava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u27F5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userId == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1uHF":
/*!**********************************************!*\
  !*** ./src/app/services/function.service.ts ***!
  \**********************************************/
/*! exports provided: FunctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionService", function() { return FunctionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FunctionService {
    constructor() { }
    addFocus() {
        const setActive = (el, active) => {
            const formField = el.parentNode.parentNode;
            if (active) {
                formField.classList.add('form-field--is-active');
            }
            else {
                formField.classList.remove('form-field--is-active');
                el.value === '' ?
                    formField.classList.remove('form-field--is-filled') :
                    formField.classList.add('form-field--is-filled');
            }
        };
        [].forEach.call(document.querySelectorAll('.form-field__input, .form-field__textarea'), (el) => {
            el.onblur = () => {
                setActive(el, false);
            };
            el.onfocus = () => {
                setActive(el, true);
            };
        });
    }
    setBack() {
        setInterval(function () {
            const setActive = (el) => {
                const formField = el.parentNode.parentNode;
                formField.classList.remove('form-field--is-active');
                el.value === '' ?
                    formField.classList.remove('form-field--is-filled') :
                    formField.classList.add('form-field--is-filled');
            };
            [].forEach.call(document.querySelectorAll('.form-field__input, .form-field__textarea'), (el) => {
                setActive(el);
            });
        }, 1);
        return clearInterval();
    }
}
FunctionService.ɵfac = function FunctionService_Factory(t) { return new (t || FunctionService)(); };
FunctionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FunctionService, factory: FunctionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/variable.service */ "OAAa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Become a member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router, variable) {
        this.router = router;
        this.variable = variable;
        this.userId = localStorage.getItem('userId');
        this.user_type = localStorage.getItem('user_type');
    }
    ngOnInit() {
    }
    Logout() {
        this.variable.login = true;
        this.variable.logout = false;
        localStorage.removeItem('userId');
        localStorage.removeItem('BasicInfo');
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variable_service__WEBPACK_IMPORTED_MODULE_2__["VariableService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 33, vars: 4, consts: [[1, "header", "pt-30", "pb-30"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["src", "./assets/images/kellsarmy2.png"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/about-us", 1, "nav-link"], ["href", "#", 1, "nav-link"], ["routerLink", "/contact-us", 1, "nav-link"], ["class", "nav-item has-btn", 4, "ngIf"], [1, "questions-link"], ["routerLink", "/still-question"], [1, "fal", "fa-info-circle"], [1, "nav-item", "has-btn"], ["routerLink", "/member/step1", 1, "btn", "btn-primary", "rounded-pill"], ["routerLink", "/login", 1, "btn", "btn-outline-secondary", "rounded-pill"], ["routerLink", "/dashboard", 1, "btn", "btn-outline-secondary", "rounded-pill"], ["routerLink", "/service-providers/service-profile", 1, "btn", "btn-outline-secondary", "rounded-pill"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_li_24_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_li_25_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_li_26_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_li_27_Template, 3, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.login == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.login == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.login == false && ctx.variable.user_type == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.variable.login == false && ctx.variable.user_type == "2");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_variable_service__WEBPACK_IMPORTED_MODULE_2__["VariableService"] }]; }, null); })();


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4GrH":
/*!************************************************************!*\
  !*** ./src/app/users/myservicess/myservicess.component.ts ***!
  \************************************************************/
/*! exports provided: MyServicessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServicessComponent", function() { return MyServicessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MyServicessComponent_div_8_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", s_r2.serviceProviderData.user_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r2.serviceProviderData.user_name);
} }
function MyServicessComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Booking Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Booking Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MyServicessComponent_div_8_div_39_Template, 9, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn ", s_r2.check_class, " btn-sm rounded-pill");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r2.check_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", s_r2.service_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r2.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r2.services_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", s_r2.coast, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", s_r2.cleaning_duration, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 12, s_r2.booking_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 14, s_r2.booking_date, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r2.serviceProviderData.user_image != undefined);
} }
function MyServicessComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No services found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyServicessComponent {
    constructor(service, toastr, rt) {
        this.service = service;
        this.toastr = toastr;
        this.rt = rt;
        this.user_id = localStorage.getItem('userId');
        this.RequestData = [];
    }
    ngOnInit() {
        this.getserviceReq();
    }
    getserviceReq() {
        this.service.get('/api/getMyServicessINCustomer?user_id=' + localStorage.getItem('userId').toString()).subscribe(res => {
            this.RequestData = res['data'];
        });
    }
    acceptService(value, type) {
        value.user_id = localStorage.getItem('userId').toString();
        value.type = type;
        this.service.post('/api/acceptService', value).subscribe(res => {
            this.toastr.success(res['message']);
            this.rt.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.rt.navigate(["service-providers/service-request"]));
        });
    }
}
MyServicessComponent.ɵfac = function MyServicessComponent_Factory(t) { return new (t || MyServicessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MyServicessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyServicessComponent, selectors: [["app-myservicess"]], decls: 10, vars: 2, consts: [[1, "aouth-container", "lg-container", "service-provider-container"], [1, "container"], [1, "main-content"], [1, "row", "services-listing-lg"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["class", "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "sc-wrapper", "mb-25"], [1, "sc-button-wrapper"], [1, "list-inline", "d-flex", "align-items-center", "mb-20", "justify-content-end"], [1, "card", "shadow-sm", "rounded", "service-card"], [1, "card-body"], [1, "row"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12"], [1, "sc-content"], [1, "sc-image"], [3, "src"], [1, "mb-2"], [1, "d-flex", "align-items-center", "sc-price"], [1, "mb-0", "theme-color", "mr-20"], [1, "mb-0", "theme-color"], [1, "col-xl-5", "col-lg-5", "col-md-12", "col-sm-12", "col-xs-12"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "card-secondry"], [1, "d-block"], ["class", "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12", 4, "ngIf"], [1, "card-secondry", "user-info-box"], [1, "text-center"], [1, "user-photo"], [1, "sc-location"]], template: function MyServicessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyServicessComponent_div_8_Template, 40, 17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MyServicessComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.RequestData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.RequestData.length == 0);
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL215c2VydmljZXNzL215c2VydmljZXNzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyServicessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myservicess',
                templateUrl: './myservicess.component.html',
                styleUrls: ['./myservicess.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "5APW":
/*!****************************************************!*\
  !*** ./src/app/pages/payment/payment.component.ts ***!
  \****************************************************/
/*! exports provided: paymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentComponent", function() { return paymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ "VFot");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");










class paymentComponent {
    constructor(fb, router, stripeService, service, toastr, dialogRef, Paydata) {
        this.fb = fb;
        this.router = router;
        this.stripeService = stripeService;
        this.service = service;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.Paydata = Paydata;
        // optional parameters
        this.elementsOptions = {
            locale: 'en'
        };
    }
    ngOnInit() {
        console.log('Paydata', this.Paydata);
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.stripeService.elements(this.elementsOptions)
            .subscribe(elements => {
            this.elements = elements;
            // Only mount the element the first time
            if (!this.card) {
                this.card = this.elements.create('card', {
                    style: {
                        base: {
                            iconColor: '#666EE8',
                            color: '#31325F',
                            lineHeight: '40px',
                            fontWeight: 300,
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSize: '18px',
                            '::placeholder': {
                                color: '#CFD7E0'
                            }
                        }
                    }
                });
                this.card.mount('#card-element');
            }
        });
    }
    buy() {
        const name = JSON.parse(localStorage.getItem('userData')).name;
        console.log('ddddddddddddddd', JSON.parse(localStorage.getItem('userData')).name);
        this.stripeService
            .createToken(this.card, { name })
            .subscribe(result => {
            if (result.token) {
                // Use the token to create a charge or a customer
                // https://stripe.com/docs/charges
                console.log(result.token);
                //      this.service.post('/api/payment',{amount:10,cardToken:result.token})
                // .subscribe(res => {
                // })
                this.Paydata.cardToken = result.token;
                this.service.post('/api/book-service', this.Paydata).subscribe(res => {
                    this.toastr.success(res['message']);
                    if (res['status'] == true) {
                        this.dialogRef.close();
                        this.router.navigate(['/my-service']);
                    }
                });
            }
            else if (result.error) {
                // Error creating the token
                console.log(result.error.message);
            }
        });
    }
}
paymentComponent.ɵfac = function paymentComponent_Factory(t) { return new (t || paymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
paymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: paymentComponent, selectors: [["app-payment"]], decls: 8, vars: 1, consts: [[1, "service-page", "pt-20", "pl-20", "pr-20", "pb-20"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "card-element", 1, "field"], ["type", "submit"]], template: function paymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your card details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function paymentComponent_Template_form_ngSubmit_4_listener() { return ctx.buy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " BUY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.stripeTest);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](paymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment',
                templateUrl: './payment.component.html',
                styleUrls: ['./payment.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


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
    production: false,
    apiUrl: 'http://103.15.67.78:3082',
    stripe_publishable_key: 'pk_test_nvcj35njjOglqeQI0RtwSBjo00Wt6AHPxl',
    // apiUrl: 'http://localhost:3001',
    filesType: ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'] // file type extension allowed
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

/***/ "BKFi":
/*!**********************************************************!*\
  !*** ./src/app/users/my-service/my-service.component.ts ***!
  \**********************************************************/
/*! exports provided: MyServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceComponent", function() { return MyServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_variable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/variable.service */ "OAAa");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class MyServiceComponent {
    constructor(variable) {
        this.variable = variable;
    }
    ngOnInit() {
        this.variable.login = false;
        this.variable.logout = true;
    }
}
MyServiceComponent.ɵfac = function MyServiceComponent_Factory(t) { return new (t || MyServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_variable_service__WEBPACK_IMPORTED_MODULE_1__["VariableService"])); };
MyServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyServiceComponent, selectors: [["app-my-service"]], decls: 161, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "text-center"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "steps-grid"], [1, "grid-box"], [1, "step-box", "active"], [1, "step-icon"], ["src", "./assets/images/step-booking.png"], [1, "step-box"], ["src", "./assets/images/step-clean.png"], ["src", "./assets/images/step-relax.png"], [1, "row", "service-booking-form"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "form-group"], ["data-fa-icon", "\uF11C", 1, "sb-form-item"], ["type", "text", "name", "", "placeholder", "Postal Code", 1, "form-control"], ["data-fa-icon", "\uF236", 1, "sb-form-item"], [1, "select"], [1, "form-control"], ["data-fa-icon", "\uF2CD", 1, "sb-form-item"], ["data-fa-icon", "\uF0E0", 1, "sb-form-item"], ["type", "text", "name", "", "placeholder", "Enter your mail", 1, "form-control"], ["data-fa-icon", "\uF095", 1, "sb-form-item"], ["type", "text", "name", "", "placeholder", "Mobile number", 1, "form-control"], ["data-fa-icon", "\uF1FE", 1, "sb-form-item"], [1, "sb-form-item"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary", "active"], ["type", "button", 1, "btn", "btn-secondary"], ["data-fa-icon", "\uF0F4", 1, "sb-form-item"], ["type", "text", "name", "", "placeholder", "Living room", 1, "form-control"], ["data-fa-icon", "\uF1AD", 1, "sb-form-item"], ["data-fa-icon", "\uF013", 1, "sb-form-item"], ["data-fa-icon", "\uF0AD", 1, "sb-form-item"], ["type", "text", "name", "", "placeholder", "Other services", 1, "form-control"], ["data-fa-icon", "\uF015", 1, "sb-form-item"], [1, "col-xl-12", "col-lg-12", "col-md-6", "col-sm-12", "col-xs-12", "mt-20"], [1, "btn", "btn-primary", "rounded-pill"]], template: function MyServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "How CleanRex Works?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Clean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Relax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bedroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Bathroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Size: Sq Meters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Kitchen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Kitchenet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Type of property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Type of service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "No Verandas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Item 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Book a Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL215LXNlcnZpY2UvbXktc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-service',
                templateUrl: './my-service.component.html',
                styleUrls: ['./my-service.component.css']
            }]
    }], function () { return [{ type: src_app_services_variable_service__WEBPACK_IMPORTED_MODULE_1__["VariableService"] }]; }, null); })();


/***/ }),

/***/ "Cj6H":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_service_my_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-service/my-service.component */ "BKFi");
/* harmony import */ var _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-team/my-team.component */ "joVJ");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "y8rx");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth/auth-guard.service */ "OTVi");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "wT5b");
/* harmony import */ var _my_addresses_my_addresses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-addresses/my-addresses.component */ "DNHr");
/* harmony import */ var _payment_options_payment_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-options/payment-options.component */ "RqzA");
/* harmony import */ var _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invite-friend/invite-friend.component */ "sF6n");
/* harmony import */ var _bonus_cleaning_package_bonus_cleaning_package_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bonus-cleaning-package/bonus-cleaning-package.component */ "H3hr");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./change-password/change-password.component */ "D7yf");
/* harmony import */ var _delete_my_account_delete_my_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delete-my-account/delete-my-account.component */ "0glK");
/* harmony import */ var _still_question_still_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./still-question/still-question.component */ "vN3u");
/* harmony import */ var _myservicess_myservicess_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myservicess/myservicess.component */ "4GrH");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./faq/faq.component */ "NkdY");


















const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'myprofile', component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'myservice', component: _my_service_my_service_component__WEBPACK_IMPORTED_MODULE_2__["MyServiceComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'myteam', component: _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_3__["MyTeamComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'myaddress', component: _my_addresses_my_addresses_component__WEBPACK_IMPORTED_MODULE_7__["MyAddressesComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'payment-option', component: _payment_options_payment_options_component__WEBPACK_IMPORTED_MODULE_8__["PaymentOptionsComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'invite-friend', component: _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_9__["InviteFriendComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'bonus-cleaning', component: _bonus_cleaning_package_bonus_cleaning_package_component__WEBPACK_IMPORTED_MODULE_10__["BonusCleaningPackageComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'delete-account', component: _delete_my_account_delete_my_account_component__WEBPACK_IMPORTED_MODULE_12__["DeleteMyAccountComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'still-question', component: _still_question_still_question_component__WEBPACK_IMPORTED_MODULE_13__["StillQuestionComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'my-service', component: _myservicess_myservicess_component__WEBPACK_IMPORTED_MODULE_14__["MyServicessComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'faq/:id', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FAQComponent"] },
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "D7yf":
/*!********************************************************************!*\
  !*** ./src/app/users/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");



class ChangePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 27, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "col-xl-7", "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12"], [1, "row", "form-row"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF023", 1, "form-field__control"], ["id", "new-password", "type", "password", "placeholder", "", 1, "form-field__input"], ["for", "new-password", 1, "form-field__label"], ["id", "confirm-password", "type", "confirm-password", "placeholder", "", 1, "form-field__input"], ["for", "confirm-password", 1, "form-field__label"], [1, "row", "btn-row", "mt-20"], [1, "btn", "btn-primary", "d-block", "rounded-pill", "btn-lg"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirm New Pasword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Change My Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validations.service */ "+Zsy");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_variable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/variable.service */ "OAAa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");










function LoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Invalid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.signinForm.controls["email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.signinForm.controls["email"].errors.pattern);
} }
function LoginComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Password length should be minimum 5 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.signinForm.controls["password"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.signinForm.controls.password.hasError("minlength"));
} }
function LoginComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return { "fa": true, "fa-eye": a1, "fa-eye-slash": a2 }; };
class LoginComponent {
    constructor(fb, router, service, validation, toastr, variable) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.validation = validation;
        this.toastr = toastr;
        this.variable = variable;
        this.showHideBtn = true;
        /*========== Slider Section Start Here========*/
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            margin: 24,
            items: 3,
            dotsContainer: '.testimonial-pagination',
            navText: ['', ''],
            responsive: {
                1024: {
                    items: 3,
                },
                768: {
                    items: 2,
                },
                320: {
                    items: 1,
                },
            },
        };
    }
    ngOnInit() {
        this.createForm();
        if (localStorage.getItem('userId') != null) {
            if (localStorage.getItem('user_type') == '1') {
                this.router.navigate(['dashboard']);
            }
            else {
                this.router.navigate(['service-providers/service-profile']);
            }
        }
    }
    /*========== Slider Section End Here========*/
    /*========== Form Value Start Here========*/
    createForm() {
        this.signinForm = this.fb.group({
            email: ['', this.validation.email_validator],
            password: ['', this.validation.password_validator],
        });
    }
    /*========== Form Value End Here========*/
    /*==========Login Add Api Start Here========*/
    signin() {
        console.log("form value", this.signinForm.value);
        this.submitted = true;
        if (this.signinForm.invalid) {
            return;
        }
        this.submitted = false;
        this.service.getUserLogin(this.signinForm.value)
            .subscribe(res => {
            this.variable.logout = true;
            this.variable.login = false;
            this.variable.user_type = res['data'][0].user_type;
            console.log("api response", res.data);
            this.log_Msg = res;
            if (this.log_Msg.status === 1) {
                this.log_Obj = res.data[0];
                this.status_Obj = res;
                localStorage.setItem('userData', JSON.stringify(this.log_Obj));
                if (this.signinForm.value.email === this.log_Obj.email || this.signinForm.value.password === this.log_Obj.password) {
                    localStorage.setItem('userId', JSON.stringify(this.log_Obj.id));
                    localStorage.setItem('user_type', JSON.stringify(this.log_Obj.user_type));
                    if (this.log_Obj.user_status == 1 && this.log_Obj.user_type == 1) {
                        this.toastr.success(this.log_Msg.msg, '', { timeOut: 2000 });
                        // location.reload();
                        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.router.navigate(["dashboard"]));
                        // this.router.navigate(['/dashboard']);
                    }
                    else if (this.log_Obj.user_status == 1 && this.log_Obj.user_type == 2) {
                        localStorage.setItem('BasicInfo', JSON.stringify(this.log_Obj));
                        this.toastr.success(this.log_Msg.msg, '', { timeOut: 2000 });
                        // location.reload();
                        // this.router.navigate(['/service-providers/service-profile']);
                        this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => this.router.navigate(["service-providers/service-profile"]));
                    }
                    else {
                        this.toastr.error("Your account has been deactivated!", '', { timeOut: 2000 });
                        this.router.navigate(['/login']);
                    }
                }
            }
            else {
                this.variable.logout = false;
                this.variable.login = true;
                if (this.log_Msg.status === 0) {
                    this.toastr.error(this.log_Msg.msg, '', { timeOut: 2000 });
                    this.router.navigate(['/login']);
                }
            }
        });
    }
    /*==========Login Add Api End Here========*/
    /*==========Password Show/Hide Function Start Here========*/
    showHidePassword() {
        this.showHideBtn = this.showHideBtn === false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variable_service__WEBPACK_IMPORTED_MODULE_6__["VariableService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 57, vars: 9, consts: [[1, "lg-container-v2"], [1, "lg-contents-v2"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-5", "col-md-12", "col-sm-12", "col-xs-12"], [1, "lg-graphic-v2"], ["src", "./assets/images/login-graphic2.png"], [1, "col-xl-6", "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12"], [1, "lg-box-main"], [1, "lg-box-inner"], [1, "text-center"], [3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "form-group", "form--group"], ["type", "text", "placeholder", "example@example.com", "onKeyPress", "if(this.value.length==50) return false;", "formControlName", "email", "type", "email", 1, "form-control"], [1, "fal", "fa-envelope", "input-icon"], ["class", "error-msg", 4, "ngIf"], ["onKeyPress", "if(this.value.length==8) return false;", "placeholder", "At least 5 character", "formControlName", "password", "type", "password", 1, "form-control", 3, "type"], ["href", "javascript:void(0);", "id", "show", 3, "click"], [1, "input-icon", 3, "ngClass"], [1, "form-group", "form--group", "mt-20"], ["type", "button", "value", "Login", 1, "btn", "btn-primary", "rounded-pill", "d-block", "w-100", 3, "click"], [1, "signup"], ["routerLink", "/signup", "value", "Signup"], [1, "testimonials-wrapper", "pt-80", "pb-80", "pt-md-60", "pb-md-60", "pt-xs-40", "pb-md-40"], [1, "row", "justify-content-center"], [1, "col-xl-7", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], [1, "section-heading", "text-center", "mb-30"], [1, "mb-15"], [1, "testimonial-swiper"], [3, "options"], ["carouselSlide", ""], [1, "error-msg"], [3, "hidden"], ["data-overlay", "", 1, "testi-box"], [1, "tb-inner"], [1, "stars"], [1, "fas", "fa-star"], [1, "fal", "fa-star"], [1, "testi-content"], [1, "testi-border"], ["src", "./assets/images/testi-box-arrow.png"], [1, "testi-name"], [1, "thumb-bg", 2, "background-image", "url('./assets/images/testimonial-thumb-1.png')"], [1, "thumb-bg", 2, "background-image", "url('./assets/images/testimonial-thumb-2.png')"], [1, "thumb-bg", 2, "background-image", "url('./assets/images/testimonial-thumb-3.png')"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Member login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_27_listener() { return ctx.showHidePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_div_29_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_32_listener() { return ctx.signin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Don't have an accounts?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " signup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "See what our customers have to say about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Enriched Academy is the quick and easy way for anyone to learn key concepts around saving and investing their money.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "owl-carousel-o", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LoginComponent_ng_template_51_Template, 15, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoginComponent_ng_template_52_Template, 15, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, LoginComponent_ng_template_53_Template, 15, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, LoginComponent_ng_template_54_Template, 15, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, LoginComponent_ng_template_55_Template, 15, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, LoginComponent_ng_template_56_Template, 15, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signinForm.controls["email"].errors && (!ctx.signinForm.controls["email"].pristine || ctx.submitted || ctx.signinForm.controls["email"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showHideBtn ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, !ctx.showHideBtn, ctx.showHideBtn));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signinForm.controls["password"].errors && (!ctx.signinForm.controls["password"].pristine || ctx.submitted || ctx.signinForm.controls["password"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselSlideDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _services_variable_service__WEBPACK_IMPORTED_MODULE_6__["VariableService"] }]; }, null); })();


/***/ }),

/***/ "DNHr":
/*!**************************************************************!*\
  !*** ./src/app/users/my-addresses/my-addresses.component.ts ***!
  \**************************************************************/
/*! exports provided: MyAddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAddressesComponent", function() { return MyAddressesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");



class MyAddressesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyAddressesComponent.ɵfac = function MyAddressesComponent_Factory(t) { return new (t || MyAddressesComponent)(); };
MyAddressesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAddressesComponent, selectors: [["app-my-addresses"]], decls: 39, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "col-xl-6", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], [1, "row", "form-row"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF007", 1, "form-field__control"], ["id", "myhome", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "myhome", 1, "form-field__label"], ["data-fa-icon", "\uF21D", 1, "form-field__control"], ["id", "secondryhome", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "secondryhome", 1, "form-field__label"], ["data-fa-icon", "\uF1AD", 1, "form-field__control"], ["id", "office", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "office", 1, "form-field__label"], ["data-fa-icon", "\uF0CA", 1, "form-field__control"], ["id", "other", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "other", 1, "form-field__label"], [1, "row", "btn-row", "mt-20"], [1, "btn", "btn-primary", "d-block", "rounded-pill", "btn-lg", 2, "min-width", "150px"]], template: function MyAddressesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "My Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Secondary Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL215LWFkZHJlc3Nlcy9teS1hZGRyZXNzZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAddressesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-addresses',
                templateUrl: './my-addresses.component.html',
                styleUrls: ['./my-addresses.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "H3hr":
/*!**********************************************************************************!*\
  !*** ./src/app/users/bonus-cleaning-package/bonus-cleaning-package.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BonusCleaningPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusCleaningPackageComponent", function() { return BonusCleaningPackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");



class BonusCleaningPackageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BonusCleaningPackageComponent.ɵfac = function BonusCleaningPackageComponent_Factory(t) { return new (t || BonusCleaningPackageComponent)(); };
BonusCleaningPackageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BonusCleaningPackageComponent, selectors: [["app-bonus-cleaning-package"]], decls: 61, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "bonus-packages"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "col-xl-8", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], [1, "row", "form-row"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF121", 1, "form-field__control"], ["id", "activate", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "activate", 1, "form-field__label"], [1, "row", "btn-row", "mt-20"], [1, "btn", "btn-primary", "d-block", "rounded-pill", "btn-lg"], [1, "row", "justify-content-center", "mt-50", "packages-cards"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-sm-12", "col-xs-12"], [1, "card", "shadow-sm", "mb-25"], [1, "card-header", "bg-primary"], [1, "mb-0", "text-white"], [1, "card-body"], [1, "text"], [1, "theme-color", "mb-0"], [1, "mb-0"], [1, "expiry-tag"], [1, "card-header", "bg-warning"], [1, "text-warning", "mb-0"]], template: function BonusCleaningPackageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Bonus Cleaning Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The Bonus Cleaning Package offers more cleaning for a better price. You pay discounted prices and win a certain amount of bonus money, as you can see on your account page.The discount ratio increases on the biggest packages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Activate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Activate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Remaining Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Exp: Dec 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Reedom Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Total Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2JvbnVzLWNsZWFuaW5nLXBhY2thZ2UvYm9udXMtY2xlYW5pbmctcGFja2FnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BonusCleaningPackageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bonus-cleaning-package',
                templateUrl: './bonus-cleaning-package.component.html',
                styleUrls: ['./bonus-cleaning-package.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Kbxg":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LI/b":
/*!************************************************************************!*\
  !*** ./src/app/pages/domestic-cleaning/domestic-cleaning.component.ts ***!
  \************************************************************************/
/*! exports provided: DomesticCleaningComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomesticCleaningComponentComponent", function() { return DomesticCleaningComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/payment.component */ "5APW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_autocom_place__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-autocom-place */ "xxS6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "ed8r");
















function DomesticCleaningComponentComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DomesticCleaningComponentComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomesticCleaningComponentComponent_div_20_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.location.errors.required);
} }
function DomesticCleaningComponentComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DomesticCleaningComponentComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomesticCleaningComponentComponent_div_36_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.location.errors.required);
} }
function DomesticCleaningComponentComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Time is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DomesticCleaningComponentComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomesticCleaningComponentComponent_div_46_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.booking_time.errors.required);
} }
function DomesticCleaningComponentComponent_div_119_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No of pets is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DomesticCleaningComponentComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DomesticCleaningComponentComponent_div_119_div_1_Template, 2, 0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.no_of_pets.errors.required);
} }
function DomesticCleaningComponentComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_div_124_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ad_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.checkedAdditional($event.target.checked, ad_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "7.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1 Hours Ironing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ad_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ad_r11.amount, "");
} }
function DomesticCleaningComponentComponent_li_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inAdd_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", inAdd_r14.service_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", inAdd_r14.amount, "");
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class DomesticCleaningComponentComponent {
    constructor(dialog, formBuilder, service, toastr, router) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.minDate = new Date();
        this.submitted = false;
        this.serviceAmount = 0;
        this.Amt = 0;
        this.AddData = [];
        this.AddArr = [];
        this.AddArrId = [];
        this.a_amount = 0;
        this.append_date = '';
        this.lat = 0;
        this.lng = 0;
    }
    ngOnInit() {
        if (localStorage.getItem('user_type') != null) {
            if (localStorage.getItem('user_type') != '1') {
                this.router.navigate(['/']);
            }
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.getserviceDetail();
        this.getAllBedRoom();
        this.registerForm = this.formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            booking_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            booking_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // no_of_cleaning: ['', Validators.required],
            cleaning_duration: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pets: ['no'],
            no_of_pets: [''],
            cleaning_descrip: [''],
            access_property: ['I will be at home', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ConvertToInt(currentPage) {
        return parseInt(currentPage);
    }
    perHour(q) {
        this.serviceAmount = this.serviceAmount * parseInt(q);
    }
    getserviceDetail() {
        this.service.get('/user/getServiceById/1')
            .subscribe(res => {
            this.serviceAmount = res['data'][0]['amount'] * this.registerForm.value.cleaning_duration;
            this.Amt = res['data'][0]['amount'];
            this.service_id = res['data'][0]['id'];
            this.service_name = res['data'][0]['service_name'];
        });
    }
    getAllBedRoom() {
        this.service.get('/api/get-all-additional-services')
            .subscribe(res => {
            this.AddData = res['data'];
        });
    }
    checkedAdditional(checked, row) {
        this.a_amount = 0;
        if (checked == true) {
            this.AddArr.push(row);
            this.AddArrId.push(row.id);
        }
        else {
            this.AddArr = this.AddArr.filter(x => { return x.id != row.id; });
            this.AddArrId.splice(this.AddArr.indexOf(row.id), 1);
        }
        for (var i = 0; i < this.AddArr.length; ++i) {
            this.a_amount = this.a_amount + this.AddArr[i].amount;
        }
        console.log('a_amount', this.a_amount);
    }
    reduceDuration() {
        if (this.checkingAmount < this.registerForm.value.cleaning_duration) {
            this.registerForm.value.cleaning_duration = this.registerForm.value.cleaning_duration - 1;
            this.serviceAmount = this.Amt * parseInt(this.registerForm.value.cleaning_duration);
        }
    }
    IncressDuration() {
        this.registerForm.value.cleaning_duration = this.registerForm.value.cleaning_duration + 1;
        this.serviceAmount = this.Amt * parseInt(this.registerForm.value.cleaning_duration);
    }
    bedroomChange(evt) {
        console.log(evt);
        this.service.get('/api/get-all-bedroom-bathroom-detail/' + evt)
            .subscribe(res => {
            this.registerForm.value.cleaning_duration = res['data'][0]['duration'];
            this.checkingAmount = res['data'][0]['duration'];
            this.serviceAmount = this.Amt * parseInt(res['data'][0]['duration']);
        });
    }
    changeDate() {
        this.append_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.registerForm.value.booking_date).format('llll');
    }
    get f() { return this.registerForm.controls; }
    placeChanged(place) {
        console.log(place);
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
        this.registerForm.patchValue({ location: place.vicinity });
    }
    petsradio(v) {
        this.registerForm.patchValue({ pets: v });
    }
    manage(v) {
        this.registerForm.patchValue({ access_property: v });
    }
    onSubmit() {
        console.log(this.registerForm.value);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.registerForm.value.booking_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.registerForm.value.booking_date).format("YYYY-MM-DD");
        this.registerForm.value.booking_time = moment__WEBPACK_IMPORTED_MODULE_2__(this.registerForm.value.booking_time).format('LT');
        this.registerForm.value.service_id = this.service_id.toString();
        this.registerForm.value.service_name = this.service_name;
        this.registerForm.value.coast = this.serviceAmount + this.a_amount;
        this.registerForm.value.latitude = this.lat;
        this.registerForm.value.longitude = this.lng;
        this.registerForm.value.user_id = localStorage.getItem('userId');
        this.registerForm.value.additional_service_ids = this.AddArrId;
        this.service.post('/api/check-service-already-booked', this.registerForm.value).subscribe(res => {
            if (res['status'] == true) {
                const dialogRef = this.dialog.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["paymentComponent"], {
                    width: '800px',
                    data: this.registerForm.value
                });
            }
            else {
                this.toastr.success(res['message']);
            }
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
DomesticCleaningComponentComponent.ɵfac = function DomesticCleaningComponentComponent_Factory(t) { return new (t || DomesticCleaningComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DomesticCleaningComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomesticCleaningComponentComponent, selectors: [["app-domestic-cleaning"]], decls: 183, vars: 26, consts: [[3, "formGroup", "ngSubmit"], [1, "domestic-cleaning-area", "pb-60"], [1, "container", "lg-container"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "text-center"], [1, "row", "mt-50"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12", "col-xs-12", "col-main-form"], [1, "row", "form-row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-sm-12"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF1AD", 1, "form-field__control", "select-box"], [1, ""], ["id", "city", "type", "text", "ngxAutocomPlace", "", "autocomplete", "off", "formControlName", "location", "placeholder", "", 1, "form-field__input", 3, "ngClass", "selectedPlace"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "city", 1, "form-field__label"], [1, "row", "form-row", "mt-20"], [1, "input-btn-small"], [1, "btn", "btn-outline-primary", "rounded-pill", 3, "click"], ["data-fa-icon", "\uF133", 1, "form-field__control"], ["id", "select_date", "type", "text", "matInput", "", "formControlName", "booking_date", "placeholder", "", 1, "form-field__input", 3, "min", "matDatepicker", "ngClass", "click"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "select_date", 1, "form-field__label", 3, "click"], ["data-fa-icon", "\uF254", 1, "form-field__control", "select-box"], ["formControlName", "booking_time", "id", "by_hour", 1, "form-field__input", 3, "ngClass", "click"], ["for", "by_hour", 1, "form-field__label"], [1, "text-msg", "mt-10"], [1, "fal", "fa-clock", "theme-color"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-sm-12"], [2, "padding", "16px 28px", "border-radius", "0", "font-size", "15px", "line-height", "1", "font-weight", "700", "position", "relative", "overflow", "hidden", "z-index", "1", 3, "click"], ["data-fa-icon", "\uF83E", 1, "form-field__control", "select-box", "font-weight-900"], [1, "select"], ["id", "frequency", 1, "form-field__input"], ["value", ""], ["for", "frequency", 1, "form-field__label"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "pet-selection"], [1, "btn", "btn-secondary", "active"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "no", "id", "option1", "checked", "", 3, "click"], [1, "btn", "btn-secondary"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "dog", "id", "option2", 3, "click"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "cat", "id", "option3", 3, "click"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "other", "id", "option4", 3, "click"], ["data-fa-icon", "\uF6BE", 1, "form-field__control", "select-box", "font-weight-900"], ["id", "frequency", "formControlName", "no_of_pets", 1, "form-field__input", 3, "ngClass"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "mb-30"], ["class", "col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12", 4, "ngFor", "ngForOf"], [1, "row", "form-row", "mt-20", "delete-account"], [1, "reason-container"], [1, "list-inline"], [1, "rc-box"], ["checked", "", "type", "radio", "name", "a", "id", "1", 1, "rd-box", 3, "click"], ["for", "1"], ["type", "radio", "name", "a", "id", "2", 1, "rd-box", 3, "click"], ["for", "2"], [1, "form-field__control"], ["formControlName", "cleaning_descrip", "id", "notes", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "notes", 1, "form-field__label"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "booking-summry", "shadow-sm", "mb-25"], [1, "card-header", "bg-primary"], [1, "text-white", "mb-0"], [1, "card-body"], [1, "summry-listings"], [1, "list-inline", "mb-0"], [1, "sl-item"], [1, "fas", "fa-broom"], [1, "fas", "fa-calendar-minus"], [1, "fas", "fa-hourglass-start"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "mb-0"], [1, "theme-color"], [1, "btn", "btn-primary", "btn-block", "btn-lg", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "col-xs-12"], ["type", "checkbox", 3, "click"], [1, "service-box"], [1, "review-tag"], [1, "fas", "fa-star"], [1, "sb-image"], [3, "src"], [1, "mb-1", "mt-20"], [1, "mb-0", "theme-color"]], template: function DomesticCleaningComponentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DomesticCleaningComponentComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Domestic Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedPlace", function DomesticCleaningComponentComponent_Template_input_selectedPlace_19_listener($event) { return ctx.placeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DomesticCleaningComponentComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DomesticCleaningComponentComponent_div_36_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_label_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ejs-timepicker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_ejs_timepicker_click_45_listener() { return ctx.changeDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DomesticCleaningComponentComponent_div_46_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recommended For 0-29 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cleaning Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_a_click_57_listener() { return ctx.reduceDuration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_a_click_61_listener() { return ctx.IncressDuration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Cleaning Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Weekly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Do You Have a Pet?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_89_listener() { return ctx.petsradio("no"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_93_listener() { return ctx.petsradio("dog"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_97_listener() { return ctx.petsradio("cat"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_101_listener() { return ctx.petsradio("other"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, DomesticCleaningComponentComponent_div_119_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Would you like to receive an ironing service?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, DomesticCleaningComponentComponent_div_124_Template, 14, 2, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "How can your cleaning professional access the property?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_133_listener() { return ctx.manage("I will be at home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "I will be at home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DomesticCleaningComponentComponent_Template_input_click_138_listener() { return ctx.manage("The keys will be at ... (Concierge, Neighbour, Anywhere within a 5 minute walk)"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "The keys will be at ... (Concierge, Neighbour, Anywhere within a 5 minute walk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Do you have any notes for your cleaning professional?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "textarea", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Please do not under the bed, mind the shower-door please etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h5", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Booking Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "ul", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Domestic Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](173, DomesticCleaningComponentComponent_li_173_Template, 6, 2, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h4", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Total Cost:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.submitted && ctx.f.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.location.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.submitted && ctx.f.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.location.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.f.booking_time.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.booking_time.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.registerForm.value.cleaning_duration, " Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.f.no_of_pets.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.no_of_pets.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AddData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.append_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.registerForm.value.cleaning_duration, " / H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AddArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.ConvertToInt(ctx.serviceAmount) + ctx.ConvertToInt(ctx.a_amount), "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_8__["NgxAutocomPlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_13__["TimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvbWVzdGljLWNsZWFuaW5nL2RvbWVzdGljLWNsZWFuaW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomesticCleaningComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domestic-cleaning',
                templateUrl: './domestic-cleaning.component.html',
                styleUrls: ['./domestic-cleaning.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 67, vars: 0, consts: [[1, "footer", "pt-70", "pb-30", "pt-md-60", "pb-md-20", "pt-xs-60", "pb-xs-20"], [1, "container"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12", "mb-40"], [1, "footer-widget"], [1, "foot-logo"], ["href", ""], ["src", "./assets/images/logo-footer.png"], [1, "d-flex", "align-items-center"], [1, "fal", "fa-envelope", "icon"], [1, "fal", "fa-mobile", "icon"], [1, "col-xl-3", "col-lg-3", "col-md-6", "col-sm-12", "col-xs-12", "mb-40"], [1, "text-white"], [1, "list-inline"], [1, "col-xl-2", "col-lg-2", "col-md-6", "col-sm-12", "col-xs-12", "mb-40"], ["href", "", 1, "d-flex", "align-items-center"], [1, "fab", "fa-facebook", "mr-10"], [1, "fab", "fa-twitter", "mr-10"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rua Sebasti\u00E3o da Gama, 275-3\u00BA Esq 2785-008 S-Domingos de Rana, Lisboa Portugal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "kelly@kellysarmy.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+351 96 135 8056");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "KellysArmy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Become a member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "How Do We Clean?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "User Agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "GDPR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancellation Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Change Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MiXo":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ContactUsComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsComponent_div_41_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
} }
function ContactUsComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_div_46_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsComponent_div_46_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactUsComponent_div_46_div_2_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.pattern);
} }
function ContactUsComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsComponent_div_51_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.message.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ContactUsComponent {
    constructor(formBuilder, service, toastr) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.toastr = toastr;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/)]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var user_id = '0';
        if (localStorage.getItem('userId') != null) {
            user_id = localStorage.getItem('userId');
        }
        this.registerForm.value.msg = this.registerForm.value.message;
        this.service.post('/user/addContactUs/' + user_id, this.registerForm.value)
            .subscribe(res => {
            this.toastr.success(res['msg']);
            this.onReset();
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 55, vars: 13, consts: [[1, "contact-wrapper", "mt-200"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], [1, "col-lg-12", "mb-50"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.5834578!2d-123.79616103953882!3d37.1931243309143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1606203360032!5m2!1sen!2sin", "width", "100%", "height", "450", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12", "mb-40"], [1, "contact-info", "mb-30"], [1, "fas", "fa-map-marker-alt", "icon"], [1, "mb-1"], [1, "fas", "fa-phone", "icon"], [1, "fas", "fa-clock", "icon"], [1, "col-xl-8", "col-lg-8", "col-md-6", "col-sm-12", "col-xs-12", "mb-40"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Your Name", "formControlName", "name", 1, "form-control", "form-control-lg", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg", 3, "ngClass"], ["placeholder", "Email", "formControlName", "message", 1, "form-control", "form-control-lg", 3, "ngClass"], [1, "btn", "btn-primary", "btn-lg"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "General Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3261 Anmoore Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Brooklyn, NY 11230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "800-123-4567, Fax: 718-724-3312");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Operating Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mon-Fri: 9:00 am \u2013 5:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sat-Sun: 11:00 am \u2013 16:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_34_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ContactUsComponent_div_41_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContactUsComponent_div_46_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ContactUsComponent_div_51_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.message.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.message.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HttpService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    /*=====Login Section Apis Start======*/
    getUserLogin(loginInfo) {
        return this.http.post(this.url + '/user/login', loginInfo);
    }
    /*=====Login Section Apis End======*/
    /*=====Signup Section Apis Start======*/
    getUserSignup(signupInfo) {
        return this.http.post(this.url + '/user/registeration', signupInfo);
    }
    /*=====Signup Section Apis End======*/
    /*=====Profile Section Apis Start======*/
    getUpdateProfile(signupInfo, id) {
        return this.http.post(this.url + '/user/update/' + id, signupInfo);
    }
    getEditMyProfile(id) {
        return this.http.get(this.url + '/user/getSingleUser/' + id);
    }
    /*===== Profile Section Apis End======*/
    /*=====Stepper Form Apis Start======*/
    getStepTwoChooseSer() {
        return this.http.get(this.url + '/user/getmainservicelist');
    }
    getStepTwoAdditional() {
        return this.http.get(this.url + '/user/getadditionalservicelist');
    }
    getServiceProviderReg(serProviderRegInfo) {
        return this.http.post(this.url + '/user/serviceprovideregisteration/', serProviderRegInfo);
    }
    getEmailCheck(email) {
        return this.http.post(this.url + '/user/chekemailexist', { email: email });
    }
    getPostCodeCheck(pin_code_id) {
        return this.http.post(this.url + '/user/chekepostcodeexist', { pin_code: pin_code_id });
    }
    getSingleServideProvider(id) {
        return this.http.get(this.url + '/user/chekepostcodeexist' + id);
    }
    getPostCode() {
        return this.http.get(this.url + '/user/postcodelist');
    }
    /*===== Stepper Form Apis End======*/
    /*=====Service Profile Section Apis Start======*/
    getEditServiceProfile(id) {
        return this.http.get(this.url + '/user/getsingleidverification/' + id);
    }
    getUpdateServiceProfile(serProviderRegInfo, id) {
        return this.http.post(this.url + '/user/updateserviceprovider/' + id, serProviderRegInfo);
    }
    checkPassword(changepassword, id) {
        return this.http.post(this.url + '/user/checkproviderpassexist/' + id, { currentPass: changepassword });
    }
    confrmPaswrdChange(changepassword, id) {
        return this.http.post(this.url + '/user/changeproviderpass/' + id, changepassword);
    }
    getReqInServiceProvider(data) {
        return this.http.post(this.url + '/api/getServiceReqInprovider', data);
    }
    /*=====Service Profile Section Apis End======*/
    post(url, value) {
        const URL = this.url + url;
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(URL, value, httpOptions);
    }
    get(url1) {
        console.log(this.url + url1);
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.get(this.url + url1, httpOptions);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "NkdY":
/*!********************************************!*\
  !*** ./src/app/users/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FAQComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FAQComponent_div_69_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const s_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.open(i_r3, s_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "headingOne", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", i_r3 == 0 ? "btn btn-link btn-block text-left" : "btn btn-link btn-block text-left collapsed", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "devId", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + s_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r2.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", i_r3 == 0 ? "collapse show" : "collapse", " devNone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("aria-labelledby", "headingOne", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", s_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r2.answer, " ");
} }
function FAQComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sorry , no question found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FAQComponent {
    constructor(service) {
        this.service = service;
        this.FAQData = [];
        this.userId = localStorage.getItem('userId');
        this.Category_id = window.location.href.split('faq/')[1];
    }
    ngOnInit() {
        this.getCatehory();
        var siderbar = document.getElementsByClassName('sidebar-wrapper');
        if (this.userId == null) {
            siderbar[0].setAttribute('style', 'display:none;');
        }
        else {
            siderbar[0].removeAttribute('style');
        }
    }
    getCatehory() {
        this.service.get('/user/getFaqList/' + this.Category_id)
            .subscribe(res => {
            this.FAQData = res['data'];
        });
    }
    open(i, id) {
        var classs = document.getElementById(id).getAttribute('class');
        console.log('ccc', classs);
        if (classs == 'collapse devNone') {
            document.getElementById(id).classList.add('show');
            document.getElementById('devId' + i).classList.remove('collapsed');
        }
        else {
            document.getElementById(id).classList.remove('show');
            document.getElementById('devId' + i).classList.add('collapsed');
        }
    }
}
FAQComponent.ɵfac = function FAQComponent_Factory(t) { return new (t || FAQComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
FAQComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAQComponent, selectors: [["app-faq"]], decls: 71, vars: 2, consts: [[1, "aouth-container", "lg-container"], [1, "sidebar-wrapper"], [1, "sidebar-inner"], [1, "toggle-mobile"], [1, "user-info"], [1, "user-photo"], [1, "user-photo-inner"], ["src", "assets/images/user-13.005c80e1.png"], [1, "user-name", "text-white"], [1, "btn", "btn-warning", "rounded-pill", "d-block", "mb-10"], [1, "fas", "fa-dice-five"], [1, "text-white", "mb-0"], [1, "user-navs"], [1, "list-inline"], [1, "active"], ["href", "", "data-fa-icon", "\uF015"], ["href", "", "data-fa-icon", "\uF562"], ["href", "", "data-fa-icon", "\uF0C0"], ["href", "", "data-fa-icon", "\uF3C5"], ["href", "", "data-fa-icon", "\uF53D"], ["href", "", "data-fa-icon", "\uF069"], ["href", "", "data-fa-icon", "\uF128"], ["href", "", "data-fa-icon", "\uF49E"], ["href", "", "data-fa-icon", "\uF3C1"], ["href", "", "data-fa-icon", "\uF1F8"], ["href", "", "data-fa-icon", "\uF2F5"], [1, "container"], [1, "main-content"], [1, "row", "faq-contents"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "faq-graphic"], ["src", "assets/images/faq-graphic.png"], [1, "row"], [1, "po-sub-title"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "about-services-area"], [1, "faqs-accordian"], ["id", "accordionExample", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card"], [1, "card-header", 3, "id"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "aria-expanded", "true", "aria-controls", "collapseOne", 3, "id", "click"], ["data-parent", "#accordionExample", 3, "aria-labelledby"], [1, "card-body"]], template: function FAQComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Eduardo Marcos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 0 Happy Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "eduardo4595");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Membership Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "My Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "My Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Payment Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Invite a Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "My Bonus Cleaning Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Delete My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "[] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "You can find Your answers here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, FAQComponent_div_69_Template, 8, 13, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, FAQComponent_div_70_Template, 2, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.FAQData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.FAQData.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FAQComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "OAAa":
/*!**********************************************!*\
  !*** ./src/app/services/variable.service.ts ***!
  \**********************************************/
/*! exports provided: VariableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableService", function() { return VariableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VariableService {
    constructor() {
        this.logout = false; /*------Show logout button in dashboard page------*/
        this.login = true; /*------Show login button in home  page------*/
    }
}
VariableService.ɵfac = function VariableService_Factory(t) { return new (t || VariableService)(); };
VariableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VariableService, factory: VariableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OTVi":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "RdVG":
/*!************************************************!*\
  !*** ./src/app/pages/blogs/blogs.component.ts ***!
  \************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlogsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["app-blogs"]], decls: 2, vars: 0, template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blogs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogs',
                templateUrl: './blogs.component.html',
                styleUrls: ['./blogs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RqzA":
/*!********************************************************************!*\
  !*** ./src/app/users/payment-options/payment-options.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOptionsComponent", function() { return PaymentOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class PaymentOptionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentOptionsComponent.ɵfac = function PaymentOptionsComponent_Factory(t) { return new (t || PaymentOptionsComponent)(); };
PaymentOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentOptionsComponent, selectors: [["app-payment-options"]], decls: 115, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "po-sub-title"], [1, "po-options-grid"], [1, "po-grid-item"], [1, "selectable-box"], ["type", "checkbox", "name", "", "name", "credit-card", "id", "credit-card", 1, "chk-box"], ["for", "credit-card"], ["type", "checkbox", "name", "", "name", "debit-card", "id", "debit-card", 1, "chk-box"], ["for", "debit-card"], ["type", "checkbox", "name", "", "name", "mb-way", "id", "mb-way", 1, "chk-box"], ["for", "mb-way"], ["type", "checkbox", "name", "", "name", "paypal", "id", "paypal", 1, "chk-box"], ["for", "paypal"], [1, "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "po-card-preview"], [1, "po-card-container"], [1, "po-card-inner"], [1, "po-card-logo"], ["src", "./assets/images/visa.png"], [1, "po-card-number"], [1, "po-card-info"], [1, "info-item"], [1, "info-title-sm"], [1, "info-title-lg"], [1, "po-card-bg", 2, "background-image", "url(./assets/images/card-bg.png)"], [1, "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "po-payment"], [1, "row", "form-row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-20"], [1, "form-group", "form-field"], [1, "form-field__control"], ["id", "card-number", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "card-number", 1, "form-field__label"], [1, "col-xl-7", "col-lg-7", "col-sm-6", "col-xs-12"], ["id", "security-code", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "security-code", 1, "form-field__label"], [1, "col-xl-5", "col-lg-5", "col-sm-6", "col-xs-12"], ["id", "validade", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "validade", 1, "form-field__label"], [1, "col-xl-4", "col-lg-5", "col-sm-6", "col-xs-12"], ["id", "cvv", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "cvv", 1, "form-field__label"], [1, "col-xl-8", "col-lg-7", "col-sm-6", "col-xs-12"], [1, "form-field__control", "select-box"], [1, "select"], ["id", "pay", 1, "form-field__input"], ["value", ""], ["for", "pay", 1, "form-field__label"], [1, "row", "btn-row", "mt-20"], [1, "btn", "btn-primary", "d-block", "rounded-pill", "btn-lg", 2, "min-width", "150px"]], template: function PaymentOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Payment Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pick A Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Credit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Debit Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MB Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "4642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "9900");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Nome como est\u00E1 no cart\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "DIOGO C FERREIRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Validade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "09/23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Security Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Validade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Pay - R$120,00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Item 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Item 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Item 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Item 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3BheW1lbnQtb3B0aW9ucy9wYXltZW50LW9wdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-options',
                templateUrl: './payment-options.component.html',
                styleUrls: ['./payment-options.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor() {
        this.title = 'frontened';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/users.module */ "zrcO");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var ngx_autocom_place__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-autocom-place */ "xxS6");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-stripe */ "VFot");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
            _users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_11__["NgxAutocomPlaceModule"], ngx_stripe__WEBPACK_IMPORTED_MODULE_12__["NgxStripeModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].stripe_publishable_key),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
        _users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_11__["NgxAutocomPlaceModule"], ngx_stripe__WEBPACK_IMPORTED_MODULE_12__["NgxStripeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PagesModule"],
                    _users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_11__["NgxAutocomPlaceModule"], ngx_stripe__WEBPACK_IMPORTED_MODULE_12__["NgxStripeModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].stripe_publishable_key),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "1LmZ");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/payment.component */ "5APW");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "rVrE");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "Kbxg");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogs/blogs.component */ "RdVG");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "MiXo");
/* harmony import */ var _deep_cleaning_deep_cleaning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deep-cleaning/deep-cleaning.component */ "mVfj");
/* harmony import */ var _domestic_cleaning_domestic_cleaning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domestic-cleaning/domestic-cleaning.component */ "LI/b");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "o97b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _become_member_step1_step1_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./become-member/step1/step1.component */ "jsSS");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-pdf-viewer */ "IkSl");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "ed8r");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material.module */ "fii1");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");
/* harmony import */ var ngx_autocom_place__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-autocom-place */ "xxS6");

























class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_19__["TimePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["PdfViewerModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(), _material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_22__["NgxAutocomPlaceModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["paymentComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
        _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_7__["BlogsComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _domestic_cleaning_domestic_cleaning_component__WEBPACK_IMPORTED_MODULE_10__["DomesticCleaningComponentComponent"],
        _become_member_step1_step1_component__WEBPACK_IMPORTED_MODULE_17__["Step1Component"], _deep_cleaning_deep_cleaning_component__WEBPACK_IMPORTED_MODULE_9__["DeepCleaningComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_19__["TimePickerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["PdfViewerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"], _material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_22__["NgxAutocomPlaceModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["paymentComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                    _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_7__["BlogsComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"], _domestic_cleaning_domestic_cleaning_component__WEBPACK_IMPORTED_MODULE_10__["DomesticCleaningComponentComponent"],
                    _become_member_step1_step1_component__WEBPACK_IMPORTED_MODULE_17__["Step1Component"], _deep_cleaning_deep_cleaning_component__WEBPACK_IMPORTED_MODULE_9__["DeepCleaningComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_19__["TimePickerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_18__["PdfViewerModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot(), _material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_21__["OwlNativeDateTimeModule"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_22__["NgxAutocomPlaceModule"]
                ],
                entryComponents: [_payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["paymentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fii1":
/*!******************************************!*\
  !*** ./src/app/pages/material.module.ts ***!
  \******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






































// import { UiSwitchModule } from 'ngx-toggle-switch';
// import { FuseSharedModule } from '@fuse/shared.module';
// import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_36__["MatRippleModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__["MatSliderModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_35__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "joVJ":
/*!****************************************************!*\
  !*** ./src/app/users/my-team/my-team.component.ts ***!
  \****************************************************/
/*! exports provided: MyTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamComponent", function() { return MyTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");



class MyTeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyTeamComponent.ɵfac = function MyTeamComponent_Factory(t) { return new (t || MyTeamComponent)(); };
MyTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyTeamComponent, selectors: [["app-my-team"]], decls: 71, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-4", "col-lg-5", "col-md-12", "col-sm-12", "col-xs-12"], [1, "my-team-image"], ["src", "./assets/images/my-team.png"], [1, "col-xl-8", "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12"], [1, "mb-10"], [1, "theme-color", "mb-15", "d-block"], [1, "theme-color", "mt-30", "mb-10"], [1, "my-team-swiper"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "mt-box"], [1, "mt-photo"], ["src", "./assets/images/mt-image-1.png"], ["src", "./assets/images/mt-image-2.png"], ["src", "./assets/images/mt-image-3.png"], ["src", "images/mt-image-3.png"], [1, "swiper-pagination", "team-pagination"], [1, "action-btn"], ["href", "", 1, "btn", "btn-primary", "rounded-pill"]], template: function MyTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CleanRex Staff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The Cleaning Professionals that you gave higher points than 4 will be automatically added to the \"My Team\" section. You can easily see your team on the order page, and then request one of these Cleaning Professionals for your next service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "John Watson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(8 + Years Experience)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Angelika Watson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Milagros Jee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Serilda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Angelika Watson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Milagros Jee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Serilda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Home Cleaning Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL215LXRlYW0vbXktdGVhbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-team',
                templateUrl: './my-team.component.html',
                styleUrls: ['./my-team.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jsSS":
/*!**************************************************************!*\
  !*** ./src/app/pages/become-member/step1/step1.component.ts ***!
  \**************************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ "4SUy");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/validations.service */ "+Zsy");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/function.service */ "1uHF");
/* harmony import */ var _services_variable_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/variable.service */ "OAAa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_autocom_place__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-autocom-place */ "xxS6");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "ed8r");














function Step1Component_div_0_img_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 53);
} }
function Step1Component_div_0_img_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 54);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function Step1Component_div_0_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name length should be minimum 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r6.stepOneForm.controls["name"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r6.stepOneForm.controls.name.hasError("minlength"));
} }
function Step1Component_div_0_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Invalid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r7.stepOneForm.controls["email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r7.stepOneForm.controls["email"].errors.pattern);
} }
function Step1Component_div_0_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile No. is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mobile No. length should be minimum 8 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r8.stepOneForm.controls["mobile"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r8.stepOneForm.controls["mobile"].hasError("minlength"));
} }
function Step1Component_div_0_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Password length should be minimum 6 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r9.stepOneForm.controls["password"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r9.stepOneForm.controls["password"].hasError("minlength"));
} }
const _c0 = function (a1, a2) { return { "fa": true, "fa-eye": a1, "fa-eye-slash": a2 }; };
function Step1Component_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_0_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.back_basicInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_0_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.step1_back_verify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_0_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.step1_back_available(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Availability ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Waiting for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Basic Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_0_Template_input_change_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSingleFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, Step1Component_div_0_img_56_Template, 1, 0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, Step1Component_div_0_img_57_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_0_Template_input_change_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.func.addFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, Step1Component_div_0_div_64_Template, 5, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_0_Template_input_change_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.func.addFocus(); })("change", function Step1Component_div_0_Template_input_change_68_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.emailCheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, Step1Component_div_0_div_71_Template, 5, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_0_Template_input_change_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.func.addFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, Step1Component_div_0_div_78_Template, 5, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_0_Template_input_change_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.func.addFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_0_Template_a_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showHidePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, Step1Component_div_0_div_87_Template, 5, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_0_Template_button_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.submitForm1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.stepOneForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectImg == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepOneForm.controls["name"].errors && (!ctx_r0.stepOneForm.controls["name"].pristine || ctx_r0.submitted || ctx_r0.stepOneForm.controls["name"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepOneForm.controls["email"].errors && (!ctx_r0.stepOneForm.controls["email"].pristine || ctx_r0.submitted || ctx_r0.stepOneForm.controls["email"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepOneForm.controls["mobile"].errors && (!ctx_r0.stepOneForm.controls["mobile"].pristine || ctx_r0.submitted || ctx_r0.stepOneForm.controls["mobile"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.showHideBtn ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !ctx_r0.showHideBtn, ctx_r0.showHideBtn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepOneForm.controls["password"].errors && (!ctx_r0.stepOneForm.controls["password"].pristine || ctx_r0.submitted || ctx_r0.stepOneForm.controls["password"].touched));
} }
function Step1Component_div_1_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Location is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r22.stepTwoForm.controls["location"].errors.required);
} }
function Step1Component_div_1_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Type is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r23.stepTwoForm.controls["provider_type"].errors.required);
} }
function Step1Component_div_1_div_89_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Team Size is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r30.stepTwoForm.controls["team_size"].errors.required);
} }
function Step1Component_div_1_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_1_div_89_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.func.addFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Team Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Step1Component_div_1_div_89_div_6_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.team_valid && ctx_r24.stepTwoForm.controls["team_size"].errors && (!ctx_r24.stepTwoForm.controls["team_size"].pristine || ctx_r24.submitted || ctx_r24.stepTwoForm.controls["team_size"].touched));
} }
function Step1Component_div_1_div_96_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 100);
} }
const _c1 = function (a0) { return [a0]; };
function Step1Component_div_1_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_div_96_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const img_r33 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.imageChoose(img_r33.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Step1Component_div_1_div_96_span_6_Template, 1, 0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r33.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, img_r33.selected == "Selected" ? "mt-25 theme-color" : "mt-25"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r33.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, img_r33.selected == "Choose" ? "btn btn-outline-secondary rounded-pill" : "btn btn-primary rounded-pill"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", img_r33.selected == "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r33.selected);
} }
function Step1Component_div_1_div_103_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 100);
} }
function Step1Component_div_1_div_103_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_div_103_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const add_r37 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.imageAdd(add_r37.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Step1Component_div_1_div_103_span_6_Template, 1, 0, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const add_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", add_r37.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, add_r37.selected == "Selected" ? "mt-25 theme-color" : "mt-25"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](add_r37.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, add_r37.selected == "Choose" ? "btn btn-outline-secondary rounded-pill" : "btn btn-primary rounded-pill"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", add_r37.selected == "Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](add_r37.selected);
} }
function Step1Component_div_1_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "VAT Number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r27.stepTwoForm.controls["vat_number"].errors.required);
} }
function Step1Component_div_1_div_125_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_div_125_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const i_r42 = ctx.index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.closeImage(i_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_div_125_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const i_r42 = ctx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.newTabImage(i_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", url_r41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function Step1Component_div_1_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rate Per Hour is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r29.stepTwoForm.controls["rate_per_hour"].errors.required);
} }
function Step1Component_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.back_basicInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.step2_back_verify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_Template_div_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.step2_back_available(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Availability ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Waiting for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "ID Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Service Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedPlace", function Step1Component_div_1_Template_input_selectedPlace_60_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.placeChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, Step1Component_div_1_div_63_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_1_Template_input_change_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.func.addFocus(); })("click", function Step1Component_div_1_Template_input_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.check_type_individual(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Individual");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_Template_input_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.check_type_public(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_1_Template_input_change_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.func.addFocus(); })("click", function Step1Component_div_1_Template_input_click_85_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.check_type_private(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, Step1Component_div_1_div_88_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, Step1Component_div_1_div_89_Template, 7, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Choose Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, Step1Component_div_1_div_96_Template, 8, 10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Additional Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, Step1Component_div_1_div_103_Template, 8, 10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "VAT Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_1_Template_input_change_111_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.func.addFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "VAT Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, Step1Component_div_1_div_114_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_1_Template_input_change_119_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Upload Documents: ID, Criminal Record, Proof of address 1, Proof of address 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, Step1Component_div_1_div_125_Template, 4, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Step1Component_div_1_Template_input_change_129_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.func.addFocus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Rate per hour (Per member)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, Step1Component_div_1_div_132_Template, 3, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_1_Template_button_click_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.submitForm2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.stepTwoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stepTwoForm.controls["location"].errors && (!ctx_r1.stepTwoForm.controls["location"].pristine || ctx_r1.submitted || ctx_r1.stepTwoForm.controls["location"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stepTwoForm.controls["provider_type"].errors && (!ctx_r1.stepTwoForm.controls["provider_type"].pristine || ctx_r1.submitted || ctx_r1.stepTwoForm.controls["provider_type"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.TeamSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.service_obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.additional_obj);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stepTwoForm.controls["vat_number"].errors && (!ctx_r1.stepTwoForm.controls["vat_number"].pristine || ctx_r1.submitted || ctx_r1.stepTwoForm.controls["vat_number"].touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.stepTwoForm.controls["rate_per_hour"].errors && (!ctx_r1.stepTwoForm.controls["rate_per_hour"].pristine || ctx_r1.submitted || ctx_r1.stepTwoForm.controls["rate_per_hour"].touched));
} }
function Step1Component_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_2_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.back_basicInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_2_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.back_verify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_2_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.back_available(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Availability ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Waiting for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Monday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "ejs-timepicker", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "ejs-timepicker", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Tuesday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "ejs-timepicker", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "ejs-timepicker", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Wednesday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "ejs-timepicker", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "ejs-timepicker", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Thursday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "ejs-timepicker", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "ejs-timepicker", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Friday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "ejs-timepicker", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "ejs-timepicker", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Saturday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "ejs-timepicker", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "ejs-timepicker", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sunday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "ejs-timepicker", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "ejs-timepicker", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Step1Component_div_2_Template_button_click_154_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.submitForm3(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.stepThreeForm);
} }
function Step1Component_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Availability ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Waiting for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Thankyou for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " submitting your request.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Your request is in progress. We'll review and email you once your profile if approved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
//enable ripple style
Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__["enableRipple"])(true);
class Step1Component {
    constructor(fb, router, service, validation, toastr, func, variable) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.validation = validation;
        this.toastr = toastr;
        this.func = func;
        this.variable = variable;
        this.showHideBtn = true;
        this.step1 = true;
        this.imageId = [];
        this.addImageId = [];
        // public resultname: any = '';
        this.images = [];
        this.previewImg = [];
        this.doc = [];
        this.team_valid = false;
        // PostId;
        this.selectedFile = null;
        this.fileTYpe = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
        // logoPreview;
        this.selectDoc = false;
        this.url = '';
        this.selectImage = false;
        /*========== Step Form2 Image List End Here========*/
        this.lat = 0;
        this.lng = 0;
    }
    ngOnInit() {
        this.createForm1();
        this.createForm2();
        this.createForm3();
        this.getImageChooseSerList();
        this.getImageAdditionalSerList();
        this.postCodeList();
    }
    /*==========Step Form1 Value Start Here========*/
    createForm1() {
        this.stepOneForm = this.fb.group({
            email: ['', this.validation.email_validator],
            password: ['', this.validation.password_validator],
            name: ['', this.validation.name_validation],
            mobile: ['', this.validation.mobile_validator],
            image: [],
        });
    }
    /*==========Step Form1 Value Start Here========*/
    /*========== Step Form2 Value Start Here========*/
    createForm2() {
        this.stepTwoForm = this.fb.group({
            pin_code_id: ['0'],
            location: ['', this.validation.onlyRequired_validator],
            provider_type: ['', this.validation.onlyRequired_validator],
            team_size: ['', this.validation.onlyRequired_validator],
            vat_number: ['', this.validation.onlyRequired_validator],
            rate_per_hour: ['', this.validation.onlyRequired_validator],
            service_id: [''],
            doc_name: [''],
        });
    }
    /*========== Step Form2 Value End Here========*/
    /*========== Step Form3 Value Start Here========*/
    createForm3() {
        this.stepThreeForm = this.fb.group({
            monday_start: [''],
            monday_end: [''],
            tuesday_start: [''],
            tuesday_end: [''],
            wednesday_start: [''],
            wednesday_end: [''],
            thusday_start: [''],
            thusday_end: [''],
            friday_start: [''],
            friday_end: [''],
            saturday_start: [''],
            saturday_end: [''],
            sunday_start: [''],
            sunday_end: [''],
        });
    }
    /*========== Step Form3 Value End Here========*/
    /*========== Step Form2 Image List Start Here========*/
    getImageChooseSerList() {
        this.service.getStepTwoChooseSer()
            .subscribe(res => {
            console.log("api responsee", res);
            this.service_obj = res['data'];
            console.log("xxxxxxxxx", this.service_obj);
            this.service_obj.map(obj => {
                obj.selected = "Choose";
            });
        });
    }
    placeChanged(place) {
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
        console.log('dddddddd', this.lat, this.lng);
        this.stepTwoForm.patchValue({ location: place.vicinity });
    }
    /*========== Step Form2 Add Image List Start Here========*/
    getImageAdditionalSerList() {
        this.service.getStepTwoAdditional().subscribe(res => {
            console.log("api responsee", res);
            this.additional_obj = res['data'];
            this.additional_obj.map(obj => {
                obj.selected = "Choose";
            });
        });
    }
    /*========== Step Form2 Add Image List End Here========*/
    /*==========Step2 Choose Image Start Here========*/
    imageChoose(id) {
        if (this.imageId.length) {
            var a = this.imageId.includes(id);
            if (a) {
                var b = this.imageId.indexOf(id);
                var c = this.imageId.splice(b, id);
                this.service_obj.map(obj => {
                    if (obj.id === id) {
                        obj.selected = "Choose";
                    }
                });
            }
            else {
                this.selected = "selected";
                this.service_obj.map(obj => {
                    if (obj.id === id) {
                        obj.selected = "Selected";
                    }
                });
                this.imageId.push(id);
                console.log("push", this.imageId);
            }
        }
        else {
            this.imageId.push(id);
            this.service_obj.map(obj => {
                if (obj.id === id) {
                    obj.selected = "Selected";
                }
            });
            console.log("push", this.imageId);
        }
    }
    /*==========Step2 Choose Image End Here========*/
    /*==========Step2 Additional Image Start Here========*/
    imageAdd(id) {
        if (this.addImageId.length) {
            var a = this.addImageId.includes(id);
            if (a) {
                var b = this.addImageId.indexOf(id);
                var c = this.addImageId.splice(b, id);
                this.additional_obj.map(obj => {
                    if (obj.id === id) {
                        obj.selected = "Choose";
                    }
                });
            }
            else {
                this.selected = "selected";
                this.additional_obj.map(obj => {
                    if (obj.id === id) {
                        obj.selected = "Selected";
                    }
                });
                this.addImageId.push(id);
                console.log("push", this.addImageId);
            }
        }
        else {
            this.addImageId.push(id);
            this.additional_obj.map(obj => {
                if (obj.id === id) {
                    obj.selected = "Selected";
                }
            });
            console.log("push", this.addImageId);
        }
    }
    /*==========Step2 Additional Image End Here========*/
    /*==========Step1 Email Check Start Here========*/
    emailCheck() {
        this.service.getEmailCheck(this.stepOneForm.value.email).subscribe(msg => {
            console.log("api response", msg);
            this.email_value = msg;
            console.log("JSON", this.email_value);
            this.email_msgs = msg;
            if (this.email_value.status == 1) {
                this.toastr.success(this.email_msgs.msg, '', { timeOut: 2000 });
            }
        });
    }
    /*==========Step1 Email Check End Here========*/
    /*==========Step2 Type Check Start Here========*/
    check_type_public() {
        this.TeamSize = true;
        this.team_valid = true;
        this.func.setBack();
    }
    check_type_individual() {
        this.TeamSize = false;
        this.team_valid = false;
    }
    check_type_private() {
        this.TeamSize = false;
        this.team_valid = false;
    }
    /*==========Step2 Type Check End Here========*/
    /*==========Step2 Postcode Check Start Here========*/
    postCheck() {
        this.service.getPostCodeCheck(this.stepTwoForm.value.pin_code_id).subscribe(msg => {
            console.log("api response", msg);
            this.post_value = msg;
            if (this.post_value.status === 1) {
                this.post_obj = msg.data[0];
                this.post_value = msg;
            }
        });
    }
    postCodeList() {
        this.service.getPostCode()
            .subscribe(res => {
            console.log("api responsee", res);
            this.postObj = res['data'];
        });
    }
    onChange(id) {
        this.newpostVal = id.target.value;
    }
    /*==========Step2 Postcode Check End Here========*/
    /*==========Step1 Add Start Here========*/
    submitForm1() {
        this.submitted = true;
        if (this.stepOneForm.invalid) {
            return;
        }
        this.submitted = false;
        if (this.stepOneForm.value.name === '' || this.stepOneForm.value.name === undefined ||
            this.stepOneForm.value.email === '' || this.stepOneForm.value.email === undefined ||
            this.stepOneForm.value.password === '' || this.stepOneForm.value.password === undefined ||
            this.stepOneForm.value.mobile === '' || this.stepOneForm.value.mobile === undefined) {
            this.step2 = false;
            this.step1 = true;
            this.step3 = false;
            this.step4 = false;
        }
        else {
            this.step1 = false;
            this.step3 = false;
            this.step4 = false;
            if (this.email_value.status == 1) {
                this.step2 = false;
                this.step1 = true;
                this.step3 = false;
                this.step4 = false;
                this.toastr.success("Email already exist", '', { timeOut: 2000 });
            }
            else {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                this.step2 = true;
                this.step1 = false;
                this.step3 = false;
                this.step4 = false;
            }
        }
    }
    /*==========Step1 Add End Here========*/
    /*==========Step2 Add Start Here========*/
    submitForm2() {
        if (this.stepTwoForm.value.pin_code_id === '' || this.stepTwoForm.value.pin_code_id === undefined ||
            this.stepTwoForm.value.provider_type === '' || this.stepTwoForm.value.provider_type === undefined ||
            this.stepTwoForm.value.vat_number === '' || this.stepTwoForm.value.vat_number === undefined ||
            this.stepTwoForm.value.rate_per_hour === '' || this.stepTwoForm.value.rate_per_hour === undefined ||
            (this.team_valid && (this.stepTwoForm.value.team_size === '' || this.stepTwoForm.value.team_size === undefined))) {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
        }
        else {
            if (this.imageId.length == 0) {
                this.step2 = true;
                this.toastr.error("Select services", '', { timeOut: 2000 });
            }
            else if (this.images.length == 0) {
                this.step2 = true;
                this.toastr.error("Id Proof is required", '', { timeOut: 2000 });
            }
            else {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                this.step3 = true;
                this.step1 = false;
                this.step2 = false;
                this.step4 = false;
            }
        }
        this.submitted = true;
        if (this.stepTwoForm.invalid) {
            return;
        }
        this.submitted = false;
    }
    /*==========Step2 Add End Here========*/
    /*==========Multiple Image Function Start Here========*/
    onFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            var fileName = event.target.files[0].name;
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                const fType = event.target.files[i].type;
                const type = this.fileTYpe.find(function (element) {
                    if (element === fType) {
                        console.log('innerrrrrr');
                        return true;
                    }
                });
                reader.onload = (event) => {
                    if (fType === 'application/pdf' || fType === 'pdf') {
                        this.images.push("./assets/images/pdf.png");
                        this.previewImg.push(event.target.result);
                    }
                    else {
                        if (fType === 'application/msword' || fType === 'msword') {
                            this.images.push("./assets/images/doc.png");
                            this.previewImg.push(event.target.result);
                        }
                        else {
                            this.images.push(event.target.result);
                            this.previewImg.push(event.target.result);
                        }
                    }
                };
                this.doc.push(event.target.files[i]);
                this.fileimagetype = event.target.files[i].type;
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }
    /*==========Multiple Image Function End Here========*/
    /*==========Image Close Function Start Here========*/
    closeImage(i) {
        this.images.splice(i, 1);
        this.doc.splice(i, 1);
        this.previewImg.splice(i, 1);
    }
    /*==========Image Close Function End Here========*/
    /*==========Single Image Function Start Here========*/
    onSingleFileChange(event) {
        this.selectImage = true;
        this.selectImg = false;
        this.selectedFile = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (event) => {
                this.url = event.target.result;
            };
        }
    }
    /*==========Single Image Function End Here========*/
    /*==========Time Add AM, PM 12 Hours Function Start Here========*/
    converAmPm(time) {
        var inputEle = time;
        var timeSplit = inputEle.split(':'), hours, minutes, meridian;
        hours = timeSplit[0];
        minutes = timeSplit[1];
        if (time.toLowerCase().includes('am') || time.toLowerCase().includes('pm')) {
            return time;
        }
        else {
            if (hours > 12) {
                meridian = 'PM';
                hours -= 12;
            }
            else if (hours < 12) {
                meridian = 'AM';
                if (hours == 0) {
                    hours = 12;
                }
            }
            else {
                meridian = 'PM';
            }
            return hours + ':' + minutes + ' ' + meridian;
        }
    }
    /*==========Time Add  AM, PM 12 Hours Function End Here========*/
    /*==========Step3 Add Api Start Here========*/
    submitForm3() {
        if ((this.stepThreeForm.value.monday_start === '' && this.stepThreeForm.value.monday_end === '') &&
            (this.stepThreeForm.value.tuesday_start === '' && this.stepThreeForm.value.tuesday_end === '') &&
            (this.stepThreeForm.value.wednesday_start === '' && this.stepThreeForm.value.wednesday_end === '') &&
            (this.stepThreeForm.value.thusday_start === '' && this.stepThreeForm.value.thusday_end === '') &&
            (this.stepThreeForm.value.friday_start === '' && this.stepThreeForm.value.friday_end === '') &&
            (this.stepThreeForm.value.saturday_start === '' && this.stepThreeForm.value.saturday_end === '') &&
            (this.stepThreeForm.value.sunday_start === '' && this.stepThreeForm.value.sunday_end === '')) {
            this.toastr.error("Time Slot is required", '', { timeOut: 2000 });
        }
        else {
            const formData = new FormData();
            for (let img of this.doc) {
                formData.append('doc_name', img);
            }
            for (let id of this.imageId) {
                formData.append('service_id', id);
            }
            for (let id of this.addImageId) {
                formData.append('service_id', id);
            }
            this.stepTwoForm.value.pin_code_id = this.newpostVal;
            this.stepOneForm.value.image = this.selectedFile;
            formData.append('name', this.stepOneForm.value.name);
            formData.append('email', this.stepOneForm.value.email);
            formData.append('password', this.stepOneForm.value.password);
            formData.append('mobile', this.stepOneForm.value.mobile);
            formData.append('image', this.selectedFile);
            formData.append('pin_code_id', this.newpostVal);
            formData.append('provider_type', this.stepTwoForm.value.provider_type);
            formData.append('team_size', this.stepTwoForm.value.team_size);
            formData.append('vat_number', this.stepTwoForm.value.vat_number);
            formData.append('rate_per_hour', this.stepTwoForm.value.rate_per_hour);
            formData.append('monday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.monday_start).format('LT'));
            formData.append('monday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.monday_end).format('LT'));
            formData.append('tuesday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.tuesday_start).format('LT'));
            formData.append('tuesday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.tuesday_end).format('LT'));
            formData.append('wednesday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.wednesday_start).format('LT'));
            formData.append('wednesday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.wednesday_end).format('LT'));
            formData.append('thusday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.thusday_start).format('LT'));
            formData.append('thusday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.thusday_end).format('LT'));
            formData.append('friday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.friday_start).format('LT'));
            formData.append('friday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.friday_end).format('LT'));
            formData.append('saturday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.saturday_start).format('LT'));
            formData.append('saturday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.saturday_end).format('LT'));
            formData.append('sunday_start', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.sunday_start).format('LT'));
            formData.append('sunday_end', moment__WEBPACK_IMPORTED_MODULE_2__(this.stepThreeForm.value.sunday_end).format('LT'));
            formData.append('longitude', this.lng);
            formData.append('latitude', this.lat);
            this.service.getServiceProviderReg(formData).subscribe(res => {
                console.log("api response", res);
                this.reg_Json = res;
                this.reg_msg = res;
                console.log("JSON", this.reg_Json);
                this.step1 = false;
                this.step2 = false;
                this.step3 = false;
                this.step4 = true;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                if (this.reg_msg.status === 1) {
                    this.toastr.success(this.reg_msg.msg, '', { timeOut: 2000 });
                    this.toastr.success(this.reg_msg.msg2, '', { timeOut: 3000 });
                }
                else {
                    this.toastr.error(this.reg_msg.msg, '', { timeOut: 2000 });
                }
            });
        }
    }
    /*==========Step3 Add Api End Here========*/
    /*==========Back Function Start Here========*/
    back_basicInfo() {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.func.setBack();
    }
    step1_back_verify() {
        if (this.stepOneForm.value.name === '' || this.stepOneForm.value.name === undefined ||
            this.stepOneForm.value.email === '' || this.stepOneForm.value.email === undefined ||
            this.stepOneForm.value.password === '' || this.stepOneForm.value.password === undefined ||
            this.stepOneForm.value.mobile === '' || this.stepOneForm.value.mobile === undefined) {
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
            this.step4 = false;
            this.func.setBack();
        }
        else {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
            this.func.setBack();
        }
    }
    step2_back_verify() {
        if (this.stepTwoForm.value.pin_code_id === '' || this.stepTwoForm.value.pin_code_id === undefined ||
            this.stepTwoForm.value.provider_type === '' || this.stepTwoForm.value.provider_type === undefined ||
            this.stepTwoForm.value.vat_number === '' || this.stepTwoForm.value.vat_number === undefined ||
            this.stepTwoForm.value.rate_per_hour === '' || this.stepTwoForm.value.rate_per_hour === undefined ||
            (this.team_valid && (this.stepTwoForm.value.team_size === '' || this.stepTwoForm.value.team_size === undefined))) {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
        }
        else {
            this.step1 = false;
            this.step2 = false;
            this.step3 = true;
            this.step4 = false;
            this.func.setBack();
        }
    }
    step2_back_available() {
        if (
        // this.stepTwoForm.value.pin_code_id === '' || this.stepTwoForm.value.pin_code_id === undefined ||
        this.stepTwoForm.value.provider_type === '' || this.stepTwoForm.value.provider_type === undefined ||
            this.stepTwoForm.value.vat_number === '' || this.stepTwoForm.value.vat_number === undefined ||
            this.stepTwoForm.value.rate_per_hour === '' || this.stepTwoForm.value.rate_per_hour === undefined ||
            (this.team_valid && (this.stepTwoForm.value.team_size === '' || this.stepTwoForm.value.team_size === undefined))) {
            this.step1 = false;
            this.step2 = true;
            this.step3 = false;
            this.step4 = false;
        }
        else {
            this.step1 = false;
            this.step2 = false;
            this.step3 = true;
            this.step4 = false;
            this.func.setBack();
        }
    }
    step3_back_available() {
        if ((this.stepThreeForm.value.monday_start === '' &&
            this.stepThreeForm.value.tuesday_start === '' &&
            this.stepThreeForm.value.wednesday_start === '' &&
            this.stepThreeForm.value.thusday_start === '' &&
            this.stepThreeForm.value.friday_start === '' &&
            this.stepThreeForm.value.saturday_start === '' &&
            this.stepThreeForm.value.sunday_start === '') &&
            (this.stepThreeForm.value.monday_end === '' &&
                this.stepThreeForm.value.tuesday_end === '' &&
                this.stepThreeForm.value.wednesday_end === '' &&
                this.stepThreeForm.value.thusday_end === '' &&
                this.stepThreeForm.value.friday_end === '' &&
                this.stepThreeForm.value.saturday_end === '' &&
                this.stepThreeForm.value.sunday_end === '')) {
            this.toastr.error("Time Slot is required", '', { timeOut: 2000 });
        }
    }
    back_verify() {
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
        this.step4 = false;
        this.func.setBack();
    }
    back_available() {
        this.step1 = false;
        this.step2 = false;
        this.step3 = true;
        this.step4 = false;
        this.func.setBack();
    }
    /*==========Back Function End Here========*/
    /*==========Password Show/Hide Function Start Here========*/
    showHidePassword() {
        this.showHideBtn = this.showHideBtn === false;
    }
    /*==========Password Show/Hide Function End Here========*/
    newTabImage(index) {
        const win = window.open("", "_blank");
        let html = '';
        html += '<html>';
        html += '<body style="margin:0!important">';
        html += '<embed width="100%" height="100%" src="' + this.previewImg[index] + '" type="application/pdf" />';
        html += '</body>';
        html += '</html>';
        setTimeout(() => {
            win.document.write(html);
        }, 0);
        // // this.imgPdf = index;
        // var image = new Image();
        // image.src = this.imgPdf[index];
        // console.log("iiiiiiiiiiiiiiiii",image.src );
        //   this.img
        // var w = window.open(this.imgPdf[index]);
        // // w.document.write(image.outerHTML); 
        // // window.location.href = this.imgPdf[index]; 
        // w.document.close(); 
    }
}
Step1Component.ɵfac = function Step1Component_Factory(t) { return new (t || Step1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_6__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variable_service__WEBPACK_IMPORTED_MODULE_9__["VariableService"])); };
Step1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step1Component, selectors: [["app-step1"]], decls: 4, vars: 4, consts: [["class", "step-1", 4, "ngIf"], [4, "ngIf"], [1, "step-1"], [1, "slider-area--home", "sp-step-banner"], [1, "container", "caption", "pt-190", "pb-70"], [1, "row", "justify-content-center", "w-100"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12", "w-100"], [1, "content-wrap"], [1, "sp-steps-grid"], [1, "grid-item"], [1, "padding-box"], [1, "sp-box", "active", 3, "click"], [1, "active-icon"], [1, "box-ctn"], [1, "fal", "fa-user"], [1, "sp-box", 3, "click"], [1, "fal", "fa-portrait"], [1, "fas", "fa-business-time"], [1, "sp-box"], [1, "fal", "fa-clock"], [1, "image-bg", 2, "background-image", "url('./assets/images/steps-bg.jpg')"], [1, "steps-content-wrapper", "pt-80", "pb-80", "pt-md-60", "pb-md-60", "pt-xs-60", "pb-xs-40"], [1, "container", "lg-container"], [1, "steps-heading", "text-center", "mb-3"], [3, "formGroup"], [1, "row", "form-row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-20"], [1, "sp-photo-wrap", "shadow-sm"], [1, "sp-photo-box"], ["for", "photo_upload", 1, "sp-photo-box"], ["type", "file", "name", "", "id", "photo_upload", "name", "photo_upload", 1, "upload_input", 3, "change"], ["class", "fixImage", "src", "./assets/images/default-user-image.png", 4, "ngIf"], ["class", "fixImage", 3, "src", 4, "ngIf"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-xs-12"], ["id", "nameIdInput", 1, "form-group", "form-field"], ["data-fa-icon", "\uF007", 1, "form-field__control"], ["id", "name", "type", "text", "onKeyPress", "if(this.value.length == 50) return false;", "formControlName", "name", "placeholder", "", 1, "form-field__input", 3, "change"], ["for", "name", 1, "form-field__label"], ["class", "error-msg", 4, "ngIf"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF0E0", 1, "form-field__control"], ["id", "email", "type", "email", "formControlName", "email", "onKeyPress", "if(this.value.length==50) return false;", "placeholder", "", 1, "form-field__input", 3, "change"], ["for", "email", 1, "form-field__label"], ["data-fa-icon", "\uF10B", 1, "form-field__control"], ["id", "mobile", "type", "text", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "mobile", "placeholder", "", 1, "form-field__input", 3, "change"], ["for", "mobile", 1, "form-field__label"], ["data-fa-icon", "\uF023", 1, "form-field__control"], ["onKeyPress", "if(this.value.length==8) return false;", "id", "password", "type", "password", "formControlName", "password", "placeholder", "", 1, "form-field__input", 3, "type", "change"], ["for", "password", 1, "form-field__label"], ["href", "javascript:void(0);", "id", "show", 3, "click"], [1, "input-icon", 3, "ngClass"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "text-center", "mt-30"], [1, "btn", "btn-primary", "rounded-pill", "btn-lg", 2, "min-width", "150px", 3, "click"], ["src", "./assets/images/default-user-image.png", 1, "fixImage"], [1, "fixImage", 3, "src"], [1, "error-msg"], [3, "hidden"], [1, "steps-heading", "text-center", "mb-40"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "row", "justify-content-center"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], ["ngxAutocomPlace", "", "id", "name", "type", "text", "formControlName", "location", 1, "form-field__input", 3, "selectedPlace"], [1, "row", "justify-content-center", "mt-20"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12"], [1, "po-options-grid", "d-block", "m-0"], [1, "selectable-box"], ["type", "radio", "formControlName", "provider_type", "value", "1", "name", "provider_type", "id", "individual", 1, "chk-box", 3, "change", "click"], ["for", "individual"], ["type", "radio", "formControlName", "provider_type", "value", "2", "name", "provider_type", "id", "public", 1, "chk-box", 3, "click"], ["for", "public"], ["type", "radio", "formControlName", "provider_type", "value", "3", "name", "provider_type", "id", "private", 1, "chk-box", 3, "change", "click"], ["for", "private"], ["class", "col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 mt-10", 4, "ngIf"], [1, "row", "justify-content-center", "mt-20", "choose-services"], ["class", "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-20", 4, "ngFor", "ngForOf"], [1, "row", "text-center"], [1, "row", "justify-content-center", "mt-20", "license-number"], ["data-fa-icon", "\uF3ED", 1, "form-field__control"], ["id", "license_number", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "type", "text", "formControlName", "vat_number", "placeholder", "", 1, "form-field__input", 3, "change"], ["for", "license_number", 1, "form-field__label"], [1, "input-btn-small"], [1, "form-field__control"], ["id", "upload_documents", "accept", ".jpg,.jpeg,.png,.pdf,.doc", "type", "file", "multiple", "multiple", "placeholder", "", 1, "form-field__input", "mt-3", "mb-2", 3, "change"], ["role", "alert", 1, "alert", "alert-warning"], ["class", "col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 mb-20", 4, "ngFor", "ngForOf"], ["data-fa-icon", "\uF3D1", 1, "form-field__control"], ["id", "rate", "type", "text", "onkeypress", "return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "rate_per_hour", "placeholder", "", 1, "form-field__input", 3, "change"], ["for", "rate", 1, "form-field__label"], [1, "row", "justify-content-center", "mt-30"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12", "text-center"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12", "mt-10"], ["id", "team_size", "type", "text", "onkeypress", "if(this.value.length==3) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "team_size", "placeholder", "", 1, "form-field__input", 3, "change"], ["for", "team_size", 1, "form-field__label"], [1, "col-xl-4", "col-lg-4", "col-md-6", "col-sm-12", "col-xs-12", "mb-20"], [1, "card", "shadow-sm", "pl-20", "pr-20", "pt-40", "pb-40", "d-block", "text-center"], [3, "src"], [1, "mt-25", 3, "ngClass"], [2, "min-width", "180px", 3, "ngClass", "click"], ["class", "fal fa-check mr-1", 4, "ngIf"], [1, "fal", "fa-check", "mr-1"], [1, "card", "shadow-sm", "pl-20", "pr-20", "pt-40", "pb-40", "d-block"], [3, "ngClass"], [1, "col-xl-2", "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "mb-20"], [1, "card", "shadow-sm"], [1, "close-icon-thumb", 3, "click"], ["id", "idimage", 3, "src", "click"], [1, "sp-box", "active"], [1, "box-ctn", 3, "click"], [1, "row", "justify-content-center", "availability-contents"], [1, "col-xl-9", "col-lg-9", "col-md-12", "col-sm-12", "col-xs-12"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-10"], [1, "abty-box"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "df-item"], [1, "day-name"], [1, "row", "justify-content-end"], [1, "col-lg-6"], [1, "input-group", "mb-0", "mr-sm-2"], ["id", "monday_start", "placeholder", "Start Time", "formControlName", "monday_start", 1, "form-control", "form-control-sm"], ["id", "monday_end", "placeholder", "End Time", "formControlName", "monday_end", 1, "form-control", "form-control-sm"], ["placeholder", "Start Time", "formControlName", "tuesday_start", 1, "form-control", "form-control-sm"], ["placeholder", "End Time", "formControlName", "tuesday_end", 1, "form-control", "form-control-sm"], ["placeholder", "Start Time", "formControlName", "wednesday_start", 1, "form-control", "form-control-sm"], ["placeholder", "End Time", "formControlName", "wednesday_end", 1, "form-control", "form-control-sm"], ["placeholder", "Start Time", "formControlName", "thusday_start", 1, "form-control", "form-control-sm"], ["placeholder", "End Time", "formControlName", "thusday_end", 1, "form-control", "form-control-sm"], ["placeholder", "Start Time", "formControlName", "friday_start", 1, "form-control", "form-control-sm"], ["placeholder", "End Time", "formControlName", "friday_end", 1, "form-control", "form-control-sm"], ["placeholder", "Start Time", "formControlName", "saturday_start", 1, "form-control", "form-control-sm"], ["placeholder", "End Time", "formControlName", "saturday_end", 1, "form-control", "form-control-sm"], ["placeholder", "Start Time", "formControlName", "sunday_start", 1, "form-control", "form-control-sm"], ["placeholder", "End Time", "formControlName", "sunday_end", 1, "form-control", "form-control-sm"], [1, "thankyou-popup"], [1, "card", "rounded", "shadow-sm", "text-center"], ["src", "./assets/images/file.png"], [1, "font-weight-700", "mt-20", "mb-10"]], template: function Step1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Step1Component_div_0_Template, 91, 12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Step1Component_div_1_Template, 137, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Step1Component_div_2_Template, 156, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Step1Component_div_3_Template, 59, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_11__["NgxAutocomPlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_12__["TimePickerComponent"]], styles: [".input-icon[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 18px;\n    right: 20px;\n    color: #495057;\n}\n.steps-content-wrapper[_ngcontent-%COMP%]   .choose-services[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n}\n.license-number[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100px;\n    width: 100px;\n    -o-object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVjb21lLW1lbWJlci9zdGVwMS9zdGVwMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iZWNvbWUtbWVtYmVyL3N0ZXAxL3N0ZXAxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxOHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjNDk1MDU3O1xufVxuLnN0ZXBzLWNvbnRlbnQtd3JhcHBlciAuY2hvb3NlLXNlcnZpY2VzIC5jYXJkIGltZyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cbi5saWNlbnNlLW51bWJlciAuY2FyZCBpbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Step1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-step1',
                templateUrl: './step1.component.html',
                styleUrls: ['./step1.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_6__["ValidationsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _services_function_service__WEBPACK_IMPORTED_MODULE_8__["FunctionService"] }, { type: _services_variable_service__WEBPACK_IMPORTED_MODULE_9__["VariableService"] }]; }, null); })();


/***/ }),

/***/ "mVfj":
/*!****************************************************************!*\
  !*** ./src/app/pages/deep-cleaning/deep-cleaning.component.ts ***!
  \****************************************************************/
/*! exports provided: DeepCleaningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepCleaningComponent", function() { return DeepCleaningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/payment.component */ "5APW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_autocom_place__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-autocom-place */ "xxS6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "ed8r");
















function DeepCleaningComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeepCleaningComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeepCleaningComponent_div_20_div_1_Template, 2, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.location.errors.required);
} }
function DeepCleaningComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeepCleaningComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeepCleaningComponent_div_36_div_1_Template, 2, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.location.errors.required);
} }
function DeepCleaningComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Time is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeepCleaningComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeepCleaningComponent_div_46_div_1_Template, 2, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.booking_time.errors.required);
} }
function DeepCleaningComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bed_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", bed_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bed_r10.name);
} }
function DeepCleaningComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cleaning is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeepCleaningComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeepCleaningComponent_div_62_div_1_Template, 2, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.no_of_cleaning.errors.required);
} }
function DeepCleaningComponent_div_114_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No of pets is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeepCleaningComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeepCleaningComponent_div_114_div_1_Template, 2, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.no_of_pets.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class DeepCleaningComponent {
    constructor(dialog, formBuilder, service, toastr, router) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.minDate = new Date();
        this.submitted = false;
        this.serviceAmount = 0;
        this.Amt = 0;
        this.bedroomData = [];
        this.append_date = '';
        this.lat = 0;
        this.lng = 0;
    }
    ngOnInit() {
        if (localStorage.getItem('user_type') != null) {
            if (localStorage.getItem('user_type') != '1') {
                this.router.navigate(['/']);
            }
        }
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.getserviceDetail();
        this.getAllBedRoom();
        this.registerForm = this.formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            booking_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            booking_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            no_of_cleaning: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cleaning_duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pets: ['no'],
            no_of_pets: [''],
            cleaning_descrip: [''],
            access_property: ['I will be at home', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    perHour(q) {
        this.serviceAmount = this.serviceAmount * parseInt(q);
    }
    getserviceDetail() {
        this.service.get('/user/getServiceById/2')
            .subscribe(res => {
            this.serviceAmount = res['data'][0]['amount'];
            this.Amt = res['data'][0]['amount'];
            this.service_id = res['data'][0]['id'];
            this.service_name = res['data'][0]['service_name'];
        });
    }
    getAllBedRoom() {
        this.service.get('/api/get-all-bedroom-bathroom')
            .subscribe(res => {
            this.bedroomData = res['data'];
            this.registerForm.patchValue({
                no_of_cleaning: res['data'][0]['id'],
                cleaning_duration: res['data'][0]['duration'],
            });
            this.checkingAmount = res['data'][0]['duration'];
            this.serviceAmount = this.Amt * parseInt(res['data'][0]['duration']);
        });
    }
    reduceDuration() {
        if (this.checkingAmount < this.registerForm.value.cleaning_duration) {
            this.registerForm.value.cleaning_duration = this.registerForm.value.cleaning_duration - 1;
            this.serviceAmount = this.Amt * parseInt(this.registerForm.value.cleaning_duration);
        }
    }
    IncressDuration() {
        this.registerForm.value.cleaning_duration = this.registerForm.value.cleaning_duration + 1;
        this.serviceAmount = this.Amt * parseInt(this.registerForm.value.cleaning_duration);
    }
    bedroomChange(evt) {
        console.log(evt);
        this.service.get('/api/get-all-bedroom-bathroom-detail/' + evt)
            .subscribe(res => {
            this.registerForm.value.cleaning_duration = res['data'][0]['duration'];
            this.checkingAmount = res['data'][0]['duration'];
            this.serviceAmount = this.Amt * parseInt(res['data'][0]['duration']);
        });
    }
    changeDate() {
        this.append_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.registerForm.value.booking_date).format('llll');
    }
    get f() { return this.registerForm.controls; }
    placeChanged(place) {
        console.log(place);
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
        this.registerForm.patchValue({ location: place.vicinity });
    }
    petsradio(v) {
        this.registerForm.patchValue({ pets: v });
    }
    manage(v) {
        this.registerForm.patchValue({ access_property: v });
    }
    onSubmit() {
        console.log(this.registerForm.value);
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.registerForm.value.booking_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.registerForm.value.booking_date).format("YYYY-MM-DD");
        this.registerForm.value.booking_time = moment__WEBPACK_IMPORTED_MODULE_2__(this.registerForm.value.booking_time).format('LT');
        this.registerForm.value.service_id = this.service_id.toString();
        this.registerForm.value.service_name = this.service_name;
        this.registerForm.value.coast = this.serviceAmount;
        this.registerForm.value.latitude = this.lat;
        this.registerForm.value.longitude = this.lng;
        this.registerForm.value.user_id = localStorage.getItem('userId');
        this.service.post('/api/check-service-already-booked', this.registerForm.value).subscribe(res => {
            if (res['status'] == true) {
                const dialogRef = this.dialog.open(_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["paymentComponent"], {
                    width: '800px',
                    data: this.registerForm.value
                });
            }
            else {
                this.toastr.success(res['message']);
            }
        });
    }
    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
DeepCleaningComponent.ɵfac = function DeepCleaningComponent_Factory(t) { return new (t || DeepCleaningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DeepCleaningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeepCleaningComponent, selectors: [["app-deep-cleaning"]], decls: 172, vars: 29, consts: [[3, "formGroup", "ngSubmit"], [1, "domestic-cleaning-area", "pb-60"], [1, "container", "lg-container"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "text-center"], [1, "row", "mt-50"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12", "col-xs-12", "col-main-form"], [1, "row", "form-row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-sm-12"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF1AD", 1, "form-field__control", "select-box"], [1, ""], ["id", "city", "type", "text", "ngxAutocomPlace", "", "autocomplete", "off", "formControlName", "location", "placeholder", "", 1, "form-field__input", 3, "ngClass", "selectedPlace"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "city", 1, "form-field__label"], [1, "row", "form-row", "mt-20"], [1, "input-btn-small"], [1, "btn", "btn-outline-primary", "rounded-pill", 3, "click"], ["data-fa-icon", "\uF133", 1, "form-field__control"], ["id", "select_date", "type", "text", "matInput", "", "formControlName", "booking_date", "placeholder", "", 1, "form-field__input", 3, "min", "matDatepicker", "ngClass", "click"], ["matSuffix", "", 3, "for"], ["picker", ""], ["for", "select_date", 1, "form-field__label", 3, "click"], ["data-fa-icon", "\uF254", 1, "form-field__control", "select-box"], ["formControlName", "booking_time", "id", "by_hour", 1, "form-field__input", 3, "ngClass", "click"], ["for", "by_hour", 1, "form-field__label"], [1, "text-msg", "mt-10"], [1, "fal", "fa-clock", "theme-color"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-sm-12"], ["data-fa-icon", "\uF7BD", 1, "form-field__control", "select-box", "font-weight-900"], [1, "select"], ["id", "no_of_bedroom", "formControlName", "no_of_cleaning", 1, "form-field__input", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "no_of_bedroom", 1, "form-field__label"], [2, "padding", "16px 28px", "border-radius", "0", "font-size", "15px", "line-height", "1", "font-weight", "700", "position", "relative", "overflow", "hidden", "z-index", "1", 3, "click"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "pet-selection"], [1, "btn", "btn-secondary", "active"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "no", "id", "option1", "checked", "", 3, "click"], [1, "btn", "btn-secondary"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "dog", "id", "option2", 3, "click"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "cat", "id", "option3", 3, "click"], ["type", "radio", "name", "pets", "formControlName", "pets", "value", "other", "id", "option4", 3, "click"], ["data-fa-icon", "\uF6BE", 1, "form-field__control", "select-box", "font-weight-900"], ["id", "frequency", "formControlName", "no_of_pets", 1, "form-field__input", 3, "ngClass"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "row", "form-row", "mt-20", "delete-account"], [1, "reason-container"], [1, "list-inline"], [1, "rc-box"], ["checked", "", "type", "radio", "name", "a", "id", "1", 1, "rd-box", 3, "click"], ["for", "1"], ["type", "radio", "name", "a", "id", "2", 1, "rd-box", 3, "click"], ["for", "2"], [1, "form-field__control"], ["formControlName", "cleaning_descrip", "id", "notes", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "notes", 1, "form-field__label"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card", "booking-summry", "shadow-sm", "mb-25"], [1, "card-header", "bg-primary"], [1, "text-white", "mb-0"], [1, "card-body"], [1, "summry-listings"], [1, "list-inline", "mb-0"], [1, "sl-item"], [1, "fas", "fa-broom"], [1, "fas", "fa-calendar-minus"], [1, "fas", "fa-hourglass-start"], [1, "card-footer"], [1, "mb-0"], [1, "theme-color"], [1, "btn", "btn-primary", "btn-block", "btn-lg", "rounded-pill"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"]], template: function DeepCleaningComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DeepCleaningComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Deep Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedPlace", function DeepCleaningComponent_Template_input_selectedPlace_19_listener($event) { return ctx.placeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DeepCleaningComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-datepicker", null, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DeepCleaningComponent_div_36_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_label_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r1.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ejs-timepicker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_ejs_timepicker_click_45_listener() { return ctx.changeDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DeepCleaningComponent_div_46_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recommended For 0-29 minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "How many bedrooms and bathrooms need cleaning?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DeepCleaningComponent_Template_select_change_60_listener($event) { return ctx.bedroomChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DeepCleaningComponent_option_61_Template, 2, 2, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DeepCleaningComponent_div_62_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Select the number of bedroom and bathroom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Based on the size of your property we recommend to book a minimum of 6 hours for your Deep Cleaning service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Cleaning Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_a_click_72_listener() { return ctx.reduceDuration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_a_click_76_listener() { return ctx.IncressDuration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Do You Have a Pet?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_84_listener() { return ctx.petsradio("no"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_88_listener() { return ctx.petsradio("dog"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Dog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_92_listener() { return ctx.petsradio("cat"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_96_listener() { return ctx.petsradio("other"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, DeepCleaningComponent_div_114_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "How can your cleaning professional access the property?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_123_listener() { return ctx.manage("I will be at home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "I will be at home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeepCleaningComponent_Template_input_click_128_listener() { return ctx.manage("The keys will be at ... (Concierge, Neighbour, Anywhere within a 5 minute walk)"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "The keys will be at ... (Concierge, Neighbour, Anywhere within a 5 minute walk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Do you have any notes for your cleaning professional?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "textarea", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Please do not under the bed, mind the shower-door please etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Booking Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Deep Cleaning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h4", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Total Cost:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Book Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.submitted && ctx.f.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.location.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.location.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.location.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.booking_time.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.booking_time.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.no_of_cleaning.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bedroomData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.no_of_cleaning.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.registerForm.value.cleaning_duration, " Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.no_of_pets.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.no_of_pets.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.append_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.registerForm.value.cleaning_duration, " / H");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.serviceAmount, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ngx_autocom_place__WEBPACK_IMPORTED_MODULE_8__["NgxAutocomPlaceDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"], _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_13__["TimePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZXAtY2xlYW5pbmcvZGVlcC1jbGVhbmluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeepCleaningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deep-cleaning',
                templateUrl: './deep-cleaning.component.html',
                styleUrls: ['./deep-cleaning.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validations.service */ "+Zsy");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");









function SignupComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name length should be minimum 2 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.signupForm.controls["name"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.signupForm.controls.name.hasError("minlength"));
} }
function SignupComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Invalid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.signupForm.controls["email"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r1.signupForm.controls["email"].errors.pattern);
} }
function SignupComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Password length should be minimum 5 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.signupForm.controls["password"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r2.signupForm.controls["password"].hasError("minlength"));
} }
function SignupComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile No. is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mobile No. length should be minimum 8 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.signupForm.controls["mobile"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.signupForm.controls["mobile"].hasError("minlength"));
} }
function SignupComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Policy is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r4.signupForm.controls["agree"].errors.required);
} }
function SignupComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " I\u2019m very proud to be a part of the Cleanzy family. I feel free and happy now that I get to choose and organize my working schedule. Everyday I wake up excited and motivated to go to my job. Thank you Cleanzy for giving me the opportunity to do so! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Maria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1, a2) { return { "fa": true, "fa-eye": a1, "fa-eye-slash": a2 }; };
class SignupComponent {
    constructor(fb, router, service, validation, toastr) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.validation = validation;
        this.toastr = toastr;
        this.showHideBtn = true;
        /*========== Slider Section Start Here========*/
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            margin: 24,
            items: 3,
            dotsContainer: '.testimonial-pagination',
            navText: ['', ''],
            responsive: {
                1024: {
                    items: 3,
                },
                768: {
                    items: 2,
                },
                320: {
                    items: 1,
                },
            },
        };
    }
    ngOnInit() {
        this.createForm();
    }
    /*========== Slider Section End Here========*/
    /*========== Form Value Start Here========*/
    createForm() {
        this.signupForm = this.fb.group({
            email: ['', this.validation.email_validator],
            password: ['', this.validation.password_validator],
            name: ['', this.validation.name_validation],
            mobile: ['', this.validation.mobile_validator],
            agree: ['', this.validation.onlyRequired_validator],
        });
    }
    /*========== Form Value End Here========*/
    /*==========Register Add Api Start Here========*/
    signup() {
        console.log("form value", this.signupForm.value);
        this.submitted = true;
        if (this.signupForm.invalid) {
            return;
        }
        this.submitted = false;
        this.service.getUserSignup(this.signupForm.value)
            .subscribe(res => {
            console.log("api response", res);
            this.reg_Obj = res;
            console.log("object", this.reg_Obj);
            this.reg_Msg = res;
            if (this.reg_Obj.status === 0) {
                this.toastr.success(this.reg_Msg.msg, '', { timeOut: 3000 });
                this.router.navigate(['/signup']);
            }
            else {
                this.toastr.success(this.reg_Msg.msg, '', { timeOut: 2000 });
                this.router.navigate(['/login']);
            }
        });
    }
    /*==========Register Add Api End Here========*/
    /*==========Password Show/Hide Function Start Here========*/
    showHidePassword() {
        this.showHideBtn = this.showHideBtn === false;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 85, vars: 12, consts: [[1, "lg-container-v2"], [1, "lg-contents-v2"], [1, "container"], [1, "row", "align-items-center"], [1, "col-xl-6", "col-lg-5", "col-md-12", "col-sm-12", "col-xs-12"], [1, "lg-graphic-v2"], ["src", "./assets/images/login-graphic2.png"], [1, "col-xl-6", "col-lg-7", "col-md-12", "col-sm-12", "col-xs-12"], [1, "lg-box-main"], [1, "lg-box-inner"], [1, "text-center"], [1, "row"], [3, "formGroup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "form-group", "form--group"], ["type", "text", "placeholder", "Name & Surname", "onKeyPress", "if(this.value.length == 50) return false;", "formControlName", "name", 1, "form-control"], [1, "fal", "fa-user", "input-icon"], ["class", "error-msg", 4, "ngIf"], ["type", "email", "placeholder", "watson@gmail.com", "onkeypress", "if(this.value.length==50) return false", "formControlName", "email", 1, "form-control"], [1, "fal", "fa-envelope", "input-icon"], ["type", "password", "onKeyPress", "if(this.value.length==8) return false;", "placeholder", "At least 5 character", "formControlName", "password", 1, "form-control", 3, "type"], ["href", "javascript:void(0);", "id", "show", 3, "click"], [1, "input-icon", 3, "ngClass"], ["type", "text", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "placeholder", "+44 7123456789", "formControlName", "mobile", 1, "form-control"], [1, "fal", "fa-phone", "input-icon"], [1, "terms-box", "mt-20"], ["type", "checkbox", "name", "privacy_policy", "formControlName", "agree", "id", "privacy_policy", "required", "", 1, "chk-box"], ["for", "privacy_policy"], ["href", ""], ["type", "checkbox", "name", "terms", "id", "terms", 1, "chk-box"], ["for", "terms"], [1, "form-group", "form--group", "mt-20"], ["type", "button", "value", "Sign Up", "required", "", 1, "btn", "btn-primary", "rounded-pill", "d-block", "w-100", 3, "click"], [1, "signin"], ["routerLink", "/login", "value", "login"], [1, "testimonials-wrapper", "pt-80", "pb-80", "pt-md-60", "pb-md-60", "pt-xs-40", "pb-md-40"], [1, "row", "justify-content-center"], [1, "col-xl-7", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], [1, "section-heading", "text-center", "mb-30"], [1, "mb-15"], [1, "testimonial-swiper"], [3, "options"], ["carouselSlide", ""], [1, "error-msg"], [3, "hidden"], ["data-overlay", "", 1, "testi-box"], [1, "tb-inner"], [1, "stars"], [1, "fas", "fa-star"], [1, "fal", "fa-star"], [1, "testi-content"], [1, "testi-border"], ["src", "./assets/images/testi-box-arrow.png"], [1, "testi-name"], [1, "thumb-bg", 2, "background-image", "url('./assets/images/testimonial-thumb-1.png')"], [1, "thumb-bg", 2, "background-image", "url('./assets/images/testimonial-thumb-2.png')"], [1, "thumb-bg", 2, "background-image", "url('./assets/images/testimonial-thumb-3.png')"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_div_21_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignupComponent_div_28_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_a_click_34_listener() { return ctx.showHidePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignupComponent_div_36_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_div_43_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "I have read and agreed User Agreement and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SignupComponent_div_52_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Please! Of course I accept to receive your offers and promotions! By any means, even by smoke signals if necessary.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_input_click_60_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " signin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "See what our customers have to say about us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Enriched Academy is the quick and easy way for anyone to learn key concepts around saving and investing their money.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "owl-carousel-o", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SignupComponent_ng_template_79_Template, 15, 0, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SignupComponent_ng_template_80_Template, 15, 0, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, SignupComponent_ng_template_81_Template, 15, 0, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, SignupComponent_ng_template_82_Template, 15, 0, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, SignupComponent_ng_template_83_Template, 15, 0, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, SignupComponent_ng_template_84_Template, 15, 0, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["name"].errors && (!ctx.signupForm.controls["name"].pristine || ctx.submitted || ctx.signupForm.controls["name"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["email"].errors && (!ctx.signupForm.controls["email"].pristine || ctx.submitted || ctx.signupForm.controls["email"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showHideBtn ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !ctx.showHideBtn, ctx.showHideBtn));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["password"].errors && (!ctx.signupForm.controls["password"].pristine || ctx.submitted || ctx.signupForm.controls["password"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["mobile"].errors && (!ctx.signupForm.controls["mobile"].pristine || ctx.submitted || ctx.signupForm.controls["mobile"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["agree"].errors && (!ctx.signupForm.controls["agree"].pristine || ctx.submitted || ctx.signupForm.controls["agree"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxRequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselSlideDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    isAuthenticated() {
        const id = this.getUserId();
        let x = false;
        if (id) {
            return true;
        }
        return false;
    }
    getUserId() {
        return JSON.parse(localStorage.getItem('userId'));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 43, vars: 0, consts: [[1, "About-wrapper", "mt-180"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "back-img", "mb-50"], [1, "main-heading"], [1, "col-lg-4"], [1, "service-page", "pt-20", "pl-20", "pr-20", "pb-20"], ["id", "full-page-people", 1, "container-fluid", "mt-50"], [1, "Overlay"], [1, "content", "row"], [1, "col-md-12"], [1, "main-heading", "text-center"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Kelly\u00B4s Army is an online platform that acts as a marketplace connecting clients with cleaning professionals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "To deliver high-end cleaning services to our customers provided by selected cleaning professionals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "We shall use online platforms to connect customers and cleaning professionals seeking to excel and providing a thrust wordy service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Honesty, Client Value, Respect for the individual and Fairness.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Currently focused in Portugal we expect to roll our expertise to other UE countries. Our onboarding process is thorough and for each member our staff we perform a background check which includes references, criminal records, document collection and experience. Additionally, we encourage to follow specific training programs such as Covid-19 safe techniques. Our scoring systems also allow customers to select the best professionals. Our customer loyalty program also allows clients to keep benefiting with our services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "At Kelly\u00B4s Army we believe the positive effect of a clean-living environment. Whether you are a student needing a one-off service, or a busy person needing regular service we understand your requirements. Book your cleaning service with just a few clicks away.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sF6n":
/*!****************************************************************!*\
  !*** ./src/app/users/invite-friend/invite-friend.component.ts ***!
  \****************************************************************/
/*! exports provided: InviteFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendComponent", function() { return InviteFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");



class InviteFriendComponent {
    constructor() { }
    ngOnInit() {
    }
}
InviteFriendComponent.ɵfac = function InviteFriendComponent_Factory(t) { return new (t || InviteFriendComponent)(); };
InviteFriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InviteFriendComponent, selectors: [["app-invite-friend"]], decls: 265, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "bonus-packages"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "mb-10"], [1, "mb-40"], [1, "win-banner"], [1, "font-weight-500", "theme-color", "mb-10"], [1, "font-weight-400"], ["data-overlay", "", 1, "banner-area"], [1, "ba-caption"], [1, "counter-container"], [1, "counter-box"], [1, "bg", 2, "background-image", "url('./assets/images/bonus-banner.png')"], [1, "table-responsive", "mt-30", "mb-0"], [1, "table", "table-striped", "table-bordered", "table-hover", "text-center"], [1, "thead-dark", "bg-primary"], ["scope", "col"], ["src", "./assets/images/map1.png", "width", "40"], ["src", "./assets/images/map2.png", "width", "40"], ["src", "./assets/images/map3.png", "width", "40"], [1, "thead-dark", "bg-gray"], ["src", "./assets/images/star.png", "width", "40"], ["colspan", "2"], [1, "mb-0", "text-white"], [1, "reference-container", "mt-30"], [1, "reference-container", "mb-30"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-sm-6", "col-xs-12"], [1, "card"], ["src", "./assets/images/ref-img-1.png", "alt", "", 1, "card-img-top"], [1, "card-body", "pl-10", "pt-10", "pr-10", "pb-10"], [1, "card-content", "shadow-sm", "rounded", "border", "bg-white", "pl-10", "pt-10", "pr-10", "pb-10"], [1, "card-title"], [1, "card-text"], ["href", "#", 1, "btn", "btn-link", "pl-0", "pr-0", "pt-0", "pb-0"], ["src", "./assets/images/ref-img-2.png", "alt", "", 1, "card-img-top"], ["src", "./assets/images/ref-img-3.png", "alt", "", 1, "card-img-top"], ["src", "./assets/images/ref-img-4.png", "alt", "", 1, "card-img-top"], [1, "row", "no-gutters"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "col-xs-12"], [1, "reference-code"], [1, "mb-0"], [1, "theme-color"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF0E0", 1, "form-field__control", "rounded-0"], ["id", "email", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "email", 1, "form-field__label"], [1, "row", "mt-15"], [1, "col-xl-2", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "btn-row"], ["href", "", 1, "btn", "btn-primary", "rounded-pill", 2, "min-width", "120px"], [1, "col-xl-10", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "sharing-options"], [1, "sharing-box", "border", "shadow-sm"], [1, "fab", "fa-whatsapp", "brand-icon"], [1, "fab", "fa-facebook", "brand-icon"], [1, "fab", "fa-twitter", "brand-icon"], [1, "terms-container", "mt-40"], [1, "list-inline", "list-styled-custom"]], template: function InviteFriendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CleanRex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Bonus Cleaning Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Recommend Cleanzy and win \u20AC 1,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Are you ready to win ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u20AC1,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " by recommending us to your loved ones during September?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "59");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Aras D.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "G\u00F6zde K.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Leigh M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Canan S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Stefano M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Zeynep t.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Emily P.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Julius M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Adriana M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Xavier.B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "54 Eduardo M.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "In the new reference system, both the competition and the reward at the end are much more enjoyable.Here are the steps you need to follow:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Recommend Cleanzy to your loved ones and make them get services with your reference code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Earn 10 Happypoints for each of your friends who gets service with your reference code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Look at the Leadership Board that is being updated during the day, see your rank among the competitors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Complete the competition in 1st place until 30 September 2020 Get \u20AC 1,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Your unique reference code: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "eduardo4595");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Share on Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Share on Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Share on Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "ul", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Our reference competition will continue between 28 August - 30 September 2020.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Our reference competition will be held within the 4 countries (UK, Turkey, Spain and Italy) that we are offering services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Reference codes will be valid for all services we offer on our website. The valid services are: End of Tenancy, Deep cleaning and Domestic cleaning.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Reference prize is 10 GBP for all the services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Users can share their reference codes with as many people as they want.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Precondition to earn points is that the referenced person to create an order on website and the service to get completed. If the referenced person cancels the service before it gets completed the user will not be earning any points.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Services of the reffered people should be completed by end of 30 September 2020.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "The cash prize transfer will be made to the bank account that the winner of the reference competition will choose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2ludml0ZS1mcmllbmQvaW52aXRlLWZyaWVuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InviteFriendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invite-friend',
                templateUrl: './invite-friend.component.html',
                styleUrls: ['./invite-friend.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vN3u":
/*!******************************************************************!*\
  !*** ./src/app/users/still-question/still-question.component.ts ***!
  \******************************************************************/
/*! exports provided: StillQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StillQuestionComponent", function() { return StillQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function StillQuestionComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/faq/", Category_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", Category_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", Category_r1.category_name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class StillQuestionComponent {
    constructor(service) {
        this.service = service;
        this.Category = [];
        this.userId = localStorage.getItem('userId');
    }
    ngOnInit() {
        this.getCatehory();
        var siderbar = document.getElementsByClassName('sidebar-wrapper');
        if (this.userId == null) {
            siderbar[0].setAttribute('style', 'display:none;');
        }
        else {
            siderbar[0].removeAttribute('style');
        }
    }
    getCatehory() {
        this.service.get('/user/getAllFaqCategory')
            .subscribe(res => {
            this.Category = res['data'];
        });
    }
}
StillQuestionComponent.ɵfac = function StillQuestionComponent_Factory(t) { return new (t || StillQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
StillQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StillQuestionComponent, selectors: [["app-still-question"]], decls: 20, vars: 1, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "still-questions"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "mb-10", "text-muted"], [1, "still-banner"], [1, "d-block"], ["src", "./assets/images/professional-cleaning-tips.png"], [1, "st-services-grid"], ["class", "st-service-box", 4, "ngFor", "ngForOf"], [1, "st-service-box"], [1, "st-title-box", 3, "routerLink"], [1, "st-icon-box"], [3, "src"], [1, "shape-bg"], [1, "title-sm", 3, "innerHTML"]], template: function StillQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CleanRex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StillQuestionComponent_div_19_Template, 6, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Category);
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3N0aWxsLXF1ZXN0aW9uL3N0aWxsLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StillQuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-still-question',
                templateUrl: './still-question.component.html',
                styleUrls: ['./still-question.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ "OTVi");





const routes = [
    {
        path: 'pages',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(mod => mod.PagesModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
    {
        path: 'users',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(mod => mod.UsersModule)
    },
    {
        path: 'service-providers',
        loadChildren: () => __webpack_require__.e(/*! import() | service-providers-service-providers-module */ "service-providers-service-providers-module").then(__webpack_require__.bind(null, /*! ./service-providers/service-providers.module */ "NCpr")).then(mod => mod.ServiceProvidersModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
    },
];
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

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "rVrE");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "1LmZ");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/payment.component */ "5APW");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs/blogs.component */ "RdVG");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "MiXo");
/* harmony import */ var _deep_cleaning_deep_cleaning_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deep-cleaning/deep-cleaning.component */ "mVfj");
/* harmony import */ var _domestic_cleaning_domestic_cleaning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domestic-cleaning/domestic-cleaning.component */ "LI/b");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "Kbxg");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "o97b");
/* harmony import */ var _become_member_step1_step1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./become-member/step1/step1.component */ "jsSS");















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about-us', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'blogs', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"] },
    { path: 'deep-cleaning', component: _deep_cleaning_deep_cleaning_component__WEBPACK_IMPORTED_MODULE_7__["DeepCleaningComponent"] },
    { path: 'domestic-cleaning', component: _domestic_cleaning_domestic_cleaning_component__WEBPACK_IMPORTED_MODULE_8__["DomesticCleaningComponentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'service', component: _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__["paymentComponent"] },
    {
        path: 'member',
        children: [
            { path: 'step1', component: _become_member_step1_step1_component__WEBPACK_IMPORTED_MODULE_12__["Step1Component"] },
        ]
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wT5b":
/*!**********************************************************!*\
  !*** ./src/app/users/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validations.service */ "+Zsy");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_variable_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/variable.service */ "OAAa");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function MyProfileComponent_img_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function MyProfileComponent_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MyProfileComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.profileData == null ? null : ctx_r2.profileData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MyProfileComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name Is Required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Min length 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.profileForm.controls["name"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r3.profileForm.controls.name.hasError("minlength"));
} }
function MyProfileComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile No. Is Required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Min Length 8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r4.profileForm.controls["mobile"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r4.profileForm.controls["mobile"].hasError("minlength"));
} }
class MyProfileComponent {
    constructor(route, fb, router, service, validation, toastr, variable) {
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.validation = validation;
        this.toastr = toastr;
        this.variable = variable;
        this.imageSelect = true;
    }
    ngOnInit() {
        this.createForm();
        this.EditProfile();
        this.getprofileData = JSON.parse(localStorage.getItem('profileData'));
        this.getprofileId = JSON.parse(localStorage.getItem('userId'));
        this.variable.login = false;
        this.variable.logout = true;
    }
    /*========== Form Value Start Here========*/
    createForm() {
        this.profileForm = this.fb.group({
            email: ['', this.validation.onlyRequired_validator],
            name: ['', this.validation.name_validation],
            mobile: ['', this.validation.mobile_validator],
            image: ['', this.validation.onlyRequired_validator],
            last_profile_image: [''],
        });
    }
    /*========== Form Value End Here========*/
    /*========== Edit Input Value Start Here========*/
    patchValue() {
        this.profileForm.get('email').patchValue(this.profileData.email);
        this.profileForm.get('name').patchValue(this.profileData.name);
        this.profileForm.get('mobile').patchValue(this.profileData.mobile);
        this.profileForm.get('image').patchValue(this.profileData.image);
        this.profileForm.get('last_profile_image').patchValue(this.profileData.image);
    }
    /*==========Edit Input Value End Here========*/
    /*==========Upload File Start Here========*/
    onFileChange(event) {
        this.imageSelect = false;
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageSrc = reader.result;
                this.profileForm.patchValue({
                    image: reader.result
                });
            };
        }
    }
    /*==========Upload File End Here========*/
    /*==========Profile Edit Api Start Here========*/
    EditProfile() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.service.getEditMyProfile(this.userId).subscribe(res => {
            this.profileData = res['data']['0'];
            this.patchValue();
            localStorage.setItem('userData', JSON.stringify(this.profileData));
        });
    }
    /*==========Profile Edit Api End Here========*/
    /*==========Profile Update Api Start Here========*/
    onSubmit() {
        console.log("form value", this.profileForm.value);
        const form_data = this.profileForm.value;
        form_data.image = this.imageSrc;
        this.imageSelect = false;
        this.submitted = true;
        if (this.profileForm.invalid) {
            return;
        }
        this.submitted = false;
        this.service.getUpdateProfile(this.profileForm.value, this.getprofileId)
            .subscribe(res => {
            console.log("update profile api responsee", res);
            this.profileUpdateData = res.data;
            this.profile_Msg = res;
            this.imageSelect = false;
            console.log("profileUpdateData", this.profileUpdateData);
            localStorage.setItem('userData', JSON.stringify(this.profileUpdateData));
            this.toastr.success(this.profile_Msg.msg, '', { timeOut: 2000 });
            this.router.navigate(['/myprofile']);
            window.location.reload();
        });
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_variable_service__WEBPACK_IMPORTED_MODULE_6__["VariableService"])); };
MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], decls: 44, vars: 6, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "row", "profile-content"], [3, "formGroup"], [1, "profile-cover"], [1, "icons-bg", 2, "background-image", "url('./assets/images/pattern-bg.png')"], [1, "profile-photo-box"], [1, "profile-edit"], ["type", "file", "name", "file", 2, "display", "none", 3, "change"], [1, "profile-photo", "shadow-lg"], ["src", "https://cdn.evbuc.com/eventlogos/91884425/imagenotavailablegrid.jpg", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mt-40"], [1, "row", "form-row"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF007", 1, "form-field__control"], ["id", "name", "type", "text", "onKeyPress", "if(this.value.length == 50) return false;", "formControlName", "name", "placeholder", "Name", 1, "form-field__input"], ["class", "error-msg", 4, "ngIf"], ["data-fa-icon", "\uF0E0", 1, "form-field__control"], ["id", "email", "type", "text", "formControlName", "email", "placeholder", "email", "readonly", "", 1, "form-field__input"], ["data-fa-icon", "\uF095", 1, "form-field__control"], ["id", "telephone", "type", "text", "onkeypress", "if(this.value.length==15) return false;return event.charCode >= 48 && event.charCode <= 57 ||event.charCode == '.' || event.charCode == 250 ", "formControlName", "mobile", "placeholder", "Telephone", 1, "form-field__input"], ["type", "hidden", "formControlName", "last_profile_image"], [1, "row", "btn-row", "mt-20"], [1, "btn", "btn-primary", "d-block", "rounded-pill", "btn-lg", 3, "click"], ["src", "https://cdn.evbuc.com/eventlogos/91884425/imagenotavailablegrid.jpg"], [3, "src"], [1, "error-msg"], [3, "hidden"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MyProfileComponent_Template_input_change_15_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MyProfileComponent_img_18_Template, 1, 0, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MyProfileComponent_img_19_Template, 1, 1, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MyProfileComponent_img_20_Template, 1, 1, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MyProfileComponent_div_29_Template, 5, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MyProfileComponent_div_38_Template, 5, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_42_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.profileData == null ? null : ctx.profileData.image) == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["name"].errors && (!ctx.profileForm.controls["name"].pristine || ctx.submitted || ctx.profileForm.controls["name"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["mobile"].errors && (!ctx.profileForm.controls["mobile"].pristine || ctx.submitted || ctx.profileForm.controls["mobile"].touched));
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".lg-container[_ngcontent-%COMP%]   .form-field__control[_ngcontent-%COMP%]::before {\n    top: 23px;\n}\n\n\n\n.profile-content[_ngcontent-%COMP%]   .profile-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: initial;\n    vertical-align: unset;\n    margin: 0 auto;\n    -o-object-fit: contain;\n       object-fit: contain;\n    position: absolute;\n    max-width: unset;\n    max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozt1Q0FHdUM7O0FBRXZDO0lBQ0ksU0FBUztBQUNiOztBQUVBOzs7dUNBR3VDOztBQUV2QztJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgRm9ybSBQbGFjZWhvbGRlclxuICAgIEFkZGVkIGJ5IElTSElUQVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ubGctY29udGFpbmVyIC5mb3JtLWZpZWxkX19jb250cm9sOjpiZWZvcmUge1xuICAgIHRvcDogMjNweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBGb3JtIFBsYWNlaG9sZGVyXG4gICAgQWRkZWQgYnkgQW1hblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucHJvZmlsZS1jb250ZW50IC5wcm9maWxlLXBob3RvIGltZyB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-profile',
                templateUrl: './my-profile.component.html',
                styleUrls: ['./my-profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: src_app_services_variable_service__WEBPACK_IMPORTED_MODULE_6__["VariableService"] }]; }, null); })();


/***/ }),

/***/ "y8rx":
/*!********************************************************!*\
  !*** ./src/app/users/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_variable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/variable.service */ "OAAa");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");





class DashboardComponent {
    constructor(router, variable) {
        this.router = router;
        this.variable = variable;
        this.UserId = JSON.parse(localStorage.getItem('userId'));
        console.log("user Id", this.UserId);
    }
    ngOnInit() {
        this.variable.login = false;
        this.variable.logout = true;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variable_service__WEBPACK_IMPORTED_MODULE_2__["VariableService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 45, vars: 0, consts: [[1, "aouth-container", "lg-container"], [1, "container"], [1, "main-content"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "col-xl-6", "col-lg-10", "col-md-12", "col-sm-12", "col-xs-12"], [1, "row", "form-row"], [1, "form-group", "form-field"], ["data-fa-icon", "\uF007", 1, "form-field__control"], ["id", "name", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "name", 1, "form-field__label"], ["data-fa-icon", "\uF095", 1, "form-field__control"], ["id", "phone", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "phone", 1, "form-field__label"], ["data-fa-icon", "\uF0E0", 1, "form-field__control"], ["id", "email", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "email", 1, "form-field__label"], ["data-fa-icon", "\uF023", 1, "form-field__control"], ["id", "birthday", "type", "text", "placeholder", "", 1, "form-field__input"], ["for", "birthday", 1, "form-field__label"], [1, "terms-box", "mt-20"], ["type", "checkbox", "name", "terms", "id", "terms", 1, "chk-box"], ["for", "terms"], [1, "row", "btn-row", "mt-20"], [1, "btn", "btn-primary", "d-block", "rounded-pill", "w-100", "btn-lg"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Membership information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "I accept receiving announcement and promotion emails, phone calls, SMS and mailings from Cleanzy UK and its business partners.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_variable_service__WEBPACK_IMPORTED_MODULE_2__["VariableService"] }]; }, null); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_variable_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/variable.service */ "OAAa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SidebarComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
const _c0 = function () { return { exact: true }; };
class SidebarComponent {
    constructor(router, service, toastr, variable) {
        this.router = router;
        this.service = service;
        this.toastr = toastr;
        this.variable = variable;
    }
    ngOnInit() {
        this.userId = JSON.parse(localStorage.getItem('userId'));
        this.profileData = JSON.parse(localStorage.getItem('userData'));
        console.log("user", this.profileData);
    }
    Logout() {
        this.toastr.success('Logout successfully.');
        this.variable.login = true;
        this.variable.logout = false;
        localStorage.clear();
        this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => this.router.navigate(["login"]));
        // this.router.navigate(['/login']);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_variable_service__WEBPACK_IMPORTED_MODULE_4__["VariableService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 52, vars: 27, consts: [[1, "sidebar-wrapper"], [1, "sidebar-inner"], [1, "toggle-mobile"], [1, "user-info"], [1, "user-photo"], [1, "user-photo-inner"], ["src", "https://cdn.evbuc.com/eventlogos/91884425/imagenotavailablegrid.jpg", "height", "60px", 4, "ngIf"], [3, "src"], [1, "user-name", "text-white"], [1, "btn", "btn-warning", "rounded-pill", "d-block", "mb-10"], [1, "fas", "fa-dice-five"], [1, "user-navs"], [1, "list-inline"], ["routerLink", "/dashboard", "routerLinkActive", "active", "data-fa-icon", "\uF015", 3, "routerLinkActiveOptions"], ["routerLink", "/myprofile", "routerLinkActive", "active", "data-fa-icon", "\uF007", 3, "routerLinkActiveOptions"], ["routerLink", "/my-service", "routerLinkActive", "active", "data-fa-icon", "\uF562", 3, "routerLinkActiveOptions"], ["routerLink", "/myteam", "routerLinkActive", "active", "data-fa-icon", "\uF0C0", 3, "routerLinkActiveOptions"], ["routerLink", "/myaddress", "routerLinkActive", "active", "data-fa-icon", "\uF3C5", 3, "routerLinkActiveOptions"], ["routerLink", "/payment-option", "routerLinkActive", "active", "data-fa-icon", "\uF53D", 3, "routerLinkActiveOptions"], ["routerLink", "/invite-friend", "routerLinkActive", "active", "data-fa-icon", "\uF069", 3, "routerLinkActiveOptions"], ["routerLink", "/still-question", "routerLinkActive", "active", "data-fa-icon", "\uF128", 3, "routerLinkActiveOptions"], ["routerLink", "/bonus-cleaning", "routerLinkActive", "active", "data-fa-icon", "\uF49E", 3, "routerLinkActiveOptions"], ["routerLink", "/change-password", "routerLinkActive", "active", "data-fa-icon", "\uF3C1", 3, "routerLinkActiveOptions"], ["routerLink", "/delete-account", "routerLinkActive", "active", "data-fa-icon", "\uF1F8", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", "data-fa-icon", "\uF2F5", 3, "routerLinkActiveOptions", "click"], ["src", "https://cdn.evbuc.com/eventlogos/91884425/imagenotavailablegrid.jpg", "height", "60px"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_img_7_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 0 Happy Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Membership Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "My Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "My Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "My Addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Payment Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Invite a Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Still have questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "My Bonus Cleaning Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Delete My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_50_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.profileData == null ? null : ctx.profileData.image) == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profileData == null ? null : ctx.profileData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileData == null ? null : ctx.profileData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_variable_service__WEBPACK_IMPORTED_MODULE_4__["VariableService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




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

/***/ }),

/***/ "zrcO":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing.module */ "Cj6H");
/* harmony import */ var _my_service_my_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-service/my-service.component */ "BKFi");
/* harmony import */ var _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-team/my-team.component */ "joVJ");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "y8rx");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth-guard.service */ "OTVi");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "wT5b");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _my_addresses_my_addresses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-addresses/my-addresses.component */ "DNHr");
/* harmony import */ var _payment_options_payment_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment-options/payment-options.component */ "RqzA");
/* harmony import */ var _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./invite-friend/invite-friend.component */ "sF6n");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./faq/faq.component */ "NkdY");
/* harmony import */ var _still_question_still_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./still-question/still-question.component */ "vN3u");
/* harmony import */ var _bonus_cleaning_package_bonus_cleaning_package_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bonus-cleaning-package/bonus-cleaning-package.component */ "H3hr");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./change-password/change-password.component */ "D7yf");
/* harmony import */ var _delete_my_account_delete_my_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./delete-my-account/delete-my-account.component */ "0glK");
/* harmony import */ var _myservicess_myservicess_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myservicess/myservicess.component */ "4GrH");





















class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_my_service_my_service_component__WEBPACK_IMPORTED_MODULE_3__["MyServiceComponent"],
        _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_4__["MyTeamComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FAQComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
        _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__["MyProfileComponent"],
        _my_addresses_my_addresses_component__WEBPACK_IMPORTED_MODULE_11__["MyAddressesComponent"],
        _payment_options_payment_options_component__WEBPACK_IMPORTED_MODULE_12__["PaymentOptionsComponent"],
        _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__["InviteFriendComponent"],
        _still_question_still_question_component__WEBPACK_IMPORTED_MODULE_15__["StillQuestionComponent"],
        _bonus_cleaning_package_bonus_cleaning_package_component__WEBPACK_IMPORTED_MODULE_16__["BonusCleaningPackageComponent"],
        _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"], _myservicess_myservicess_component__WEBPACK_IMPORTED_MODULE_19__["MyServicessComponent"],
        _delete_my_account_delete_my_account_component__WEBPACK_IMPORTED_MODULE_18__["DeleteMyAccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _my_service_my_service_component__WEBPACK_IMPORTED_MODULE_3__["MyServiceComponent"],
                    _my_team_my_team_component__WEBPACK_IMPORTED_MODULE_4__["MyTeamComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FAQComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                    _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_9__["MyProfileComponent"],
                    _my_addresses_my_addresses_component__WEBPACK_IMPORTED_MODULE_11__["MyAddressesComponent"],
                    _payment_options_payment_options_component__WEBPACK_IMPORTED_MODULE_12__["PaymentOptionsComponent"],
                    _invite_friend_invite_friend_component__WEBPACK_IMPORTED_MODULE_13__["InviteFriendComponent"],
                    _still_question_still_question_component__WEBPACK_IMPORTED_MODULE_15__["StillQuestionComponent"],
                    _bonus_cleaning_package_bonus_cleaning_package_component__WEBPACK_IMPORTED_MODULE_16__["BonusCleaningPackageComponent"],
                    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"], _myservicess_myservicess_component__WEBPACK_IMPORTED_MODULE_19__["MyServicessComponent"],
                    _delete_my_account_delete_my_account_component__WEBPACK_IMPORTED_MODULE_18__["DeleteMyAccountComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ],
                providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
            }]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map