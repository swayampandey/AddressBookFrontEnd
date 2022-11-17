export class PersonDetails {
    public firstName: string = "";
    public lastName: string = "";
    public address: string = "";
    public city: string = "";
    public state: string = "";
    public pin: string = "";
    public phoneNo: string = "";
    public email: string = "";

    constructor(firstName: string, lastName: string,
        address: string, city: string,
        state: string, pin: string,
        phoneNo: string, email: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pin = pin;
        this.phoneNo = phoneNo;
        this.email = email;
    }

}