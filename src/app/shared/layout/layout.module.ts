import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPhotoModule} from "../layout/user-photo/user-photo.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPhotoModule
  ],
  exports: [
    UserPhotoModule
  ]
})
export class LayoutModule { }
