import {ParseLogFile} from '../assets/ParseLogFile';
import {PopulateGridComponent} from '../data/PopulateGridComponent';
import {GridRemoteComponent} from '../data/GridRemoteComponent';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MyDateRangePickerModule} from 'mydaterangepicker';
import {MdButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {DataTableModule} from 'angular-2-data-table';


@NgModule({
  declarations: [
    [AppComponent, PopulateGridComponent, GridRemoteComponent]
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    MyDateRangePickerModule,
    MdButtonModule
  ],
  providers: [ParseLogFile],
  bootstrap: [AppComponent]
})
export class AppModule {}
