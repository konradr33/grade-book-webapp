import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SubjectsModule } from './subjects/subjects.module';
import { HomeModule } from './home/home.module';
import { GradesModule } from './grades/grades.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, SubjectsModule, HomeModule, GradesModule, UsersModule],
  exports: [LoginModule, SubjectsModule, HomeModule, GradesModule, UsersModule],
})
export class PagesModule {}
