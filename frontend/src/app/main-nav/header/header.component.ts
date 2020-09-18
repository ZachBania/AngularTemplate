import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  brandTitle: string = "Prototype";
  
  constructor(public authService: AuthService ) { }

  ngOnInit(): void {
    this.authService.isAuthenticated();

  }

}
