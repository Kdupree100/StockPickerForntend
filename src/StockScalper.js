import React, { useState } from 'react';

const StockScalper = () => {
    const [filters, setFilters] = useState({
        source: 'alpha_vantage',
        filterCriteria: [],
    });

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters((prevState) => ({
            ...prevState,
            filterCriteria: checked
                ? [...prevState.filterCriteria, name]
                : prevState.filterCriteria.filter((criterion) => criterion !== name),
        }));
    };

    const fetchScalperData = async () => {
        const response = await fetch('http://localhost:8080/api/scalper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include credentials if needed
            body: JSON.stringify(filters),
        });

        const data = await response.json();
        console.log(data);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchScalperData();
    };

    return (
        <div>
            <h1>Stock Scalper</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Data Source:</label>
                    <select
                        value={filters.source}
                        onChange={(e) => setFilters({ ...filters, source: e.target.value })}
                    >
                        <option value="alpha_vantage">Alpha Vantage</option>
                        <option value="polygon">Polygon</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="stocks_rising_last_year"
                            onChange={handleFilterChange}
                        />
                        Stocks rising over the last year
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="stocks_rising_with_recent_decline"
                            onChange={handleFilterChange}
                        />
                        Stocks rising over the last year with a recent decline within a week
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="stocks_sectors"
                            onChange={handleFilterChange}
                        />
                        Stocks sectors with 10 different sector choices
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="higher_growth_last_earning"
                            onChange={handleFilterChange}
                        />
                        Stocks with higher growth after last earning call
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="higher_growth_last_two_earnings"
                            onChange={handleFilterChange}
                        />
                        Stocks with higher growth after last two earning calls
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="bargain_stocks"
                            onChange={handleFilterChange}
                        />
                        Bargain stocks that are down recently but have great upside
                    </label>
                    {/* Add more filter options as needed */}
                </div>
                <button type="submit">Scalp Stocks</button>
            </form>
        </div>
    );
};

export default StockScalper;
