import { Customer } from "./customer";

export class CustomResponse {
    public customer : Customer;
    public customers : Array<Customer>;
    public IsSuccess : boolean;
    public Message : string;
    public Errors : Array<Error>
}
