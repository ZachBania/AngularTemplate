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
  
  ngOnInit() {

    this.isAuthenticated = this.authService.isAuthenticated();

    if(this.authService.isAuthenticated())
    {
      console.log("isAuthenticated == true");
    }
    else{
      console.log("isAuthenticated == false");
    }
  }
  
}
