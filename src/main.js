import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import App from './containers/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>
, document.getElementById("container"));

