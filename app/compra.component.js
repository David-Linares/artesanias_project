/**
 * Created by david on 22/11/16.
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
var products_service_1 = require('./products.service');
var router_1 = require("@angular/router");
var CompraComponent = (function () {
    function CompraComponent(productService, route) {
        this.productService = productService;
        this.route = route;
    }
    CompraComponent.prototype.getProduct = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.apikey = "4Vj8eK4rloUd272L48hsrarnUA";
            _this.merchantid = "508029";
            _this.referencecode = new Date().getTime();
            _this.accountid = "512321";
            _this.currency = "COP";
            _this.productService.getProduct(_this.id)
                .subscribe(function (product) { return _this.product = product; }, function (err) {
                // Log errors if any
                console.log(err);
            });
        });
    };
    CompraComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    CompraComponent = __decorate([
        core_1.Component({
            templateUrl: './app/views/compra.html',
            providers: [products_service_1.ProductServices]
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductServices, router_1.ActivatedRoute])
    ], CompraComponent);
    return CompraComponent;
}());
exports.CompraComponent = CompraComponent;
//# sourceMappingURL=compra.component.js.map