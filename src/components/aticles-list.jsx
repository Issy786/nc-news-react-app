import { ArticleCard } from "./article-card";

export function ListArticle({ articles }) {
  return (
    <>
      {articles.map(
        (
          {
            article_id,
            title,
            topic,
            author,
            created_at,
            votes,
            comment_count,
          },
          index
        ) => {
          return (
            <ArticleCard
              key={index}
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
