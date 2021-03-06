import React, { useState } from "react";
import Switch from "react-switch";

const SwitchComponent = ({ option1, option2 }) => {
  const [checked, setChecked] = useState(true);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {option1}
      <Switch
        onChange={() => setChecked(!checked)}
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
      {option2}
    </div>
  );
};

export default SwitchComponent;
