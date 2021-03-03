import React from 'react';

function fixZeroInTime(value) {
  return value < 10 ? `0${value}` : value;
}

function getArrivalHours(departureDate, duration) {
  const hours = departureDate.getHours() + Math.floor(duration / 60);
  return hours > 24 ? hours % 24 : hours;
}
function getArrivalMinutes(departureDate, duration) {
  const minutes = departureDate.getMinutes() + (duration % 60);
  return minutes > 60 ? minutes % 60 : minutes;
}

const FlightSegments = (props) => {
  const data = props;
  const { origin, destination, date, duration, stops } = data.segment;

  const departureDate = new Date(date);

  const departureHours = fixZeroInTime(departureDate.getHours());
  const departureMinutes = fixZeroInTime(departureDate.getMinutes());
  const arrivalHours = fixZeroInTime(getArrivalHours(departureDate, duration));
  const arrivalMinutes = fixZeroInTime(
    getArrivalMinutes(departureDate, duration)
  );

  return (
    <div className="segments">
      <div className="city">
        {origin} - {destination}
      </div>
      <div className="time">{`${departureHours}:${departureMinutes} - ${arrivalHours}:${arrivalMinutes}`}</div>
      <div className="on__way">Flight time</div>
      <div className="flight__time">
        {`${fixZeroInTime(Math.floor(duration / 60))} h ${fixZeroInTime(
          duration % 60
        )} m`}
      </div>
      <div className="transit__number">
        {stops.length > 0 ? `${stops.length} transfers` : 'no transfer'}
      </div>
      <div className="transit__city">
        {stops.map((item, i) => (i !== stops.length - 1 ? `${item}, ` : item))}
      </div>
    </div>
  );
};

export default FlightSegments;
