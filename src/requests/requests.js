import axios from 'axios';
import {
  BASE_URL,
  URL_ID_PARAMETR,
  URL_TICKETS_PARAMETR,
} from '../global-variables/variables-for-requests';

const getSearchId = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${URL_ID_PARAMETR}`);
    return data.searchId;
  } catch (e) {
    console.error(e);
    return '';
  }
};

const getTicketsArray = async (searchId) => {
  const { data } = await axios.get(`${BASE_URL}/${URL_TICKETS_PARAMETR}`, {
    params: { searchId },
  });
  return { tickets: data.tickets, stop: data.stop };
};

const getTicketsForStore = async () => {
  const searchId = await getSearchId();
  let ticketsForStore = [];
  let stopState = false;

  while (!stopState) {
    try {
      const { tickets, stop } = await getTicketsArray(searchId);
      stopState = stop;
      ticketsForStore = [...ticketsForStore, ...tickets];
    } catch (e) {
      console.warn(e);
    }
  }
  return ticketsForStore;
};

export default getTicketsForStore;
