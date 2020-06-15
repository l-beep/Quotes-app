import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'No one cares about your struggles and failures but everyone carse about your success and achievements', 'Lovine Oduor', new Date(2020,6,15)),
    new Quote(2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'Rihannah', new Date(2020,6,15)),
    new Quote(3, 'Success is a battle located in the brain that only the relentless can survive', 'Lovine Oduor', new Date(2020,6,15)),
  ];
}
