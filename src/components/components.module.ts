import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
    declarations: [
        NavbarComponent,
        MobileMenuComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavbarComponent,
        MobileMenuComponent
    ]
})
export class ComponentsModule { }