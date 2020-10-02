import { Component, Input, OnInit } from '@angular/core';
import { LookupsService } from '../../../_services';

@Component({
  selector: 'app-stepper-first',
  templateUrl: './stepper-first.component.html',
  styleUrls: ['./stepper-first.component.css']
})
export class StepperFirstComponent implements OnInit {
  hide = true;
  hideConfirm = true;
  @Input() _formData;
  countries: { id: number; value: string; }[];
  constructor(private lookupsService:  LookupsService) { }

  ngOnInit() {
    this.countries = this.lookupsService.countries;
  }

}
