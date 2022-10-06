import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'component-mobile-menu',
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent implements OnChanges {

  @Input() public isMenuExtended = false;

  @Output() public isMenuExtendedChange = new EventEmitter<boolean>();

  constructor() { }

  public ngOnChanges(): void {
    const div = document.getElementById("menu");

    !!div && this.calculateHeight(div);
  }

  public collapse() {
    this.isMenuExtendedChange.emit(false);
  }

  public calculateHeight(div: HTMLElement) {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    div.style.height = `${scrollHeight}px`;

    console.log(scrollHeight)
  }

}
