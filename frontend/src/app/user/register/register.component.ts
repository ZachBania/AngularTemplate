import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { IUser } from './../../models/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser: IUser;
  isDirty:boolean = true
  constructor(private authService: AuthService, private router: Router) {

  }

  saveUser(formValues) {
    this.authService.userRegistration(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/user/login'])
    });
  }

  cancel() {
    this.router.navigate(['/user/login'])
  }

  ngOnInit(): void {

  }
}
