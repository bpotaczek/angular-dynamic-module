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
    NavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavComponent, selectors: [["app-nav"]], decls: 5, vars: 0, consts: [["routerLink", "/app1/one"], ["routerLink", "/app1/two"]], template: function NavComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "a", 0);
                i0.ɵɵtext(1, "One");
                i0.ɵɵelementEnd();
                i0.ɵɵtext(2, " |\n");
                i0.ɵɵelementStart(3, "a", 1);
                i0.ɵɵtext(4, "Two");
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

    var View1Component = /** @class */ (function () {
        function View1Component() {
        }
        View1Component.prototype.ngOnInit = function () {
        };
        return View1Component;
    }());
    View1Component.ɵfac = function View1Component_Factory(t) { return new (t || View1Component)(); };
    View1Component.ɵcmp = i0.ɵɵdefineComponent({ type: View1Component, selectors: [["app-view1"]], decls: 3, vars: 0, template: function View1Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "app-nav");
                i0.ɵɵelementStart(1, "p");
                i0.ɵɵtext(2, "view1 works!");
                i0.ɵɵelementEnd();
            }
        }, directives: [NavComponent], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(View1Component, [{
                type: i0.Component,
                args: [{
                        selector: 'app-view1',
                        templateUrl: './view1.component.html',
                        styleUrls: ['./view1.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var View2Component = /** @class */ (function () {
        function View2Component() {
        }
        View2Component.prototype.ngOnInit = function () {
        };
        return View2Component;
    }());
    View2Component.ɵfac = function View2Component_Factory(t) { return new (t || View2Component)(); };
    View2Component.ɵcmp = i0.ɵɵdefineComponent({ type: View2Component, selectors: [["app-view2"]], decls: 3, vars: 0, template: function View2Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "app-nav");
                i0.ɵɵelementStart(1, "p");
                i0.ɵɵtext(2, "view2 works!");
                i0.ɵɵelementEnd();
            }
        }, directives: [NavComponent], styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(View2Component, [{
                type: i0.Component,
                args: [{
                        selector: 'app-view2',
                        templateUrl: './view2.component.html',
                        styleUrls: ['./view2.component.scss']
                    }]
            }], function () { return []; }, null);
    })();

    var routes = [
        { path: 'one', component: View1Component },
        { path: 'two', component: View2Component },
        { path: '', component: View1Component },
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
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Lib1Module, { declarations: [View1Component,
                View2Component,
                NavComponent], imports: [AppRoutingModule], exports: [AppRoutingModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Lib1Module, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            View1Component,
                            View2Component,
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
    exports.View1Component = View1Component;
    exports.View2Component = View2Component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib1.umd.js.map
