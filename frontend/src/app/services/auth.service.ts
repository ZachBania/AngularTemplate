import { Injectable } from '@angular/core'
import { IUser } from '../models/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
 
@Injectable()
export class AuthService {
  currentUser:IUser

  constructor(private http: HttpClient) {}

  server_url: string = "https://zrbania.uwmsois.com";

  // Auth
  loginUser(username: string, password: string) {
    let loginInfo = { username: username, password: password };
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*', 'Authorization':'authkey',} )};
    
    return this.http.post(this.server_url + '/backend/admin/auth/login.php', loginInfo, options)
    .pipe(tap(data => { this.currentUser = <IUser>data['user']; }))
    .pipe(map(Users => { this.setToken(Users[0]); return Users; }))
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
    // const usertoken = this.getToken();
    return !!this.currentUser;
  }
  logout() {
    this.currentUser = undefined;
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post(this.server_url + '/backend/admin/auth/logout.php', {}, options);
  }

  // Insert, Update 
  public userRegistration(user) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IUser>(this.server_url + '/backend/admin/auth/register.php', user, options)
    .pipe(map(Users => { return Users; }));
  }
  
  updateCurrentUser(first_name: string, last_name: string, email: string, username: string, password: string) {
    this.currentUser.first_name = first_name;
    this.currentUser.last_name = last_name;
    this.currentUser.email = email;
    this.currentUser.username = username;
    this.currentUser.password = password;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }
}