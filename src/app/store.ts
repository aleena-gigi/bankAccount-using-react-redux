import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/accountSlice";

export const store=configureStore({
  reducer:{
    account:accountReducer
  }
})

//we have to export the type of store state for selectors
export type AccountState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
