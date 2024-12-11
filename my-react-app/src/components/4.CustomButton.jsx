import React, { useState } from 'react';
import './styles/ComponentCard.css';

function CustomButton() {
    const [buttonColor, setButtonColor] = useState('blue');
    const colors = ['blue', 'green', 'red', 'purple'];

    const handleColorChange = () => {
        const currentIndex = colors.indexOf(buttonColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        setButtonColor(colors[nextIndex]);
    };

    return (
        <div className="component-card">
            <h2>4. Custom Button</h2>
            <div className="content">
                <button 
                    style={{
                        backgroundColor: buttonColor, 
                        color: 'white', 
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                    onClick={handleColorChange}
                >
                    Change Color (Current: {buttonColor})
                </button>
            </div>
        </div>
    );
}

export default CustomButton;