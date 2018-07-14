import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductService } from "./product.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [ProductService]
})
export class ApiModule {
    constructor(@Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
