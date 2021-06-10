import { Component, OnInit } from '@angular/core';
import { Grade } from '../../../../models/grade';
import { ActivatedRoute } from '@angular/router';
import { GradesService } from '../../../core/grades/grades.service';

@Component({
  selector: 'app-grade-history',
  templateUrl: './grade-history.component.html',
  styleUrls: ['./grade-history.component.scss'],
})
export class GradeHistoryComponent implements OnInit {
  public history: Grade[] = [];
  constructor(private route: ActivatedRoute, private gradesService: GradesService) {}

  ngOnInit() {
    const gradeID = this.route.snapshot.paramMap.get('id');

    if (gradeID) {
      this.gradesService.getGradeHistory(gradeID).subscribe((history: Grade[]) => {
        this.history = history;
      });
    }
  }
}
