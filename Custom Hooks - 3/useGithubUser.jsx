import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      console.log(response);

      if (response.status !== 200) {
        setError(new Error());
      }

      const json = await response.json();

      setUser(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);

  return {
    user,
    error,
    loading,
    onGetUser: fetchGithubUser,
  };
}
