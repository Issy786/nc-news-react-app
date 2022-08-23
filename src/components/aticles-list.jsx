import { ArticleCard } from "./article-card";

export function ListArticle({ articles }) {
  return (
    <>
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
            <ArticleCard
              key={article_id}
              article_id={article_id}
              title={title}
              topic={topic}
              author={author}
              created_at={created_at}
              votes={votes}
              comment_count={comment_count}
            />
          );
        }
      )}
    </>
  );
}
