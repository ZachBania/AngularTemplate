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
      .pipe(catchError(err => { return of(false) }))
      .pipe(map(Users => { this.setToken(Users[0].name); return Users; }));
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
  isLoggedIn() {
    const usertoken = this.getToken();
      if (usertoken != null) {
        return true
      }
    return false;
  }
  isAuthenticated() {
    return !!this.currentUser;
  }

  logout() {
    this.currentUser = undefined;
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post(this.server_url + '/backend/admin/auth/logout.php', {}, options);
  }

  // Insert, Update 
  public userRegistration(firstName: string, lastName: string, email: string, username: string, password: string) {
    return this.http.post<any>(this.server_url + '/backend/admin/auth/register.php', { firstName, lastName, email, username, password }).pipe(map(Users => { return Users; }));
  }
  
  updateCurrentUser(firstName: string, lastName: string, email: string, username: string, password: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.currentUser.email = email;
    this.currentUser.username = username;
    this.currentUser.password = password;

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }
}