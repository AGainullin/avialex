import getTicketsForStore from '../requests/requests';
import {
  ALL_TICKETS,
  SORTED_TICKETS,
  UPDATE_TICKETS,
} from '../redux/constants';
import sortWithTransfersFilter from '../utils/sortWithTransfersFilter';
import filterByFlightType from '../utils/filterByFlightType';

export const ticketsFilterAction = (
  tickets,
  flightType,
  sortingOptions,
  numberTicketsOnPage
) => {
  let sortTickets = sortWithTransfersFilter(tickets, sortingOptions);
  sortTickets = filterByFlightType(
    sortTickets,
    flightType,
    numberTicketsOnPage
  );

  return { type: SORTED_TICKETS, payload: sortTickets };
};

export const updateTicketsAction = () => ({
  type: UPDATE_TICKETS,
});

export const allTicketsAction = () => async (dispatch) => {
  const allTicketArray = await getTicketsForStore();
  dispatch({ type: ALL_TICKETS, payload: allTicketArray });
};
