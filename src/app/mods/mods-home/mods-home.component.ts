import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  showModal: boolean = false;
  accrs = [
    {
      key: 'What is a Dog?',
      value:
        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
    },
    {
      key: 'What kinds of dogs are there?',
      value:
        'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.',
    },
    {
      key: 'How do you acquire a dog?',
      value:
        'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onChangeModal() {
    this.showModal = true;
  }
}
