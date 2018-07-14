import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductTableComponent } from "./products-table/product-table.component";

const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'product', component: ProductTableComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
