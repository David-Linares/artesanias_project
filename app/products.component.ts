/**
 * Created by david on 8/11/16.
 */

import {Component, OnInit} from '@angular/core';
import { ProductServices } from './products.service';

export class Product{
    name: string;
    description: string;
    price: number;
    stock: number;
}

@Component({
    templateUrl: './app/views/products.html',
    providers: [ProductServices]
})

export class ProductsComponent implements OnInit{
    private products;

    constructor(private productService: ProductServices){}

    getProducts():void{
        this.productService.getProducts().subscribe(
            products => this.products = products, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    ngOnInit(): void{
        this.getProducts();
    }
}
