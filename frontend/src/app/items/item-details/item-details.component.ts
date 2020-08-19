import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IItem } from './../../models/index';
import { ItemsService } from './../../services/index';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: IItem;
  object:any;
   arr = [];  

  constructor(private itemsService: ItemsService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.itemsService.getItem(+params['id']).subscribe((res: any) => {
         this.object = res;
        //  this.item.id = this.object.id;
        //  this.item.name = this.object.name;
        //  this.item.description = this.object.description;
        //  this.item.price = this.object.price;
        //  this.item.inventory = this.object.inventory;
        //  this.item.category = this.object.category;
        //  this.item.image_url = this.object.image_url;
         
      })  
    });

  }

}
