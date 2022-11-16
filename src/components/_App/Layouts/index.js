import PropTypes from "prop-types";

// components
import MainLayout from "./main";
import AuthLayotu from "./auth";

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["dashboard", "main", "logoOnly"]),
};

export default function Layout({ variant = "dashboard", children }) {
  //   if (variant === 'logoOnly') {
  //     return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  //   }
  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }
  return <AuthLayotu>{children}</AuthLayotu>;
}
