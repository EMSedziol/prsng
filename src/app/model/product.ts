export class Product {
  Id: string;
  VendorId: string;
  PartNumber: string;
  Name: string;
  Price: string;
  Unit: string;
  Photopath: string;
  Active: boolean;

  constructor (id: string,
              vendorid: string,
              partNumber: string,
              name: string,
              price: string,
              unit: string,
              photopath: string,
              active: string) {
                  this.Id = id;
                  this.VendorId = vendorid;
                  this.PartNumber = partNumber;
                  this.Name = name;
                  this.Price = price;
                  this.Unit = unit;
                  this.Photopath = photopath;
              }
}
