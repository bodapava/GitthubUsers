import { useEffect, useState } from "react";
import apiUsers from "../services/apiUsers";
import { CanceledError } from "axios";

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  repos_url: string;
}

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isloading, setIsloading] =
    useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setIsloading(true);
    apiUsers
      .get("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        //console.log(res.data);
        setUsers(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsloading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return { users, isloading, error };
};

export default useUsers;
