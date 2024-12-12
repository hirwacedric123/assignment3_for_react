import React from 'react';

function AboutPage() {
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
    };

    const studentProfiles = [
        {
            name: 'HIRWA CYUZUZO Cedric',
            studentId: '223013417',
            profession: 'Computer Science Student',
            skills: 'JavaScript, React, Python, Django',
        },
        {
            name: 'Byiringiro Olivier',
            studentId: '223008225',
            profession: 'Computer Science Student',
            skills: 'JavaScript, Java, Spring Boot, SQL',
        },
        {
            name: 'IZERE DUKUZUMUKIZA Sabin',
            studentId: '223009179',
            profession: 'Computer Science Student',
            skills: 'Python, Machine Learning, R',
        },
    ];

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Page</h1>
            <p style={subHeadingStyle}>
                Learn more about our team members below.
            </p>
            <div style={profileContainerStyle}>
                {studentProfiles.map((profile, index) => (
                    <div
                        key={index}
                        style={{
                            ...profileStyle,
                            ':hover': profileHoverStyle, // Adding hover effects inline
                        }}
                    >
                        <img
                            src={`https://via.placeholder.com/80?text=${profile.name.charAt(0)}`}
                            alt={`${profile.name}'s avatar`}
                            style={profileImageStyle}
                        />
                        <div style={profileNameStyle}>{profile.name}</div>
                        <div style={profileDetailsStyle}>
                            <p><strong>Student ID:</strong> {profile.studentId}</p>
                            <p><strong>Profession:</strong> {profile.profession}</p>
                            <p><strong>Skills:</strong> {profile.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutPage;
