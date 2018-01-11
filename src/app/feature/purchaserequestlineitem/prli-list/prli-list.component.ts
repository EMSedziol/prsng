import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';

import { SortPipe } from '../../../util/sort-pipe';
console.log ('in prli-components');

@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})
export class PRLIListComponent implements OnInit {

  title = 'Purchase Request Line Item';

  selectdSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'ProductId'];
  selectSortKey: string[] = ['Id', 'ProductId'];

  purchasereqesutlineitems: PurchaseRequestLineItem[];
  products: Product[];

  constructor(private PRLISvc: PurchaseRequestLineItemService,
              private ProductSvc: ProductService) {
  }

  ngOnInit() {

    this.PRLISvc.list()
        .subscribe(purchasereqesutlineitems => {
          this.purchasereqesutlineitems = purchasereqesutlineitems;
      //    console.log('prli data:');
      //    console.log(purchasereqesutlineitems);
          this.addProductName(this.purchasereqesutlineitems);
        });
    }

    addProductName(purchs: PurchaseRequestLineItem[]) {
    //  console.log('addProductName...');
    //  console.log(purchs);
      for (let purch of purchs) {
    //    console.log('Getting product name for product id ' + purch.ProductId);
        this.ProductSvc.get(purch.ProductId)
          .subscribe(products => {
            purch.ProductName = products[0].Name;
          });
      }
    }

}
