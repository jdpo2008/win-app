import { FC } from "react";
import PropTypes from "prop-types";
import { m } from "framer-motion";
// @mui
import { Box } from "@mui/material";
//
import { varContainer } from "./variants";

// ----------------------------------------------------------------------

const MotionContainer: FC<any> = ({
  animate,
  action = false,
  children,
  ...other
}) => {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? "animate" : "exit"}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
};

MotionContainer.propTypes = {
  action: PropTypes.bool,
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MotionContainer;
