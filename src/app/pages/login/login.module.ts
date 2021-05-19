import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from './login.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, CoreModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatInputModule],
  exports: [LoginComponent],
})
export class LoginModule {}
