import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Babak', age: 34, job: 'Web-Designer' },
    { name: 'Puria', age: 30, job: 'Web-Develeper' },
    { name: 'Hassan', age: 61, job: 'Teacher' },
  ];
  header = [
    { key: 'name', value: 'Name' },
    { key: 'age', value: 'Age' },
    { key: 'job', value: 'Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
