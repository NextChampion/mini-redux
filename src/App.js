import React from 'react';
import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
        <Counter num={123}></Counter> 
    </Provider>
  );
}

export default App;
