/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct, IProductResponse, TLoading } from '../types';
import axiosInstance from '../axios';

export type ProductsState = {
    products: IProduct[];
    productsLoadingStatus: TLoading;
};

const initialState: ProductsState = {
    products: [],
    productsLoadingStatus: 'loading',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axiosInstance.get('/1');
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
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProductResponse>) => {
                state.productsLoadingStatus = 'idle';
                // поскольку API не предоставляет описание товара, то я добавил "текст-рыбу"
                state.products = action.payload.products.map(product => ({ ...product, description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempora quos ipsa nihil omnis quidem officia impedit expedita. Nobis ea ut omnis distinctio sint nisi doloribus accusamus incidunt quam architecto.' }));
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