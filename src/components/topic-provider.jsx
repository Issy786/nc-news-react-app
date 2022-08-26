import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllArticlesByTopics } from "../api";
import { ListArticle } from "./aticles-list";
import { OrderBy } from "./order-by";
import { SortBy } from "./sort-by";

export const TopicProvider = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const topicName = useParams().topic;
  const [searchParams, setSearchParams] = useSearchParams({});
  const [err, setErr] = useState(null);

  const sort_by = searchParams.get("sort_by");
  const order_by = searchParams.get("order_by");

  useEffect(() => {
    fetchAllArticlesByTopics(topicName, sort_by, order_by)
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("sorry could not load page, please try again");
      });
  }, [topicName, sort_by, order_by]);

  if (err) return <p className="error">{err}</p>;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main1">
      <SortBy sort_by={sort_by} setSearchParams={setSearchParams} />
      <OrderBy setSearchParams={setSearchParams} />
      <ListArticle articles={Object.values(articles)} />
    </main>
  );
};
