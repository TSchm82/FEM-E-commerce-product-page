import { Component, Input, OnInit } from '@angular/core';
import { ActionsService } from 'src/services/actions.service';

@Component({
  selector: 'components-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  @Input() public counter: number = 0;

  public isMenuExtended = false;

  private isCardExtended = false;

  constructor(public actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  public extendMenu() {
    console.log('clicked')
    this.isMenuExtended = !this.isMenuExtended;
  }

  public openCart() {
    this.isCardExtended = !this.isCardExtended;

    this.actionsService.openCart.next(this.isCardExtended);
  }

}
