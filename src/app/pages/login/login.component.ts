import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../core/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly toastService: ToastService,
    private readonly router: Router,
    private readonly fb: FormBuilder,
  ) {
    this.loginForm = fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value['login'], this.loginForm.value['password']).subscribe(
        () => {
          this.router.navigate(['/home']);
          this.toastService.openSuccessToast({ title: 'Success', message: 'Logged in' });
        },
        (error) => {
          console.error('login error: ', error?.message);
          this.toastService.openErrorToast({
            title: 'Failed',
            message: 'Could not log in. Check your login and password',
          });
        },
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
