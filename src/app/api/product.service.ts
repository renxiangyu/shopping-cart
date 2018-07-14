import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
    private readonly url = 'https://next.json-generator.com/api/json/get/4kiDK7gxZ';

    constructor(private http: HttpClient) {}

    getProductList(): Observable<any> {
        return this.http.get(this.url);
    }
}