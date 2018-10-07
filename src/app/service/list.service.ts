import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import List from '../models/list';

import MockLists from '../mock/mock-lists';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public lists: Array<List> = MockLists;

  constructor() { }

  public getLists(): Observable<List[]> {
    return of(this.lists);
  }

  public update(list: List): void {
    // console.log('update', list);
    this.lists.map((l: List) => {
      l.select = l.name === list.name && !l.select;
    });
  }

  public delete(list: List): Observable<List[]> {
    // console.log('delete', list);
    this.lists = this.lists.filter((l: List) => {
      return l.name !== list.name;
    });
    return of(this.lists);
  }
}
