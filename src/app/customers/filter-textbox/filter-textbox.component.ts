import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-textbox',
  template: `
  Filter: <input type="text" [(ngModel)]="filter"/>
`,
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;

  @Input() get filter(){
    return this._filter;
  }

  set filter(val: string){
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
