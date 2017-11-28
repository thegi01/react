import React from 'react';

import NumberList from'./NumberList';
import Blog from'./Blog';

function ListAndKeys(){
    
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return(
        <div>
            <h3>NumberList</h3>
            <NumberList numbers={[1, 2, 3, 4, 5]} />

            <h3>Blog</h3>
            <p>Keys Must Only Be Unique Among Siblings</p>
            <Blog posts={posts} />
        </div>
    );
}

export default ListAndKeys;