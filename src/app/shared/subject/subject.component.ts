import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../../../models/subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  @Input() subject: Subject;

  constructor() {}

  ngOnInit(): void {}
}
