import {useEffect, useState} from 'react';
import Comment from "./Comment";

function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(com => com.json())
            .then(com => {
                setComments(com);
            });


    }, []);

    return (
        <div>

            {
                comments.map(com => <Comment com={com} />)}
        </div>
    );
}

export default Comments;