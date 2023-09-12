import { useEffect, useState } from "react";
import apiUsers from "../services/apiUsers";
import axios, { CanceledError } from "axios";
import useUsers from "./useUsers";

export interface Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}

interface Props {
  userloginName: string;
}
const useRepos = ({ userloginName }: Props) => {
  const [repos, setRepos] = useState<Repos[]>([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState("");
  const { users } = useUsers();
  if (userloginName) {
    useEffect(() => {
      const controller = new AbortController();
      isLoading(true);
      axios
        .get(`/users/${userloginName}/repos`, {
          signal: controller.signal,
          params: {
            cache: true,
          },
        })
        .then((res) => {
          if (res.data) {
            setRepos(res.data);
            isLoading(false);
          }
        })
        .catch((err) => {
          if (err instanceof CanceledError)
            return;
          setError(err.message);
          isLoading(false);
        });
      return () => {
        controller.abort();
      };
    }, [users]);
  }
  return { repos, loading, error };
};

export default useRepos;
