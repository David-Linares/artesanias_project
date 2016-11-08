/**
 * Created by david on 8/11/16.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'productslist',
    templateUrl: './app/views/products.html'
})

export class ProductsComponent {
    products = ['Product1', 'Product2', 'Product3'];
}