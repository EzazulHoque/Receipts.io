import React, { useState } from "react";
import firebase from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const registerUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {});
  };

  return (
    <div>
      <form>
        <label>
          Email:
          <br />
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm password:
          <br />
          <input
            type="text"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
          />
        </label>
        <br />
        <button onClick={registerUser}>Register</button>
      </form>
    </div>
  );
};

export default Register;
