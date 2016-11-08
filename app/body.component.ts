/**
 * Created by david on 21/10/16.
 */

import { Component } from '@angular/core';
import { ProductsComponent } from './products.component';
import { HeaderComponent } from './header.component';

@Component({
    selector: 'app-body',
    templateUrl: './app/views/body.html',
    directives: [HeaderComponent, ProductsComponent]
})

export class BodyComponent {

}

