import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  brandTitle: string = "Prototype";
  
  constructor(public authService: AuthService ) { }

  ngOnInit(): void {
    this.authService.isAuthenticated();

  }

}
