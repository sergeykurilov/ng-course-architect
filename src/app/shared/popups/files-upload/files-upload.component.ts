import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  multiple: boolean;
  crop: boolean;
}

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  isHovering: boolean;

  files: File[] = [];
  imageFile: File;
  isError: boolean;

  filesURL: string[] = [];

  constructor(
    private dialogRef: MatDialogRef<FilesUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean): void {
    this.isHovering = event;
  }

  onDrop(files: FileList): void {
    this.isError = false;

    if(this.data.crop && files.length > 1) {
      this.isError = true;
      return;
    }

    if(this.data.crop && files.length === 1 && files.item(0).type.split('/')[0] === 'image') {
      this.imageFile = files.item(0);
      return;
    }

    for(let i = 0; i < files.length; i++){
      this.files.push(files.item(i));
    }

    console.log(files)

  }

  onUploadComplete(url: string): void {
    this.filesURL.push(url);
  }

  onClose(): void {
    const res = this.data.multiple ? this.filesURL : this.filesURL[0];
    this.dialogRef.close(res);
  }

  onComplete(): void {
    this.dialogRef.close();
  }

  onCrop($event: File) {
    
  }
}
