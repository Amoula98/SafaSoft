import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-second',
  templateUrl: './stepper-second.component.html',
  styleUrls: ['./stepper-second.component.css']
})
export class StepperSecondComponent implements OnInit {
  hide;
  @Input() _formData;
  constructor() { }

  ngOnInit() {
  }

}
