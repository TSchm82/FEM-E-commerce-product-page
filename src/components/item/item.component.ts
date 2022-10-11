import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/item';
import { ActionsService } from 'src/services/actions.service';
import { CarousselService } from 'src/services/caroussel.service';

@Component({
  selector: 'component-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  @Input() public cart: CartItem[];

  constructor(public actionsService: ActionsService, public cS: CarousselService) { }

  ngOnInit(): void {
    this.actionsService.isMobile$.subscribe(() => {

      // Delay because the component need to be initialized first
      requestAnimationFrame(() => {
        const carousselService = this.cS;

        carousselService.setImgLink(carousselService.actualImgIndex);
      })
    })
  }

  public handleLightBox() {
    this.actionsService.isLightbox = !this.actionsService.isLightbox;
  }

}
