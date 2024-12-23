import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { productId } = useParams();

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        padding: '20px',
        maxWidth: '800px',
        borderRadius: '12px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(44, 62, 80, 0.6)',
        backdropFilter: 'blur(10px)',
        color: '#ecf0f1',
        textAlign: 'center',
    };

    const productCardStyle = {
        margin: '20px auto',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        color: '#ecf0f1',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const productImageStyle = {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '12px',
        marginBottom: '15px',
        border: '2px solid #ecf0f1',
    };

    const productNameStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#ecf0f1',
        marginBottom: '15px',
    };

    const productDetailsStyle = {
        color: '#bdc3c7',
        fontSize: '1.2em',
        lineHeight: '1.8',
        textAlign: 'left',
    };

    const mockProducts = {
        '1': {
            name: 'Smartphone X Pro',
            description: 'A high-end smartphone with cutting-edge features.',
            price: '1,200 USD',
            image: 'https://via.placeholder.com/400x200?text=Smartphone+X+Pro',
        },
        '2': {
            name: 'Wireless Headphones',
            description: 'Experience superior sound quality and noise cancellation.',
            price: '300 USD',
            image: 'https://via.placeholder.com/400x200?text=Wireless+Headphones',
        },
        '3': {
            name: 'Gaming Laptop',
            description: 'A powerful laptop designed for gaming and productivity.',
            price: '2,500 USD',
            image: 'https://via.placeholder.com/400x200?text=Gaming+Laptop',
        },
    };

    const product = mockProducts[productId] || {
        name: 'Unknown Product',
        description: 'No details available for this product.',
        price: 'N/A',
        image: 'https://via.placeholder.com/400x200?text=No+Image',
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Product Details</h1>
            <div style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <div style={productNameStyle}>{product.name}</div>
                <div style={productDetailsStyle}>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Pricing:</strong> {product.price}</p>
                    <p><strong>Product ID:</strong> {productId}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
