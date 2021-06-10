import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { GradeFormComponent } from '../../../shared/grade-form/grade-form.component';
import { GradesService } from '../../../core/grades/grades.service';
import { Grade } from '../../../../models/grade';
import { AuthService } from '../../../core/auth/auth.service';
import { ToastService } from '../../../core/toast/toast.service';
import { Subject } from '../../../../models/subject';
import { SubjectsService } from '../../../core/subjects/subjects.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  public subjectID: string | null | undefined;
  public grades: Grade[];
  public subject: Subject;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private gradesService: GradesService,
    private subjectService: SubjectsService,
    private toastService: ToastService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.subjectID = this.route.snapshot.paramMap.get('id');

    if (this.subjectID) {
      this.gradesService.getGrades(this.subjectID).subscribe((grades: Grade[]) => {
        this.grades = grades;
      });

      this.subjectService.getSubject(this.subjectID).subscribe((subject: Subject) => {
        this.subject = subject;
      });
    }
  }

  public onGradeCreate(studentLogin: string) {
    const dialogRef = this.dialog.open(GradeFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gradesService.createNew(this.subject.ID, { ...result, studentName: studentLogin }).subscribe(
          () => {
            this.toastService.openSuccessToast({ title: 'Success', message: 'Grade added' });
            this.gradesService.getGrades(this.subjectID).subscribe((grades: Grade[]) => {
              this.grades = grades;
            });
          },
          (error) => {
            this.toastService.openSuccessToast({ title: 'Error', message: 'Could not add grade' });
          },
        );
      }
    });
  }

  onGradeChange(grade: Grade) {
    const dialogRef = this.dialog.open(GradeFormComponent, { data: grade });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.gradesService.updateGrade(grade.ID, result).subscribe(
          () => {
            this.toastService.openSuccessToast({ title: 'Success', message: 'Grade updated' });
            this.gradesService.getGrades(this.subjectID).subscribe((grades: Grade[]) => {
              this.grades = grades;
            });
          },
          (error) => {
            this.toastService.openSuccessToast({ title: 'Error', message: 'Could not update grade' });
          },
        );
      }
    });
  }

  public getStudentGrades(student: string): Grade[] {
    return this.grades.filter((grade: Grade) => {
      const split = grade.ID.split('.');
      if (split.length < 4) return false;
      return split[2] === student;
    });
  }
}
