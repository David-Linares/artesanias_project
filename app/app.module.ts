/**
 * Created by david on 21/10/16.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyComponent } from './body.component';
import { HeaderComponent }   from './header.component';
import { ProductsComponent } from './products.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ HeaderComponent, BodyComponent, ProductsComponent ],
    bootstrap:    [ BodyComponent ]
})
export class AppModule { }