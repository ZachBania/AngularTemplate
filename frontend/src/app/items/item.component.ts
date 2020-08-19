import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from './../models/items.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;
  @Output() itemDetailClick = new EventEmitter();

  detailClick(): void {
    this.itemDetailClick.emit(this.item.name);
  }

  constructor() { 
  
  }
  
  ngOnInit(): void {
    
  }

}
