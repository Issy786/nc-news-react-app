import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchArticles } from "../api";
import { ListArticle } from "./aticles-list";
import { OrderBy } from "./order-by";
import { SortBy } from "./sort-by";

export const ArticlesProvider = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({});

  const sort_by = searchParams.get("sort_by");
  const order_by = searchParams.get("order_by");

  useEffect(() => {
    fetchArticles(sort_by, order_by).then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    });
  }, [sort_by, order_by]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="main1">
      <SortBy sort_by={sort_by} setSearchParams={setSearchParams} />
      <OrderBy
        order_by={order_by}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <ListArticle articles={Object.values(articles)} />
    </main>
  );
};
