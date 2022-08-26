import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./components/user";

export const TopNav = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <nav className="top-nav">
      <span className="top-nav-links">
        <Link to="/">Articles</Link> <Link to="/change_user">Users</Link>{" "}
        {loggedInUser.username}
        <img
          className="curr-user_avatar"
          src={loggedInUser.avatar_url}
          alt={loggedInUser.username}
        />
      </span>
    </nav>
  );
};
