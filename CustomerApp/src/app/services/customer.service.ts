import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
  HttpClientModule
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CustomResponse } from '../core/models/custom-response';
import { Customer } from '../core/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private BaseURL: string = environment.BaseURL;
  private data;

  constructor(private http: HttpClient) {
  }

  getCustomers(SearchKey?: string) {
    this.data = { 'SearchKey': SearchKey };
    return this.http.post(this.BaseURL + '/api/Customer/get', this.data)
      .pipe(
        map((response: CustomResponse) => response)
      );
  }

  addCustomer(Customer: Customer){
    this.data = { 'customer': Customer };
    return this.http.post(this.BaseURL + '/api/Customer/add', this.data)
      .pipe(
        map((response: CustomResponse) => response)
      );
  }

  updateCustomer(Customer: Customer){
    this.data = { 'customer': Customer };
    return this.http.post(this.BaseURL + '/api/Customer/update', this.data)
      .pipe(
        map((response: CustomResponse) => response)
      );
  }

  deleteCustomer(CustomerId: number){
    this.data = { 'CustomerId': CustomerId };
    return this.http.post(this.BaseURL + '/api/Customer/delete', this.data)
      .pipe(
        map((response: CustomResponse) => response)
      );
  }

}

