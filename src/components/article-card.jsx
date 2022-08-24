import { Link } from "react-router-dom";

export const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
}) => {
  return (
    <div className="article-tile-links">
      <Link to={`/article/${article_id}`}>
        <article className="article-list">
          <h3>{title}</h3>
          <h4>Topic: {topic}</h4>
          <h4>By {author}</h4>
          <h4>Date: {created_at}</h4>
          <h4>Votes: {votes}</h4>
          <h4>Comments: {comment_count}</h4>
        </article>
      </Link>
    </div>
  );
};
