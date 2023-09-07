import { useEffect, useState } from "react";
import apiUsers from "../services/apiUsers";
import { CanceledError } from "axios";

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
  useEffect(() => {
    const controller = new AbortController();
    isLoading(true);
    apiUsers
      .get(`/users/${userloginName}/repos`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
        isLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        isLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return { repos, loading, error };
};

export default useRepos;
