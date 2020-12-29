import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = ɵɵdefineComponent({ type: NavComponent, selectors: [["app-nav"]], decls: 5, vars: 0, consts: [["routerLink", "/app1/one"], ["routerLink", "/app1/two"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵtext(1, "One");
        ɵɵelementEnd();
        ɵɵtext(2, " |\n");
        ɵɵelementStart(3, "a", 1);
        ɵɵtext(4, "Two");
        ɵɵelementEnd();
    } }, directives: [RouterLinkWithHref], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NavComponent, [{
        type: Component,
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, null); })();

class View1Component {
    constructor() { }
    ngOnInit() {
    }
}
View1Component.ɵfac = function View1Component_Factory(t) { return new (t || View1Component)(); };
View1Component.ɵcmp = ɵɵdefineComponent({ type: View1Component, selectors: [["app-view1"]], decls: 3, vars: 0, template: function View1Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "app-nav");
        ɵɵelementStart(1, "p");
        ɵɵtext(2, "view1 works!");
        ɵɵelementEnd();
    } }, directives: [NavComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(View1Component, [{
        type: Component,
        args: [{
                selector: 'app-view1',
                templateUrl: './view1.component.html',
                styleUrls: ['./view1.component.scss']
            }]
    }], function () { return []; }, null); })();

class View2Component {
    constructor() { }
    ngOnInit() {
    }
}
View2Component.ɵfac = function View2Component_Factory(t) { return new (t || View2Component)(); };
View2Component.ɵcmp = ɵɵdefineComponent({ type: View2Component, selectors: [["app-view2"]], decls: 3, vars: 0, template: function View2Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "app-nav");
        ɵɵelementStart(1, "p");
        ɵɵtext(2, "view2 works!");
        ɵɵelementEnd();
    } }, directives: [NavComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(View2Component, [{
        type: Component,
        args: [{
                selector: 'app-view2',
                templateUrl: './view2.component.html',
                styleUrls: ['./view2.component.scss']
            }]
    }], function () { return []; }, null); })();

const routes = [
    { path: 'one', component: View1Component },
    { path: 'two', component: View2Component },
    { path: '', component: View1Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[RouterModule.forChild(routes)], RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AppRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();

const providers = [];
class Lib1Module {
}
Lib1Module.ɵmod = ɵɵdefineNgModule({ type: Lib1Module });
Lib1Module.ɵinj = ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, providers: providers, imports: [[
            AppRoutingModule
        ], AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Lib1Module, { declarations: [View1Component,
        View2Component,
        NavComponent], imports: [AppRoutingModule], exports: [AppRoutingModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Module, [{
        type: NgModule,
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
    }], null, null); })();
class SharedModule {
    static forRoot() {
        return {
            ngModule: Lib1Module,
            providers: providers
        };
    }
}
SharedModule.ɵmod = ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();

/*
 * Public API Surface of lib1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppRoutingModule, Lib1Module, NavComponent, SharedModule, View1Component, View2Component };
//# sourceMappingURL=lib1.js.map
