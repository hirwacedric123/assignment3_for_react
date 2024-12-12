import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BlogPage() {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        padding: '20px',
        maxWidth: '900px',
        borderRadius: '12px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(44, 62, 80, 0.6)',
        backdropFilter: 'blur(10px)',
        color: '#ecf0f1',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#ecf0f1',
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px',
        padding: '10px',
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#1abc9c',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    const activeLinkStyle = {
        backgroundColor: '#16a085',
        color: '#fff',
    };

    const outletStyle = {
        marginTop: '20px',
        color: '#bdc3c7',
        fontSize: '1.2em',
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#1abc9c';
        e.target.style.color = '#fff';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#1abc9c';
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Blog Page</h1>
            <nav style={navStyle}>
                <Link
                    to="post/1"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Post 1
                </Link>
                <Link
                    to="post/2"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Post 2
                </Link>
                <Link
                    to="post/3"
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Post 3
                </Link>
            </nav>
            <div style={outletStyle}>
                <Outlet />
            </div>
        </div>
    );
}

export default BlogPage;
