import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from './../models/items.model';
import { ItemsService } from './../services/index';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: IItem;

  constructor(private itemsService: ItemsService, private router: Router) {}

  serviceDeleteItem(item) {
    this.itemsService.deleteItem(item).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }

  addItemToCart(item) {
    this.itemsService.addToCart(item);
  }

  ngOnInit(): void {}
}
