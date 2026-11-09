import Comment from './Comment.jsx';

function Comments(props) {
  const comments = props.comments;

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          message={comment.message}
        />
      ))}
    </div>
  );
}

export default Comments;