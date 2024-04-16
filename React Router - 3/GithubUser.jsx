// import { useEffect, useState } from "react";

import { useGithubUser } from "./useGithubUser";

// export const GithubUser = ({ username }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => {
//         if (response.status !== 200) {
//           setError(new Error("User not found"));
//         }

//         return response.json();
//       })
//       .then((json) => {
//         console.log(json);
//         setData(json);
//       })
//       .catch((error) => {
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [username]);

//   return (
//     <div>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>There has been an error</h1>}
//       {data && <h1>{data.name}</h1>}
//       {data && <h1>{data.login}</h1>}
//       {data && <img src={data.avatar_url} />}
//     </div>
//   );
// };

// export const GithubUsers = () => {
//   const [searchUser, setSearchUser] = useState("");
//   const [searchResult, setSearchResult] = useState([]);

//   const handleSearch = (event) => {
//     event.preventDefault();

//     fetch(`https://api.github.com/users/${searchUser}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("User not found");
//         }
//         return response.json();
//       })
//       .then((json) => {
//         setSearchResult([json]);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setSearchUser("");
//       });
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         value={searchUser}
//         onChange={(e) => setSearchUser(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//       {searchResult && (
//         <ul>
//           {searchResult.map((user) => (
//             <li key={user.id}>
//               {user.id && <GithubUser username={user.login} />}
//             </li>
//           ))}
//         </ul>
//       )}
//     </form>
//   );
// };

// export function GithubUser({ username }) {
//   const { user, error, loading } = useGithubUser(username);
//   console.log(user);
//   return(
//   <div>
//     {loading && <p>Loading...</p>}
//     {error && <p>Error!</p>}
//     <h1>{user?.name}</h1>
//   </div>)
// }

import { useEffect, useState } from 'react';

export function GithubUser({ username }) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((json) => setUser(json))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, [username]);

	return (
		<div>
			{user && (
				<>
					<img src={user.avatar_url} />
					<div>{user.login}</div>
					<div>{user.name}</div>
				</>
			)}
			{error && <div>{error.message}</div>}
			{loading && <div>Loading...</div>}
		</div>
	);
}

