import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  public imgPath = '../../assets/images/'

  public imgNames = [
    'image-product-1',
    'image-product-2',
    'image-product-3',
    'image-product-4',
  ]

  public actualImgIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.setImgLink(this.actualImgIndex);
  }

  public nextImg() {

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

    this.actualImgIndex = newIndex;

    img['src'] = `${this.imgPath}${this.imgNames[newIndex]}.jpg`;
  }

}
