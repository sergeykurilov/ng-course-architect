import { Component, OnInit } from '@angular/core';
import {StepperService} from "./components/stepper/services";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public stepper: StepperService) { }

  ngOnInit(): void {
    this.stepper.init([
      {key: 'personal', label: 'Person'},
      {key: 'professional', label: 'Professional'},
    ])
  }

}
