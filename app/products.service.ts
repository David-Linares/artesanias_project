/**
 * Created by david on 17/11/16.
 */

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Product} from "./products.component";
import 'rxjs/Rx';

@Injectable()
export class ProductServices {

    private urlservice = 'http://localhost:8080';

    constructor (private http: Http){}

    getProducts ():Observable<Product[]>{
        console.log("Obtiene los datos");
        return this.http.get(this.urlservice + '/products')
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    getProduct (id):Observable<Product[]>{
        console.log("Obtiene los datos del producto en particular");
        return this.http.get(this.urlservice + '/products/' + id)
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}