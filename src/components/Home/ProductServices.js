import * as React from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";

import Container from "@mui/material/Container";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import StyledTabs from "./styled/StyledTabs";
import StyledTab from "./styled/StyledTab";
import StyledTabPanel from "./styled/StyledTabPanel";
import ProductEquipos from "./ProductEquipos";
import ProductServiceDetails from "./ProductServiceDetails";

const ProductServices = ({ products, services }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        {products &&
          products?.map((product) => {
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
        {products?.map((product, i) => {
          return (
            <StyledTabPanel value={value} index={i} key={product.id}>
              <Slider {...settings}>
                {product.servicios.map((service, i) => {
                  return (
                    <div
                      key={service.id}
                      className="product-area-services-container"
                    >
                      {service.tiene_promocion && (
                        <div className="product-area-services-container-promotion">
                          <span>X2</span>
                        </div>
                      )}
                      {!service.tiene_promocion && (
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
                          <span>{service.promocion}</span>
                        </h4>
                        <p className="product-area-services-card-precio">
                          Precio S/{" "}
                          {service.precio && <span>{service.precio}</span>} al
                          mes
                        </p>

                        <ProductEquipos equipos={service.equipos} />
                      </div>
                      <button className="product-area-services-card-button">
                        ¡Pidelo por WhatsApp{" "}
                        <WhatsAppIcon className="product-area-services-card-button-icon" />
                      </button>

                      <ProductServiceDetails
                        features={service.caracteristicas}
                      />
                    </div>
                  );
                })}
              </Slider>
            </StyledTabPanel>
          );
        })}
      </div>
    </Container>
  );
};

ProductServices.propTypes = {
  products: PropTypes.array,
  services: PropTypes.array,
};

export default ProductServices;
