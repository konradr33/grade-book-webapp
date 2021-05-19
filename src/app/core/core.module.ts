import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsService } from './subjects/subjects.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GradesService } from './grades/grades.service';
import { AuthService } from './auth/auth.service';
import { JwtInterceptor } from './interceptor/http.interceptor';
import { ToastService } from './toast/toast.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  providers: [
    SubjectsService,
    GradesService,
    AuthService,
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, HttpClientModule, ToastrModule.forRoot()],
})
export class CoreModule {}
