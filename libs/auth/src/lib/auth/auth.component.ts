import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { AuthFacade } from '@infineo-disk-shop/auth';

@Component({
  selector: 'infineo-disk-shop-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  public invalidEmailError = 'Not a valid email';
  public isLoginMode = true;
  public hide = true;
  public loginForm: FormGroup;
  public minLengthError = 'Password length must be at least 8 characters';
  public requiredError = 'You must enter a value';

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onSubmit(): void {
    const { email, password } = this.loginForm.value;
    const credentials = { email, password };
    this.isLoginMode ? this.authFacade.login(credentials) : this.authFacade.register(credentials);
    this.router.navigate(['/']);
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.minLength(8), Validators.required]]
    });
  }
}
