import React, {useEffect} from 'react';
//import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {forFastFlightAction} from './redux/flight-page-reducer';
import store from './redux/store';

import getTicketsArray from './requests/requests';


function App() {


  //const state = store.getState().flightPage;
  //console.log(state);

  console.log(getTicketsArray());



  const getFastTicketsPage = () => {
    const action = forFastFlightAction();
    store.dispatch(action);

    //const state = store.getState().flightPage;
    //console.log(state);

  };


  return (
    <div className="wrapper">
      <header>Logo</header>
      <button onClick={getFastTicketsPage}>Fast</button>
    </div>
  );
}

export default App;