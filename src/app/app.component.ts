import {Component, NgModule} from '@angular/core';
import {ParseLogFile} from '../assets/ParseLogFile';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EB Platform Data Validation';
  comparisonType = ['Count', 'Attribute'];
  periodType = ['All', 'Range'];

  selectedCache = null;
  dateTimePicker = null;
  showGrid = false;

  public myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  cacheTypes = [
    {
      'cacheType': 1,
      'cacheName': 'Subscriptions'
    },
    {
      'cacheType': 2,
      'cacheName': 'Licenses'
    },
    {
      'cacheType': 3,
      'cacheName': 'Subscription Entitlements'
    },
    {
      'cacheType': 4,
      'cacheName': 'License Devices'
    },
    {
      'cacheType': 5,
      'cacheName': 'User Roles - Subscriptions'
    },
    {
      'cacheType': 6,
      'cacheName': 'Access - Subscriptions'
    },
    {
      'cacheType': 7,
      'cacheName': 'Coverage Template'
    },
    {
      'cacheType': 8,
      'cacheName': 'Attributes - Subscriptions'
    },
    {
      'cacheType': 9,
      'cacheName': 'Item Master'
    },
    {
      'cacheType': 10,
      'cacheName': 'MDF'
    },
    {
      'cacheType': 11,
      'cacheName': 'Contracts'
    },
    {
      'cacheType': 12,
      'cacheName': 'Contract Entitlements'
    },
    {
      'cacheType': 13,
      'cacheName': 'User Roles - Contracts'
    },
    {
      'cacheType': 14,
      'cacheName': 'Access - Contracts'
    },
    {
      'cacheType': 15,
      'cacheName': 'Attributes - Contracts'
    }, {
      'cacheType': 16,
      'cacheName': 'Covered Products'
    },
    {
      'cacheType': 17,
      'cacheName': 'User Profile (Federation)'
    }, {
      'cacheType': 18,
      'cacheName': 'User Persona (Federation)'
    }];

  selectedOption: string;

  public populateGrid() {
    this.showGrid = !this.showGrid;
  }

  constructor() {}
  onDateRangeChanged(event: IMyDateRangeModel) {
  }

}




