import {createAction, props} from '@ngrx/store';

export enum GlobalConfigsActionTypes {
  UpdateOrders = '[GlobalConfigs] UpdateOrders',
  updateCart = '[GlobalConfigs] updateCart',
  ResetGlobalConfig = '[GlobalConfigs] Reset Global Config',
  AddNewCart = '[GlobalConfigs] AddNewCart'
}


  export const ResetGlobalConfig = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.ResetGlobalConfig, props<{key: string}>());
  export const UpdateOrders = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.UpdateOrders, props<{data : any}>());
  export const updateCart = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.updateCart, props<{data : any}>());
  export const AddNewCart = createAction<GlobalConfigsActionTypes, {}>(GlobalConfigsActionTypes.AddNewCart, props<{data : any}>());
