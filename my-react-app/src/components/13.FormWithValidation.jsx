import React, { useState } from 'react';
import './styles/ComponentCard.css';

function FormWithValidation() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Invalid email format');
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters long');
        } else {
            alert('Form Submitted Successfully');
            setEmail('');
            setPassword('');
            setError('');
        }
    };

    return (
        <div className="component-card">
            <h2>13. Form with Validation</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ padding: '10px', borderRadius: '5px' }}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    required
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ padding: '10px', borderRadius: '5px' }}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button 
                    type="submit" 
                    style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FormWithValidation;
