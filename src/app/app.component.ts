import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'Dont look at the clock, do what it does keep moving', 'Biron Lovine', new Date(2020,4,21)),
    new Quote(2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'Rihannah', new Date(2019,5,16)),
    new Quote(3, 'Success is a battle located in the brain only the fittest can survive', 'Lovine Biron', new Date(2020,1,21)),
  ];
}
