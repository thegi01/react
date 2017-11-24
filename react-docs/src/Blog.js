import React from 'react';

function Blog(props) {

    const sidebar = (
        <ul>
            {props.posts.map( (post) => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map( (post) =>
        <div key={post.id} id={post.id}>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;
