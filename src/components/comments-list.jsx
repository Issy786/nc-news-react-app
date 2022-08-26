import { useContext, useState } from "react";
import { removeComment } from "../api";
import { UserContext } from "./user";

export const CommentList = ({ comments, setComments }) => {
  const [err, setErr] = useState(null);
  const { loggedInUser } = useContext(UserContext);

  const handleDeletedComment = (event, comment_id) => {
    event.preventDefault();

    setComments((currComments) => {
      let filteredComments = currComments.filter((currComment) => {
        return currComment.comment_id !== comment_id;
      });
      return filteredComments;
    });

    removeComment(comment_id).catch((err) => {
      setComments((currComments) => [currComments]);
      setErr("sorry your comment did not delere, please try again");
    });
  };

  if (err) return <p className="error">{err}</p>;

  return (
    <>
      {comments.map((comment) => {
        if (comment.author === loggedInUser.username) {
          return (
            <article className="comments-tiles" key={comment.comment_id}>
              <p className="comment-date">
                <span className="comment-author">{comment.author}</span>{" "}
                {comment.created_at}
              </p>
              <p>{comment.body}</p>
              <p className="comment-vote-count">
                <span className="comment-votes">Votes</span> {comment.votes}
              </p>
              <button
                className="comment-delete-button"
                onClick={(event) => {
                  handleDeletedComment(event, comment.comment_id);
                }}
              >
                Delete
              </button>
            </article>
          );
        }

        return (
          <article className="comments-tiles" key={comment.comment_id}>
            <p className="comment-date">
              <span className="comment-author">{comment.author}</span>{" "}
              {comment.created_at}
            </p>
            <p>{comment.body}</p>
            <p className="comment-vote-count">
              <span className="comment-votes">Votes</span> {comment.votes}
            </p>
          </article>
        );
      })}
    </>
  );
};
