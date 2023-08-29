import React, { useState as useSus } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const ඞ = "span";
  const [amogus, sus] = useSus(1);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Link to="/amogus">enter sus loop</Link>} />
            <Route path="amogus" element={<Link to="/sus">ඞ</Link>} />
            <Route path="sus" element={<Link to="/amogus">sus</Link>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ඞ onClick={() => sus(amogus + 1)} className="ඞ">
          {"ඞ".repeat(amogus)}
        </ඞ>
      </header>
    </div>
  );
}

export default App;
