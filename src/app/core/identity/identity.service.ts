import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { UserData } from '../../../models/user-data';
import { environment } from '../../../environments/environment';
import { UserDataDto } from '../../../models/user-data.dto';

@Injectable()
export class IdentityService {
  constructor(private authService: AuthService, private http: HttpClient) {}

  public identities$: BehaviorSubject<Map<string, string>> = new BehaviorSubject(new Map());

  public fetchAllStudents(): Observable<UserData[]> {
    console.log('fetchAllStudents');
    return this.http.get<UserData[]>(environment.apiContext + 'identity/students');
  }

  public fetchIdentity(username: string): Observable<string> {
    return this.http.get<UserDataDto>(environment.apiContext + 'identity/' + username).pipe(
      tap((x) => {
        this.identities$[username] = x;
      }),
      catchError(() => {
        return username;
      }),
      map((userData: UserDataDto) => {
        console.log('map', userData, `${userData.name} ${userData.surname}`);
        return `${userData.name} ${userData.surname}`;
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
