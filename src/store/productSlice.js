import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList : [
            {
            id: 10001,
            name: 'Headphone Sony XM-1101',
            imagen: '/public/assets/product.jpg',
            available: 5
            },
            {
            id: 10002,
            name: 'Headphone Sony PO-1000',
            imagen: '/public/assets/audifono1.jpg',
            available: 10
            },
            {
            id: 10003,
            name: 'Headphone Sony LT-3101',
            imagen: '/public/assets/audifono2.jpg',
            available: 15
            },
            {
            id: 10004,
            name: 'Headphone Sony WP-5001',
            imagen: '/public/assets/audifono3.jpg',
            available: 20
            }
        ],
    },
    reducers:{        
        decrease(state,action){
            const isInStock = state.productList.find(product => product.id === action.payload.id && product.available > 0);
            if (isInStock) {
                state.productList.map((product) => 
                product.id === action.payload.id ? 
                {...product, available:product.available-=1} :
                product);
            }else{
                console.log('No existen productos disponibles');
            }
            
        },
        increase(state,action){
            state.productList.map((product) => 
                product.id === action.payload.id ? 
                {...product, available:product.available+=1} :
                product);
        },
        restoreStock(state,action){
            state.productList.map(product => product.id === action.payload.id ?
                {...product, available:product.available+=action.payload.cant}:
                product);
        }
        
    }
});

export const {decrease,increase,restoreStock} = productSlice.actions;
export const productReducer = productSlice.reducer;