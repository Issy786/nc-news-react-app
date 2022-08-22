import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { ListArticle } from "./aticles-list";

export const ArticlesProvider = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <main className="main1">
      <ListArticle articles={Object.values(articles)} />
    </main>
  );
};
