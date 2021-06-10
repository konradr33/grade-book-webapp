import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Grade } from '../../../models/grade';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent {
  @Input() grade: Grade;
  @Input() showActions: boolean = true;

  @Output() modify: EventEmitter<void> = new EventEmitter<void>();

  constructor(public readonly authService: AuthService) {}

  onModifyClicked(event: MouseEvent) {
    event.stopPropagation();
    this.modify.emit();
  }
}
