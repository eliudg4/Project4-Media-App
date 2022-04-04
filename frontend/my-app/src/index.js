import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { SessionContextProvider } from './context/SessionContext'

ReactDOM.render(
  <React.StrictMode>
    <SessionContextProvider>
      <Router>
        <App />
      </Router>
    </SessionContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

