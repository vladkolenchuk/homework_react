import {useEffect, useState} from "react";

function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(post => post.json())
            .then(post => {
                setPosts(post);
            });

    }, []);
    return (
        <div>
            {
                posts.map(post =>
                    <div key={post.id}>
                        Title: {post.title}
                    </div>)
            }


        </div>
    );
}

export default Posts;