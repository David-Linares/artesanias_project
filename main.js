/**
 * Created by david on 7/10/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var HolaAngularComponent = (function () {
    function HolaAngularComponent() {
        this.saludo = 'Hola Angular 2!';
    }
    HolaAngularComponent = __decorate([
        core_1.Component({
            selector: 'hola-angular',
            template: '<h1>{{saludo}}</h1>'
        })
    ], HolaAngularComponent);
    return HolaAngularComponent;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(HolaAngularComponent);
