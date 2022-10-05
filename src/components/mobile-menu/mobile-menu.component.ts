import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'component-mobile-menu',
  templateUrl: './mobile-menu.component.html'
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
