import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradesService } from '../../../core/grades/grades.service';
import { Grade } from '../../../../models/grade';
import { AuthService } from '../../../core/auth/auth.service';
import { ToastService } from '../../../core/toast/toast.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  public subjectID: string | null | undefined;
  public grades: Grade[] = [];

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private gradesService: GradesService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.subjectID = this.route.snapshot.paramMap.get('id');

    if (this.subjectID) {
      this.gradesService.getGrades(this.subjectID).subscribe((grades: Grade[]) => {
        this.grades = grades;
      });
    }
  }

  public onGradeCreate(grade: { grade: string; description: string }) {
    this.gradesService.createNew(this.subjectID, { ...grade, studentName: 'user1' }).subscribe(
      (created) => {
        this.toastService.openSuccessToast({ title: 'Success', message: `Successfully added grade` });

        this.gradesService.getGrades(this.subjectID).subscribe((grades: Grade[]) => {
          this.grades = grades;
        });
      },
      (err) => {
        console.error('Error creating new grade: ', err);
        this.toastService.openSuccessToast({ title: 'Error', message: 'Could not create grade' });
      },
    );
  }
}
