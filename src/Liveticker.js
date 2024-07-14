// import React, { useState, useEffect } from 'react';

// const LiveTicker = () => {
//     const [liveData, setLiveData] = useState([]);

//     useEffect(() => {
//         const fetchLiveData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/api/stocks/live?symbols=DOW,NASDAQ,AAPL,GOOGL', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     credentials: 'include' // Include credentials if needed
//                 });

//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }

//                 const data = await response.json();
//                 setLiveData(data);
//                 console.log(data);
//             } catch (error) {
//                 console.error('There has been a problem with your fetch operation:', error);
//             }
//         };

//         fetchLiveData();
//         const interval = setInterval(fetchLiveData, 60000); // Update every minute

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <h1>Live Stock Data</h1>
//             <pre>{JSON.stringify(liveData, null, 2)}</pre>
//         </div>
//     );
// };

// export default LiveTicker;
