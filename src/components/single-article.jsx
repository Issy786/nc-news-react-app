import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { Comments } from "./comments";
import { Votes } from "./votes";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const articleId = useParams().article_id;

  useEffect(() => {
    fetchArticleById(articleId).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [articleId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <article className="article-list">
      <h3>{article.title}</h3>
      <h4 className="topic-author-heading">
        {article.topic} | By {article.author}
      </h4>
      <p className="article">{article.body}</p>
      <p className="article-date">{article.created_at}</p>
      <Votes
        votes={article.votes}
        article_id={article.article_id}
        setArticle={setArticle}
      />
      <div>
        <Comments article_id={article.article_id} />
      </div>
    </article>
  );
};
