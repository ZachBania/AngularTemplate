import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Router } from '@angular/router';
import { IItem } from './../models/items.model';
import { ItemsService } from './../services/index'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;
  @Output() itemDetailClick = new EventEmitter();
  
  constructor(private itemsService :ItemsService, private router: Router) { 
  
  }
  detailClick(): void {
    this.itemDetailClick.emit(this.item.name);
  }

  serviceDeleteItem(item) {
    this.itemsService.deleteItem(item).subscribe(() => {
    });
    this.router.navigate(['/items'])
  }

  
  ngOnInit(): void {
    
  }

}
