import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  private first_name:FormControl
  private last_name:FormControl
  private email:FormControl
  private username:FormControl
  private password:FormControl

  constructor(private router:Router, private authService:AuthService) {

  }

  ngOnInit() {
    this.first_name = new FormControl(this.authService.currentUser.first_name, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.last_name = new FormControl(this.authService.currentUser.last_name, Validators.required);
    this.email = new FormControl(this.authService.currentUser.email, Validators.required);
    this.username = new FormControl(this.authService.currentUser.username, Validators.required);
    this.password = new FormControl(this.authService.currentUser.password, Validators.required);

    this.profileForm = new FormGroup({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      username: this.username,
      password: this.password,
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.first_name, formValues.last_name, formValues.email, formValues.username, formValues.password)
      this.router.navigate(['main'])
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['main']);
    })
  }

  validateFirstName() {
    return this.first_name.valid || this.first_name.untouched
  }
  
  validateLastName() {
    return this.last_name.valid || this.last_name.untouched
  }

  validateEmail() {
    return this.email.valid || this.email.untouched
  }

  validateUsername() {
    return this.username.valid || this.username.untouched
  }

  validatePassword() {
    return this.password.valid || this.password.untouched
  }

  cancel() {
    this.router.navigate(['main'])
  }
       
}
