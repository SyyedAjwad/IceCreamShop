import { Action } from '@ngrx/store';
import { GlobalConfigsActionTypes } from '../actions/global-configs.actions';


export const globalConfigFeatureKey = 'globalConfig';

export interface State {
  orders : any[];
  cart: any[];
}

export const initialState: State = {
  orders: [],
  cart: []
};


export function reducer(state = initialState, action: Action): State {
  const stateCartData = JSON.parse(JSON.stringify(state.cart));
  const stateOrdersDate = JSON.parse(JSON.stringify(state.orders));
  switch (action.type) {
    case GlobalConfigsActionTypes.UpdateOrders:
      let newOrders = (action as any).data;5
      newOrders.forEach(element => {
        stateOrdersDate.push(element);
      });
      return { ...state, orders: stateOrdersDate } as State;


    case GlobalConfigsActionTypes.AddNewCart:
      let newData = (action as any).data;
      stateCartData.push(newData);
      let updatedCartsData  = stateCartData;
      return { ...state, cart: updatedCartsData } as State;

    case GlobalConfigsActionTypes.updateCart:
      return { ...state, cart: (action as any).data } as State;
      
    case GlobalConfigsActionTypes.ResetGlobalConfig:
      return { ...initialState } as State;
    default:
      return state;
  }
}
