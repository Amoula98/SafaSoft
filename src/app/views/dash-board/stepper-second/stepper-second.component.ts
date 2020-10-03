import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { LookupsService } from '../../../_services';

@Component({
  selector: 'app-stepper-second',
  templateUrl: './stepper-second.component.html',
  styleUrls: ['./stepper-second.component.css']
})
export class StepperSecondComponent implements OnInit, OnChanges {
  hide;
  @Input() _formData;
  countries: { id: number; value: string; }[];
  cities: { id: number; value: string; }[];
  constructor(private lookupsService:  LookupsService) { }
  ngOnChanges() {
    console.log('_formData', this._formData);

  }
  ngOnInit() {
    this.countries = this.lookupsService.countries;
    this.cities = this.lookupsService.cities;

  }


}
