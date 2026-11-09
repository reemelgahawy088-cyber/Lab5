
import { useState } from 'react';

function CommentInput(props) {
  const comments = props.comments;
  const setComments = props.setComments;

  const [input, setInput] = useState("");

  function saveInputText(event) {
    setInput(event.target.value);
  }

  function addComment() {
    if (input.trim() !== "") {
      setComments([...comments, {
        name: "You",
         message: input
     }]);

      setInput("");
    }
  }

  return (
    <div className="comment-input-container">
      <input
        placeholder="Write a comment..."
        value={input}
        onChange={saveInputText}
      />
      <button onClick={addComment}>Post</button>
    </div>
  );
}

export default CommentInput;
