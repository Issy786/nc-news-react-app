import { useState } from "react";
import { patchArticle } from "../api";

export const Votes = ({ votes, article_id, setArticle }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [err, setErr] = useState(null);

  const incrementVote = () => {
    setOptimisticVotes((currOptimisticVotes) => {
      return currOptimisticVotes + 1;
    });
    patchArticle(article_id).catch((err) => {
      setOptimisticVotes((currOptimisticVotes) => currOptimisticVotes - 1);
      setErr("Vote did not go through, please try again.");
    });
  };

  if (err) return <p className="error">{err}</p>;
  return (
    <div>
      <p>
        <span className="article-votes">Votes: </span>
        {votes + optimisticVotes}{" "}
        <button className="vote-button" onClick={incrementVote}>
          Vote
        </button>
      </p>
    </div>
  );
};
