import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  mouseoverLogin;
  loginInvalid = false;

  constructor(private authService:AuthService, private router:Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.username, formValues.password)
    .subscribe(resp => {
        if(resp) {
    
          this.authService.isAuthenticated();

          this.router.navigate(['main']);
        } else {
          this.loginInvalid = true;
        }
      })
  }
  
 
  cancel() {
    this.router.navigate(['main'])
  }
}