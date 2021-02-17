import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  allTicketsAction,
  forFastFlightAction,
  forLowCostFlightAction,
} from './action/flight-page-action';
import {
  FAST_FLIGHT,
  LOW_COST_FLIGHT,
} from './global-variables/variables-for-flight-page';
import './App.css';

function App() {
  const initialFlightFilter = { loadPage: FAST_FLIGHT, resultOfLoad: false };

  const state = useSelector((mainState) => mainState.flightPage);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [flightFilter, setflightFilter] = useState(initialFlightFilter);
  // const [sortByTransfer, setSortByTransfer] = useState({
  //   all: true,
  //   one: false,
  //   two: false,
  //   three: false,
  // });
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.onLoading === true) {
      dispatch(allTicketsAction());
    } else if (
      flightFilter.loadPage === FAST_FLIGHT &&
      flightFilter.resultOfLoad === false
    ) {
      console.log(state.resultForFast);
      dispatch(forFastFlightAction(state.ticketsAll));
      setflightFilter({ loadPage: FAST_FLIGHT, resultOfLoad: true });
    } else if (
      flightFilter.loadPage === LOW_COST_FLIGHT &&
      flightFilter.resultOfLoad === false
    ) {
      console.log(state.resultForLowCost);
      dispatch(forLowCostFlightAction(state.ticketsAll));
      setflightFilter({ loadPage: LOW_COST_FLIGHT, resultOfLoad: true });
    }
  }, [state, dispatch, flightFilter]);

  const onClickFast = () => {
    setflightFilter({ loadPage: FAST_FLIGHT, resultOfLoad: false });
    setButtonDisabled(true);
  };
  const onClickLowCost = () => {
    setflightFilter({ loadPage: LOW_COST_FLIGHT, resultOfLoad: false });
    setButtonDisabled(false);
  };

  return (
    <div className="wrapper">
      <header>Logo</header>
      <button type="button" onClick={onClickFast} disabled={buttonDisabled}>
        Fast
      </button>
      <button type="button" onClick={onClickLowCost} disabled={!buttonDisabled}>
        Low cost
      </button>
      <div>
        {state.resultForLowCost.map(({ carrier, price }) => (
          <div>
            {carrier} - {price}
          </div>
        ))}
      </div>
      <div>
        {state.resultForFast.map(({ carrier, price }) => (
          <div>
            {carrier} - {price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
