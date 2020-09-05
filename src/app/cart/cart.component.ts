import { updateCart, UpdateOrders } from './../actions/global-configs.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGlobalStore from '../reducers/global-config.reducer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData = [];
  constructor(private globalStore: Store<fromGlobalStore.State> , private router : Router) { 
    let globalSelector = fromGlobalStore.globalConfigFeatureKey as any;
    this.globalStore.select(globalSelector).subscribe(res => {
      this.cartData = JSON.parse(JSON.stringify(res.cart));
    })
  }

  ngOnInit(): void {
  }

  changeQuantity(item , index , event) {
    this.cartData[index]['quantity'] = event.target.value;
    this.globalStore.dispatch(updateCart({data : this.cartData}));
  }

  removeCart(index) {
    this.cartData.splice(index , 1);
    this.globalStore.dispatch(updateCart({data : this.cartData}));
  }

  checkout() {
    this.globalStore.dispatch(UpdateOrders({data : this.cartData}));
    this.globalStore.dispatch(updateCart({data : []}));
    this.router.navigate(['/order-details']);
  }

}
