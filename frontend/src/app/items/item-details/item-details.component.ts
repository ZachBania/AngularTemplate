import { Component, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IItem, IComment, IUser } from './../../models/index';
import {
  ItemsService,
  CommentsService,
  AuthService,
} from './../../services/index';
import { FormControl, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item: IItem;
  url_id: number;
  comments: IComment[];
  comment: IComment;
  @Output() currentUser: IUser;
  adminPanel = false;
  rating;

  commentForm: FormGroup = this.formBuilder.group({
    item_id: [' '],
    user_id: [' '],
    name: [' '],
    body: [' '],
    rating: [' '],
  });

  constructor(
    public authService: AuthService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private formBuilder: FormBuilder
  ) {
    if (this.authService.isAuthenticated() == true) {
      this.authService.currentUser.subscribe((x) => (this.currentUser = x));
      if (this.currentUser.permission_level == 'admin') {
        this.adminPanel = true;
      }
    }
  }

  addItemToCart(item) {
    this.itemsService.addToCart(item);
  }

  saveComment(formValues) {
    this.commentService.saveComment(formValues).subscribe(() => {});
  }

  deleteComment(comment) {
    this.commentService.deleteComment(comment).subscribe(() => {
      console.log(comment);
    });
  }

  commentCounter(rating: number) {
    let arr = new Array();
    for(let i =0; i < rating; i++) {
      arr.push(i)
    }
    return arr;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.url_id = +params['id'];

      this.commentForm.setValue({
        item_id: +params['id'],
        user_id: this.authService.userValue.id,
        name: '',
        body: '',
        rating: '',
      });
    });

    this.itemsService.getItem(this.url_id).subscribe((res: any) => {
      this.item = res;
    });

    this.commentService.getComments(this.url_id).subscribe((res: any) => {
      this.comments = res;
    });
  }
}
