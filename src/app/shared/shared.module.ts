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
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { GradeFormComponent } from './grade-form/grade-form.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SidenavComponent,
    GradeComponent,
    SubjectComponent,
    SubjectFormComponent,
    GradeFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatRippleModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatDialogModule,
    MatMenuModule,
  ],
  exports: [LayoutComponent, SubjectComponent, GradeComponent, SubjectFormComponent, GradeFormComponent],
})
export class SharedModule {}
