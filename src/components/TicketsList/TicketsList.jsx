import React from 'react';
import Ticket from '../Ticket/Ticket';

const TicketsList = (props) => {
  const { tickets } = props;
  const result = tickets.map((item) => (
    <Ticket ticket={item} key={item.price + item.carrier} />
  ));
  return result;
};

export default TicketsList;
