import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  interpolation_data: string = "I am data from the component!";
  bind: boolean = true;
  count: number = 0;
  two_way_data: number = 16;
  someExpression: boolean = true;
  color: string;
  today: number = Date.now();

  listOfItems: string[] = [
    'item1', 'item2', 'item3', 'item4', 'item5'
  ]

  jsonPipe = {
    'id': 0,
    'name': 'mesa csc',
    'time': this.today,
    'location': 'San Diego, CA'
  }

  constructor() { }

  bindingFunction() {
    this.count++;
  }

  toggleNgIf() {
    this.someExpression = !this.someExpression;
  }

  ngOnInit() {
  }

}
