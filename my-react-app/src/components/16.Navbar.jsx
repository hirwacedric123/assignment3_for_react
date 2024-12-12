import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 30px',
        backgroundColor: '#2c3e50',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        position: 'sticky',
        top: '0',
        zIndex: '1000',
        
    };

    const logoStyle = {
        fontSize: '1.5em',
        color: '#3498db', // Logo color
        fontWeight: 'bold',
        textDecoration: 'none',
        textShadow: '0px 0px 10px #4f5457, 0px 0px 20px #0073e6',
    };

    const linksContainerStyle = {
        display: 'flex',
        gap: '20px',
    };

    const linkStyle = {
        color: '#ecf0f1', // Default link color
        textDecoration: 'none',
        fontSize: '1em',
        fontWeight: '500',
        transition: 'color 0.3s',
        textShadow: '0px 0px 10px #4f5457, 0px 0px 20px #0073e6',
    };

    const linkHoverColor = '#3498db'; // Hover color

    return (
        <nav style={navStyle}>
            <Link to="/" style={logoStyle}>
                MyApp
            </Link>
            <div style={linksContainerStyle}>
                {[
                    { to: '/', label: 'Home' },
                    { to: '/about', label: 'About' },
                    { to: '/contact', label: 'Contact' },
                    { to: '/product/1', label: 'Product 1' },
                    { to: '/blog', label: 'Blog' },
                ].map(({ to, label }) => (
                    <Link
                        to={to}
                        key={to}
                        style={linkStyle}
                        onMouseOver={(e) => (e.target.style.color = linkHoverColor)}
                        onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
