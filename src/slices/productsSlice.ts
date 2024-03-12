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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.productsLoadingStatus = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsLoadingStatus = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.productsLoadingStatus = 'error';
            });
    },
});

export const { reducer } = productsSlice;

export default reducer;