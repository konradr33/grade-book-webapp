import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { GradesComponent } from './grades/grades.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SubjectHistoryComponent } from './subject-history/subject-history.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubjectsComponent, GradesComponent, SubjectHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  exports: [SubjectsComponent],
})
export class SubjectsModule {}
