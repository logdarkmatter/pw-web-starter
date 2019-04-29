import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing';

import {JwtInterceptor, ErrorInterceptor} from './shared/helpers';
import {HomeComponent} from './layouts/home';
import {LoginComponent} from './layouts/login';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [NgbModule, BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
