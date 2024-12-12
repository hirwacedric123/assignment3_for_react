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
            <div style={{display:"flex", flexDirection:"column", fontSize:"18px", justifyContent:"space-between"}}>
                <label>
                    <input   type="checkbox" value="Chair" onChange={handleCheckboxChange} /> Chair
                </label>
                <label>
                    <input type="checkbox" value="Table" onChange={handleCheckboxChange} /> Table
                </label>
                <label>
                    <input type="checkbox" value="Spoon" onChange={handleCheckboxChange} /> Spoon
                </label>
                <label>
                    <input type="checkbox" value="Plate" onChange={handleCheckboxChange} /> Plate
                </label>
                <label>
                    <input type="checkbox" value="Fridge" onChange={handleCheckboxChange} /> fridge
                </label>
            </div>
            <p style={{ marginTop: '10px', color: '#ecf0f1' }}>
                Selected Options: {selectedOptions.join(', ')}
            </p>
        </div>
    );
}

export default CheckboxForm;

