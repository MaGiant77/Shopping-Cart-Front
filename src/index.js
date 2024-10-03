import React from 'react'
import  render  from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import MyApp from './App'
import './index.css';
import { store } from './app/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <MyApp />
      </Provider>
  </React.StrictMode>
);