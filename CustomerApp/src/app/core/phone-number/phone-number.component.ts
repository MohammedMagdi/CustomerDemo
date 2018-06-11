import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhoneNumber } from '../models/phone-number';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  @Input() phonenumber : PhoneNumber;
  @Output() deletePhoneNumberNotify : EventEmitter<PhoneNumber> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  deletePhoneNumber(phonenumber : PhoneNumber){
    this.deletePhoneNumberNotify.emit(phonenumber);
  }
}
