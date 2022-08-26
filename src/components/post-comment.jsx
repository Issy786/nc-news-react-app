import { useContext, useState } from "react";
import { postNewComment } from "../api";
import { UserContext } from "./user";

export const PostComment = ({ comments, setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  const { loggedInUser } = useContext(UserContext);

  const submitHandler = (event) => {
    event.preventDefault();

    setComments((currComments) => {
      const newCommentBody = {
        comment_id: comments.length + 1,
        author: loggedInUser.username,
        created_at: Date.now().toString(),
        body: newComment,
        votes: 0,
      };
      return [newCommentBody, ...currComments];
    });

    postNewComment(article_id, loggedInUser.username, newComment).catch(
      (err) => {
        setComments((currComments) => {
          const commentsHolder = [...currComments];
          return commentsHolder.slice(1);
        });
        setErr("sorry your comment did not add, please try again");
      }
    );
    setNewComment("");
  };

  if (err) return <p className="error">{err}</p>;
  return (
    <>
      <form onSubmit={submitHandler}>
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
