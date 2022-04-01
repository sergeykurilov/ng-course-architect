import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Employee} from "@src/app/models/backend";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {
  @Input() role: Employee;

  log(p:any) {
    console.log(p)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
