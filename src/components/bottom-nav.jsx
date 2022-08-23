import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fetchAllTopics } from "../api";

export const BottomNav = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllTopics().then((data) => {
      setTopics(data.topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <nav className="bottom-nav">
        Topics: |{" "}
        <span className="top-nav-links">
          {topics.map((topic) => {
            return (
              <Link to={`/articles/${topic.slug}`} key={topic.slug}>
                {topic.slug}{" "}
              </Link>
            );
          })}
        </span>
      </nav>
    </>
  );
};
