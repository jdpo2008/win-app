import * as React from "react";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import StyledTabs from "./styled/StyledTabs";
import StyledTab from "./styled/StyledTab";
import StyledTabPanel from "./styled/StyledTabPanel";

import { Products } from "../../data/products";

import { Services } from "../../data/services";
import { spacing } from "@mui/system";

const ProductServices = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(Products);

  console.log(Services);

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
        {Products &&
          Products.map((product, i) => {
            return (
              <StyledTabPanel value={value} index={i} key={i}>
                {Services &&
                  Services.filter((s) => s.productId === product.id).map(
                    (service, i) => {
                      return (
                        <div>
                          <div
                            className="product-area-services-container"
                            key={i}
                          >
                            {service.has_promotion && (
                              <div className="product-area-services-container-promotion">
                                <span>X2</span>
                              </div>
                            )}
                            <div className="product-area-services-card">
                              <h5 className="product-area-services-card-nombre">
                                {service.nombre}
                              </h5>
                              <div className="product-area-services-card-logo"></div>
                              {service.velocidad_anterior && (
                                <span className="product-area-services-card-velocidad-antigua">
                                  {service.velocidad_anterior}
                                </span>
                              )}
                              {!service.velocidad_anterior && (
                                <span className="product-area-services-card-velocidad-antigua">
                                  &nbsp;
                                </span>
                              )}
                              <h4 className="product-area-services-card-velocidad">
                                {service.velocidad_actual}{" "}
                                <span>{service.promotion}</span>
                              </h4>
                              <p className="product-area-services-card-precio">
                                Precio S/{" "}
                                {service.precio && (
                                  <span>{service.precio}</span>
                                )}{" "}
                                al mes
                              </p>
                              {service.features &&
                                service.features.map((f) => (
                                  <div
                                    key={f.id}
                                    className="product-area-services-card-features"
                                  >
                                    {f.descripcion}
                                  </div>
                                ))}
                              <button className="product-area-services-card-button">
                                ¡Pidelo por WhatsApp{" "}
                                <WhatsAppIcon className="product-area-services-card-button-icon" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
              </StyledTabPanel>
            );
          })}
      </div>
    </Container>
  );
};

export default ProductServices;
