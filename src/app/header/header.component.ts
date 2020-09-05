import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGlobalStore from '../reducers/global-config.reducer';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartsData : any[] = [];

  constructor(private globalStore: Store<fromGlobalStore.State> ) { }

  ngOnInit(): void {
    let globalSelector = fromGlobalStore.globalConfigFeatureKey as any;
    this.globalStore.select(globalSelector).subscribe(res => {
      this.cartsData = res.cart;
    })
  }

}
