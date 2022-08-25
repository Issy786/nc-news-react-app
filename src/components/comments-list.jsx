export const CommentList = ({ comments }) => {
  return (
    <>
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
    </>
  );
};
