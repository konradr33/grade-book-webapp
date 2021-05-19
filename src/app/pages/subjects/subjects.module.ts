import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { GradesComponent } from './grades/grades.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [SubjectsComponent, GradesComponent],
  imports: [CommonModule, SharedModule, MatCardModule, MatRippleModule, MatButtonModule, MatPaginatorModule],
  exports: [SubjectsComponent],
})
export class SubjectsModule {}
