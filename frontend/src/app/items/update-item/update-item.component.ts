import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  Params } from '@angular/router';
import { IItem } from './../../models/index';
import { ItemsService } from './../../services/index';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {
  exObject:any;
  currentItem: IItem;

  // Form Controls
  updateForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: [''],
    description: [''],
    price: [''],
    inventory: [''],
    category: [''],
    image_url: [''],
  });

  constructor(private itemsService: ItemsService, private route:ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  updateItem(formValues) {
    this.itemsService.updateItem(formValues).subscribe(() => {
      this.router.navigate(['/items'])
    });
  }

  cancel() {
    this.router.navigate(['/items'])
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.itemsService.getItem(+params['id']).subscribe((res: any) => {
        this.exObject = res;
        
        this.updateForm.setValue({
          id: this.exObject.id,
          name: this.exObject.name,
          description: this.exObject.description,
          price: this.exObject.price,
          inventory: this.exObject.inventory,
          category: this.exObject.category,
          image_url: this.exObject.image_url,
        });
      })   
    });
  }

}
