import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SubjectsModule } from './subjects/subjects.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, SubjectsModule],
  exports: [LoginModule, SubjectsModule],
})
export class PagesModule {}
