import { Component, OnInit } from '@angular/core';

const fs = require('../../assets/images');
const images = fs.readdirSync('../');

@Component({
  selector: 'component-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  public imgPath = '../../assets/images/'

  public imgNames = [
    'icon-previous.svg',

  ]

  constructor() { }

  ngOnInit(): void {
    console.log(images)
  }

}
