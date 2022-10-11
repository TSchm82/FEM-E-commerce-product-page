import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionsService } from 'src/services/actions.service';
import { CarousselService } from 'src/services/caroussel.service';

@Component({
  selector: 'component-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit, OnDestroy {

  constructor(public cS: CarousselService, public actionsService: ActionsService) { }

  public ngOnInit(): void {
    const carousselService = this.cS;
    const index = carousselService.actualImgIndex;

    carousselService.setImgLink(index, 'lightboxImg');
  }

  public ngOnDestroy(): void {
    const carousselService = this.cS;
    const index = carousselService.actualImgIndex;

    carousselService.setImgLink(index);

    this.actionsService.isLightbox = false;
  }

}
