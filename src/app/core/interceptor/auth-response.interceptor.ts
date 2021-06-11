import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService, private toastService: ToastService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401 && this.authService.isLoggedIn()) {
          this.authService.logout();
          this.toastService.openErrorToast({ title: 'Error', message: 'Authentication error. Logged out' });
        }
        return throwError(err);
      }),
    );
  }
}
