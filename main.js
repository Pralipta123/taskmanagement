"use strict";
(self["webpackChunktaskmanagement"] = self["webpackChunktaskmanagement"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'tasks'
}, {
  path: 'tasks',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_tasks_tasks_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/tasks/tasks.module */ 5469)).then(m => m.TasksModule)
}, {
  path: '**',
  redirectTo: 'tasks'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/confirm-dialog/confirm-dialog.component */ 8709);



const _c0 = function () {
  return {
    exact: true
  };
};
class AppComponent {
  constructor() {
    this.title = 'taskmanagement';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 17,
      vars: 2,
      consts: [[1, "app-shell"], [1, "app-header"], ["routerLink", "/tasks", "aria-label", "Task Management home", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-text"], [1, "brand-name"], [1, "brand-tagline"], ["aria-label", "Primary", 1, "nav"], ["routerLink", "/tasks", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/tasks/new", "routerLinkActive", "active"], [1, "app-main"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Task Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Assignments & delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nav", 7)(10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " All tasks ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "New task");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "main", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-confirm-dialog");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogComponent],
      styles: [".app-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  color: var(--tm-text);\n}\n\n.app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.85rem 1.5rem;\n  padding: 0.65rem 1.35rem;\n  background: rgba(255, 255, 255, 0.88);\n  backdrop-filter: blur(12px) saturate(1.2);\n  border-bottom: 1px solid var(--tm-border);\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.7) inset;\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.65rem;\n  text-decoration: none;\n  color: inherit;\n  min-width: 0;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 10px;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 45%, #312e81 100%);\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n  min-width: 0;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.02rem;\n  letter-spacing: -0.02em;\n  line-height: 1.2;\n}\n\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--tm-muted);\n  letter-spacing: 0.02em;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.2rem;\n  border-radius: 999px;\n  background: rgba(248, 250, 252, 0.9);\n  border: 1px solid var(--tm-border);\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--tm-muted);\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 0.45rem 0.85rem;\n  border-radius: 999px;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--tm-text);\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(180deg, #6366f1 0%, var(--tm-primary) 100%);\n  box-shadow: 0 2px 10px rgba(79, 70, 229, 0.25);\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--tm-primary);\n  outline-offset: 2px;\n}\n\n.app-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n@media (max-width: 520px) {\n  .brand-tagline[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixxQ0FBcUM7RUFDckMseUNBQXlDO0VBQ3pDLHlDQUF5QztFQUN6QyxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwwRUFBMEU7RUFDMUUsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUVBQXVFO0VBQ3ZFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaGVsbCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiB2YXIoLS10bS10ZXh0KTtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC44NXJlbSAxLjVyZW07XHJcbiAgcGFkZGluZzogMC42NXJlbSAxLjM1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpIHNhdHVyYXRlKDEuMik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRtLWJvcmRlcik7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgaW5zZXQ7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNjVyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmJyYW5kLW1hcmsge1xyXG4gIHdpZHRoOiAyLjI1cmVtO1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEgMCUsICM0ZjQ2ZTUgNDUlLCAjMzEyZTgxIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSg3OSwgNzAsIDIyOSwgMC4zNSk7XHJcbn1cclxuXHJcbi5icmFuZC10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjFyZW07XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uYnJhbmQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuMDJyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmJyYW5kLXRhZ2xpbmUge1xyXG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS10bS1tdXRlZCk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMzVyZW07XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTAsIDI1MiwgMC45KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10bS1ib3JkZXIpO1xyXG59XHJcblxyXG4ubmF2IGEge1xyXG4gIGNvbG9yOiB2YXIoLS10bS1tdXRlZCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDAuNDVyZW0gMC44NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGNvbG9yIDAuMTVzIGVhc2U7XHJcbn1cclxuXHJcbi5uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXRtLXRleHQpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxufVxyXG5cclxuLm5hdiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzYzNjZmMSAwJSwgdmFyKC0tdG0tcHJpbWFyeSkgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDc5LCA3MCwgMjI5LCAwLjI1KTtcclxufVxyXG5cclxuLm5hdiBhOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS10bS1wcmltYXJ5KTtcclxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG59XHJcblxyXG4uYXBwLW1haW4ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5icmFuZC10YWdsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 8709:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/confirm-dialog.service */ 8245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function ConfirmDialogComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.confirm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-labelledby", "confirm-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.state.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.state.message);
  }
}
class ConfirmDialogComponent {
  constructor(dialog, cdr) {
    this.dialog = dialog;
    this.cdr = cdr;
    this.state = {
      open: false,
      message: ''
    };
    this.sub = this.dialog.state$.subscribe(s => {
      this.state = s;
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  confirm() {
    this.dialog.resolve(true);
  }
  cancel() {
    this.dialog.resolve(false);
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      decls: 1,
      vars: 1,
      consts: [["class", "backdrop", "role", "presentation", 3, "click", 4, "ngIf"], ["role", "presentation", 1, "backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "dialog", 3, "click"], ["id", "confirm-title", 1, "title"], [1, "message"], [1, "actions"], ["type", "button", 1, "btn", "ghost", 3, "click"], ["type", "button", 1, "btn", "primary", 3, "click"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ConfirmDialogComponent_div_0_Template, 11, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.state.open);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  background: rgba(15, 23, 42, 0.55);\n  animation: _ngcontent-%COMP%_tm-fade-in 0.18s ease-out;\n}\n\n.dialog[_ngcontent-%COMP%] {\n  width: min(440px, 100%);\n  background: var(--tm-surface);\n  border-radius: var(--tm-radius-lg);\n  border: 1px solid var(--tm-border);\n  box-shadow: var(--tm-shadow-lg);\n  padding: 1.35rem 1.5rem 1.25rem;\n  animation: _ngcontent-%COMP%_tm-pop-in 0.2s cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.message[_ngcontent-%COMP%] {\n  margin: 0 0 1.35rem;\n  color: var(--tm-text);\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n}\n\n@keyframes _ngcontent-%COMP%_tm-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_tm-pop-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px) scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0Isd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7RUFDbkM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNTUpO1xuICBhbmltYXRpb246IHRtLWZhZGUtaW4gMC4xOHMgZWFzZS1vdXQ7XG59XG5cbi5kaWFsb2cge1xuICB3aWR0aDogbWluKDQ0MHB4LCAxMDAlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG0tc3VyZmFjZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXRtLXJhZGl1cy1sZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRtLWJvcmRlcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXRtLXNoYWRvdy1sZyk7XG4gIHBhZGRpbmc6IDEuMzVyZW0gMS41cmVtIDEuMjVyZW07XG4gIGFuaW1hdGlvbjogdG0tcG9wLWluIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjIsIDEsIDAuMzYsIDEpO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDAgMCAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW46IDAgMCAxLjM1cmVtO1xuICBjb2xvcjogdmFyKC0tdG0tdGV4dCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbkBrZXlmcmFtZXMgdG0tZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0bS1wb3AtaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpIHNjYWxlKDAuOTgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 4901:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableComponent: () => (/* binding */ DataTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../status-badge/status-badge.component */ 3787);




function DataTableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DataTableComponent_table_2_th_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.sortIcon(col_r6.key));
  }
}
function DataTableComponent_table_2_th_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_table_2_th_3_Template_th_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const col_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onSort(col_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableComponent_table_2_th_3_span_3_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sortable", col_r6.sortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r6.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r6.sortable);
  }
}
function DataTableComponent_table_2_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r4.columns.length || 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.emptyMessage);
  }
}
function DataTableComponent_table_2_tr_6_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r14.cellValue(row_r11, col_r13.key));
  }
}
function DataTableComponent_table_2_tr_6_td_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r15.asDatePipeInput(ctx_r15.cellValue(row_r11, col_r13.key)), "mediumDate"));
  }
}
function DataTableComponent_table_2_tr_6_td_1_app_status_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-status-badge", 20);
  }
  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r16.asString(ctx_r16.cellValue(row_r11, col_r13.key)));
  }
}
function DataTableComponent_table_2_tr_6_td_1_app_status_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-status-badge", 21);
  }
  if (rf & 2) {
    const col_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r17.asString(ctx_r17.cellValue(row_r11, col_r13.key)));
  }
}
function DataTableComponent_table_2_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_table_2_tr_6_td_1_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableComponent_table_2_tr_6_td_1_span_3_Template, 3, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableComponent_table_2_tr_6_td_1_app_status_badge_4_Template, 1, 1, "app-status-badge", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataTableComponent_table_2_tr_6_td_1_app_status_badge_5_Template, 1, 1, "app-status-badge", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r12.columnType(col_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "status");
  }
}
function DataTableComponent_table_2_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_table_2_tr_6_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const row_r11 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.rowActivate.emit(row_r11));
    })("keyup.enter", function DataTableComponent_table_2_tr_6_Template_tr_keyup_enter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const row_r11 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.rowActivate.emit(row_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableComponent_table_2_tr_6_td_1_Template, 6, 5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.columns);
  }
}
function DataTableComponent_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5)(1, "thead")(2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableComponent_table_2_th_3_Template, 4, 4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DataTableComponent_table_2_tr_5_Template, 3, 2, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DataTableComponent_table_2_tr_6_Template, 2, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.rows.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.rows)("ngForTrackBy", ctx_r1.trackRow);
  }
}
function DataTableComponent_div_3_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_div_3_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const p_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.goPage(p_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", p_r30 === ctx_r29.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r30, " ");
  }
}
function DataTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.goPage(ctx_r33.page - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DataTableComponent_div_3_button_4_Template, 2, 3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTableComponent_div_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.goPage(ctx_r35.page + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.page <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.pages());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.page >= ctx_r2.totalPages());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.totalItems, " total");
  }
}
class DataTableComponent {
  constructor() {
    this.columns = [];
    this.rows = [];
    this.sortColumn = null;
    this.sortDirection = 'asc';
    this.page = 1;
    this.pageSize = 5;
    this.totalItems = 0;
    this.loading = false;
    this.emptyMessage = 'No rows to display.';
    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rowActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  columnType(col) {
    return col.type ?? 'text';
  }
  sortIcon(colKey) {
    if (this.sortColumn !== colKey) {
      return '↕';
    }
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }
  onSort(col) {
    if (!col.sortable) {
      return;
    }
    const nextDir = this.sortColumn === col.key && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortChange.emit({
      column: col.key,
      direction: nextDir
    });
  }
  totalPages() {
    return Math.max(1, Math.ceil(this.totalItems / this.pageSize));
  }
  pages() {
    const t = this.totalPages();
    const maxButtons = 5;
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, this.page - half);
    const end = Math.min(t, start + maxButtons - 1);
    start = Math.max(1, end - maxButtons + 1);
    return Array.from({
      length: end - start + 1
    }, (_, i) => start + i);
  }
  goPage(p) {
    const t = this.totalPages();
    const clamped = Math.min(Math.max(1, p), t);
    if (clamped !== this.page) {
      this.pageChange.emit(clamped);
    }
  }
  cellValue(row, key) {
    return row[key];
  }
  asString(value) {
    return value == null ? '' : String(value);
  }
  /** Coerces cell values for the `DatePipe` under strict template checking. */
  asDatePipeInput(value) {
    if (value == null || value === '') {
      return null;
    }
    if (value instanceof Date) {
      return value;
    }
    if (typeof value === 'number' || typeof value === 'string') {
      return value;
    }
    return String(value);
  }
  trackRow(_index, row) {
    return String(row['id'] ?? _index);
  }
  static {
    this.ɵfac = function DataTableComponent_Factory(t) {
      return new (t || DataTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DataTableComponent,
      selectors: [["app-data-table"]],
      inputs: {
        columns: "columns",
        rows: "rows",
        sortColumn: "sortColumn",
        sortDirection: "sortDirection",
        page: "page",
        pageSize: "pageSize",
        totalItems: "totalItems",
        loading: "loading",
        emptyMessage: "emptyMessage"
      },
      outputs: {
        sortChange: "sortChange",
        pageChange: "pageChange",
        rowActivate: "rowActivate"
      },
      decls: 4,
      vars: 4,
      consts: [["role", "region", 1, "table-wrap"], ["class", "loading", 4, "ngIf"], ["class", "data-table", 4, "ngIf"], ["class", "pager", 4, "ngIf"], [1, "loading"], [1, "data-table"], ["scope", "col", 3, "sortable", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["tabindex", "0", "class", "data-row", 3, "click", "keyup.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["scope", "col", 3, "click"], [1, "th-inner"], ["class", "sort-ind", 4, "ngIf"], [1, "sort-ind"], [1, "empty"], ["tabindex", "0", 1, "data-row", 3, "click", "keyup.enter"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["kind", "priority", 3, "value", 4, "ngSwitchCase"], ["kind", "task-status", 3, "value", 4, "ngSwitchCase"], ["kind", "priority", 3, "value"], ["kind", "task-status", 3, "value"], [1, "pager"], ["type", "button", 1, "btn", "ghost", 3, "disabled", "click"], [1, "page-btns"], ["type", "button", "class", "btn page", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "page-meta"], ["type", "button", 1, "btn", "page", 3, "click"]],
      template: function DataTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTableComponent_div_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTableComponent_table_2_Template, 7, 4, "table", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTableComponent_div_3_Template, 9, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-busy", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.totalItems > ctx.pageSize);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_0__.StatusBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".table-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 0;\n  border: none;\n  background: var(--tm-surface);\n}\n\n.loading[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n  text-align: center;\n  color: var(--tm-muted);\n  font-weight: 500;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.9rem;\n}\n\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  text-align: left;\n  border-bottom: 1px solid var(--tm-border);\n  vertical-align: middle;\n}\n\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: var(--tm-surface-2);\n  font-weight: 700;\n  font-size: 0.72rem;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--tm-muted);\n  white-space: nowrap;\n  border-bottom: 1px solid var(--tm-border-strong);\n}\n\n.data-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.data-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  color: var(--tm-text);\n  background: #eef2ff;\n}\n\n.th-inner[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.sort-ind[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.65;\n  font-weight: 700;\n}\n\n.data-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.12s ease, box-shadow 0.12s ease;\n}\n\n.data-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: rgba(248, 250, 252, 0.55);\n}\n\n.data-row[_ngcontent-%COMP%]:hover {\n  background: var(--tm-row-hover);\n}\n\n.data-row[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  background: var(--tm-row-hover);\n  box-shadow: inset 0 0 0 2px rgba(79, 70, 229, 0.35);\n}\n\n.data-table[_ngcontent-%COMP%]   td.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--tm-muted);\n  padding: 2.5rem 1rem;\n  font-weight: 500;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 0.75rem;\n  padding: 0.85rem 1.1rem;\n  border-top: 1px solid var(--tm-border);\n  background: linear-gradient(180deg, var(--tm-surface-2) 0%, #fff 100%);\n}\n\n.page-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.3rem;\n}\n\n.btn.page[_ngcontent-%COMP%] {\n  min-width: 2.25rem;\n  padding: 0.4rem 0.5rem;\n  font-size: 0.82rem;\n  border-radius: 8px;\n}\n\n.btn.page.active[_ngcontent-%COMP%] {\n  background: var(--tm-primary);\n  color: #fff;\n  border-color: var(--tm-primary);\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);\n}\n\n.page-meta[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--tm-muted);\n}\n\n@media (max-width: 640px) {\n  .data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.55rem 0.65rem;\n    font-size: 0.82rem;\n  }\n\n  .page-meta[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIseUNBQXlDO0VBQ3pDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLCtCQUErQjtFQUMvQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLCtCQUErQjtFQUMvQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs7SUFFRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10bS1zdXJmYWNlKTtcbn1cblxuLmxvYWRpbmcge1xuICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdG0tbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZGF0YS10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmRhdGEtdGFibGUgdGgsXG4uZGF0YS10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRtLWJvcmRlcik7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kYXRhLXRhYmxlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10bS1zdXJmYWNlLTIpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS10bS1tdXRlZCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10bS1ib3JkZXItc3Ryb25nKTtcbn1cblxuLmRhdGEtdGFibGUgdGguc29ydGFibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGF0YS10YWJsZSB0aC5zb3J0YWJsZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10bS10ZXh0KTtcbiAgYmFja2dyb3VuZDogI2VlZjJmZjtcbn1cblxuLnRoLWlubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xufVxuXG4uc29ydC1pbmQge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgb3BhY2l0eTogMC42NTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRhdGEtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTJzIGVhc2UsIGJveC1zaGFkb3cgMC4xMnMgZWFzZTtcbn1cblxuLmRhdGEtcm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTAsIDI1MiwgMC41NSk7XG59XG5cbi5kYXRhLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRtLXJvdy1ob3Zlcik7XG59XG5cbi5kYXRhLXJvdzpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG0tcm93LWhvdmVyKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoNzksIDcwLCAyMjksIDAuMzUpO1xufVxuXG4uZGF0YS10YWJsZSB0ZC5lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbiAgcGFkZGluZzogMi41cmVtIDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wYWdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW0gMC43NXJlbTtcbiAgcGFkZGluZzogMC44NXJlbSAxLjFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS10bS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS10bS1zdXJmYWNlLTIpIDAlLCAjZmZmIDEwMCUpO1xufVxuXG4ucGFnZS1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuM3JlbTtcbn1cblxuLmJ0bi5wYWdlIHtcbiAgbWluLXdpZHRoOiAyLjI1cmVtO1xuICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ0bi5wYWdlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10bS1wcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNzksIDcwLCAyMjksIDAuMjUpO1xufVxuXG4ucGFnZS1tZXRhIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5kYXRhLXRhYmxlIHRoLFxuICAuZGF0YS10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMC41NXJlbSAwLjY1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgfVxuXG4gIC5wYWdlLW1ldGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 6077:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/form-field/form-field.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFieldComponent: () => (/* binding */ FormFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function FormFieldComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
  }
}
function FormFieldComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.hint);
  }
}
function FormFieldComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r4);
  }
}
function FormFieldComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormFieldComponent_ul_5_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.errorMessages());
  }
}
const _c0 = ["*"];
class FormFieldComponent {
  constructor() {
    this.label = '';
    this.hint = '';
    this.control = null;
  }
  showErrors() {
    const c = this.control;
    return !!(c && c.invalid && (c.dirty || c.touched));
  }
  errorMessages() {
    const c = this.control;
    if (!c || !c.errors) {
      return [];
    }
    const e = c.errors;
    const out = [];
    if (e['required']) {
      out.push('This field is required.');
    }
    if (e['minlength']) {
      out.push(`At least ${e['minlength'].requiredLength} characters.`);
    }
    if (e['maxlength']) {
      out.push(`At most ${e['maxlength'].requiredLength} characters.`);
    }
    return out;
  }
  static {
    this.ɵfac = function FormFieldComponent_Factory(t) {
      return new (t || FormFieldComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormFieldComponent,
      selectors: [["app-form-field"]],
      inputs: {
        label: "label",
        hint: "hint",
        control: "control"
      },
      ngContentSelectors: _c0,
      decls: 6,
      vars: 5,
      consts: [[1, "form-field"], ["class", "label", 4, "ngIf"], [1, "control"], ["class", "hint", 4, "ngIf"], ["class", "errors", 4, "ngIf"], [1, "label"], [1, "hint"], [1, "errors"], [4, "ngFor", "ngForOf"]],
      template: function FormFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormFieldComponent_label_1_Template, 2, 1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormFieldComponent_p_4_Template, 2, 1, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormFieldComponent_ul_5_Template, 2, 1, "ul", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.showErrors());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hint && !ctx.showErrors());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrors());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  margin-bottom: 1.05rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  color: var(--tm-text);\n  letter-spacing: 0.01em;\n}\n\n.control[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.hint[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: var(--tm-muted);\n  line-height: 1.4;\n}\n\n.errors[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.5rem 0.65rem 0.5rem 1.1rem;\n  border-radius: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.form-field.invalid[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMDVyZW07XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRtLXRleHQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xufVxuXG4uY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5oaW50IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRtLW11dGVkKTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmVycm9ycyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC41cmVtIDAuNjVyZW0gMC41cmVtIDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmVjYWNhO1xuICBjb2xvcjogIzk5MWIxYjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb3JtLWZpZWxkLmludmFsaWQgLmxhYmVsIHtcbiAgY29sb3I6ICNiOTFjMWM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 3787:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/status-badge/status-badge.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadgeComponent: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


class StatusBadgeComponent {
  constructor() {
    this.kind = 'priority';
    this.value = '';
  }
  cssClass() {
    const v = (this.value || '').toLowerCase().replace(/\s+/g, '-');
    return `${this.kind}-${v}`;
  }
  static {
    this.ɵfac = function StatusBadgeComponent_Factory(t) {
      return new (t || StatusBadgeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatusBadgeComponent,
      selectors: [["app-status-badge"]],
      inputs: {
        kind: "kind",
        value: "value"
      },
      decls: 2,
      vars: 2,
      consts: [[1, "badge", 3, "ngClass"]],
      template: function StatusBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.cssClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: [".badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.22rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.35) inset;\n}\n\n.priority-high[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fecaca 0%, #fee2e2 100%);\n  color: #991b1b;\n  border-color: rgba(185, 28, 28, 0.2);\n}\n\n.priority-medium[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #fde68a 0%, #fef3c7 100%);\n  color: #92400e;\n  border-color: rgba(146, 64, 14, 0.2);\n}\n\n.priority-low[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #e0e7ff 0%, #eef2ff 100%);\n  color: #3730a3;\n  border-color: rgba(55, 48, 163, 0.2);\n}\n\n.task-status-pending[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);\n  color: #475569;\n  border-color: rgba(71, 85, 105, 0.2);\n}\n\n.task-status-in-progress[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #bfdbfe 0%, #dbeafe 100%);\n  color: #1e40af;\n  border-color: rgba(30, 64, 175, 0.2);\n}\n\n.task-status-completed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #a7f3d0 0%, #d1fae5 100%);\n  color: #065f46;\n  border-color: rgba(6, 95, 70, 0.2);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3RhdHVzLWJhZGdlL3N0YXR1cy1iYWRnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsY0FBYztFQUNkLGtDQUFrQztBQUNwQyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjIycmVtIDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSBpbnNldDtcbn1cblxuLnByaW9yaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmVjYWNhIDAlLCAjZmVlMmUyIDEwMCUpO1xuICBjb2xvcjogIzk5MWIxYjtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE4NSwgMjgsIDI4LCAwLjIpO1xufVxuXG4ucHJpb3JpdHktbWVkaXVtIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZkZTY4YSAwJSwgI2ZlZjNjNyAxMDAlKTtcbiAgY29sb3I6ICM5MjQwMGU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNDYsIDY0LCAxNCwgMC4yKTtcbn1cblxuLnByaW9yaXR5LWxvdyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNlMGU3ZmYgMCUsICNlZWYyZmYgMTAwJSk7XG4gIGNvbG9yOiAjMzczMGEzO1xuICBib3JkZXItY29sb3I6IHJnYmEoNTUsIDQ4LCAxNjMsIDAuMik7XG59XG5cbi50YXNrLXN0YXR1cy1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2YxZjVmOSAwJSwgI2UyZThmMCAxMDAlKTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg3MSwgODUsIDEwNSwgMC4yKTtcbn1cblxuLnRhc2stc3RhdHVzLWluLXByb2dyZXNzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2JmZGJmZSAwJSwgI2RiZWFmZSAxMDAlKTtcbiAgY29sb3I6ICMxZTQwYWY7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgzMCwgNjQsIDE3NSwgMC4yKTtcbn1cblxuLnRhc2stc3RhdHVzLWNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNhN2YzZDAgMCUsICNkMWZhZTUgMTAwJSk7XG4gIGNvbG9yOiAjMDY1ZjQ2O1xuICBib3JkZXItY29sb3I6IHJnYmEoNiwgOTUsIDcwLCAwLjIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 8245:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/confirm-dialog.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogService: () => (/* binding */ ConfirmDialogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);



class ConfirmDialogService {
  constructor() {
    this.state = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resolver = null;
    /** Stream for the dialog shell component to subscribe to. */
    this.state$ = this.state.asObservable();
  }
  confirm(message, title = 'Please confirm') {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      this.resolver = ok => {
        subscriber.next(ok);
        subscriber.complete();
        this.resolver = null;
      };
      this.state.next({
        open: true,
        message,
        title
      });
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
  }
  /** Called by the dialog UI when the user chooses an action. */
  resolve(value) {
    this.state.next({
      open: false,
      message: ''
    });
    this.resolver?.(value);
  }
  static {
    this.ɵfac = function ConfirmDialogService_Factory(t) {
      return new (t || ConfirmDialogService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ConfirmDialogService,
      factory: ConfirmDialogService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/data-table/data-table.component */ 4901);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/status-badge/status-badge.component */ 3787);
/* harmony import */ var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-field/form-field.component */ 6077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, _components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent, _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__.FormFieldComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__.DataTableComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, _components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_2__.StatusBadgeComponent, _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_3__.FormFieldComponent]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map