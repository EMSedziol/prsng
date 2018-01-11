import { Component, OnInit } from '@angular/core';

import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';

@Component({
  selector: 'app-list-pr',
  templateUrl: './list-pr.component.html',
  styleUrls: ['./list-pr.component.css']
})
export class ListPrComponent implements OnInit {

  purchaserequestlineitems: PurchaseRequestLineItem[];

  constructor(private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService) { }

  ngOnInit() {

  }

}
