import { Injectable, Output, EventEmitter } from '@angular/core'
import { IUser } from '../models/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router} from '@angular/router';
import { ItemsService } from './items.service'

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  server_url: string = "https://zrbania.uwmsois.com";
  redirectUrl: string;
  token: string;
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;
  
  constructor(private http: HttpClient, private router: Router, private itemService: ItemsService) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get userValue(): IUser {
    return this.currentUserSubject.value;
}
  
  public userlogin(formValues) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IUser>(this.server_url + '/backend/admin/auth/login.php', formValues, options)
    .pipe(map(data => {
      localStorage.setItem('user', JSON.stringify(data));
      sessionStorage.setItem('user', JSON.stringify(data));
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
      localStorage.setItem('user', data); 
      sessionStorage.setItem('user', data); 
      this.currentUserSubject.next(JSON.parse(localStorage.getItem('user')));
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
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    this.currentUserSubject.next(null);

    this.itemService.resetCart();
    
    this.router.navigate(['/main']);
  }
}