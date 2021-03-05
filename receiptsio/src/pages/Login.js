import React, { useState } from "react";
import { firebase } from "../firebase/config";
import { Redirect } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
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
            setUser(user);
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
        {/* <form>
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
        </form> */}
        <div class="container pad-10">
          <div class="h1" style={{marginLeft:"25%"}}>Login</div>
            <div align="center" class="login" style={{padding:"5%"}}>
            <div class="row mt-3">
              <div align="center" class="col">
                <div class="h4" style={{float:"left"}}>
                Email
                </div>
                <input class="form-control" placeholder="Email" type="text" value={email} onChange={handleEmailChange} />
              </div>
            </div>
            <div class="row mt-3">
              <div align="center" class="col">
                <div class="h4" style={{float:"left"}}>
                Password
                </div>
                <input
                class="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}/>              
            </div>
            </div>
            <div class="row mt-3">
              <div align="center" class="col">
                <div>
                <button class="btn btn-outline-dark btn-lg" onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
};
export default Login;
