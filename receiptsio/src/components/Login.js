import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Username:
          <br />
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="text" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default Login;
