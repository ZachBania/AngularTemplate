import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from './../../services/index';
import { IItem } from './../../models/index';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  newItem: IItem;
  isDirty:boolean = true
  constructor(private itemsService:ItemsService, private router: Router) {

  }

  saveItem(formValues) {
    this.itemsService.saveItem(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/items'])
    });
  }

  cancel() {
    this.router.navigate(['/items'])
  }

  ngOnInit(): void {

  }
}
