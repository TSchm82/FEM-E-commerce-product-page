import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CarousselService {

    public imgPath = '../assets/images/'

    public imgNames = [
        'image-product-1',
        'image-product-2',
        'image-product-3',
        'image-product-4',
    ]

    public actualImgIndex = 0;

    constructor() { }

    public rotateCaroussel(modifier: number, id = 'itemImg') {
        const newIndex = this.actualImgIndex + modifier;

        if (newIndex < 0 || newIndex === this.imgNames.length) {
            return;
        }

        this.setImgLink(newIndex, id);
    }

    public setImgLink(newIndex: number, id = 'itemImg') {
        const img = document.getElementById(id) as HTMLImageElement;

        if (!img) {
            return;
        }

        this.actualImgIndex = newIndex;

        img['src'] = `${this.imgPath}${this.imgNames[newIndex]}.jpg`;
    }

    public geCarousselImage(imgName: string) {
        return `${this.imgPath}${imgName}-thumbnail.jpg`;
    }

}
