import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input() public counter: number = 0;

  public isMenuExtended = false;

  constructor() { }

  ngOnInit(): void {
  }

  public extendMenu() {
    console.log('clicked')
    this.isMenuExtended = !this.isMenuExtended;
  }

}
