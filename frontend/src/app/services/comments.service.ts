import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { catchError, isEmpty, map } from 'rxjs/operators';

import { IComment } from '../models/index';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  server_url: string = 'https://zrbania.uwmsois.com';
  
  constructor(private http: HttpClient) {}


  getAllComments(): Observable<IComment[]> {
    return this.http
      .get<IComment[]>(this.server_url + '/backend/comments/read.php')
      .pipe(catchError(this.handleError<IComment[]>('getComments')));
  }

  getComments( itemId: number): Observable<IComment[]> {
    const params = new HttpParams().set('item_id', itemId.toString());
    return this.http
      .get<IComment[]>(this.server_url + '/backend/comments/read-detail.php', {
        params: params,
      })
      .pipe(catchError(this.handleError<IComment[]>('getComment')));
  }

  saveComment(formValues) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<IComment>(
      this.server_url + '/backend/comments/insert.php',
      formValues, 
      options
    );
  }

  deleteComment(comment) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<IComment>(
      this.server_url + '/backend/comments/delete.php',
      comment,
      options
    );
  }

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
