import React, { useContext } from "react";
import { UserContext } from "../Contexts";

const UserDashboard = () => {
  const user = useContext(UserContext);
  return <div>Hello {user.fullName}</div>;
};

export default UserDashboard;
