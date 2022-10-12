import { Component, Input } from '@angular/core';
import { CartItem } from 'src/item';
import { ActionsService } from 'src/services/actions.service';

@Component({
  selector: 'component-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {

  @Input() public cart: CartItem[];

  constructor(public actionsService: ActionsService) { }

}
