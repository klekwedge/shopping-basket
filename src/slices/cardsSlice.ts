import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type 


export type CardsState = {
    cards: [],
    cardsLoadingStatus: 'loading',
};

const initialState: CardsState = {
    cards: [],
    cardsLoadingStatus: 'loading',
};

export const fetchCards = createAsyncThunk('cards/fetchCards', (url: string) => {

});


const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                // state.cardsLoadingStatus = 'loading';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                // state.cardsLoadingStatus = 'idle';
                // state.cards = action.payload;
            })
            .addCase(fetchCards.rejected, (state) => {
                // state.cardsLoadingStatus = 'error';
            })
    },
});

const { reducer } = cardsSlice;

export default reducer;
