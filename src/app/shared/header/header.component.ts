import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { IdentityService } from '../../core/identity/identity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public authService: AuthService, public identityService: IdentityService) {}

  ngOnInit(): void {}

  public onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}
