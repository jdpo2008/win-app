import * as React from "react";
import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import StyledTabs from "./styled/StyledTabs";
import StyledTab from "./styled/StyledTab";
import StyledTabPanel from "./styled/StyledTabPanel";
import ProductEquipos from "./ProductEquipos";
import ProductServiceDetails from "./ProductServiceDetails";

const ProductServices = ({ products, services }) => {
  const [value, setValue] = React.useState(0);

  const [servicios, setServicios] = React.useState(services);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFeaturesDetails = (id) => {
    servicios.map((x) => {
      x.details = false;
    });

    servicios.find((s) => s.id === id).details = !servicios.find(
      (s) => s.id === id
    ).details;

    setServicios(servicios);
  };

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
        {products.map((product) => {
          return (
            <StyledTab
              className="product-area-tabs-item"
              label={product.nombre}
              key={product.id}
            />
          );
        })}

        {/* <StyledTab className="product-area-tabs-item" label="" /> */}
      </StyledTabs>
      <div className="product-area-tabs-panel">
        {products &&
          products.map((product, i) => {
            return (
              <StyledTabPanel value={value} index={i} key={product.id}>
                {servicios &&
                  servicios
                    .filter((s) => s.productId === product.id)
                    .map((service, i) => {
                      return (
                        <div
                          className="product-area-services-container"
                          key={service.id}
                        >
                          {service.has_promotion && (
                            <div className="product-area-services-container-promotion">
                              <span>X2</span>
                            </div>
                          )}
                          {!service.has_promotion && (
                            <div className="product-area-services-container-promotion-x">
                              <span>&nbsp;</span>
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
                              {service.precio && <span>{service.precio}</span>}{" "}
                              al mes
                            </p>

                            <ProductEquipos equipos={service.equipo} />
                          </div>
                          <button className="product-area-services-card-button">
                            ¡Pidelo por WhatsApp{" "}
                            <WhatsAppIcon className="product-area-services-card-button-icon" />
                          </button>

                          <ProductServiceDetails features={service.features} />
                        </div>
                      );
                    })}
              </StyledTabPanel>
            );
          })}
      </div>
    </Container>
  );
};

export default ProductServices;
