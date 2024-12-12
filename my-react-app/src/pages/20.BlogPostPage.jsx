import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPostPage() {
    const { postId } = useParams();

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: '20px auto',
        padding: '30px',
        borderRadius: '12px',
        maxWidth: '900px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(52, 73, 94, 0.8)',
        backdropFilter: 'blur(10px)',
        color: '#ecf0f1',
    };

    const headingStyle = {
        fontSize: '2.5em',
        color: '#1abc9c',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const contentStyle = {
        color: '#ecf0f1',
        lineHeight: '1.8',
        fontSize: '1.2em',
        textAlign: 'justify',
    };

    const highlightStyle = {
        color: '#1abc9c',
        fontWeight: 'bold',
    };

    const codingStory = `Once upon a time, in a land full of bugs and infinite loops, a young developer named Alex decided to write their first program. 
    Excited, Alex typed "Hello, World!" into their favorite text editor and ran the code. But instead of greeting the world, the program 
    outputted "Goodbye, Universe!" Alex was perplexed. After hours of debugging, Alex realized they had accidentally copied a snippet from 
    a forum about existential programming—a joke language where every output was reversed. From that day, Alex learned an important lesson: 
    always check your sources!`;

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Blog Post <span style={highlightStyle}>#{postId}</span></h2>
            <div style={contentStyle}>
                <p>
                    This is the detailed content of Blog Post <span style={highlightStyle}>{postId}</span>. Here’s a fun coding story to brighten your day:
                </p>
                <p>{codingStory}</p>
            </div>
        </div>
    );
}

export default BlogPostPage;
