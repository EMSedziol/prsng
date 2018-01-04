export class Product {
  Id: string;
  VendorId: string;
  Name: string;
  Price: string;
  Unit: string;
  Photopath: string;

  constructor (id: string,
              vendorid: string,
              name: string,
              price: string,
              unit: string,
              photopath: string) {
                  this.Id = id;
                  this.VendorId = vendorid;
                  this.Name = name;
                  this.Price = price;
                  this.Unit = unit;
                  this.Photopath = photopath;
              }
}
