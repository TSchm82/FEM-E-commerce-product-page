import { AfterViewInit, Component } from '@angular/core';
import { CartItem } from 'src/item';
import { ActionsService } from 'src/services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  public cart: CartItem[] = [
  ];

  constructor(public actionsService: ActionsService) { }

  public ngAfterViewInit(): void {
    this.actionsService.deleteCartItem.subscribe(cartToDelete => this.removeItemFromCart(cartToDelete))
  }

  private removeItemFromCart(cartToDelete: CartItem) {
    const index = this.cart.indexOf(cartToDelete);
    console.log(index)

    console.log(JSON.parse(JSON.stringify(this.cart)));

    this.cart.splice(index, 1);

    console.log(this.cart)
  }

}
