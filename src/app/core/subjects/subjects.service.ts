import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Subject } from '../../../models/subject';
import { getApiContext } from '../../utils/api-path';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class SubjectsService {
  private _subjects$ = new BehaviorSubject<Subject[]>([]);

  constructor(private authService: AuthService, private http: HttpClient) {}

  public getUserSubjects(): Observable<Subject[]> {
    if (this._subjects$.value.length > 0) {
      return of(this._subjects$.value);
    }

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
}
