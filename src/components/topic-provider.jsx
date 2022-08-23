import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllArticlesByTopics } from "../api";
import { ListArticle } from "./aticles-list";

export const TopicProvider = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const topicName = useParams().topic;

  useEffect(() => {
    fetchAllArticlesByTopics(topicName).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [topicName]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main1">
      <ListArticle articles={Object.values(articles)} />
    </main>
  );
};
