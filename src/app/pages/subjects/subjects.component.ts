import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../models/subject';
import { SubjectsService } from '../../core/subjects/subjects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[] = [];

  constructor(private router: Router, private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    this.subjectsService.getUserSubjects().subscribe((subjects: Subject[]) => {
      this.subjects = subjects;
    });
  }

  onSubjectClicked(subject: Subject) {
    this.router.navigate(['subjects', subject.ID]);
  }
}
