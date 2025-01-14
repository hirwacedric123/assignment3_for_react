import React from 'react';
import './styles/ComponentCard.css';

function CurrentDate() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="component-card">
            <h2>2. Current Date</h2>
            <div className="content">
                <p>{currentDate}</p>
            </div>
        </div>
    );
}

export default CurrentDate;