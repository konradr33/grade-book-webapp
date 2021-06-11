import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ChangeDataComponent } from './change-data/change-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ChangeDataComponent],
  imports: [CommonModule, MatInputModule, MatSelectModule, MatButtonModule, ReactiveFormsModule],
})
export class UsersModule {}
