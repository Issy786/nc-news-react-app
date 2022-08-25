import { useState } from "react";
import { postNewComment } from "../api";

export const PostComment = ({ comments, setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState("");
  const [err, setErr] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    setComments((currComments) => {
      const newCommentBody = {
        comment_id: comments.length + 1,
        author: user,
        created_at: Date.now().toString(),
        body: newComment,
        votes: 0,
      };
      return [newCommentBody, ...currComments];
    });

    postNewComment(article_id, user, newComment).catch((err) =>
      setErr("sorry your comment did not add, please try again")
    );
    setUser("");
    setNewComment("");
  };

  if (err) return <p className="error">{err}</p>;
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <input
            className="username-box"
            placeholder="Username"
            type="text"
            name="username"
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
            }}
          ></input>
        </div>
        <input
          className="comment-box"
          placeholder="Add a comment"
          type="text"
          name="body"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        ></input>
        <button className="comment-add-button" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
