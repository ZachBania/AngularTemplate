import { Injectable, Output, EventEmitter } from '@angular/core'
import { IUser } from '../models/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  server_url: string = "https://zrbania.uwmsois.com";
  redirectUrl: string;
  token: string;
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userValue(): IUser {
    return this.currentUserSubject.value;
}

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  public userlogin(formValues) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IUser>(this.server_url + '/backend/admin/auth/login.php', formValues, options)
    .pipe(map(data => {
      // store user details token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }));
  }
  
  public userRegistration(user) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IUser>(this.server_url + '/backend/admin/auth/register.php', user, options)
    .pipe(map(data => { return data;  }));
  }

  public updateCurrentUser(formValues) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<string>(this.server_url + '/backend/admin/auth/update.php', formValues, options)
    .pipe(map(data => {
      // Map data into currentUser
      // Map object into local storage
      // .replace(/\\/g, "");

      localStorage.setItem('user', data); 
      this.currentUserSubject.next(JSON.parse(localStorage.getItem('user')));
      console.log('data', data)
      console.log('this.currentUser', this.currentUser)
      console.log('this.currentUserSubject', this.currentUserSubject);

      return data;
  }));
    
  } 

  isAuthenticated() {
    const user = localStorage.getItem('user');
    if (user == null || user == 'undefined' || user == '[]') {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/main']);
  }
}