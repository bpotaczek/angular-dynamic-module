import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';
import * as i0 from "@angular/core";
const providers = [];
export class Lib1Module {
}
Lib1Module.ɵmod = i0.ɵɵdefineNgModule({ type: Lib1Module });
Lib1Module.ɵinj = i0.ɵɵdefineInjector({ factory: function Lib1Module_Factory(t) { return new (t || Lib1Module)(); }, providers: providers, imports: [[
            AppRoutingModule
        ], AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Lib1Module, { declarations: [View3Component,
        View4Component,
        NavComponent], imports: [AppRoutingModule], exports: [AppRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Lib1Module, [{
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
export class SharedModule {
    static forRoot() {
        return {
            ngModule: Lib1Module,
            providers: providers
        };
    }
}
SharedModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliMS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbGliMS9zcmMvIiwic291cmNlcyI6WyJsaWIvbGliMS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRXpELE1BQU0sU0FBUyxHQUFlLEVBQUUsQ0FBQztBQWdCakMsTUFBTSxPQUFPLFVBQVU7OzhDQUFWLFVBQVU7bUdBQVYsVUFBVSxtQkFMVixTQUFTLFlBSFg7WUFDUCxnQkFBZ0I7U0FDakIsRUFHQyxnQkFBZ0I7d0ZBR1AsVUFBVSxtQkFabkIsY0FBYztRQUNkLGNBQWM7UUFDZCxZQUFZLGFBR1osZ0JBQWdCLGFBSWhCLGdCQUFnQjtrREFHUCxVQUFVO2NBZHRCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxjQUFjO29CQUNkLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ2pCO2FBQ0Y7O0FBSUQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQTtJQUNILENBQUM7O2dEQU5VLFlBQVk7dUdBQVosWUFBWTtrREFBWixZQUFZO2NBRHhCLFFBQVE7ZUFBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3M0NvbXBvbmVudCB9IGZyb20gJy4vdmlldzMvdmlldzMuY29tcG9uZW50JztcbmltcG9ydCB7IFZpZXc0Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3NC92aWV3NC5jb21wb25lbnQnO1xuXG5jb25zdCBwcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVmlldzNDb21wb25lbnQsXG4gICAgVmlldzRDb21wb25lbnQsXG4gICAgTmF2Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBBcHBSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogcHJvdmlkZXJzLFxuICBleHBvcnRzOiBbXG4gICAgQXBwUm91dGluZ01vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpYjFNb2R1bGUgeyB9XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGV7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TGliMU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGliMU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG4gICAgfVxuICB9XG59XG4iXX0=