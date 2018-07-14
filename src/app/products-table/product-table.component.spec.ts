import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MockProvider } from "ngx-mock-provider";
import { MockComponent } from "ng2-mock-component";

import { ProductTableComponent } from "./product-table.component";
import { ProductService } from "../api/product.service";

describe('ProductTableComponent', () => {
    let component: ProductTableComponent;
    let fixture: ComponentFixture<ProductTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProductTableComponent,
                MockComponent({selector: 'ngb-alert', inputs: ['type']})
            ],
            providers: [
                MockProvider({ provider: ProductService, methods: ['getProductList']}),
                MockProvider({ provider: NgbModal, methods: ['open']})
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
