import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "../src/components/Navbar";


function Main() {
  return (
    <div className="App">
      <React.StrictMode>
        <Navbar />
        <App />
      </React.StrictMode>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
