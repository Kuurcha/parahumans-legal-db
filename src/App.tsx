import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AppRouter from './Components/Router';
import Page1 from './pages/app1/App1';
import Page2 from './pages/app2/App2';
import Root from './App';
function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <nav>
                <Link to="page1">page1</Link>
                <Link to="page2">page2</Link>
            </nav>
            <Routes>
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
            </Routes>
        </div>
    );
}

export default App;
