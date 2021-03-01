import React from 'react';
import TicketsPage from './components/TicketsPage/TicketsPage';
import './App.scss';
import logo from './assets/images/logo.svg';

function App() {
  const year = new Date();
  return (
    <div className="wrapper">
      <header>
        <a href="/">
          <img src={logo} className="logo" alt="avia sales" />
        </a>
      </header>
      <TicketsPage />
      <footer>&copy; Avialex {year.getFullYear()}</footer>
    </div>
  );
}

export default App;
