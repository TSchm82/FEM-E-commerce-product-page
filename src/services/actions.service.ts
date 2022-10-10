import { Injectable, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { CartItem } from 'src/item';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  public openCart = new Subject<boolean>();

  public deleteCartItem = new Subject<CartItem>();

  public isMobile$ = new Subject<boolean>();

  constructor() { }

}

export function checkDevice() {
  return document.body.scrollWidth < 1200;
}
