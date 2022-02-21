import {
  Component,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
})
export class ModalsComponent implements OnInit {
  @Output() onClose = new EventEmitter<any>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    // document.body.removeChild(this.el.nativeElement); causes problems
    this.el.nativeElement.remove();
  }
  onCloseClick() {
    this.onClose.emit();
  }
}
