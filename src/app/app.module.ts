// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// RxJS
import 'rxjs/add/operator/do';

// Global Modules
import { AppRoutingModule } from './app-routing.module';
import { ProductTableModule } from "./products-table/product-table.module";
import { ApiModule } from "./api/api.module";

// Global Components
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        ProductTableModule,
        ApiModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
