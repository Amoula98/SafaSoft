import { Component, Input, OnInit } from '@angular/core';
import { LookupsService } from '../../../_services';

@Component({
  selector: 'app-stepper-second',
  templateUrl: './stepper-second.component.html',
  styleUrls: ['./stepper-second.component.css']
})
export class StepperSecondComponent implements OnInit {
  hide;
  @Input() _formData;
  countries: { id: number; value: string; }[];
  cities: { id: number; value: string; }[];
  constructor(private lookupsService:  LookupsService) { }

  ngOnInit() {
    this.countries = this.lookupsService.countries;
    this.cities = this.lookupsService.cities;

  }

}
