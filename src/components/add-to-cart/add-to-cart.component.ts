import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/item';
import { ActionsService } from 'src/services/actions.service';

@Component({
  selector: 'component-add-to-cart',
  templateUrl: './add-to-cart.component.html'
})
export class AddToCartComponent implements OnInit {

  @Output() public addItems = new EventEmitter<CartItem>();

  public counter = 0;

  constructor(public actionsService: ActionsService) { }

  ngOnInit(): void {
  }

  public increase() {
    this.counter += 1;
  }

  public decrease() {
    this.counter = Math.max(this.counter - 1, 0);
  }

  public addItemsToCart() {
    const cartItem = {
      item: {
        img: 'image-product-1-thumbnail',
        name: 'Fall Limited Edition Sneakers',
        price: 125
      },
      quantity: this.counter
    }


    this.addItems.emit(cartItem);
  }

}
