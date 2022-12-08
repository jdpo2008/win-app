import PropTypes from "prop-types";
import { FC, ReactElement } from "react";
// @mui
import { styled } from "@mui/material/styles";
// components
import Logo from "@components/Common/Logo";

// ----------------------------------------------------------------------

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

interface Props {
  children: PropTypes.ReactNodeLike;
}

// ----------------------------------------------------------------------

export default function LogoOnlyLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <HeaderStyle>
        <Logo sx={{ width: 100, height: 100 }} />
      </HeaderStyle>
      {children}
    </>
  );
}
