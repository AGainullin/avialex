import React, { useState, useEffect } from 'react';
import axios from 'axios';


function getTicketsArray() {
  const BASE_API_URL = 'https://front-test.beta.aviasales.ru/';

  const [stateSearchId, setStateSearchId] = useState();
  const [stopSearch, setStopSearch] = useState(false);

  const [states, setStates] = useState([]); // Temp - Delete


  useEffect(async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}search`);
      setStateSearchId(response.data.searchId);
    } catch (error) {
      console.error(error);
    }
  }, [])

  useEffect(() => {
    //console.log('One');
    async function addTickets() {

      if (stateSearchId && stopSearch == false) {

        try {
          const url = `${BASE_API_URL}tickets?searchId=${stateSearchId}`;
          const response = await axios.get(url);
          if (response.status !== 200) {
            addTickets();
          }
          else {

            setStates([...states, ...response.data.tickets]);


            if (response.data.stop == true) {
              setStopSearch(true);
            }
            else {
              addTickets();
            }
          }

        } catch (error) {
          console.error(error);
        }

      }
    }
    addTickets();


  }, [stateSearchId, stopSearch, states])


  return states;

}



export default getTicketsArray;