import { configureStore } from '@reduxjs/toolkit';
import products from '../slices/productsSlice';

const store = configureStore({
    reducer: {
        products
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;