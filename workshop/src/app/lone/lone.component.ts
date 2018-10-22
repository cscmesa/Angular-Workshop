import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lone-component',
  templateUrl: './lone.component.html',
  styleUrls: ['./lone.component.css']
})
export class LoneComponent implements OnInit {
  @Input() name: string;
  @Output() msg = new EventEmitter<string>();

  send(msg: string) {
    this.msg.emit(msg);
  }

  constructor() { }

  ngOnInit() {
  }

}
