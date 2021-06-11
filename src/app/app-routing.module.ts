import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { GradesComponent } from './pages/subjects/grades/grades.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/auth/auth.guard';
import { GradeHistoryComponent } from './pages/grades/grade-history/grade-history.component';
import { SubjectHistoryComponent } from './pages/subjects/subject-history/subject-history.component';
import { ChangeDataComponent } from './pages/users/change-data/change-data.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuard] },
  { path: 'subjects/:id', component: GradesComponent, canActivate: [AuthGuard] },
  { path: 'subjects/:id/history', component: SubjectHistoryComponent, canActivate: [AuthGuard] },
  { path: 'grades/:id/history', component: GradeHistoryComponent, canActivate: [AuthGuard] },
  { path: 'user-data', component: ChangeDataComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
