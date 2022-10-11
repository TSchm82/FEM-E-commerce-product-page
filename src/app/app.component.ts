import { AfterViewInit, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/item';
import { ActionsService, checkDevice } from 'src/services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  public cart: CartItem[] = [
  ];

  public isLightboxDisplayed = false;

  constructor(public actionsService: ActionsService) { }

  public ngAfterViewInit(): void {
    const service = this.actionsService;
    service.deleteCartItem.subscribe(cartToDelete => this.removeItemFromCart(cartToDelete));

    service.openCart.subscribe(isExtended => {
      // Delay because the component need to be initialized first
      requestAnimationFrame(() => isExtended && service.isMobile$.next(checkDevice()));
    })

    window.addEventListener('resize', () => service.isMobile$.next(checkDevice()));

    service.isMobile$.next(checkDevice());
  }

  private removeItemFromCart(cartToDelete: CartItem) {
    const index = this.cart.indexOf(cartToDelete);

    this.cart.splice(index, 1);
  }

}
