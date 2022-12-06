import { forwardRef, FC } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

interface Props {
  disabledLink?: boolean;
  sx?: any;
}

const Logo: FC<Props> = forwardRef(({ disabledLink = false, sx }, ref) => {
  const theme = useTheme();

  const logo = (
    <Box ref={ref} sx={{ cursor: "pointer", ...sx }}>
      <img className="logo" src="/images/logo_letras_plomo.png" alt="logo" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
