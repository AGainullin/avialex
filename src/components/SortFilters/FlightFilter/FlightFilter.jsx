import React from 'react';
import {
  FAST_FLIGHT,
  LOW_COST_FLIGHT,
} from '../../../global-variables/variables-for-filter';

const FlightFilter = (props) => {
  const data = props;
  const { filter } = data;
  const { funcForFast } = data;
  const { funcForLowCost } = data;

  return (
    <div className="flight__filter">
      <button
        className={
          filter === FAST_FLIGHT ? 'active left__button' : 'left__button'
        }
        type="button"
        onClick={funcForFast}
        disabled={filter === FAST_FLIGHT}
      >
        Fast
      </button>
      <button
        className={
          filter === LOW_COST_FLIGHT ? 'active right__button' : 'right__button'
        }
        type="button"
        onClick={funcForLowCost}
        disabled={filter === LOW_COST_FLIGHT}
      >
        Low cost
      </button>
    </div>
  );
};

export default FlightFilter;
