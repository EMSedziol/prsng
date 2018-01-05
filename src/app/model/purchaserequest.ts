export class PurchaseRequest {
  Id: string;
  User: string;
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
              user: string,
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
                this.User = user;
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
