import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import ConfigureStore from "./Redux/store";
import {startGetHomeData} from "./Redux/Action/homeAction"
import {startGetPosts} from "./Redux/Action/postAction"
import {startGetUser} from "./Redux/Action/userAction"
import {startGetAlbum} from "./Redux/Action/albumAction"

const store = ConfigureStore()
store.dispatch(startGetHomeData())
store.dispatch(startGetPosts())
store.dispatch(startGetUser())
store.dispatch(startGetAlbum())



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
