export class PurchaseRequestLineItem {
  Id: string;
  PurchaseRequestId: string;
  ProductId: string;
  Quantity: string;
  Active: boolean;

  constructor (id: string,
              purchaserequestid: string,
              productid: string,
              quantity: string,
              active: boolean) {
                this.Id = id;
                this.PurchaseRequestId = purchaserequestid;
                this.Quantity = quantity;
                this.Active = active;
              }
}
