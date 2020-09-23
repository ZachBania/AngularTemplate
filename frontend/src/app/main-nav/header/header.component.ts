import { Component, OnInit, Output } from '@angular/core';
import { AuthService, ItemsService } from './../../services/index';
import { IItem, IUser } from './../../models/index';
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
  cartTotal: number = 0;
  @Output() currentUser: IUser;

  constructor(
    public authService: AuthService,
    private itemsService: ItemsService,
    private router: Router
  ) {
    if (this.authService.isAuthenticated() == true) {
      this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    }
  }

  ngOnInit(): void {
    this.authService.isAuthenticated();

    this.router.events.subscribe((val) => {
      this.cart = this.itemsService.getCart();
      this.cartTotal = this.itemsService.getCartTotal();
      this.cartLength = 0;
      for (let i = 0; i < this.cart.length; i++) {
        this.cartLength = this.cartLength * 1 + this.cart[i].quanity * 1;
      }
    });
  }
}
