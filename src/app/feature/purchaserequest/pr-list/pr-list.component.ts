import { Component, OnInit } from '@angular/core';

import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';

import { SortPipe } from '../../../util/sort-pipe';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PRListComponent implements OnInit {

  title = 'Purchase Request List';

  selectedSortKey = 'Id';
  sortDesc = 'asc';
  sortKeys: string[] = ['Id', 'UserId', 'Description'];
  selectSortKey: string[] = ['Id', 'UserId', 'Description'];

  purchaserequests: PurchaseRequest[];

  constructor(private PurchaseRequestSvc: PurchaseRequestService) { }

  ngOnInit() {

      this.PurchaseRequestSvc.list()
        .subscribe(purchaserequests => {
          this.purchaserequests = purchaserequests;
          console.log(purchaserequests);
        });
    }

  }
