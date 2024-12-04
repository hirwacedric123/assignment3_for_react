import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPostPage() {
    const { postId } = useParams();

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        backgroundColor: '#f9f9f9',
    };

    const headingStyle = {
        fontSize: '2em',
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const contentStyle = {
        color: '#555',
        lineHeight: '1.6',
        fontSize: '1.1em',
    };

    const codingStory = `Once upon a time, in a land full of bugs and infinite loops, a young developer named Alex decided to write their first program. 
    Excited, Alex typed "Hello, World!" into their favorite text editor and ran the code. But instead of greeting the world, the program 
    outputted "Goodbye, Universe!" Alex was perplexed. After hours of debugging, Alex realized they had accidentally copied a snippet from 
    a forum about existential programming—a joke language where every output was reversed. From that day, Alex learned an important lesson: 
    always check your sources!`;

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Blog Post {postId}</h2>
            <div style={contentStyle}>
                <p>
                    This is the detailed content of Blog Post {postId}. Here’s a fun coding story to brighten your day:
                </p>
                <p>{codingStory}</p>
            </div>
        </div>
    );
}

export default BlogPostPage;
