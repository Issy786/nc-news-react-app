export function ListArticle({ articles }) {
  return (
    <div>
      <ul>
        {articles.map(
          ({
            article_id,
            title,
            topic,
            author,
            created_at,
            votes,
            comment_count,
          }) => {
            return (
              <li className="article-list" key={article_id}>
                <h3>{title}</h3>
                <h4>Topic: {topic}</h4>
                <h4>Author: {author}</h4>
                <h4>Date: {created_at}</h4>
                <h4>Votes: {votes}</h4>
                <h4>Comments: {comment_count}</h4>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
