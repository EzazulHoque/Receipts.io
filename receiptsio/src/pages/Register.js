import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { firebase } from "../firebase/config";
import SwitchComponent from "../components/SwitchComponent";

const Register = () => {
  const [userType, setUserType] = useState("Customer");
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerUser = (event) => {
    event.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid;
          const data = {
            id: uid,
            fullName,
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
        <div class="container pad-10">
          <div class="h1" style={{ marginLeft: "25%" }}>
            Register
          </div>
          <div align="center" class="register" style={{ padding: "5%" }}>
            <SwitchComponent userType={userType} setUserType={setUserType} />
            {userType === "Business Personnel" && (
              <div class="row mt-3">
                <div align="center" class="col">
                  <div class="h4" style={{ float: "left" }}>
                    Business Name
                  </div>
                  <input
                    class="form-control"
                    placeholder="Full Name"
                    type="text"
                    value={businessName}
                    onChange={(event) => setFullName(event.target.value)}
                  />
                </div>
              </div>
            )}
            <div class="row mt-3">
              <div align="center" class="col">
                <div class="h4" style={{ float: "left" }}>
                  Full Name
                </div>
                <input
                  class="form-control"
                  placeholder="Full Name"
                  type="text"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div align="center" class="col">
                <div class="h4" style={{ float: "left" }}>
                  Email
                </div>
                <input
                  class="form-control"
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div align="center" class="col">
                <div class="h4" style={{ float: "left" }}>
                  Password
                </div>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div align="center" class="col">
                <div class="h4" style={{ float: "left" }}>
                  Confirm Password
                </div>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(event) => setConfirm(event.target.value)}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div align="center" class="col">
                <div>
                  <button
                    class="btn btn-outline-dark btn-lg"
                    onClick={registerUser}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;
