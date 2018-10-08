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

    // scale
    const node: any = document.querySelector(`#${list.name} .list-view`);

    setTimeout(() => {
      // tslint:disable-next-line
      node.style.transform = 'rotate(-5deg) scale(0.4)';
      // tslint:disable-next-line
      node.style.left = '10px';
    }, 100);

    setTimeout(() => {
      // tslint:disable-next-line
      node.style.transform = 'rotate(0deg) scale(0.1)';
      // tslint:disable-next-line
      node.style.left = '150px';
      node.style.opacity = '0';
    }, 600);

    // disappear
    setTimeout(() => document.getElementById(list.name).style.height = '0', 1200);
    setTimeout(() => this.delete.emit(list), 1400);

  }
}
