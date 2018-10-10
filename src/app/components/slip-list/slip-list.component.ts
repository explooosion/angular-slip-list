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
  public undo: Boolean = false;
  public undoLock: Boolean = false;

  @Input() public lists: Array<List>;

  @Output() public update: EventEmitter<List> = new EventEmitter();

  @Output() public delete: EventEmitter<List> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onSelect(list: List): void {
    this.update.emit(list);
  }

  public onDelete(list: List): void {

    const view: any = document.querySelector(`#${list.name} .list-view`);
    const undo: any = document.querySelector(`#${list.name} .list-undo`);

    // scale
    view.classList.add('delete');

    // undo
    setTimeout(() => undo.classList.add('active'), 800);

    // disappear
    setTimeout(() => {
      this.undoLock = true;
      // tslint:disable-next-line:curly
      if (!this.undo) document.getElementById(list.name).style.height = '0';
    }, 1800);

    // deleting
    setTimeout(() => {
      // tslint:disable-next-line:curly
      if (!this.undo) this.delete.emit(list);
      this.undo = false;
      this.undoLock = false;
    }, 2200);
  }

  public onUndo(list: List): void {

    // tslint:disable-next-line:curly
    if (this.undoLock) return;

    this.undo = true;

    const view: any = document.querySelector(`#${list.name} .list-view`);
    const undo: any = document.querySelector(`#${list.name} .list-undo`);

    view.classList.remove('delete');
    undo.classList.remove('active');

    document.getElementById(list.name).classList.remove('select');

    this.update.emit(list);
  }
}
