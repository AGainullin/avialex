import {
  FAST_FLIGHT,
  LOW_COST_FLIGHT,
} from '../global-variables/variables-for-filter';

const filterByFlightType = (tickets, flightType, numberTicketsOnPage) => {
  let filterTickets = [];
  if (flightType === FAST_FLIGHT) {
    filterTickets = tickets
      .sort(
        (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          b.segments[0].duration -
          b.segments[1].duration
      )
      .slice(0, numberTicketsOnPage);
  } else if (flightType === LOW_COST_FLIGHT) {
    filterTickets = tickets
      .sort((a, b) => a.price - b.price)
      .slice(0, numberTicketsOnPage);
  }
  return filterTickets;
};

export default filterByFlightType;
