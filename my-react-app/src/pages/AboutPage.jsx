import React from 'react';

function AboutPage() {
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

    const studentProfiles = [
        {
            name: 'Alice Johnson',
            studentId: 'S1234',
            profession: 'Computer Science Student',
            skills: 'JavaScript, React, Python',
        },
        {
            name: 'Bob Smith',
            studentId: 'S5678',
            profession: 'Software Engineering Student',
            skills: 'Java, Spring Boot, SQL',
        },
        {
            name: 'Clara Davis',
            studentId: 'S91011',
            profession: 'Data Science Student',
            skills: 'Python, Machine Learning, R',
        },
    ];

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Page</h1>
            <p style={{ textAlign: 'center', color: '#555' }}>
                Learn more about us on this page.
            </p>
            <div style={profileContainerStyle}>
                {studentProfiles.map((profile, index) => (
                    <div key={index} style={profileStyle}>
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
