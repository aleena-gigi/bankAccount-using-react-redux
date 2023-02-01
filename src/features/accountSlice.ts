import {createSlice} from "@reduxjs/toolkit"
export interface StateType{
    value:number 
}
const initialState:StateType={
    value:0
}
export const accountSlice=createSlice({
    initialState,
    name:"account",
    reducers:{
        depositMoney:(state,action)=>{
            return {value:state.value+action.payload.amount}
        },
        withdrawMoney:(state,action)=>{
            return {value:state.value-action.payload.amount}
        }
    }
})
export default accountSlice.reducer
export const {depositMoney,withdrawMoney}=accountSlice.actions      //action creators