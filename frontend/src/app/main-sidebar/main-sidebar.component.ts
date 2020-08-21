import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ItemsService } from './../services/index';
import { IItem } from './../models/index'

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {
  
  item: IItem;


  constructor(public auth: AuthService, private itemsService: ItemsService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.item = data['item'];
    })
    // this.auth.checkAuthenticationStatus();
  }  

  searchTerm: string = "";
  matchingItems: IItem[]
  searchItems(searchTerm) {
    this.itemsService.searchItems(searchTerm).subscribe(items => {
      this.matchingItems = items;
    })
  }

}
