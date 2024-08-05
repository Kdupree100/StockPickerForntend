import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Home from './Home';
import StockPickerFetch from './stockPickerFetch.js';
import StockScalper from './StockScalper';
import ApiKeys from './ApiKeys.js';
import './App.css'; // Import global CSS

const App = () => {
    return (
        <Router>
            <div className="app">
                <SideNav />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/fetch" element={<StockPickerFetch />} />
                        <Route path="/scalper" element={<StockScalper />} />
                        <Route path="/apikey" element={<ApiKeys />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
