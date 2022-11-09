import React, { useState} from "react";

function LogIn({ setVolunteerLogIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((r) => r.json())
        .then((user) => {
          if(user.error){
            setError(true)
            setErrorMessage(user.error);
          }else {
            setVolunteerLogIn(user)
          }
        });
    }
  
    return (
      <div>
      { error && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }

export default LogIn