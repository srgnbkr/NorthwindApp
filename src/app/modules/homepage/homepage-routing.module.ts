import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'register',component:RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
