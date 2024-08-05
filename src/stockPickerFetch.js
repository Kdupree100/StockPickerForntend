import React, { useState } from 'react';

const StockPickerFetch = () => {
    const [symbols, setSymbols] = useState('');
    const [source, setSource] = useState('alpha_vantage');
    const [earningsOption, setEarningsOption] = useState('');
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [earningsData, setEarningsData] = useState(null); // State for earnings data

    const fetchLiveData = async () => {
        setLoading(true);
        setError(null);
        try {
            
            const response = await fetch(`https://localhost:8443/api/stocks/live?symbols=${symbols}&source=${source}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include' // Include credentials if needed
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Fetched Data:", data); // Log the fetched data
            setStockData(data);

            // Fetch earnings data if earningsOption is selected
            if (earningsOption === 'true') {
                await fetchEarningsData();
            }
        } catch (error) {
            setError(error.message);
            console.error("Fetch error:", error); // Log the error
        } finally {
            setLoading(false);
        }
    };

    const fetchEarningsData = async () => {
        try {
            const response = await fetch(`https://localhost:8443/api/stocks/earnings/${source === 'alpha_vantage' ? 'alpha' : source === 'polygon' ? 'polygon' : 'finnhub'}?symbol=${symbols}`, {
            
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Earnings Data:", data); // Log the earnings data
            setEarningsData(data);
        } catch (error) {
            setError(error.message);
            console.error("Fetch earnings error:", error); // Log the error
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchLiveData();
    };

    return (
        <div>
            <h1>Stock Picker Fetch</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Symbols:</label>
                    <input 
                        type="text" 
                        value={symbols} 
                        onChange={(e) => setSymbols(e.target.value)} 
                        placeholder=" Enter stock symbols separated by commas " 
                    />
                </div>
                <div>
                    <label>Data Source:</label>
                    <select value={source} onChange={(e) => setSource(e.target.value)}>
                        <option value="alpha_vantage">Alpha Vantage</option>
                        <option value="polygon">Polygon</option>
                        <option value="finnhub">Finnhub</option>
                    </select>
                </div>
                <div>
                    <label>Earnings Option:</label>
                    <select value={earningsOption} onChange={(e) => setEarningsOption(e.target.value)}>
                        <option value="">None</option>
                        <option value="true">Last Earnings Date</option>
                    </select>
                </div>
                <button type="submit">Fetch Data</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {stockData.length > 0 && (
                <div>
                    <h2>Stock Data</h2>
                    <ul>
                        {stockData.map((stock, index) => (
                            <li key={index}>
                                <p>Symbol: {stock.symbol}</p>
                                <p>Current Price: {stock.currentPrice}</p>
                                <p>Entry Point: {stock.entryPoint}</p>
                                <p>Exit Point: {stock.exitPoint}</p>
                                {/* <p>Earnings Date: {stock.earningsDates}</p> */}
                                <p>Growth Potential: {stock.growthPotential}</p>
                                <p>Bargain Potential: {stock.bargainPotential}</p>
                                <p>Risk Level: {stock.riskLevel}</p>
                                <p>Sentiment: {stock.sentiment}</p>
                                <p>Analyst Rating: {stock.analystRating}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {earningsData && (
                <div>
                    <h2>Earnings Data</h2>
                    <p>Earnings Date: {earningsData.earningsDate}
                    </p>
                      {/* <p>  Quarter: {earningsData.quarter}
                         </p> */}
                    {/* Add other fields from earningsData as needed */}
                </div>
            )}
        </div>
    );
};

export default StockPickerFetch;
