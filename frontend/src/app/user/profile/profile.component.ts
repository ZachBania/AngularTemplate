import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import { IUser } from 'src/app/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: IUser;
  
  profileForm: FormGroup = this.formBuilder.group({
    id: [''],
    first_name: [''],
    last_name: [''],
    email: [''],
    username: [''],
    password: [''],
    date_created: [''],
    permission_level: ['']
  });
  

  constructor(private router:Router, private authService:AuthService, private formBuilder: FormBuilder) {
    if(this.authService.isAuthenticated() == true) {
      this.authService.currentUser.subscribe(x => this.currentUser = x);
    }
  }

  updateUser(formValues) { 
    this.authService.updateCurrentUser(formValues).subscribe(() => {
      this.router.navigate(['/main']);
    });
  }

  ngOnInit() {

    this.profileForm.setValue({
      id: this.currentUser.id,
      first_name: this.currentUser.first_name,
      last_name: this.currentUser.last_name,
      email: this.currentUser.email,
      username: this.currentUser.username,
      password: this.currentUser.password,
      date_created: this.currentUser.date_created,
      permission_level: this.currentUser.permission_level,
    });
    ;
  }

  logout() {
    this.authService.logout();
  }
  
  cancel() {
    this.router.navigate(['main'])
  }
       
}
