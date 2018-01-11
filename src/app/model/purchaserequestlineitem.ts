import { Product } from '../model/product';
import { PurchaseRequest } from '../model/purchaserequest';

export class PurchaseRequestLineItem {
  Id: string;
  PurchaseRequestId: string;
  PurchaseRequest: PurchaseRequest;
  ProductId: string;
  ProductName: string;
  ProductPrice: number;
  Quantity: number;
  Total: number;
  PRTotal: number;
  Active: boolean;

  constructor (id: string,
              purchaserequestid: string,
              productid: string,
              quantity: number,
              active: boolean) {
                this.Id = id;
                this.PurchaseRequestId = purchaserequestid;
                this.ProductId = productid;
                this.Quantity = quantity;
                this.Active = active;
              }
}
