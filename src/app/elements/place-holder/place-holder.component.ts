import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css'],
})
export class PlaceHolderComponent implements OnInit {
  @Input() lines = 4;
  @Input() header = true;
  constructor() {}

  ngOnInit(): void {}
}
