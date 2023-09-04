import { useEffect, useState } from "react";
import apiUsers from "../services/apiUsers";

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  repos_url: string;
}

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  console.log("came here");
  useEffect(() => {
    //const controller = new AbortController();
    apiUsers
      .get<User[]>("/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return { users };
};

export default useUsers;
