import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @ViewChild('stepper') stepper;

  constructor( private _formBuilder: FormBuilder, private registeration: RegisterationService, private route: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formFirstStep = this._formBuilder.group({
      user_full_name: ['', [Validators.required, Validators.minLength(10)] ],
      user_email: ['', [Validators.required, Validators.email]],
      user_password: ['', [Validators.required, Validators.minLength(10),
        Validators.pattern
        ('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      ]],
      user_password_confirmation: ['',  [Validators.required, Validators.minLength(10),   Validators.pattern
        ('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      user_nationality: ['', Validators.required],
      user_phone: ['', Validators.required],
      lang: 'en'
      // user_extra_data: ['', Validators.required],
    });
    this.formSecoundStep = this._formBuilder.group({
      company_name: ['', [Validators.required, Validators.minLength(10)]],
      company_address: ['', Validators.required],
      company_business_email: ['', [Validators.required, Validators.email]],
      company_country_id: ['', Validators.required],
      company_city_id: ['', Validators.required],
      company_phone: ['', Validators.required],
      company_extra_data: new FormArray([new FormControl('')], Validators.required),
    });
    this.formThirdStep = this._formBuilder.group({
      company_avatar: ['@/home/abdo/Pictures/Screenshot from 2020-08-16 14-22-54.png', Validators.required]
    });
  }

get() {
  this.isMatchPassword();
}
submit() {
  console.log('v formData', this.formFirstStep, this.formSecoundStep, this.formThirdStep);
  const data = {...this.formFirstStep.value, ...this.formSecoundStep.value};
  console.log('v formData', data);
  this.registeration.registeration(data).subscribe(
    (res) => {
      console.log('res', res);
      this.route.navigate(['/succuss-operation']);
    }
  );

}
isMatchPassword() {
  console.log('event', this.formFirstStep.value.user_password, this.formFirstStep.value.user_password_confirmation);
  if (this.formFirstStep.valid) {
    if (this.formFirstStep.value.user_password.toLocaleLowerCase() ===
     this.formFirstStep.value.user_password_confirmation.toLocaleLowerCase()) {
      this.stepper.selectedIndex += 1;
    } else {
      this.formFirstStep.patchValue({
        user_password_confirmation: ''
      });
    }
  }
  console.log('event', this.formFirstStep, this.formFirstStep.value.user_password, this.formFirstStep.value.user_password_confirmation);

}
updateForm() {
  this.formFirstStep = this.formFirstStep;
  console.log('v formData', this.formFirstStep);
}
}
