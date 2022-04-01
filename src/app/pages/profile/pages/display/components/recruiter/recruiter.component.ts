import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Recruiter} from "@src/app/models/backend";

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecruiterComponent implements OnInit {
  @Input() role: Recruiter;

  constructor() { }

  ngOnInit(): void {
  }

}
