import { AfterViewInit, Component, Input } from '@angular/core';
import { CartItem } from 'src/item';
import { ActionsService } from 'src/services/actions.service';

@Component({
  selector: 'comp-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements AfterViewInit {

  @Input() public cartItem: CartItem;

  @Input() public index: number;

  constructor(public actionsService: ActionsService) { }

  public ngAfterViewInit(): void {
    const img = document.getElementById(`preview${this.index}`) as HTMLImageElement;

    img.src = `../../assets/images/${this.cartItem.item.img}.jpg`;
  }

  public removeFromCart() {
    this.actionsService.deleteCartItem.next(this.cartItem);
  }

}
