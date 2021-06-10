import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../../../models/subject';
import { SubjectsService } from '../../../core/subjects/subjects.service';

@Component({
  selector: 'app-subject-history',
  templateUrl: './subject-history.component.html',
  styleUrls: ['./subject-history.component.scss'],
})
export class SubjectHistoryComponent implements OnInit {
  public history: Subject[] = [];

  constructor(private route: ActivatedRoute, private subjectsService: SubjectsService) {}

  ngOnInit(): void {
    const subjectID = this.route.snapshot.paramMap.get('id');

    if (subjectID) {
      this.subjectsService.getSubjectHistory(subjectID).subscribe((history: Subject[]) => {
        this.history = history;
      });
    }
  }
}
