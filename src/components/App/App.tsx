import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart, updateQuantity, removeFromCart } from './redux/cartSlice';
import Cart from './Cart';
import Total from './Total';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchCards } from '../../slices/cardsSlice';

function App() {
  const dispatch = useAppDispatch();
  const { cards, cardsLoadingStatus } = useAppSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards('https://fakestoreapi.com/products'));
  }, []);

  if (cardsLoadingStatus === 'loading') {
    return <p>Loading...</p>;
  }

  return <div className="app">test</div>;
}

export default App;
