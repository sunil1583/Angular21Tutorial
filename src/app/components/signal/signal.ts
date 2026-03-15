import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  courseName: string = 'Angular 21 Tutorial';
  courseNameSignal = signal('Angular 21 Signal Tutorial');
  student = signal({
    name: 'Alice',
    age: 25,
    city: 'New York',
  });
  city = signal(['New York', 'London', 'Paris']);

  courseDuration: Signal<string> = signal('');
  constructor() {
    setTimeout(() => {
      this.courseName = 'Angular 21 Tutorial - Updated';
      this.courseNameSignal.set('Angular 21 Signal Tutorial - Updated');
      this.student.set({
        name: 'Alice',
        age: 26,
        city: 'New York',
      });
      this.city.set(['New York', 'London', 'Paris', 'Tokyo']);
    }, 3000);
  }
  changeCourseSignalName() {
    this.courseNameSignal.set('4 hours');
  }
}
