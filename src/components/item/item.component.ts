import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/item';
import { ActionsService } from 'src/services/actions.service';

@Component({
  selector: 'component-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  @Input() public cart: CartItem[];

  public imgPath = '../../assets/images/'

  public imgNames = [
    'image-product-1',
    'image-product-2',
    'image-product-3',
    'image-product-4',
  ]

  public actualImgIndex = 0;

  constructor(public actionsService: ActionsService) { }

  ngOnInit(): void {
    this.actionsService.isMobile$.subscribe(() => {

      // Delay because the component need to be initialized first
      requestAnimationFrame(() => {
        this.setImgLink(this.actualImgIndex);
      })
    })
  }

  public rotateCaroussel(modifier: number) {
    const newIndex = this.actualImgIndex + modifier;

    if (newIndex < 0 || newIndex === this.imgNames.length) {
      return;
    }

    this.setImgLink(newIndex);
  }

  public setImgLink(newIndex: number) {
    const img = document.getElementById("itemImg") as HTMLImageElement;

    if (!img) {
      return;
    }

    this.actualImgIndex = newIndex;

    img['src'] = `${this.imgPath}${this.imgNames[newIndex]}.jpg`;
  }

}
