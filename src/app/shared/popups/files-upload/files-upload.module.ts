import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesUploadComponent } from './files-upload.component';
import { FilesUploadDirective } from './files-upload.directive';
import {MatDialogModule} from "@angular/material/dialog";
import {ImageCropperModule} from "ngx-image-cropper";
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';
import { UploadComponent } from './components/upload/upload.component';
import {FileSizePipe} from "@src/app/shared/popups/files-upload/pipes/file-size/file-size.pipe";
import { CropperComponent } from './components/cropper/cropper.component';



@NgModule({
  declarations: [
    FilesUploadComponent,
    FilesUploadDirective,
    DropZoneDirective,
    UploadComponent,
    FileSizePipe,
    CropperComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ImageCropperModule
  ],
    exports: [
        FilesUploadDirective,
        FileSizePipe,
        FilesUploadComponent
    ]
})
export class FilesUploadModule { }
