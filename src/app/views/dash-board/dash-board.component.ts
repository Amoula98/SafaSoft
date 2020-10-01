import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterationService } from '../../_services';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  flag: boolean;
  formFirstStep: any;
  formSecoundStep: any;
  formThirdStep: any;

  constructor( private _formBuilder: FormBuilder, private registeration: RegisterationService) { }

  ngOnInit() {
    this.formFirstStep = this._formBuilder.group({
      user_full_name: ['', Validators.required],
      user_email: ['', Validators.required],
      user_password: ['', Validators.required],
      user_password_confirmation: ['', Validators.required],
      user_nationality: ['', Validators.required],
      user_phone: ['', Validators.required],
      // user_extra_data: ['', Validators.required],
    });
    this.formSecoundStep = this._formBuilder.group({
      company_name: ['', Validators.required],
      company_address: ['', Validators.required],
      company_business_email: ['', Validators.required],
      company_country_id: ['', Validators.required],
      company_city_id: ['', Validators.required],
      company_phone: ['', Validators.required],
      company_extra_data: ['', Validators.required],
      // user_position: ['', Validators.required],
      // user_status: ['', Validators.required],
      // user_is_admin: ['', Validators.required],
      // lang: ['', Validators.required]
    });
    this.formThirdStep = this._formBuilder.group({
      company_avatar: ['', Validators.required]
    });
  }

get() {
  console.log('v formData', this.formFirstStep);
}
submit() {
  console.log('v formData', this.formFirstStep, this.formSecoundStep, this.formThirdStep);
}
}
