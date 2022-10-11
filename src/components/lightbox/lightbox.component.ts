import { Component, OnInit } from '@angular/core';
import { ActionsService } from 'src/services/actions.service';
import { CarousselService } from 'src/services/caroussel.service';

@Component({
  selector: 'component-lightbox',
  templateUrl: './lightbox.component.html'
})
export class LightboxComponent implements OnInit {

  constructor(public cS: CarousselService, public actionsService: ActionsService) { }

  ngOnInit(): void {
    const carousselService = this.cS;

    carousselService.setImgLink(carousselService.actualImgIndex, 'lightboxImg');
  }

}
