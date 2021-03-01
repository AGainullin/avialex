import React from 'react';

const ButtonUpdateTickets = React.forwardRef((props, ref) => {
  const data = props;
  const { onClickFunc } = data;
  return (
    <button
      type="button"
      id="update__tickets"
      className="hide"
      onClick={onClickFunc}
      ref={ref}
    >
      Please, update the tickets.
    </button>
  );
});

export default ButtonUpdateTickets;
