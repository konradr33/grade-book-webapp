import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SubjectsModule } from './subjects/subjects.module';
import { HomeModule } from './home/home.module';
import { GradesModule } from './grades/grades.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, SubjectsModule, HomeModule, GradesModule],
  exports: [LoginModule, SubjectsModule, HomeModule, GradesModule],
})
export class PagesModule {}
