import React, { useState } from 'react';
import './styles/ComponentCard.css';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="component-card">
            <h2>10. Dropdown Menu</h2>
            <div className="content">
                <div style={{ position: 'relative', width: '250px' }}>
                    <button 
                        onClick={toggleDropdown}
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        {selectedOption || 'Select an option'}
                    </button>
                    {isOpen && (
                        <ul style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            backgroundColor: '#2c3e50',
                            border: '1px solid #34495e',
                            borderRadius: '5px',
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            zIndex: 10
                        }}>
                            {options.map((option, index) => (
                                <li 
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        backgroundColor: selectedOption === option ? '#3498db' : 'transparent',
                                        color: selectedOption === option ? 'white' : '#ecf0f1'
                                    }}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;