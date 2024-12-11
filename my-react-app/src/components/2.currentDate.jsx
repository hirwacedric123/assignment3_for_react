import React from 'react';
import './styles/ComponentCard.css';

function CurrentDate() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

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