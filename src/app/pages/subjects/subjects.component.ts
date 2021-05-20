import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/subject';
import { SubjectsService } from '../../core/subjects/subjects.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { ToastService } from '../../core/toast/toast.service';
import { SubjectDto } from '../../../models/subject.dto';

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
  ) {}

  ngOnInit(): void {
    this.subjectsService.getUserSubjects().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
    });
  }

  onSubjectClicked(subject: Subject) {
    this.router.navigate(['subjects', subject.ID]);
  }

  onSubjectCreate(subject: SubjectDto) {
    this.subjectsService.createNew(subject).subscribe(
      (created) => {
        this.toastService.openSuccessToast({ title: 'Success', message: `Successfully created ${created.name}` });
      },
      (err) => {
        console.error('Error creating new subject: ', err);
        this.toastService.openSuccessToast({ title: 'Error', message: 'Could not create subject' });
      },
    );
  }
}
