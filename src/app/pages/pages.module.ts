import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { SubjectsModule } from './subjects/subjects.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, SubjectsModule, HomeModule],
  exports: [LoginModule, SubjectsModule, HomeModule],
})
export class PagesModule {}
