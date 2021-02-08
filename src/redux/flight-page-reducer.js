const FAST_FLIGHT = 'FAST_FLIGHT';
const LOW_COST_FLIGHT = 'LOW_COST_FLIGHT';

const initialState = { ticket: 'no tickets yet'};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAST_FLIGHT:
      return {
        ...state,
      };
    case LOW_COST_FLIGHT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const forFastFlightAction = (transfer) => ({
  type: FAST_FLIGHT,
  transfer,
});
export const forLowCostFlightAction = (transfer) => ({
  type: LOW_COST_FLIGHT,
  transfer,
});

export default flightReducer;
