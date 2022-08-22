export function ListArticle({ articles }) {
  return (
    <div>
      <ul>
        {articles.map((article) => {
          console.log(article);
          return (
            <li className="article-list" key={article.article_id}>
              <h3>{article.title}</h3>
              <h4>Topic: {article.topic}</h4>
              <h4>Author: {article.author}</h4>
              <h4>Date: {article.created_at}</h4>
              <h4>Votes: {article.votes}</h4>
              <h4>Comments: {article.comment_count}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
