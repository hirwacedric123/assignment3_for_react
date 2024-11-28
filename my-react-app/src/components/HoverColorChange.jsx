import React, { useState } from 'react';
import './styles/ComponentCard.css';

function HoverColorChange() {
    const [color, setColor] = useState('#3498db');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleMouseEnter = () => {
        setColor(getRandomColor());
    };

    return (
        <div className="component-card">
            <h2>8. Hover Color Change</h2>
            <div className="content">
                <div 
                    style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: color,
                        transition: 'background-color 0.3s ease',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white'
                    }}
                    onMouseEnter={handleMouseEnter}
                >
                    Hover me!
                </div>
                <p>Current Color: {color}</p>
            </div>
        </div>
    );
}

export default HoverColorChange;