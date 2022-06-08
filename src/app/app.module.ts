import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';

import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './generalComponents/navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule,
    StoreModule.forRoot(AppReducers),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
