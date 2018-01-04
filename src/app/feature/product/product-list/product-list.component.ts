import { Component, OnInit } from '@angular/core';

import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { SortPipe } from '../../../util/sort-pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Product List';

  selectedSortKey = 'Id';
  sortDesc = 'acs';
  sortKeys: string[] = ['Id', 'PartNumber', 'Name'];
  selectSortKey: string[] = ['Id', 'PartNumber', 'Name'];

  products: Product[];

  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.list()
      .subscribe(products => {
        this.products = products;
        console.log(products);
      });
  }

}
