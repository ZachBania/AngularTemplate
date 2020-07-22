import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username
  password
  mouseoverLogin

  constructor(private authService:AuthService, private router:Router) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['main'])
  }

  cancel() {
    this.router.navigate(['main'])
  }
}