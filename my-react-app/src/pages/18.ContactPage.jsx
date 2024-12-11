import React from 'react';

function ContactPage() {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#333',
    };

    const profileContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    };

    const profileStyle = {
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '30%',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const profileImageStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginBottom: '10px',
    };

    const profileNameStyle = {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#555',
    };

    const profileDetailsStyle = {
        color: '#666',
    };

    const userContacts = [
        {
            name: 'HIRWA CYUZUZO Cedric',
            email: 'hirwacedr12@gmail.com',
            phone: '+250 790 250 425',
        },
        {
            name: 'Byiringiro Olivier',
            email: 'yuppie@gmail.com',
            phone: '+250 791 787 414',
        },
        {
            name: 'IZERE DUKUZUMUKIZA Sabin',
            email: 'sabin@gmail.com',
            phone: '+250 786 339 597 ',
        },
    ];

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contact Us</h1>
            <p style={{ textAlign: 'center', color: '#555' }}>
                Get in touch with us through the following contacts.
            </p>
            <div style={profileContainerStyle}>
                {userContacts.map((user, index) => (
                    <div key={index} style={profileStyle}>
                        <img
                            src={`https://via.placeholder.com/80?text=${user.name.charAt(0)}`}
                            alt={`${user.name}'s avatar`}
                            style={profileImageStyle}
                        />
                        <div style={profileNameStyle}>{user.name}</div>
                        <div style={profileDetailsStyle}>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactPage;
