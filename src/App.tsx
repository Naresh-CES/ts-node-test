import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from './Redux';
import { useSelector } from 'react-redux';

function App() {
  const amount = useSelector((state: State) => state.bank);
  const dispatch = useDispatch();
  const { deposithMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className='App'>
      <h1>{amount} </h1>
      <button onClick={() => deposithMoney(1000)}>Add</button>
      <button onClick={() => withdrawMoney(1000)}>minus</button>
      <button onClick={() => bankrupt()}>empty</button>
    </div>
  );
}

export default App;
