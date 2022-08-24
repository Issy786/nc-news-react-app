import { useEffect, useState } from "react";
import { fetchAllCommentsByArticleId } from "../api";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchAllCommentsByArticleId(article_id).then((data) => {
      setComments(data.comments);
    });
  }, [article_id]);

  return (
    <div className="comments">
      <h3 className="comments-header">Comments</h3>

      {comments.map((comment) => {
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
    </div>
  );
};
