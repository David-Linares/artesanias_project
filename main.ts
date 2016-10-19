/**
 * Created by david on 7/10/16.
 */


import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hola-angular',
    template: '<h1>{{saludo}}</h1>'
})

class HolaAngularComponent{

    saludo: string;
    constructor(){
        this.saludo = 'Hola Angular 2!';
    }
}

platformBrowserDynamic().bootstrapModule(HolaAngularComponent);