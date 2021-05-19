import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnDestroy {
  public sidenavOpened: boolean = true;

  private resizeSub: Subscription;

  constructor() {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(debounceTime(100))
      .subscribe((event) => {});
  }

  public toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  ngOnDestroy() {
    this.resizeSub?.unsubscribe();
  }
}
