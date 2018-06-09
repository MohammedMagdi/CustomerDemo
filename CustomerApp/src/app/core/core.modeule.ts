import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

import { PostService } from '../services/post.service';
import { CoreRoutingModule } from './core-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    CustomersComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    PostService,
    BaseRequestOptions,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class CoreModule {

}
