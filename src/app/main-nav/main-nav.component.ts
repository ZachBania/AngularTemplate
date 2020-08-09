import { Component, OnInit } from '@angular/core';
import { AuthService } from './../user/auth.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor(public auth: AuthService) {}
  
  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }

}