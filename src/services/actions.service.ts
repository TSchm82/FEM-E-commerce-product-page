import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/item';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  public openCart = new Subject<boolean>();

  public deleteCartItem = new Subject<CartItem>();

  public isMobile$ = new Subject<boolean>();

  public isLightbox = false;

  constructor() { }

}

export function checkDevice() {
  return document.body.scrollWidth < 1200;
}
