import { useState } from "react";
import { patchArticle, patchArticleDownVote } from "../api";

export const Votes = ({ votes, article_id, setArticle }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [err, setErr] = useState(null);

  const incrementVote = () => {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1;
    });
    patchArticle(article_id).catch((err) => {
      setOptimisticVotes((currOptimisticVotes) => currOptimisticVotes - 1);
      setErr("sorry you vote did not go through, please try again.");
    });
  };

  const decrementVote = () => {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes - 1;
    });
    patchArticleDownVote(article_id).catch((err) => {
      setOptimisticVotes((currOptimisticVotes) => currOptimisticVotes + 1);
      setErr("sorry you vote did not go through, please try again.");
    });
  };

  if (err) return <p className="error">{err}</p>;
  return (
    <div>
      <p>
        <span className="article-votes">Votes: </span>
        {votes + optimisticVotes}{" "}
        <button className="vote-button" onClick={incrementVote}>
          +
        </button>
        <button className="vote-button-down" onClick={decrementVote}>
          -
        </button>
      </p>
    </div>
  );
};
