import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/item';

@Component({
  selector: 'component-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  @Input() public cart: CartItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
