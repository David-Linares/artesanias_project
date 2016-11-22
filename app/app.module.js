/**
 * Created by david on 21/10/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var body_component_1 = require('./body.component');
var header_component_1 = require('./header.component');
var products_component_1 = require('./products.component');
var compra_component_1 = require("./compra.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/productos', pathMatch: 'full' },
                    { path: 'productos', component: products_component_1.ProductsComponent },
                    { path: 'compra/:id', component: compra_component_1.CompraComponent }
                ]), forms_1.FormsModule],
            declarations: [body_component_1.BodyComponent, header_component_1.HeaderComponent, products_component_1.ProductsComponent, compra_component_1.CompraComponent],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [body_component_1.BodyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map