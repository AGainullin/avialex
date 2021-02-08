import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <div className="wrapper">
      <header>Logo</header>
      {props.state.ticket}
    </div>
  );
}

App.propTypes = {
  ticket: PropTypes.string
  }

export default App;
