import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = ɵɵdefineComponent({ type: NavComponent, selectors: [["app-nav"]], decls: 5, vars: 0, consts: [["routerLink", "/app2/three"], ["routerLink", "/app2/four"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "a", 0);
        ɵɵtext(1, "Three");
        ɵɵelementEnd();
        ɵɵtext(2, " |\n");
        ɵɵelementStart(3, "a", 1);
        ɵɵtext(4, "Four");
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

class View3Component {
    constructor() { }
    ngOnInit() {
    }
}
View3Component.ɵfac = function View3Component_Factory(t) { return new (t || View3Component)(); };
View3Component.ɵcmp = ɵɵdefineComponent({ type: View3Component, selectors: [["app-view3"]], decls: 3, vars: 0, template: function View3Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "app-nav");
        ɵɵelementStart(1, "p");
        ɵɵtext(2, "view3 works!");
        ɵɵelementEnd();
    } }, directives: [NavComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(View3Component, [{
        type: Component,
        args: [{
                selector: 'app-view3',
                templateUrl: './view3.component.html',
                styleUrls: ['./view3.component.scss']
            }]
    }], function () { return []; }, null); })();

class View4Component {
    constructor() { }
    ngOnInit() {
    }
}
View4Component.ɵfac = function View4Component_Factory(t) { return new (t || View4Component)(); };
View4Component.ɵcmp = ɵɵdefineComponent({ type: View4Component, selectors: [["app-view4"]], decls: 3, vars: 0, template: function View4Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "app-nav");
        ɵɵelementStart(1, "p");
        ɵɵtext(2, "view4 works!");
        ɵɵelementEnd();
    } }, directives: [NavComponent], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(View4Component, [{
        type: Component,
        args: [{
                selector: 'app-view4',
                templateUrl: './view4.component.html',
                styleUrls: ['./view4.component.scss']
            }]
    }], function () { return []; }, null); })();

const routes = [
    { path: 'three', component: View3Component },
    { path: 'four', component: View4Component },
    { path: '', component: View4Component },
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Lib1Module, { declarations: [View3Component,
        View4Component,
        NavComponent], imports: [AppRoutingModule], exports: [AppRoutingModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Lib1Module, [{
        type: NgModule,
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

export { AppRoutingModule, Lib1Module, NavComponent, SharedModule, View3Component, View4Component };
//# sourceMappingURL=lib1.js.map
