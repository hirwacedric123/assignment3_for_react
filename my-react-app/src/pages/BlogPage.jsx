import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BlogPage() {
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
        marginBottom: '20px',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        padding: '10px',
        borderBottom: '2px solid #ddd',
    };

    const linkStyle = {
        marginRight: '15px',
        textDecoration: 'none',
        color: '#007BFF',
        fontWeight: 'bold',
    };

    const activeLinkStyle = {
        color: '#0056b3',
        textDecoration: 'underline',
    };

    const outletStyle = {
        marginTop: '20px',
        textAlign: 'center',
        color: '#555',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Blog Page</h1>
            <nav style={navStyle}>
                <Link to="post/1" style={linkStyle}>Post 1</Link>
                <Link to="post/2" style={linkStyle}>Post 2</Link>
                <Link to="post/3" style={linkStyle}>Post 3</Link>
            </nav>
            <div style={outletStyle}>
                <Outlet />
            </div>
        </div>
    );
}

export default BlogPage;
