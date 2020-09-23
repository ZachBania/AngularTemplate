import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, ItemsService } from './../services/index';
import { IItem, IUser } from './../models/index'


@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  
  item: IItem;
  cart: IItem[];
  @Output() currentUser: IUser;

  dateTime = new Date();
  ampm = this.dateTime.getHours() >= 12 ? 'pm' : 'am';
  time = this.dateTime.getHours()+":"+this.dateTime.getMinutes() + this.ampm;
  
  constructor(public authService: AuthService, private itemsService: ItemsService, private route:ActivatedRoute) { 
    if(this.authService.isAuthenticated() == true) {
      this.authService.currentUser.subscribe(x => this.currentUser = x); 
    }
  }

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.item = data['item'];
    });
    this.cart = this.itemsService.getCart();
  }  

  searchTerm: string = "";
  matchingItems: IItem[]
  searchItems(searchTerm) {
    this.itemsService.searchItems(searchTerm).subscribe(items => {
      this.matchingItems = items;
    })
  }

}
