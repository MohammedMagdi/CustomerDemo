import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule, BaseRequestOptions } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerService } from '../services/customer.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataGridModule } from 'primeng/datagrid';
import { DataTableModule } from 'primeng/datatable';

import { AccordionModule } from 'primeng/accordion';     
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/primeng';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GrowlModule} from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    CustomersComponent,
    NotFoundComponent,
    CustomerDetailsComponent,
    PhoneNumberComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    DataGridModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    DataTableModule,
    DialogModule,
    SharedModule,
    CalendarModule,
    RadioButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    CustomerService,
    BaseRequestOptions,
    HttpClient,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {

}
