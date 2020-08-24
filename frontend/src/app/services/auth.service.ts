import { Injectable, Output, EventEmitter } from '@angular/core'
import { IUser } from '../models/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { Router} from '@angular/router';

 
@Injectable()
export class AuthService {
  currentUser:IUser;

  constructor(private http: HttpClient, private router: Router) {}

  server_url: string = "https://zrbania.uwmsois.com";
  redirectUrl: string;
  baseUrl:string = "http://localhost/angular_admin/php";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
    public userlogin(username, password) {
      let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
      return this.http.post<IUser>(this.server_url + '/backend/admin/auth/login.php', { username, password })
      .pipe(tap(data => { this.currentUser = <IUser>data['user']; }))
      .pipe(map(Users => { this.setToken(Users[0].name); this.getLoggedInName.emit(true); return Users; }));
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