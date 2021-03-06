import React, { useContext } from "react";
import { UserContext } from "../Contexts";
import Landing from "../components/Landing";
import CustomerDashboard from "../components/customerDashboard";
import BusinessDashboard from "../components/BusinessDashboard";

const Home = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <Landing />;
  } else if (user.userType === "Customer") {
    return <CustomerDashboard />;
  } else if (user.userType === "Business Personnel") {
    return <BusinessDashboard />;
  }
};

export default Home;
