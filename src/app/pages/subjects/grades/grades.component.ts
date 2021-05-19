import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradesService } from '../../../core/grades/grades.service';
import { Grade } from '../../../../models/grade';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  public subjectID: string | null | undefined;
  public grades: Grade[] = [];

  constructor(private route: ActivatedRoute, private gradesService: GradesService) {}

  ngOnInit() {
    this.subjectID = this.route.snapshot.paramMap.get('id');

    if (this.subjectID) {
      this.gradesService.getGrades(this.subjectID).subscribe((grades: Grade[]) => {
        this.grades = grades;
      });
    }
  }
}
