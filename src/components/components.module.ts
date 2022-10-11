import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
    declarations: [
        NavbarComponent,
        MobileMenuComponent,
        ItemComponent,
        AddToCartComponent,
        CartComponent,
        CartItemComponent,
        LightboxComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavbarComponent,
        MobileMenuComponent,
        ItemComponent,
        CartComponent,
        CartItemComponent,
        LightboxComponent
    ]
})
export class ComponentsModule { }