import { Component, OnInit } from '@angular/core';

import { ListService } from './service/list.service';

import List from './models/list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'angular slip list';

  public lists: Array<any>;

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit() {
    this.listService.getLists().subscribe(lists => this.lists = lists);
  }

  public updateList(list: List) {
    this.listService.update(list);
  }

  public deleteList(list: List) {
    this.listService.delete(list).subscribe(lists => this.lists = lists);
  }
}
