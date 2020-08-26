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

  }

  updateCurrentUser(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues).subscribe(() => {
        this.router.navigate(['/user/profile'])
      });
    }
  }

  ngOnInit() {

    this.profileForm.setValue({
      id: this.authService.currentUser.id,
      first_name: this.authService.currentUser.first_name,
      last_name: this.authService.currentUser.last_name,
      email: this.authService.currentUser.email,
      username: this.authService.currentUser.username,
      password: this.authService.currentUser.password,
      date_created: this.authService.currentUser.date_created,
      permission_level: this.authService.currentUser.permission_level,
    });
    
  }

  logout() {
    this.authService.logout();
  }
  
  cancel() {
    this.router.navigate(['main'])
  }
       
}
