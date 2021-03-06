import React, { useState } from "react";
import Switch from "react-switch";

const SwitchComponent = ({ userType, setUserType }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span>Customer</span>
      <Switch
        onChange={() => {
          setChecked(!checked);
          userType === "Customer"
            ? setUserType("Business Personnel")
            : setUserType("Customer");
        }}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <span>Business Personnel</span>
    </div>
  );
};

export default SwitchComponent;
