import * as React from "react";
import Container from "@mui/material/Container";

import StyledTabs from "./styled/StyledTabs";
import StyledTab from "./styled/StyledTab";
import StyledTabPanel from "./styled/StyledTabPanel";

import { Products } from "../../data/products";

const ProductServices = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(Products);

  return (
    <Container
      className="product-area-box"
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <StyledTabs
        className="product-area-tabs"
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        {Products.map((product) => {
          return (
            <StyledTab
              className="product-area-tabs-item"
              label={product.nombre}
              key={product.id}
            />
          );
        })}

        <StyledTab className="product-area-tabs-item" label="" />
      </StyledTabs>
      <div className="product-area-tabs-panel">
        {Products.map((product, i = index) => {
          return (
            <StyledTabPanel value={value} index={i} key={i}>
              Item {i}
            </StyledTabPanel>
          );
        })}
      </div>
    </Container>
  );
};

export default ProductServices;
