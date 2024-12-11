import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            display: 'flex',
            gap: '15px',
            padding: '10px',
            background: '#3498db',
            color: 'white',
            justifyContent: 'center',
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            <Link to="/product/1" style={{ color: 'white', textDecoration: 'none' }}>Product 1</Link>
            <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
        </nav>
    );
}

export default Navbar;
