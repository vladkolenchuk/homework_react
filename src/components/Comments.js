import {useEffect, useState} from 'react';

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
                comments.map(com =>
                    <div key={com.id}>
                        Comments name : {com.name}
                    </div>)
            }
        </div>
    );
}

export default Comments;