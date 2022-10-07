import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/item';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  public openCart = new Subject<boolean>();

  public deleteCartItem = new Subject<CartItem>();

  constructor() { }
}
