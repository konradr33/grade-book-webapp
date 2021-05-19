import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { GradesComponent } from './grades/grades.component';

@NgModule({
  declarations: [SubjectsComponent, GradesComponent],
  imports: [CommonModule, MatCardModule, MatRippleModule],
  exports: [SubjectsComponent],
})
export class SubjectsModule {}
