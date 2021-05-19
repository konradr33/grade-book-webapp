import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from '../../../models/subject';
import { getApiContext } from '../../utils/api-path';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SubjectsService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  public getUserSubjects(): Observable<Subject[]> {
    const role = this.authService.getCurrentRole();
    if (!role) {
      this.authService.logout();
      throw new Error('Could not get user role');
    }
    return this.http.get<Subject[]>(getApiContext(role!, 'subjects'));
  }
}
