import {Component} from '@angular/core';
import {PopulateGridRemoteService} from '../data/PopulateGridRemoteService';

@Component({
  selector: 'app-grid-remote-component',
  providers: [PopulateGridRemoteService],
  templateUrl: '../data/populate-grid.html',
  styleUrls: ['../data/populate-grid.css']
})
export class GridRemoteComponent {

  items = [];
  itemCount = 0;

  constructor(private remoteService: PopulateGridRemoteService) {}

  reloadItems(params) {
    this.remoteService.query(params).then(result => {
      this.items = result.items;
      this.itemCount = result.count;
    });
  }
}
