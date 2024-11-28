import React, { useState } from 'react';
import './styles/ComponentCard.css';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="component-card">
            <h2>6. Toggle Button</h2>
            <div className="content">
                <button 
                    onClick={handleToggle}
                    style={{
                        backgroundColor: isOn ? 'green' : 'red',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    {isOn ? 'ON' : 'OFF'}
                </button>
                <p>Current State: {isOn ? 'ON' : 'OFF'}</p>
            </div>
        </div>
    );
}

export default ToggleButton;