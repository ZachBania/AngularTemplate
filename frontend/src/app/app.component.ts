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
  
  constructor(private authService: AuthService) {
    
      // this.authService.currentUser.subscribe(x => this.currentUser = x);

  }
    
   


  
  logout() {
    this.authService.logout();
    window.location.href = window.location.href;
  }
  
}
