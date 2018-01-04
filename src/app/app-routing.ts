import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
    { path: 'user/detail/:id', component: UserDetailComponent },
    { path: 'user/edit/:id', component: UserEditComponent },
    { path: 'user/create', component: UserCreateComponent },
    { path: 'user/list', component: UserListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'product/list', component: ProductListComponent },
    { path: 'vendor/list', component: VendorListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule  { }
