/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICard } from '../types';

export type CardsState = {
    cards: ICard[];
    cardsLoadingStatus: 'loading' | 'idle' | 'error';
};

const initialState: CardsState = {
    cards: [],
    cardsLoadingStatus: 'idle',
};

export const fetchCards = createAsyncThunk('cards/fetchCards', async (url: string) => {
    const response = await axios.get(url);
    return response.data;
});

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.cardsLoadingStatus = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.cardsLoadingStatus = 'idle';
                state.cards = action.payload;
            })
            .addCase(fetchCards.rejected, (state) => {
                state.cardsLoadingStatus = 'error';
            });
    },
});

export const { reducer } = cardsSlice;

export default reducer;