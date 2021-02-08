import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';

const rerenderApp = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};
rerenderApp(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderApp(state);
});
