import { Component, Input, OnInit } from '@angular/core';
import { Grade } from '../../../models/grade';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent implements OnInit {
  @Input() grade: Grade;

  constructor() {}

  ngOnInit(): void {}
}
