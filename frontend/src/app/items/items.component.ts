import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../services/index';
import { IItem } from './../models/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: IItem[];
  constructor(private itemsService: ItemsService, private route:ActivatedRoute) {
    
  }

  keyword: string;
  category: string;

  reset($event): void {
    this.keyword = '';
    this.category = '';
  }

  ngOnInit(): any {
    this.itemsService.getItems().subscribe(res => {
      this.items = res;
    });
  }

}
