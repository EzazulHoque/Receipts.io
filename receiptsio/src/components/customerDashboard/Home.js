import React, { useContext } from "react";
import { UserContext } from "../../Contexts";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <div class="userDashTop mt-5" style={{ marginLeft: "10%" }}>
        <div align="center" class="h1 mt-5">
          Hello <strong style={{ color: "green" }}>{user.fullName}</strong>
        </div>
      </div>
      <div align="center" class="h1 mt-3">
        Receipts Dasboard
      </div>
      <div class="insideDash mt-4" style={{ marginLeft: "10%" }}>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
