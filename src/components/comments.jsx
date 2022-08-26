import { useEffect, useState } from "react";
import { fetchAllCommentsByArticleId } from "../api";
import { CommentList } from "./comments-list";
import { PostComment } from "./post-comment";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchAllCommentsByArticleId(article_id).then((res) => {
      setComments(res.data.comments);
    });
  }, [article_id]);

  return (
    <div className="comments">
      <h3 className="comments-header">Comments</h3>
      <PostComment
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
      <CommentList comments={comments} setComments={setComments} />
    </div>
  );
};
