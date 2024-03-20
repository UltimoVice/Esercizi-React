import React, { useState } from 'react';

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchUser(username) {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then(userData => {
        setUser(userData);
        setError(null);
      })
      .catch(error => {
        setError(error);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, [username]);

  return {
    user,
    error,
    loading
  };
}

export function GithubUsers() {
  const [searchUser, setSearchUser] = useState('');

  const handleSearch = () => {
    
    useGithubUser(searchUser); 
  };

  return (
    <div>
      <h2>Search Github User</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchUser}
          onChange={e => setSearchUser(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      
      <GithubUser username={searchUser} />
    </div>
  );
}
