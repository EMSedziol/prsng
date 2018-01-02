export class User {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    reviewer: boolean;
    admin: boolean;
    active: boolean;

    constructor (id: string,
                userName: string,
                password: string,
                firstName: string,
                lastName: string,
                phone: string,
                email: string,
                reviewer: boolean,
                admin: boolean,
                active: boolean) {
                    this.id = id;
                    this.userName = userName;
                    this.password = password;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.phone = phone;
                    this.email = email;
                    this.reviewer = reviewer;
                    this.admin = admin;
                    this.active = active;
                }

}
