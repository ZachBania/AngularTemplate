import { Component, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { IUser } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  brandTitle: string = "Angular Template";
  currentUser: IUser;
  loginbtn:boolean;
  logoutbtn:boolean;
  
  constructor(private authService: AuthService) {
    authService.getLoggedInName.subscribe(name => this.changeName(name));

    if (this.authService.isAuthenticated() == true) {
      this.currentUser = JSON.parse(this.authService.getToken()) as IUser;      
      console.log("currentUser: ", this.currentUser);
      console.log("isAuthenticated: true");
    }

    if(this.authService.isAuthenticated()) {
        this.loginbtn=false;
        this.logoutbtn=true;
      } else {
        this.loginbtn=true;
        this.logoutbtn=false;
      }
    }
    
    private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }


  
  logout() {
    this.authService.deleteToken();
    window.location.href = window.location.href;
  }
  
}
