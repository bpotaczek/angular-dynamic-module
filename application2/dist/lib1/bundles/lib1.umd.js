(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('lib1', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lib1 = {}, global.ng.core, global.ng.router));
}(this, (function (exports, i0, i1) { 'use strict';

    var NavComponent = /** @class */ (function () {
        function NavComponent() {
        }
        NavComponent.prototype.ngOnInit = function () {
        };
        return NavComponent;
    }());
    NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
    NavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavComponent, selectors: [["app-nav"]], decls: 5, vars: 0, consts: [["routerLink", "/app2/three"], ["routerLink", "/app2/four"]], template: function NavComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "a", 0);
                i0.ɵɵtext(1, "Three");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(2, " |\n");
                i0.ɵɵelementStart(3, "a", 1);
                i0.ɵɵtext(4, "Four");
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.RouterLinkWithHref], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NavComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'app-nav',
                        templateUrl: './nav.component.html',
                        styleUrls: ['./nav.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var View3Component = /** @class */ (function () {
        function View3Component() {
        }
        View3Component.prototype.ngOnInit = function () {
        };
        return View3Component;
    }());
    View3Component.ɵfac = function View3Component_Factory(t) { return new (t || View3Component)(); };
    View3Component.ɵcmp = i0.ɵɵdefineComponent({ type: View3Component, selectors: [["app-view3"]], decls: 3, vars: 0, template: function View3Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "app-nav");
                i0.ɵɵelementStart(1, "p");
                i0.ɵɵtext(2, "view3 works!");
                i0.ɵɵelementEnd();
            }
        }, directives: [NavComponent], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(View3Component, [{
                type: i0.Component,
                args: [{
                        selector: 'app-view3',
                        templateUrl: './view3.component.html',
                        styleUrls: ['./view3.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var View4Component = /** @class */ (function () {
        function View4Component() {
        }
        View4Component.prototype.ngOnInit = function () {
        };
        return View4Component;
    }());
    View4Component.ɵfac = function View4Component_Factory(t) { return new (t || View4Component)(); };
    View4Component.ɵcmp = i0.ɵɵdefineComponent({ type: View4Component, selectors: [["app-view4"]], decls: 3, vars: 0, template: function View4Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "app-nav");
                i0.ɵɵelementStart(1, "p");
                i0.ɵɵtext(2, "view4 works!");
                i0.ɵɵelementEnd();
            }
        }, directives: [NavComponent], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(View4Component, [{
                type: i0.Component,
                args: [{
                        selector: 'app-view4',
                        templateUrl: './view4.component.html',
                        styleUrls: ['./view4.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var routes = [
        { path: 'three', component: View3Component },
        { path: 'four', component: View4Component },
        { path: '', component: View4Component },
    ];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        return AppRoutingModule;
    }());
    AppRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[i1.RouterModule.forChild(routes)], i1.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [i1.RouterModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AppRoutingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.RouterModule.forChild(routes)],
                        exports: [i1.RouterModule]
                    }]
            }], null, null);
    })();

    var providers = [];
    var Lib1Module = /** @class */ (function () {
        function Lib1Module() {
        }
        return Lib1Module;
    }());
    Lib1Module.ɵmod = i0.ɵɵdefineNgModule({ type: Lib1Module });
    Lib1Module.ɵinj = i0.ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, providers: providers, imports: [[
                AppRoutingModule
            ], AppRoutingModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Lib1Module, { declarations: [View3Component,
                View4Component,
                NavComponent], imports: [AppRoutingModule], exports: [AppRoutingModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Lib1Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            View3Component,
                            View4Component,
                            NavComponent
                        ],
                        imports: [
                            AppRoutingModule
                        ],
                        providers: providers,
                        exports: [
                            AppRoutingModule
                        ]
                    }]
            }], null, null);
    })();
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule.forRoot = function () {
            return {
                ngModule: Lib1Module,
                providers: providers
            };
        };
        return SharedModule;
    }());
    SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
    SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SharedModule, [{
                type: i0.NgModule,
                args: [{}]
            }], null, null);
    })();

    /*
     * Public API Surface of lib1
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AppRoutingModule = AppRoutingModule;
    exports.Lib1Module = Lib1Module;
    exports.NavComponent = NavComponent;
    exports.SharedModule = SharedModule;
    exports.View3Component = View3Component;
    exports.View4Component = View4Component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib1.umd.js.map
