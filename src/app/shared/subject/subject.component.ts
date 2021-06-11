import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from '../../../models/subject';
import { AuthService } from '../../core/auth/auth.service';
import { IdentityService } from '../../core/identity/identity.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {
  @Input() subject: Subject;
  @Input() showActions: boolean = true;

  @Output() modify: EventEmitter<void> = new EventEmitter<void>();

  constructor(public identityService: IdentityService, public readonly authService: AuthService) {}

  onModifyClicked() {
    this.modify.emit();
  }

  onMenuClicked(event: MouseEvent) {
    event.stopPropagation();
  }
}
