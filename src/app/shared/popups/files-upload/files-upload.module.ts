import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadComponent } from './files-upload.component';
import { FilesUploadDirective } from './files-upload.directive';
import {MatDialogModule} from "@angular/material/dialog";
import {ImageCropperModule} from "ngx-image-cropper";



@NgModule({
  declarations: [
    FilesUploadComponent,
    FilesUploadDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ImageCropperModule
  ],
  exports: [
    FilesUploadDirective
  ]
})
export class FilesUploadModule { }
