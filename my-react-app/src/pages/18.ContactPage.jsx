import React from 'react';

function ContactPage() {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        padding: '20px',
        maxWidth: '1200px',
        borderRadius: '12px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(44, 62, 80, 0.6)',
        backdropFilter: 'blur(10px)',
        color: '#ecf0f1',
    };

    const headingStyle = {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: '2em',
        marginBottom: '10px',
    };

    const subHeadingStyle = {
        textAlign: 'center',
        color: '#bdc3c7',
        fontSize: '1.2em',
        marginBottom: '20px',
    };

    const profileContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        flexWrap: 'wrap',
        marginTop: '20px',
    };

    const profileStyle = {
        padding: '20px',
        borderRadius: '12px',
        width: '30%',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        color: '#ecf0f1',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const profileHoverStyle = {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
    };

    const profileImageStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginBottom: '15px',
        border: '2px solid #ecf0f1',
    };

    const profileNameStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: '#ecf0f1',
        marginBottom: '10px',
    };

    const profileDetailsStyle = {
        color: '#bdc3c7',
        fontSize: '1em',
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
            phone: '+250 786 339 597',
        },
    ];

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contact Us</h1>
            <p style={subHeadingStyle}>
                Get in touch with us through the following contacts.
            </p>
            <div style={profileContainerStyle}>
                {userContacts.map((user, index) => (
                    <div
                        key={index}
                        style={{
                            ...profileStyle,
                        }}
                    >
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
