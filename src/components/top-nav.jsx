import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./user";

export const TopNav = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav className="top-nav">
      <span className="top-nav-links grid-top-nav">
        <Link to="/">Articles</Link> <Link to="/change_user">Users</Link>
      </span>{" "}
      {loggedInUser.username}
      <img
        className="curr-user_avatar"
        src={loggedInUser.avatar_url}
        alt={loggedInUser.username}
      />
    </nav>
  );
};
