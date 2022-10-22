import * as React from "react";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    height: "70px",
    textAlign: "center",
    borderRadius: "10px",
    color: "rgb(0, 0, 0)",
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "rgb(241, 105, 13)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

export default StyledTab;
