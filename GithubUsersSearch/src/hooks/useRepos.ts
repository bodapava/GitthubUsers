import { useEffect, useState } from "react";
import apiUsers from "../services/apiUsers";

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
  useEffect(() => {
    const controller = new AbortController();
    apiUsers
      .get(`/users/${userloginName}/repos`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return { repos };
};

export default useRepos;
