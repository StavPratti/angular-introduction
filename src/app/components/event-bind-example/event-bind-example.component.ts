// Counter Buttons:
// Lets the user increase, decrease, or reset a number (times).
// Methods: incrementTimes(), decrementTimes(), reset().
// Text Input Field:
// Captures whatever the user types into an <input> field.
// Stores the typed value in the userInput property using the onUserInput() method.

import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind-example',
  imports: [],
  templateUrl: './event-bind-example.component.html',
  styleUrl: './event-bind-example.component.css'
})

export class EventBindExampleComponent {
  times: number = 0;
  userInput: string = '';

  incrementTimes(){
    // this.times = this.times + 1
    this.times++;
  }

  decrementTimes(){
    // this.times = this.times - 1;
    this.times--;
  }

  reset(){
    this.times = 0;
  }

  onUserInput(event: Event){
    this.userInput = (<HTMLInputElement>event.target).value;
  }

}
