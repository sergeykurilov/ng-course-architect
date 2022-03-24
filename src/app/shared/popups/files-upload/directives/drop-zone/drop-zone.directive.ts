import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event: { preventDefault: () => void; dataTransfer: { files: FileList; }; }) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: { preventDefault: () => void; }) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: { preventDefault: () => void; }) {
    $event.preventDefault();
    this.hovered.emit(false);
  }

}
