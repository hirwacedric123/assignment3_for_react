import React from 'react';
import './styles/ComponentCard.css';

function ProfileCard() {
    const profile = {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    };

    return (
        <div className="component-card">
            <h2>5. Profile Card</h2>
            <div className="content">
                <h3>{profile.name}</h3>
                <p>Age: {profile.age}</p>
                <p>Email: {profile.email}</p>
            </div>
        </div>
    );
}

export default ProfileCard;