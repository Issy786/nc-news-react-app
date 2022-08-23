import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";

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
      <h4>Topic: {article.topic}</h4>
      <h4>Author: {article.author}</h4>
      <h4>Article:</h4> <p>{article.body}</p>
      <h4>Date: {article.created_at}</h4>
      <h4>Votes: {article.votes}</h4>
      <h4>Comments: {article.comment_count}</h4>
    </article>
  );
};
