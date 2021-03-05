import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            alert("Success");
            setRedirect(true);
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  if (redirect) {
    return <Redirect to="/user-home" />;
  } else {
    return (
      <div>
        <form>
          <label>
            Email:
            <br />
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    );
  }
};
export default Login;
