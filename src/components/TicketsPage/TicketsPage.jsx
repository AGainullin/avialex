import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  allTicketsAction,
  ticketsFilterAction,
  updateTicketsAction,
} from '../../action/flight-page-action';
import {
  FAST_FLIGHT,
  LOW_COST_FLIGHT,
  INITIAL_NUMBER_TICKETS,
  UPDATE_TIME,
} from '../../global-variables/variables-for-filter';
import TransferFilter from '../SortFilters/TransferFilter/TransferFilter';
import FlightFilter from '../SortFilters/FlightFilter/FlightFilter';
import TicketsList from '../TicketsList/TicketsList';
import LoadingData from '../LoadingData/LoadingData';
import ButtonDownloadMore from '../Buttons/ButtonDownloadMore/ButtonDownloadMore';
import ButtonUpdateTickets from '../Buttons/ButtonUpdateTickets/ButtonUpdateTickets';
import handleCheckbox from '../../utils/handleCheckbox';

const TicketsPage = () => {
  const state = useSelector((ticketsState) => ticketsState.flightPage);
  const [flightFilter, setFlightFilter] = useState(FAST_FLIGHT);
  const [sortByTransfer, setSortByTransfer] = useState({
    all: true,
    no: true,
    one: true,
    two: true,
    three: true,
  });
  const [numberTicketsOnPage, setNumberTicketsOnPage] = useState(
    INITIAL_NUMBER_TICKETS
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.isLoading === true) {
      dispatch(allTicketsAction());
      setTimeout(() => {
        const updateElement = document.getElementById('update__tickets');
        updateElement.classList.add('show');
      }, UPDATE_TIME);
    }
  }, [state.isLoading]);

  useEffect(() => {
    if (state.ticketsAll !== []) {
      dispatch(
        ticketsFilterAction(
          state.ticketsAll,
          flightFilter,
          sortByTransfer,
          numberTicketsOnPage
        )
      );
    }
  }, [flightFilter, sortByTransfer, numberTicketsOnPage, state.ticketsAll]);

  const onClickFast = () => {
    setFlightFilter(FAST_FLIGHT);
    setNumberTicketsOnPage(INITIAL_NUMBER_TICKETS);
  };
  const onClickLowCost = () => {
    setFlightFilter(LOW_COST_FLIGHT);
    setNumberTicketsOnPage(INITIAL_NUMBER_TICKETS);
  };
  const downloadMoreTickets = () => {
    setNumberTicketsOnPage((prev) => prev + INITIAL_NUMBER_TICKETS);
  };
  const updateTickets = () => {
    dispatch(updateTicketsAction());
    const updateElement = document.getElementById('update__tickets');
    updateElement.classList.remove('show');
  };

  return (
    <>
      <div className="transfer__wrapper">
        <div className="transfer__filter">
          <h3>Number of transfers</h3>
          <form
            onChange={(e) => {
              handleCheckbox(e, sortByTransfer, setSortByTransfer);
              setNumberTicketsOnPage(INITIAL_NUMBER_TICKETS);
            }}
          >
            <TransferFilter transfers={sortByTransfer} />
          </form>
        </div>
      </div>
      <FlightFilter
        filter={flightFilter}
        funcForFast={onClickFast}
        funcForLowCost={onClickLowCost}
      />
      <div className="tickets__wrapper">
        {state.uiState.length !== 0 ? (
          <>
            <TicketsList tickets={state.uiState} />
            <ButtonDownloadMore onClickFunc={downloadMoreTickets} />
          </>
        ) : (
          <LoadingData />
        )}
      </div>
      <ButtonUpdateTickets onClickFunc={updateTickets} />
    </>
  );
};

export default TicketsPage;
