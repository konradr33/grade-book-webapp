import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsService } from './subjects/subjects.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GradesService } from './grades/grades.service';
import { AuthService } from './auth/auth.service';
import { JwtInterceptor } from './interceptor/http.interceptor';
import { ToastService } from './toast/toast.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthResponseInterceptor } from './interceptor/auth-response.interceptor';
import { IdentityService } from './identity/identity.service';

@NgModule({
  declarations: [],
  providers: [
    SubjectsService,
    GradesService,
    AuthService,
    ToastService,
    IdentityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, HttpClientModule, ToastrModule.forRoot({ positionClass: 'toast-bottom-right' })],
})
export class CoreModule {}
