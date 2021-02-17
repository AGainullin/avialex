import getTicketsForStore from '../requests/requests';
import {
  ALL_TICKETS,
  FAST_FLIGHT,
  LOW_COST_FLIGHT,
} from '../global-variables/variables-for-flight-page';

export const forFastFlightAction = (state) => {
  const sortTickets = state
    .sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        b.segments[0].duration -
        b.segments[1].duration
    )
    .slice(0, 5);
  return { type: FAST_FLIGHT, payload: sortTickets };
};

export const forLowCostFlightAction = (state) => {
  const sortTickets = state.sort((a, b) => a.price - b.price).slice(0, 5);
  return { type: LOW_COST_FLIGHT, payload: sortTickets };
};

export const allTicketsAction = () => async (dispatch) => {
  // dispatch(showLoader());
  const allTicketArray = await getTicketsForStore();
  // dispatch(hideLoader());
  dispatch({ type: ALL_TICKETS, payload: allTicketArray });
};
