import getTicketsArray from './../requests/requests';


const FAST_FLIGHT = 'FAST_FLIGHT';
const LOW_COST_FLIGHT = 'LOW_COST_FLIGHT';



const initialState = {
      tickets: [1, 2 , 3],
      count : 1  
}


const flightReducer = (state = initialState, action) => {

  switch (action.type) {
    case FAST_FLIGHT:
      return {
        ...state,
        count : 2,
      };
    case LOW_COST_FLIGHT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const forFastFlightAction = () => ({
  type: FAST_FLIGHT
});
export const forLowCostFlightAction = (transfer) => ({
  type: LOW_COST_FLIGHT,
  transfer,
});

export default flightReducer;