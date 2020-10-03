import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompletedFormStatusComponent, DashBoardComponent, StepperFirstComponent, StepperSecondComponent } from './views';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { UploadImgComponent } from './views/dash-board/upload-img/upload-img.component';
import { SubmitDataComponent } from './views/dash-board/submit-data/submit-data.component';
import { ErrorMsgComponent } from './_shared/errorMsg/error-msg/error-msg.component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    StepperFirstComponent,
    StepperSecondComponent,
    UploadImgComponent,
    SubmitDataComponent,
    ErrorMsgComponent,
    CompletedFormStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
