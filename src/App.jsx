import { useState } from 'react';
import CommentInput from './CommentInput.jsx';
import Comments from './Comments.jsx';
import './App.css';

function App() {
  const [comments, setComments] = useState([
    { name: "Sara", message: "Great explanation of components!" },
    { name: "Omar", message: "Props finally make sense to me." },
    { name: "Ali", message: "Can we do a lab on useState next week?" },
    { name: "You", message: "Thanks for the lab, this was fun!" }
  ]);

  return (
    <div className="page">
      <div className="comments-container">
        <h2>Comments ({comments.length})</h2>

        <CommentInput
          comments={comments}
          setComments={setComments}
        />

        <Comments comments={comments} />
      </div>
    </div>
  );
}

export default App;