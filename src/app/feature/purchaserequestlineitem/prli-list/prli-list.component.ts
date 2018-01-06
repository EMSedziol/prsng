import { Component, OnInit } from '@angular/core';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purcaserequestlineitem.service';

import { SortPipe } from '../../../util/sort-pipe';

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

  prlis: PurchaseRequestLineItem[];

  constructor(private PRLISvc: PurchaseRequestLineItemService) { }

  ngOnInit() {

    this.PRLISvc.list()
        .subscribe(prlis => {
          this.prlis = prlis;
          console.log(prlis);
        });
    }

}
