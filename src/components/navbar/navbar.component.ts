import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public isMenuExtended = false;

  constructor() { }

  ngOnInit(): void {
  }

  public extendMenu() {
    console.log('clicked')
    this.isMenuExtended = !this.isMenuExtended;
  }

}
