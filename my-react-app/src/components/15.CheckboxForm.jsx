import React, { useState } from 'react';
import './styles/ComponentCard.css';

function CheckboxForm() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setSelectedOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return (
        <div className="component-card">
            <h2>15. Checkbox Form</h2>
            <div>
                <label>
                    <input type="checkbox" value="Option 1" onChange={handleCheckboxChange} /> Option 1
                </label>
                <label>
                    <input type="checkbox" value="Option 2" onChange={handleCheckboxChange} /> Option 2
                </label>
                <label>
                    <input type="checkbox" value="Option 3" onChange={handleCheckboxChange} /> Option 3
                </label>
            </div>
            <p style={{ marginTop: '10px', color: '#ecf0f1' }}>
                Selected Options: {selectedOptions.join(', ')}
            </p>
        </div>
    );
}

export default CheckboxForm;

