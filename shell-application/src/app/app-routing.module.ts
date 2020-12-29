import { NgModule, Compiler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

declare const SystemJS: any;
import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularRouter from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => new Promise((resolve, reject) => {
      SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
      SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
      SystemJS.set('@angular/router', SystemJS.newModule(angularRouter));
      SystemJS.import('https://raw.githubusercontent.com/bpotaczek/angular-dynamic-module/main/application1/lib1/bundles/lib1.umd.js').then((m: any) => {
        resolve(m);
      });
    }).then((m: any) => {
      return m.SharedModule.forRoot().ngModule;
    })
  },
  {
    path: 'app2',
    loadChildren: () => new Promise((resolve, reject) => {
      SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
      SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
      SystemJS.set('@angular/router', SystemJS.newModule(angularRouter));
      SystemJS.import('https://raw.githubusercontent.com/bpotaczek/angular-dynamic-module/main/application2/lib1/bundles/lib1.umd.js').then((m: any) => {
        resolve(m);
      });
    }).then((m: any) => {
      return m.SharedModule.forRoot().ngModule;
    })
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
