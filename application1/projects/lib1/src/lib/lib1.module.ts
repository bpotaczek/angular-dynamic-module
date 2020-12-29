import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const providers: Provider[] = [];

@NgModule({
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
})
export class Lib1Module { }

@NgModule({})
export class SharedModule{
  static forRoot(): ModuleWithProviders<Lib1Module> {
    return {
      ngModule: Lib1Module,
      providers: providers
    }
  }
}
