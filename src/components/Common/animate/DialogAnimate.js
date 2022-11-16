import React from "react";
import PropTypes from "prop-types";
import { m, AnimatePresence } from "framer-motion";
// @mui
import { Modal, ModalHeader, Button, ModalBody } from "reactstrap";

//
import { varFade } from "./variants";

// ----------------------------------------------------------------------

DialogAnimate.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  sx: PropTypes.object,
  variants: PropTypes.object,
};

export default function DialogAnimate({
  open = false,
  title,
  onClose,
  children,
  sx,
  ...other
}) {
  return (
    <AnimatePresence>
      {open && (
        <Modal
          isOpen={open}
          toggle={onClose}
          {...other}
          modalClassName="flip"
          centered
        >
          <ModalHeader>
            <span>{title}</span>
            <Button
              type="button"
              onClick={onClose}
              className="btn-close"
              aria-label="Close"
              style={{
                marginTop: "0px",
              }}
            ></Button>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </Modal>
      )}
    </AnimatePresence>
  );
}
