import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  brandTitle: string = "Angular Template";
  isAuthenticated: boolean;

  constructor(public authService: AuthService) {

  }
  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();

    if(this.authService.isAuthenticated())
    {
      console.log("isAuthenticated == true");
    }
    else{
      console.log("isAuthenticated == false");
    }
    if(this.authService.isLoggedIn())
    {
      console.log("isLoggedIn == true");
    }
    else{
      console.log("isLoggedIn == false");
    }
  }
  
}
