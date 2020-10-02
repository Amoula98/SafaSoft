import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-data',
  templateUrl: './submit-data.component.html',
  styleUrls: ['./submit-data.component.css']
})
export class SubmitDataComponent implements OnInit, OnChanges {
  @Input() _formData;

  constructor() { }
  ngOnChanges() {
    console.log('_formData', this._formData);
  }
  ngOnInit() {
  }

}
