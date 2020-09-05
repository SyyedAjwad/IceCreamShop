import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGlobalStore from '../reducers/global-config.reducer';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  ordersData = [];
  constructor(private globalStore: Store<fromGlobalStore.State>) { 
    let globalSelector = fromGlobalStore.globalConfigFeatureKey as any;
    this.globalStore.select(globalSelector).subscribe(res => {
      this.ordersData = JSON.parse(JSON.stringify(res.orders));
    })
  }

  ngOnInit(): void {
  }

}
