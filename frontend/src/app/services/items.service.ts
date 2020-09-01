import { Injectable, EventEmitter } from '@angular/core'
import { Subject, Observable, of } from 'rxjs'
import { catchError, map} from 'rxjs/operators';
import { IItem } from '../models/items.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  server_url: string = "https://zrbania.uwmsois.com";

  constructor(private http: HttpClient) { }

  getItems():Observable<IItem[]> {
    return this.http.get<IItem[]>(this.server_url + '/backend/items/read.php')
    .pipe(catchError(this.handleError<IItem[]>('getItems')))
  }

  getItem(itemId:number):Observable<IItem> {
    const params = new HttpParams().set('id', itemId.toString());
    return this.http.get<IItem>(this.server_url + '/backend/items/read-detail.php', { params: params })
    .pipe(catchError(this.handleError<IItem>('getItem')))
  }

  saveItem(item) { 
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IItem>(this.server_url + '/backend/items/insert.php', item, options);
  }

  updateItem(item) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IItem>(this.server_url + '/backend/items/update.php', item, options);
  }

  deleteItem(item) {
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IItem>(this.server_url + '/backend/items/delete.php', item, options); 
  }

  searchItems(searchTerm?: string): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.server_url + '/backend/items/read.php/', {
      params: {
        search: searchTerm
      }
    }
    )
      .pipe(catchError(this.handleError<IItem[]>('searchItems')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
