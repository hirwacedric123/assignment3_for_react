import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPostPage() {
    const { postId } = useParams();

    return (
        <div>
            <h2 style={{ color: 'white' }}>Blog Post {postId}</h2>
            <p style={{ color: 'white' }}>This is the content of Blog Post {postId}.</p>
        </div>
    );
}

export default BlogPostPage;
