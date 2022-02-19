import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of users' },
    { value: 48, label: '# likes' },
    { value: 13, label: '# comments' },
  ];
  items = [
    {
      image: 'assets/images/Cadillac.jpg',
      title: 'Cadillac',
      description: 'Final Destination',
      additional: 'Cadillac Escalade ESV Premium Luxury Platinum 2022',
    },
    {
      image: 'assets/images/Jeep.jpg',
      title: 'Jeep',
      description: 'Close Enough',
      additional: 'Jeep Wrangler Unlimited Sahara 2022',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
