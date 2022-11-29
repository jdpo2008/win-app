import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const ProductServiceDetails = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setOpen((open) => !open);
  };

  return (
    <div className="features-details-container">
      <div className="features-details-container-trigger">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Detalles
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      </div>
      {open && (
        <div className="features-details-container-card">
          {props.features.map((f) => (
            <>
              <div className="features-details-container-card-item-naranja">
                <img
                  src={"/images/features/naranja/" + f.icon}
                  alt={f.descripcion}
                  width={25}
                  height={25}
                />
                <span style={{ fontSize: "8px" }}>{f.descripcion}</span>
              </div>
              <div className="features-details-container-card-item-white">
                <img
                  src={"/images/features/blanco/" + f.icon}
                  alt={f.descripcion}
                  width={25}
                  height={25}
                />
                <span style={{ fontSize: "8px" }}>{f.descripcion}</span>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

ProductServiceDetails.propTypes = {
  features: PropTypes.object.isRequired,
};

export default ProductServiceDetails;
