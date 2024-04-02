import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { user, error, loading } = useGithubUser(username);
  console.log(user);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <h1>{user?.name}</h1>
    </div>
  );
}
