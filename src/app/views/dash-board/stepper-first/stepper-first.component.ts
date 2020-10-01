import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-first',
  templateUrl: './stepper-first.component.html',
  styleUrls: ['./stepper-first.component.css']
})
export class StepperFirstComponent implements OnInit {
  hide = true;
  @Input() _formData;
  constructor() { }

  ngOnInit() {
  }

}
