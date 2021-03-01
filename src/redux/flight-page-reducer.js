import { ALL_TICKETS, SORTED_TICKETS, UPDATE_TICKETS } from './constants';

const initialState = {
  ticketsAll: [],
  uiState: [],
  isLoading: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TICKETS:
      return {
        ...state,
        ticketsAll: action.payload,
        isLoading: false,
      };
    case UPDATE_TICKETS:
      return {
        ticketsAll: [],
        uiState: [],
        isLoading: true,
      };
    case SORTED_TICKETS:
      return {
        ...state,
        uiState: action.payload,
      };
    default:
      return state;
  }
};

export default flightReducer;
