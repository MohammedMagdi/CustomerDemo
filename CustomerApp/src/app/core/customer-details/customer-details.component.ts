import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../models/customer';
import { PhoneNumber } from '../models/phone-number';
import { CustomerService } from '../../services/customer.service';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  @Output() saveCustomerDetailsNotify = new EventEmitter<Customer>();

  @Input() showCustomerDetails: boolean;
  @Output() showCustomerDetailsNotify = new EventEmitter<boolean>();

  GendreValue: string;
  msgs: Message[] = [];
  Messages: string[];
  constructor(private CustomerService: CustomerService,
    private messageService: MessageService) {

  }

  ngOnInit() {
    this.GendreValue = this.customer.Gender ? "Male" : "Female";
  }

  getBirthDate($event) {
    this.customer.BirthDate = $event;
  }
  getGendre($event) {
    if ($event == 'Male') {
      this.customer.Gender = true
    }
    else {
      this.customer.Gender = false;
    }
  }
  addPhoneNumber() {
    let NewPhone: PhoneNumber = { ID: 0, CustomerID: this.customer.ID, Number: null };

    this.customer.PhoneNumbers.push(NewPhone);
  }

  saveCustomer() {
    let thisComponent = this;
    if (this.validateCustomer(this.customer)) {
      if (this.customer.ID == 0) {
        this.CustomerService.addCustomer(this.customer)
          .subscribe(response => {
            if (response.IsSuccess) {
              thisComponent.msgs = [];
              thisComponent.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Customer Saved success' });
              thisComponent.showCustomerDetailsNotify.emit(false);
              thisComponent.customer.ID = response.customer.ID;
              thisComponent.saveCustomerDetailsNotify.emit(this.customer);
            }
            else {
              thisComponent.msgs = [];
              response.Errors.forEach(function (error) {
                thisComponent.msgs.push({ severity: 'error', summary: 'Error Message', detail: error.name + ' ' + error.name });
              });

            }
          });
      }
      else {
        this.CustomerService.updateCustomer(this.customer)
          .subscribe(response => {
            if (response.IsSuccess) {
              thisComponent.msgs = [];
              thisComponent.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Customer Saved success' });
              thisComponent.showCustomerDetailsNotify.emit(false);
              thisComponent.saveCustomerDetailsNotify.emit(this.customer);
            }
            else {
              alert(response.Errors);
            }
          });
      }
    }
    else {
      this.msgs = [];
      this.Messages.forEach(function (error) {
        thisComponent.msgs.push({ severity: 'error', summary: 'Error Message', detail: error });
      });
    }
  }

  validateCustomer(customer: Customer) {
    this.Messages = [];
    const EmailRegx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PhoneRegx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;


    if (customer.Name.length < 10) {
      this.Messages.push('Name must be at least 10 character');
    }
    if (!EmailRegx.test(customer.Email)) {
      this.Messages.push('Email not valid');
    }
    if (customer.BirthDate !== null) {
      let nowDate = new Date(Date.now());
      let customerBirthDate = (customer.BirthDate);
      let customerDate = new Date(customerBirthDate);
      let customerAge = (nowDate).getUTCFullYear() - customerDate.getUTCFullYear();
      if (customerAge > 100 || customerAge < 1) {
        this.Messages.push('Age must be less than 100 and more than 1');
      }
    }
    else {
      this.Messages.push('Birthdate required');
    }

    if (customer.PhoneNumbers.length < 1) {
      this.Messages.push('Phone number required');
    }
    if (customer.PhoneNumbers.length >= 1) {
      let thisComponent = this;
      customer.PhoneNumbers.forEach(function (phone: PhoneNumber) {
        if (!PhoneRegx.test(String(phone.Number))) {
          thisComponent.Messages.push(phone.Number + ' Number not valid');
        }
      });
    }

    if (this.Messages.length >= 1) {
      return false;
    }
    else {
      return true;
    }

  }
  deletePhoneNumber(phoneNumber: PhoneNumber) {
    if (this.customer.PhoneNumbers.length <= 1) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'at least one phone number required' });
    }
    else {
      const phoneNumberIndex = this.customer.PhoneNumbers.indexOf(phoneNumber);
      if (phoneNumberIndex >= 0) {
        this.customer.PhoneNumbers.splice(phoneNumberIndex, 1);
      }
    }
  }
  cancel() {
    this.showCustomerDetailsNotify.emit(false);
  }
}
