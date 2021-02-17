import {
  ALL_TICKETS,
  FAST_FLIGHT,
  LOW_COST_FLIGHT,
} from '../global-variables/variables-for-flight-page';

const initialState = {
  ticketsAll: [],
  resultForFast: [],
  resultForLowCost: [],
  onLoading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TICKETS:
      return {
        ...state,
        ticketsAll: action.payload,
        resultForFast: [],
        resultForLowCost: [],
        onLoading: false,
      };
    case FAST_FLIGHT:
      return {
        ...state,
        resultForFast: action.payload,
      };
    case LOW_COST_FLIGHT:
      return {
        ...state,
        resultForLowCost: action.payload,
      };
    default:
      return state;
  }
};

export default flightReducer;
