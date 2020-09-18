import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ItemsService } from './../services/index';
import { IItem, IUser } from './../models/index';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss'],
})
export class ItemCartComponent implements OnInit {
  cart: IItem[];
  total: number = 0;
  item: IItem;
  @Output() currentUser: IUser;

  constructor(
    public authService: AuthService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authService.isAuthenticated() == true) {
      this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    }
  }

  updateQuanity(item, value: string) {
    if (value == 'increase') {
      item.quanity = item.quanity + 1;
    } else if (value == 'decrease' && item.quanity >= 2) {
      item.quanity = item.quanity - 1;
    }
    this.itemsService.replaceFromCart(item);
    this.updateTotal();
  }

  removeFromCart(item) {
    this.itemsService.removeFromCart(item);
  }

  updateTotal() {
    let productTotal: number = 0;
    this.total = 0;
    for (let i = 0; this.cart.length > i; i++) {
      productTotal = this.cart[i].price * 1 * (this.cart[i].quanity * 1);
      this.total = this.total + productTotal;
    }
  }

  ngOnInit(): void {
    this.cart = this.itemsService.getCart();

    for (let i = 0; this.cart.length > i; i++) {
      if (this.cart[i].quanity == undefined) {
        this.cart[i].quanity = 1;
      }
    }
    this.updateTotal();
  }
}
