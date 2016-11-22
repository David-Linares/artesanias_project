/**
 * Created by david on 22/11/16.
 */

import {Component, OnInit} from '@angular/core';
import { ProductServices } from './products.service';
import { ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './app/views/compra.html',
    providers: [ProductServices]
})

export class CompraComponent implements OnInit{
    private product;
    private id;
    private sub;
    private referencecode;
    private accountid;
    private apikey;
    private merchantid;
    private currency;

    constructor(private productService: ProductServices, private route: ActivatedRoute){}

    getProduct():void{
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];

            this.apikey = "4Vj8eK4rloUd272L48hsrarnUA";
            this.merchantid = "508029";
            this.referencecode = new Date().getTime();
            this.accountid = "512321";
            this.currency = "COP";

            this.productService.getProduct(this.id)
            .subscribe(product => this.product = product,
                err => {
                    // Log errors if any
                    console.log(err);
                }
            );
        });
    }

    ngOnInit(): void{
        this.getProduct();
    }

}
