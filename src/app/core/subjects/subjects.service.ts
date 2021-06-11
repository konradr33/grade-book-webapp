import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Subject } from '../../../models/subject';
import { getApiContext } from '../../utils/api-path';
import { AuthService } from '../auth/auth.service';
import { SubjectDto } from '../../../models/subject.dto';
import { environment } from '../../../environments/environment';

@Injectable()
export class SubjectsService {
  private _subjects$ = new BehaviorSubject<Subject[]>([]);

  constructor(private authService: AuthService, private http: HttpClient) {}

  public getUserSubjects(): Observable<Subject[]> {
    const role = this.authService.getCurrentRole();
    if (!role) {
      this.authService.logout();
      throw new Error('Could not get user role');
    }

    return this.http.get<Subject[]>(getApiContext(role!, 'subjects')).pipe(
      tap((subjects: Subject[]) => {
        this._subjects$.next(subjects);
      }),
    );
  }

  public getSubject(subjectID: string): Observable<Subject> {
    const role = this.authService.getCurrentRole();
    if (!role) {
      this.authService.logout();
      throw new Error('Could not get user role');
    }

    return this.http.get<Subject>(getApiContext(role!, 'subjects/' + subjectID));
  }

  public createNew(subject: SubjectDto): Observable<Subject> {
    const role = this.authService.getCurrentRole();
    if (!role) {
      this.authService.logout();
      throw new Error('Could not get user role');
    }

    return this.http.post<Subject>(getApiContext(role!, 'subjects'), subject).pipe(
      tap((created) => {
        this._subjects$.next([...this._subjects$.value, created]);
      }),
    );
  }

  public updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(environment.apiContext + `teachers/subjects/${subject.ID}`, subject);
  }

  getSubjectHistory(subjectID: string): Observable<Subject[]> {
    const role = this.authService.getCurrentRole();
    if (!role) {
      this.authService.logout();
      throw new Error('Could not get user role');
    }

    return this.http.get<Subject[]>(getApiContext(role!, 'subjects/' + subjectID + '/history'));
  }
}
