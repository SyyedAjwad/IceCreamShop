import { updateCart, AddNewCart } from './../actions/global-configs.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromGlobalStore from '../reducers/global-config.reducer';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.css']
})
export class LandingHomeComponent implements OnInit {

  orderForm = new FormGroup({});

  constructor(private globalStore: Store<fromGlobalStore.State> , private router : Router) {
   }

  ngOnInit(): void {
    this.createOrderForm();
  };

  onCheckChange(event) {
    const formArray: FormArray = this.orderForm.get('toppings') as FormArray;

    if(formArray.length == 2 && event.target.checked) return;
  

     /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
    

  }

  createOrderForm() {
    this.orderForm = new FormGroup({
      cone: new FormControl('', [ Validators.required]),
      flavour: new FormControl('', [ Validators.required]),
      toppings : new FormArray([]),
      orderDate: new FormControl(new Date())
    });
  }

  get toppingsControl() {
    return this.orderForm.get('toppings') as FormArray;
  }

  isToppingAdded(value) {
    return  this.toppingsControl.value ?  this.toppingsControl.value.indexOf(value)  > -1 : false;
  }

  addToCart() {

    this.globalStore.dispatch(AddNewCart({data : this.orderForm.value}));
    this.orderForm.get('toppings').patchValue([]);
    (document.getElementById('customCheck1') as any).checked = false;
    (document.getElementById('customCheck2') as any).checked = false;
    (document.getElementById('customCheck3') as any).checked = false;
    this.orderForm.reset();
    this.createOrderForm();
    // this.router.navigate(['/shopping-cart']);
  }

}
