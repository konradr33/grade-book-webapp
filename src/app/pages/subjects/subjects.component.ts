import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from '../../core/auth/auth.service';
import { ToastService } from '../../core/toast/toast.service';
import { SubjectDto } from '../../../models/subject.dto';
import { SubjectFormComponent } from '../../shared/subject-form/subject-form.component';
import { Subject } from '../../../models/subject';
import { SubjectsService } from '../../core/subjects/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[] = [];

  constructor(
    public authService: AuthService,
    private router: Router,
    private subjectsService: SubjectsService,
    private toastService: ToastService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.subjectsService.getUserSubjects().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
    });
  }

  onSubjectClicked(subject: Subject) {
    this.router.navigate(['subjects', subject.ID]);
  }

  onSubjectChange(subject: Subject) {
    const dialogRef = this.dialog.open(SubjectFormComponent, { data: subject });

    dialogRef.afterClosed().subscribe((subjectDto: SubjectDto) => {
      if (subjectDto) {
        this.subjectsService.updateSubject({ ...subject, ...subjectDto }).subscribe(
          () => {
            this.toastService.openSuccessToast({ title: 'Success', message: 'Subject updated' });
            this.subjectsService.getUserSubjects().subscribe((subjects: Subject[]) => {
              this.subjects = subjects;
            });
          },
          (error) => {
            this.toastService.openErrorToast({ title: 'Error', message: 'Could not update Subject' });
          },
        );
      }
    });
  }

  onSubjectCreate() {
    const dialogRef = this.dialog.open(SubjectFormComponent);

    dialogRef.afterClosed().subscribe((subjectDto: SubjectDto) => {
      if (subjectDto) {
        this.subjectsService.createNew(subjectDto).subscribe(
          () => {
            this.toastService.openSuccessToast({ title: 'Success', message: 'Subject updated' });
            this.subjectsService.getUserSubjects().subscribe((subjects: Subject[]) => {
              this.subjects = subjects;
            });
          },
          (error) => {
            this.toastService.openErrorToast({ title: 'Error', message: 'Could not update Subject' });
          },
        );
      }
    });
  }
}
