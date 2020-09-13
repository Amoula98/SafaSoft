import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent,  TableUsersComponent } from './views';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './_services';
import { AuthGuard } from './_services/auth/auth-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { FooterComponent, HeaderComponent } from './shared/component';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    FooterComponent,
    HeaderComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
