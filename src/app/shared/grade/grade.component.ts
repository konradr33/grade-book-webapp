import { EventEmitter, ViewChild } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Grade } from '../../../models/grade';
import { AuthService } from '../../core/auth/auth.service';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent {
  @Input() grade: Grade;
  @Input() showActions: boolean = true;

  @Output() modify: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('menu') menu: MatMenu;

  constructor(public readonly authService: AuthService) {}

  onModifyClicked() {
    this.modify.emit();
  }
}
