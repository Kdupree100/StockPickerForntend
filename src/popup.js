import React from 'react';
import './popup.css';

const Popup = ({ onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>API Keys Saved Successfully</h2>
                <div className="button-group">
                    <a href="/fetch" className="button-link">Go to Fetch</a>
                    <a href="/scalper" className="button-link">Go to Scalper</a>
                </div>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default Popup;
