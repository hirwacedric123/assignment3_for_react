import React, { useState } from 'react';
import './styles/ComponentCard.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
        setUsername('');
        setPassword('');
    };

    return (
        <div className="component-card">
            <h2>11. Login Form</h2>
            <form 
                onSubmit={handleLogin} 
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={{ padding: '10px', borderRadius: '5px' }}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ padding: '10px', borderRadius: '5px' }}
                />
                <button 
                    type="submit" 
                    style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
