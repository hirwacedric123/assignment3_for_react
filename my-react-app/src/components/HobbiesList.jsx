import React from 'react';
import './styles/ComponentCard.css';

function HobbiesList() {
    const hobbies = ['Coding', 'Reading', 'Gaming', 'Photography', 'Traveling'];

    return (
        <div className="component-card">
            <h2>3. Hobbies List</h2>
            <div className="content">
                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HobbiesList;