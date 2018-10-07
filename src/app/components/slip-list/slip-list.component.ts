import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import List from '../../models/list';

@Component({
  selector: 'app-slip-list',
  templateUrl: './slip-list.component.html',
  styleUrls: ['./slip-list.component.scss']
})
export class SlipListComponent implements OnInit {

  public faTrashAlt = faTrashAlt;

  @Input() public lists: Array<List>;

  @Output() public update: EventEmitter<List> = new EventEmitter();

  @Output() public delete: EventEmitter<List> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onSelect(list: List): void {
    this.update.emit(list);
  }

  public onDelete(list: List): void {
    document.getElementById(list.name).style.height = '0';
    setTimeout(() => this.delete.emit(list), 400);
  }

}
