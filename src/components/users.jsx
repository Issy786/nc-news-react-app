import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api";
import { UserContext } from "./user";

export const ChangeUser = () => {
  const [users, setUsers] = useState([]);

  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li className="users-list user-tile" key={user.username}>
              <h5>{user.username}</h5>
              <img
                className="users-card-avatar"
                src={user.avatar_url}
                alt={user.username}
              />
              <h6>{user.name}</h6>
              <button
                className="change-user-button"
                onClick={() => {
                  setLoggedInUser(user);
                }}
              >
                Change user
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
