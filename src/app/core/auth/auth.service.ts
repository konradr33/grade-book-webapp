import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { LoginResponse } from '../../../models/login-response';
import { Router } from '@angular/router';
import { UserRole } from '../../../models/user-role';
import { ToastService } from '../toast/toast.service';

@Injectable()
export class AuthService {
  private readonly _user$: BehaviorSubject<User | undefined>;
  private readonly _jwtToken$: BehaviorSubject<string | undefined>;

  constructor(private http: HttpClient, private readonly router: Router, private readonly toastService: ToastService) {
    this._user$ = new BehaviorSubject<User | undefined>(undefined);
    this._jwtToken$ = new BehaviorSubject<string | undefined>(undefined);
    const token = localStorage.getItem('jwt');

    if (token) {
      this._jwtToken$.next(token);
      setTimeout(() => this.me().subscribe());
      const user = localStorage.getItem('user');
      if (user) {
        this._user$.next(JSON.parse(user));
      }
    }
  }

  public loginUser(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.apiContext + 'login', { username, password }).pipe(
      tap((res: LoginResponse) => {
        this._user$.next({ username: res.username, role: res.role });
        this._jwtToken$.next(res.token);
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('user', JSON.stringify({ username: res.username, role: res.role }));
      }),
    );
  }

  public me(): Observable<{ username: string; role: UserRole }> {
    return this.http.get<{ username: string; role: UserRole }>(environment.apiContext + 'me').pipe(
      tap((res: { username: string; role: UserRole }) => {
        this._user$.next({ username: res.username, role: res.role });
      }),
    );
  }

  public logout(): void {
    this._user$.next(undefined);
    this._jwtToken$.next(undefined);
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    return !!this._jwtToken$.value;
  }

  public getUser$(): Observable<User | undefined> {
    return this._user$.asObservable();
  }

  public getCurrentToken(): string | undefined {
    return this._jwtToken$.value;
  }

  public getCurrentRole(): UserRole | undefined {
    return this._user$.value?.role;
  }
}
