import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BlogPage() {
    return (
        <div>
            <h1>Blog Page</h1>
            <nav>
                <Link to="post/1" style={{ marginRight: '10px', color: 'white' }}>Post 1</Link>
                <Link to="post/2" style={{ color: 'white' }}>Post 2</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default BlogPage;
