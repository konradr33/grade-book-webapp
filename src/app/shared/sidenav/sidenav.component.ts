import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { ToastService } from '../../core/toast/toast.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(public authService: AuthService, private router: Router, private toastService: ToastService) {}

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

  onLogoutClicked(): void {
    this.authService.logout();
    this.toastService.openSuccessToast({ title: 'Success', message: 'Logged out' });
  }
}
