import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'component-add-to-cart',
  templateUrl: './add-to-cart.component.html'
})
export class AddToCartComponent implements OnInit {

  @Output() public addItems = new EventEmitter<number>();

  public counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public increase() {
    this.counter += 1;
  }

  public decrease() {
    this.counter = Math.max(this.counter - 1, 0);
  }

  public addItemsToCart() {
    console.log('addtocart')

    this.addItems.emit(this.counter);
  }

}
