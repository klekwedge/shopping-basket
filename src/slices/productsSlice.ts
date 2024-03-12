/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from '../types';

export type ProductsState = {
    products: IProduct[];
    productsLoadingStatus: 'loading' | 'idle' | 'error';
};

const initialState: ProductsState = {
    products: [],
    productsLoadingStatus: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (url: string) => {
    const response = await axios.get(url);
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.products.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.products.find((product) => product.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.productsLoadingStatus = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsLoadingStatus = 'idle';
                console.log(action.payload);
                state.products = action.payload.products.map(product => ({...product, quantity: 1}));
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.productsLoadingStatus = 'error';
            });
    },
});

export const { reducer, actions } = productsSlice;

export default reducer;
export const {
    addToCart, updateQuantity, removeFromCart
} = actions