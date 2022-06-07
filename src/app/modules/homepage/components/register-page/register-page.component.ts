import { MessageService } from 'primeng/api';
import { RegisterModel } from 'src/app/models/authModels/registerModel';

import { LocalstorageService } from './../../../../services/localStorageServices/localstorage.service';
import { AuthService } from './../../../../services/authServices/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  password: string | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalstorageService
  ) {}

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }



  register() {
    if (!this.registerForm.valid) return;

    let registerModel: RegisterModel = { ...this.registerForm.value };
    this.authService.register(registerModel).subscribe((response) => {
      this.localStorageService.set('tokenModel', response.data);
      this.localStorageService.set(
        'userMail',
        this.registerForm.get('email')?.value
      );

      this.router.navigate(['']);
    });
  }
}
