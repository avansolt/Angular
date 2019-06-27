import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { ProductsListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  imports: [
    
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id',
        canActivate :[ ProductDetailGuard],
        component: ProductDetailComponent},

    ]),
    SharedModule
  ]
})
export class ProductionModule { }
