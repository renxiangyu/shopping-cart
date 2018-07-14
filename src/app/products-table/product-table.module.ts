import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        ProductTableComponent
    ]
})
export class ProductTableModule { }
