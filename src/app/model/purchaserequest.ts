export class PurchaseRequest {
  Id: string;
  UserId: string;
  Description: string;
  Justification: string;
  DateNeeded: string;
  DeliveryMode: string;
  StatusId: string;
  Total: number;
  SubmittedDate: string;
  ReasonForRejection: string;
  Active: boolean;

  constructor (id: string,
              userid: string,
              description: string,
              justification: string,
              dateneeded: string,
              deliverymode: string,
              statusid: string,
              total: number,
              submitteddate: string,
              reasonforrejection: string,
              active: boolean) {
                this.Id = id;
                this.UserId = userid;
                this.Description = description;
                this.Justification = justification;
                this.DateNeeded = dateneeded;
                this.DeliveryMode = deliverymode;
                this.StatusId = statusid;
                this.Total = total;
                this.SubmittedDate = submitteddate;
                this.ReasonForRejection = reasonforrejection;
                this.Active = active;
              }
}
