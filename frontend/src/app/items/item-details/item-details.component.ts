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
      })  
    });

  }

}
