import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../firebase/config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerUser = (event) => {
    event.preventDefault();
    if (!password || password !== confirm) {
      alert("Passwords do not match!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            email,
          };
          const usersRef = firebase.firestore().collection("users");
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              setRedirect(true);
            })
            .catch((error) => {
              alert(error);
            });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  if (redirect) {
    return <Redirect to="/login" />;
  } else {
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
  }
};

export default Register;
