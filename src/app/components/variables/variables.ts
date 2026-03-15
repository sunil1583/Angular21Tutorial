import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  courseName: string = 'Angular 21 Tutorial';
  currentVersion: number = 21;
  isActive: boolean = true;
  students: string[] = ['Alice', 'Bob', 'Charlie'];
  currentDate: Date = new Date();
  cityList: string[] = ['New York', 'London', 'Paris'];
  studentObject = {
    name: 'Alice',
    age: 25,
    city: 'New York',
  };
  studentList = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'London' },
    { name: 'Charlie', age: 28, city: 'Paris' },
    this.studentObject,
  ];

  constructor() {
    console.log('Course Name:', this.courseName);
  }
}
