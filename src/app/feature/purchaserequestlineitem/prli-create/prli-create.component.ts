import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  title = 'Add Line to Purchase Request';
  resp: any;

  purchaserequestlineitem: PurchaseRequestLineItem = new PurchaseRequestLineItem('0', '', '', 0, true);
  products: Product[];

create() {
  console.log(this.purchaserequestlineitem);
  this.PRLISvc.create(this.purchaserequestlineitem)
    .subscribe(resp => {
      this.resp = resp;
      console.log('line item added ', this.resp);
      this.router.navigate(['/pr/lines']);
    });
}

  constructor(private PRLISvc: PurchaseRequestLineItemService,
              private ProductSvc: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.ProductSvc.list()
      .subscribe(products => this.products = products);
  }

}
