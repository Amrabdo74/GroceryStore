import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers:  {
    addTocart : (state,action) =>{ 
        const findProduct = state.find((product)=> product.id === action.payload.id);
        if(findProduct){
          findProduct.quantity +=1 
        // const cartLocalstorge = JSON.parse(localStorage.getItem('cart'));
        //   console.log(cartLocalstorge);
        }else{
          const prodectClone = {...action.payload,quantity:1}
          state.push(prodectClone);
        }
     },
     decreseQuantity : (state,action) =>{ 
      const findProduct = state.find((product)=> product.id === action.payload.id);
      if(findProduct && findProduct.quantity > 1){
        findProduct.quantity -=1 
      }else{
        return state.filter((product)=> product.id!== action.payload.id)
      }
     },
     increseQuantity : (state,action) =>{ 
      const findProduct = state.find((product)=> product.id === action.payload.id);
      if(findProduct){
        findProduct.quantity +=1
      }
     },
     removeFeomcart : (state,action) =>{
      return state.filter((product)=> product.id !== action.payload.id)

     },
     clearCart : (state,action) =>{
      return [];
     },
     getFromlocaStore : (state,action) =>{
      if(action.payload !== null){

        return state = action.payload
      }
     }

  }
});
export const {addTocart,decreseQuantity,increseQuantity,removeFeomcart,clearCart,getFromlocaStore} = cartSlice.actions;
export default cartSlice.reducer;