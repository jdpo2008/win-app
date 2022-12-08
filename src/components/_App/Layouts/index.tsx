import PropTypes from "prop-types";

// components
import MainLayout from "./main";
import AuthLayout from "./auth";
import LogoOnlyLayout from "./LogoOnlyLayout";

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["dashboard", "main", "logoOnly"]),
};

export default function Layout({
  variant = "dashboard",
  isLoadding = false,
  children,
}: React.PropsWithChildren<{ variant: string; isLoadding: boolean }>) {
  if (variant === "logoOnly") {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }
  if (variant === "main") {
    return <MainLayout>{children}</MainLayout>;
  }
  return <AuthLayout>{children}</AuthLayout>;
}
