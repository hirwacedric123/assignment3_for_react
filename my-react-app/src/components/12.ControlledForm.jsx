import React, { useState } from 'react';
import './styles/ComponentCard.css';

function ControlledForm() {
    const [value, setValue] = useState('');

    return (
        <div className="component-card">
            <h2>12. Controlled Form</h2>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Type something..." 
                style={{ padding: '10px', borderRadius: '5px', width: '100%' }}
            />
            <p style={{ marginTop: '10px', color: '#ecf0f1' }}>Entered Text: {value}</p>
        </div>
    );
}

export default ControlledForm;
