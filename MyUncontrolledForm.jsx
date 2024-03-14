export function MyUncontrolledForm() {
  function handleFormSubmit(event) {
    event.preventDefault();
    
    // const username = event.target.elements.namedItem('username').value;
    // const password = event.target.elements.namedItem('password').value;
    // const session = event.target.elements.namedItem('session').checked;
    
    // const data = {
    //     username,
    //     password,
    //     session,
    // }

    const formData = new FormData(event.target)

    const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        session: formData.get('session') === 'on' ? true : false,
    }

    console.log(data);

  }
  return(
  <form onSubmit={handleFormSubmit}>
    <h2 className="bg-red-700 text-red-800" >My Uncontrolled Form</h2>
    <input name="username" />
    <input type="password" name="password" />
    <input type="checkbox" name="session" />
    <button>Login</button>
    <button type="reset">Reset</button>
  </form>
  )
}

// Il FormData API ha il vantaggio di essere più facile da utilizzare ma lo svantaggio di non permetterci di manipolare i dati
