import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import goodsReducer from './slices/goodsSlice'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
  filter: filterReducer,
  goods: goodsReducer,
  cart: cartReducer,
  user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer
    
})
