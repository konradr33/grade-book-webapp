import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Grade } from '../../../models/grade';
import { getApiContext } from '../../utils/api-path';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class GradesService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  public getGrades(subjectID: string): Observable<Grade[]> {
    const role = this.authService.getCurrentRole();
    if (!role) {
      this.authService.logout();
      throw new Error('Could not get user role');
    }
    return this.http.get<Grade[]>(getApiContext(role!, 'subjects/' + subjectID + '/grades'));
  }
}
