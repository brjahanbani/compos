import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  pathCompanies = 'companies';
  data = [
    { name: 'Babak', age: 34, job: 'Web-Designer', employed: true },
    { name: 'Puria', age: 30, job: 'Web-Develeper', employed: true },
    { name: 'Hassan', age: 61, job: 'Teacher', employed: false },
  ];
  headers = [
    { key: 'name', value: 'Name', show: true },
    { key: 'age', value: 'Age', show: true },
    { key: 'job', value: 'Job', show: true },
    { key: 'employed', value: 'Employed', show: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
