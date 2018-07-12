import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import store from './redux/store';
import {fetchCamera} from './redux/action';
import {Provider} from 'react-redux';

const newStore = store()

newStore.dispatch(fetchCamera())

ReactDOM.render(<Provider store={newStore}>
  <App />
</Provider >
  , document.getElementById('root'));

