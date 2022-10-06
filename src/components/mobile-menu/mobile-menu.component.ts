import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'component-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MobileMenuComponent implements OnInit {

  @Input() public isMenuExtended = false;

  @Output() public isMenuExtendedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public collapse() {
    this.isMenuExtendedChange.emit(false);
  }

}
