import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { Status } from '../../../model/status';
import { StatusService } from '../../../service/status.service';

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
  statuss: Status[];

  constructor(private PurchaseRequestSvc: PurchaseRequestService,
              private StatusSvc: StatusService) { }

  ngOnInit() {

      this.PurchaseRequestSvc.list()
        .subscribe(purchaserequests => {
          this.purchaserequests = purchaserequests;
          this.addStatusName(this.purchaserequests);
        //  console.log(purchaserequests);
        });
    }

    addStatusName(purchs: PurchaseRequest[]) {
 //     console.log('addStatusName');
 //     console.log(purchs);
      for (let purch of purchs) {
 //       console.log('purch.StatusId ' + purch.StatusId);
        this.StatusSvc.get(purch.StatusId)
          .subscribe(listStatus => {
 //           console.log(listStatus[0]);
            purch.StatusName = listStatus[0].Description;
          });
      }
    }

  }
