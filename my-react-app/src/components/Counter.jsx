import React, { useState } from 'react';
import './styles/ComponentCard.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="component-card">
            <h2>7. Counter</h2>
            <div className="content">
                <h3>Count: {count}</h3>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button 
                        onClick={decrement}
                        style={{
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Decrement
                    </button>
                    <button 
                        onClick={reset}
                        style={{
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                    <button 
                        onClick={increment}
                        style={{
                            backgroundColor: '#2ecc71',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;