import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from "../api/product.service";
import { Product } from "./product.model";

@Component({
    selector: 'product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
    @ViewChild('checkoutModal') modalContainer: TemplateRef<any>;

    productList: Product[];
    errorMsg: string;
    modalRef: NgbModalRef;
    showCheckOutMsg = false;

    constructor(private productService: ProductService,
                private ngbModalService: NgbModal) { }

    ngOnInit(): void {
        this.productService.getProductList()
            .subscribe(
                (productList) => {
                    this.productList = productList;
                    this.productList.forEach(product => {
                        product.priceNumber = parseFloat(product.price.replace(',', '').substring(1, product.price.length));
                        product.inCart = 0;
                    });
                }
            );
    }

    toggleShowingDetails(product: Product): void {
        product.isShowingDetails = !product.isShowingDetails
    }

    addProductToCart(product: Product): void {
        if(product.stock.remaining > 0) {
            product.stock.remaining = product.stock.remaining - 1;
        } else {
            this.errorMsg = `Sorry! ${product.title} is out of stock`;
        }

        product.inCart = product.inCart + 1;
    }

    openModal(content: TemplateRef<any> = this.modalContainer): void {
        this.modalRef = this.ngbModalService.open(content, {
            centered: true,
            container: 'body',
            size: 'lg',
            backdrop: 'static',
        });
    }

    calculateItemTotallyPrice(product: Product): string {
        return (product.inCart * product.priceNumber).toFixed(2);
    }

    calculateTotalPrice(): number {
        let totalPrice = 0;

        this.productList.forEach(product =>
           totalPrice += parseFloat(this.calculateItemTotallyPrice(product))
        );

        return totalPrice;
    }

    removeItem(product: Product): void {
        --product.inCart;
        ++product.stock.remaining;
    }

    closeModal(): void {
        this.modalRef.close();
    }

    checkout(): void {
        this.productList.forEach(product => product.inCart = 0);
        this.showCheckOutMsg = true;
        this.closeModal();
    }
}
