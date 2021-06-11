import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Grade } from '../../../models/grade';
import { AuthService } from '../../core/auth/auth.service';
import { MatMenu } from '@angular/material/menu';
import { IdentityService } from '../../core/identity/identity.service';

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

  constructor(public readonly authService: AuthService, public identityService: IdentityService) {}

  onModifyClicked() {
    this.modify.emit();
  }
}
