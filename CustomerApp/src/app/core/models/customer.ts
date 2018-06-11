import { PhoneNumber } from "./phone-number";

export class Customer {
    public ID : number;
    public Name : string;
    public BirthDate : Date;
    public Gender : boolean;
    public Email ? : string;
    public Address ? : string;
    public Notes ? : string;
    public PhoneNumbers: Array<PhoneNumber>;
}
