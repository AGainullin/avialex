import React from 'react';

const ButtonUpdateTickets = (props) => {
  const data = props;
  const { onClickFunc } = data;
  return (
    <button type="button" id="update__tickets" onClick={onClickFunc}>
      Please, update the tickets.
    </button>
  );
};

export default ButtonUpdateTickets;
