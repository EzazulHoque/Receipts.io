import React, { useContext } from "react";
import { UserContext } from "../Contexts";

const BusinessDashboard = () => {
  const user = useContext(UserContext);
  return (
    <div>
      Hello {user.fullName} from {user.businessName}
    </div>
  );
};

export default BusinessDashboard;
