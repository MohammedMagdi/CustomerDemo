import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../models/customer';
import { PhoneNumber } from '../models/phone-number';
import { ConfirmationService, Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  Customers: Customer[];
  customer: Customer;
  msgs: Message[] = [];
  constructor(private CustomerService: CustomerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.CustomerService.getCustomers()
      .subscribe(response => {
        if (response.IsSuccess) {
          this.Customers = response.customers;
        }
        else {

        }
      });
  }

  editCustomer(customer: Customer) {
    this.customer = customer;
  }

  deleteCustomer(customer: Customer) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete Customer?' + customer.Name,
      accept: () => {
        this.CustomerService.deleteCustomer(customer.ID)
          .subscribe(response => {
            if (response.IsSuccess) {
              this.msgs = [];
              this.msgs.push({ severity: 'success', summary: 'Success Message', detail: response.Message });
              const customerIndexIndex = this.Customers.indexOf(customer);
              if (customerIndexIndex >= 0) {
                this.Customers.splice(customerIndexIndex, 1);
              }
            }
            else {
              this.msgs = [];
              this.msgs.push({ severity: 'success', summary: 'Success Message', detail: response.Message });
            }
          });
      }
    });
  }

  addNewCustomer() {
    this.customer = new Customer();
    this.customer = { ID: 0, Address: "", Name: "", Email: "", BirthDate: null, Gender: true, Notes: "", PhoneNumbers: [{ ID: 0, Number: null, CustomerID: 0 }] };
  }

  saveCustomer(customer: Customer) {
    const _customer = this.Customers.find(x => x.ID === this.customer.ID);
    if (_customer === null || _customer == undefined || this.Customers.length < 1) {
      this.Customers.push(customer);
    }
    this.customer = null;
  }
}
