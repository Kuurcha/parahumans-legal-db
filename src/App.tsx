import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AppRouter from './Components/Router';
import Page1 from './pages/app1/App1';
import Page2 from './pages/app2/App2';
import Home from './pages/home/home';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    <Route path="" element={<Home />}></Route>
                    <Route path="page1" element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
