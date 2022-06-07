import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';



import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { HomeCategoryComponent } from './components/home-category/home-category.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeProductComponent,
    HomeCategoryComponent,
    HomepageComponent,
    RegisterPageComponent,

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    PasswordModule,
    DividerModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    MessageModule,
    ButtonModule,
    CheckboxModule,

  ],
})
export class HomepageModule {}
