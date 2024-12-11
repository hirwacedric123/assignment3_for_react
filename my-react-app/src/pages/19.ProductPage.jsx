import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { productId } = useParams();

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    };

    const productCardStyle = {
        margin: '20px auto',
        padding: '15px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        width: '60%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const productImageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '10px',
        marginBottom: '15px',
    };

    const productNameStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    };

    const productDetailsStyle = {
        color: '#555',
        lineHeight: '1.6',
    };

    // Mock product data
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

    // Get product details based on productId
    const product = mockProducts[productId] || {
        name: 'Unknown Product',
        description: 'No details available for this product.',
        price: 'N/A',
        image: 'https://via.placeholder.com/400x200?text=No+Image',
    };

    return (
        <div style={containerStyle}>
            <h1>Product Details</h1>
            <div style={productCardStyle}>
                <img src={product.image} alt={product.name} style={productImageStyle} />
                <div style={productNameStyle}>{product.name}</div>
                <div style={productDetailsStyle}>
                    <p><strong>Description:</strong> {product.description}</p>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Product ID:</strong> {productId}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
