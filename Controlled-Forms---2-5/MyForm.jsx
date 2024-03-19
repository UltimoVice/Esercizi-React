import React, { useEffect, useRef, useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

export function MyForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(false);

  const mountedRef = useRef(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again for debug purposes");
    }

    inputRef.current?.focus();
  }, []);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSessionChange(event) {
    setSession(event.target.checked);
  }

  function handleLogin(event) {
    event.preventDefault();
    const data = {
      username,
      password,
      session,
    };
    console.log(data);
    handleResetForm();
  }

  function handleResetForm() {
    setUsername("");
    setPassword("");
    setSession(false);
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>My Form</h2>
      <input
        ref={inputRef}
        name="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        name="password"
        value={password}
        type="password"
        onChange={handlePasswordChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={session}
        onChange={handleSessionChange}
      />
      <button disabled={!username || !password}>Login</button>
      <button type="button" onClick={handleResetForm}>
        Reset Form
      </button>

      <pre>{JSON.stringify({ username, password, session }, null, 2)}</pre>
    </form>
  );
}


// import { useEffect, useRef, useState } from "react";

// function createData() {
//   return {
//     username: "",
//     password: "",
//     session: false,
//   };
// }

// export function MyForm() {
//   const [data, setData] = useState(createData);

//   const mountedRef = useRef(false)
  
//   const _inputRef = useRef(null)

//   useEffect(() => {
//     if(!mountedRef.current) {
//         mountedRef.current = true
//         console.log('Mounting for the first time');
//     } else {
//         console.log('Mounting again for debug purposes');
//     }

//     _inputRef.current?.focus()
//   }, [])

//   function handleInputChange(event) {
//     const { name, value, checked, type } = event.target;
//     // Destructure the required attributes
//     setData((data) => {
//       return {
//         ...data,
//         // Keep the previous state
//         [name]: type === "checkbox" ? checked : value,
//         // Dynamically set the key specified in `name` to `value`
//       };
//     });
//   }

//   function handleLogin(event) {
//     event.preventDefault()
//     console.log(data);
//     handleResetForm()
//   }

//   function handleResetForm() {
//     setData({
//       username: "",
//       password: "",
//       session: false,
//     });
//   }

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>My Form</h2>
//       <input
//         ref={_inputRef}
//         name="username"
//         value={data.username}
//         onChange={handleInputChange}
//       />
//       <input
//         name="password"
//         value={data.password}
//         type="password"
//         onChange={handleInputChange}
//       />
//       <input
//         name="session"
//         type="checkbox"
//         checked={data.session}
//         onChange={handleInputChange}
//       />
//       <button disabled={!data.username || !data.password}>
//         Login
//       </button>
//       <button onClick={handleResetForm}>Reset Form</button>

//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </form>
//   );
// }

// export function MyForm() {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")

//   function handleUsernameInputChange(event) {
//     setUsername(event.target.value.toUpperCase())
//   }

//   function handlePasswordInputChange(event) {
//     setPassword(event.target.value)
//   }

//   function handleResetForm(){
//     setUsername('')
//     setPassword('')
//   }

// //   console.log(username);

//   return (
//     <div>
//         <h2>My Form</h2>
//         <input name="username" value={username} onChange={handleUsernameInputChange}/>
//         <input name="password" value={password} onChange={handlePasswordInputChange}/>
//         <button onClick={handleResetForm}>Reset Form</button>
//     </div>
//   );
// }
