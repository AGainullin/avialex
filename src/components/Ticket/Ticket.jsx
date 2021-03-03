import React from 'react';
import FlightSegments from '../FlightSegments/FlightSegments';

const Ticket = (props) => {
  const data = props;
  const { price, carrier, segments } = data.ticket;
  // console.log(segments);
  const imageUrl = `//pics.avs.io/99/36/${carrier}.png`;
  const priceText = `${price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} ₽`;

  return (
    <div className="ticket">
      <div className="price__wrapper">
        <div className="price">{priceText}</div>
        <div className="avia__company">
          <img src={imageUrl} alt={carrier} />
        </div>
      </div>
      <FlightSegments segment={segments[0]} />
      <FlightSegments segment={segments[1]} />
    </div>
  );
};
export default Ticket;
