function Comment(com) {
    return (
        <div key={com.id}>
            Comments name : {com.name}
        </div>
    );
}

export default Comment;