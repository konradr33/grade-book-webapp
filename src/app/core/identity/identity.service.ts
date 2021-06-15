import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { UserData } from '../../../models/user-data';
import { environment } from '../../../environments/environment';
import { UserDataDto } from '../../../models/user-data.dto';

@Injectable()
export class IdentityService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  public identities$: BehaviorSubject<Map<string, string>> = new BehaviorSubject(new Map());

  public setUserData(username: string, data: UserDataDto): Observable<void> {
    return this.http.post<void>(environment.apiContext + 'identity/' + username, data);
  }
  public fetchAllStudents(): Observable<UserData[]> {
    return this.http.get<UserData[]>(environment.apiContext + 'identity/students');
  }

  public fetchIdentity(username: string): Observable<string> {
    return this.http.get<UserDataDto>(environment.apiContext + 'identity/' + username).pipe(
      map((userData: UserDataDto) => {
        return `${userData.firstName} ${userData.lastName}`;
      }),
      catchError(() => {
        return of(username);
      }),
      tap((x) => {
        if (x) {
          this.identities$[username] = x;
        }
      }),
    );
  }

  public getFullUsernameDictionary(username: string): Observable<Map<string, string>> {
    if (!this.identities$.value.get(username)) {
      this.identities$.value.set(username, username);
      this.fetchIdentity(username).subscribe((value) => {
        this.identities$.value.set(username, value);
      });
    }

    return this.identities$.asObservable();
  }
}
