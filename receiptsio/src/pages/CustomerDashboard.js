import React, { useContext } from "react";
import { UserContext } from "../Contexts";

const CustomerDashboard = () => {
  const user = useContext(UserContext);
  return <div>Hello {user.fullName}</div>;
};

export default CustomerDashboard;
