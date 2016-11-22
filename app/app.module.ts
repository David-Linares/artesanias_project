/**
 * Created by david on 21/10/16.
 */

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import {BodyComponent} from './body.component';
import {HeaderComponent}   from './header.component';
import {ProductsComponent} from './products.component';
import {CompraComponent} from "./compra.component";
import {FormsModule} from "@angular/forms";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, RouterModule.forRoot([
        { path: '', redirectTo: '/productos', pathMatch: 'full' },
        { path: 'productos', component: ProductsComponent },
        { path: 'compra/:id', component: CompraComponent }
    ]), FormsModule],
    declarations: [BodyComponent, HeaderComponent, ProductsComponent, CompraComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [BodyComponent]
})
export class AppModule {
}