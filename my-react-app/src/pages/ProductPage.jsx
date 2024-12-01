import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const { productId } = useParams();

    return (
        <div>
            <h1>Product Details</h1>
            <p style={{ color: 'white' }}>Viewing details for Product ID: {productId}</p>
        </div>
    );
}

export default ProductPage;
