import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './../../services/index';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder,private authService: AuthService,private router:Router) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    cancel() {
        this.router.navigate(['main'])
    }

    postLogin(formValues) {
        this.authService.userlogin(formValues)
        .pipe(first()).subscribe(
            data => {
                const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/main';
                    this.router.navigate([redirect]);
                },
            error => {
                alert("username or password entered doesn't match our records.")
                console.log(error)
            }
        );
    }
}

  
