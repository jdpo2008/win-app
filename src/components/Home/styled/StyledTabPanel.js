import * as React from "react";

const StyledTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "cal(100vw)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default StyledTabPanel;
