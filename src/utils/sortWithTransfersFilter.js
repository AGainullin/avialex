function filterTicket(ticket, transferNumber) {
  return (
    ticket.segments[0].stops.length + ticket.segments[1].stops.length ===
    transferNumber
  );
}

const sortWithTransfersFilter = (tickets, sortingOptions) => {
  const keys = Object.keys(sortingOptions);
  const values = Object.values(sortingOptions);
  if (values[0]) return tickets;
  const result = [];
  let resultNo = [];
  let resultOne = [];
  let resultTwo = [];
  let resultThree = [];
  for (let i = 1; i < keys.length; i++) {
    if (values[i]) {
      switch (keys[i]) {
        case 'no':
          resultNo = tickets.filter((t) => filterTicket(t, 0));
          break;
        case 'one':
          resultOne = tickets.filter((t) => filterTicket(t, 1));
          break;
        case 'two':
          resultTwo = tickets.filter((t) => filterTicket(t, 2));
          break;
        case 'three':
          resultThree = tickets.filter((t) => filterTicket(t, 3));
          break;
        default:
          break;
      }
    }
  }
  return result.concat(resultNo, resultOne, resultTwo, resultThree);
};

export default sortWithTransfersFilter;
