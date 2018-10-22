import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Workshop input';
  msg: string;

  display(event: string) {
    this.msg = event;
  }
}
