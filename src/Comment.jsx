function Comment(props) {
  const name = props.name;
  const message = props.message;

  return (
    <div className="comment">
      <div className="avatar">
        {name.charAt(0)}
      </div>

      <div className="comment-box">
        <b>{name}</b>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Comment;