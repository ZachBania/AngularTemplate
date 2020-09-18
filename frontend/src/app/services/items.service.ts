import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IItem } from '../models/items.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  server_url: string = 'https://zrbania.uwmsois.com';
  public cart: IItem[] = [];

  constructor(private http: HttpClient) {}

  getItems(): Observable<IItem[]> {
    return this.http
      .get<IItem[]>(this.server_url + '/backend/items/read.php')
      .pipe(catchError(this.handleError<IItem[]>('getItems')));
  }

  getItem(itemId: number): Observable<IItem> {
    const params = new HttpParams().set('id', itemId.toString());
    return this.http
      .get<IItem>(this.server_url + '/backend/items/read-detail.php', {
        params: params,
      })
      .pipe(catchError(this.handleError<IItem>('getItem')));
  }

  saveItem(item) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<IItem>(
      this.server_url + '/backend/items/insert.php',
      item,
      options
    );
  }

  updateItem(item) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<IItem>(
      this.server_url + '/backend/items/update.php',
      item,
      options
    );
  }

  deleteItem(item) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<IItem>(
      this.server_url + '/backend/items/delete.php',
      item,
      options
    );
  }

  searchItems(searchTerm?: string): Observable<IItem[]> {
    return this.http
      .get<IItem[]>(this.server_url + '/backend/items/read.php/', {
        params: { search: searchTerm },
      })
      .pipe(catchError(this.handleError<IItem[]>('searchItems')));
  }

  addToCart(item) {
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(item) { 
    this.cart = JSON.parse(localStorage.getItem('cart'));
    for (var i=0; i < this.cart.length; i++) {
      if (this.cart[i].id == item.id) {
        this.cart.splice(i, 1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  replaceFromCart(item) {
    let index = this.cart.indexOf(item);
    this.cart[index] = item;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    return this.cart;
  }

  resetCart(): void {
    this.cart = [];
    localStorage.setItem('cart', '');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
