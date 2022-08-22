export function ListArticle({ articles }) {
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            <li className="article-list" key={article.article_id}>
              <h3>{article.title}</h3>
              <h4>Topic: {article.topic}</h4>
              <h4>Author: {article.author}</h4>
              <h4>descripition: {article.body}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
