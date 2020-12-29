import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { View3Component } from './view3/view3.component';
import { View4Component } from './view4/view4.component';

const providers: Provider[] = [];

@NgModule({
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
