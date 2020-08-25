import { Injectable, Output, EventEmitter } from '@angular/core'
import { IUser } from '../models/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';

 
@Injectable()
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) {}
  
  currentUser: IUser;
  server_url: string = "https://zrbania.uwmsois.com";
  redirectUrl: string;
  token: string;

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  public userlogin(username, password) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IUser>(this.server_url + '/backend/admin/auth/login.php', { username, password })
    .pipe(map(Users => { this.setToken(
      JSON.stringify(Users[0])
      );  this.currentUser = Users[0]; this.getLoggedInName.emit(true); return Users; }));
      
  }
  
  public userRegistration(formValues) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>(this.server_url + '/backend/admin/auth/register.php', formValues, options)
    .pipe(map(Users => { return Users;  }));
  }
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isAuthenticated() {
    const usertoken = this.getToken();
    if (usertoken != null) {
    return true
    }
    return false;
  }

  logout() {
    this.deleteToken();
    window.location.href = window.location.href;
    this.router.navigate(['main']);
  }
}