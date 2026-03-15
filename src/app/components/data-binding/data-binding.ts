import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular 21 Tutorial';
  inputType: string = 'text';

  updateCourseName(newName: string) {
    this.courseName = newName;
  }
}
