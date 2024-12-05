import React, { useState } from 'react';
import './styles/ComponentCard.css';

function FormSubmission() {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Input:', input);
        alert(`Submitted: ${input}`);
        setInput('');
    };

    return (
        <div className="component-card">
            <h2>9. Form Submission</h2>
            <div className="content">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter your message"
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #34495e',
                            backgroundColor: '#2c3e50',
                            color: '#ecf0f1'
                        }}
                        required
                    />
                    <button 
                        type="submit"
                        style={{
                            padding: '10px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormSubmission;