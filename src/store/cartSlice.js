import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        shoppingCart: [],
    },
    reducers:{
        add(state,action){
            const productInCart = state.shoppingCart.find(item => item.id === action.payload.id);
            if(productInCart){
                state.shoppingCart.map((item) => 
                item.id === action.payload.id ?
                {...item, cant:item.cant+=1}:
                item);    
            }else{
                const cartItem = {
                    id : action.payload.id,
                    name: action.payload.name,
                    imagen: action.payload.imagen,
                    cant: 1
                };                
                const updatedShoppingCart = state.shoppingCart.concat(cartItem);
                return {...state, shoppingCart:updatedShoppingCart};
            }   
        },
        remove(state,action){
            state.shoppingCart.map(cartItem => 
                cartItem.id === action.payload.id ?
                {...cartItem, cant: cartItem.cant-=1} 
                : cartItem);
        },
        deleteItem(state,action){
            const updatedShoppingCart = state.shoppingCart.filter(cartItem => cartItem.id !== action.payload.id);
            return {...state, shoppingCart:updatedShoppingCart}
        }
    }
});

export const {add, remove, deleteItem} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;