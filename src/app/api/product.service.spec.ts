import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ProductService } from "./product.service";

describe('ProductService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProductService
            ]
        });
    });

    it('should be created', inject([ProductService], (service: ProductService) => {
        expect(service).toBeTruthy();
    }));
});