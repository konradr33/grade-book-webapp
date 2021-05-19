import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './layout/layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GradeComponent } from './grade/grade.component';
import { SubjectComponent } from './subject/subject.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent, SidenavComponent, GradeComponent, SubjectComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
  ],
  exports: [LayoutComponent, SubjectComponent, GradeComponent],
})
export class SharedModule {}
