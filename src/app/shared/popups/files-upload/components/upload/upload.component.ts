import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {finalize, Observable, Subject, takeUntil} from "rxjs";
import * as firebase from "firebase";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {

  @Input() file: File;

  @Output() completed = new EventEmitter<string>();

  task: AngularFireUploadTask;

  percentage$: Observable<number>;
  snapshot$: Observable<firebase.storage.UploadTaskSnapshot>;
  downloadURL: string;

  private destroy = new Subject<void>();

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.startUpload();
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  startUpload(): void {
    const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`;

    const storageRef = this.storage.ref(path);

    this.task = this.storage.upload(path, this.file);

    this.percentage$ = this.task.percentageChanges();
    this.snapshot$ = this.task.snapshotChanges();

    this.snapshot$.pipe(
      takeUntil(this.destroy),
      finalize(async () => {
        this.downloadURL = await storageRef.getDownloadURL().toPromise();

        this.completed.next(this.downloadURL);
      })
    ).subscribe();

  }

}
