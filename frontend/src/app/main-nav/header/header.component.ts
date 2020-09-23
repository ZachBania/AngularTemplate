import { Component, OnInit } from '@angular/core';
import { AuthService, ItemsService } from './../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  brandTitle: string = 'Angular Prototype';
  cart: any;
  cartLength: number = 0;

  constructor(
    public authService: AuthService,
    private itemsService: ItemsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated();
    this.router.events.subscribe((val) => {
      this.cart = this.itemsService.getCart();
      this.cartLength = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartLength = this.cartLength * 1 + this.cart[i].quanity * 1;
      }
    });
  }
}
