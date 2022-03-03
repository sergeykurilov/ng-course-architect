import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StylesComponent} from "@src/app/pages/demo/pages/styles/styles.component";

const routes: Routes = [
  {
    path: '', component: StylesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylesRoutingModule { }
