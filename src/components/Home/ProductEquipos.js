import React from "react";
import PropTypes from "prop-types";

const ProductEquipos = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "10px",
      }}
    >
      {props.equipos?.length > 0 ? (
        props.equipos?.map((e, i) => (
          <div
            key={e.id}
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {e.id === 1 && (
                <img
                  src={"/images/features/" + e.imagenUrl}
                  alt={e.descripcion}
                  width={65}
                />
              )}
              {e.id === 2 && (
                <img
                  src={"/images/features/" + e.imagenUrl}
                  alt={e.descripcion}
                  width={49}
                />
              )}
              {e.id === 3 && (
                <img
                  src={"/images/features/" + e.imagenUrl}
                  alt={e.descripcion}
                  width={42}
                />
              )}
              <p>
                {e.cantidad} {e.descripcion}
              </p>
            </div>
            {i === 0 && props.equipos?.length > 1 && (
              <h2
                style={{
                  margin: "0px 6px",
                }}
              >
                +
              </h2>
            )}
          </div>
        ))
      ) : (
        <div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      )}
    </div>
  );
};

ProductEquipos.propTypes = {
  equipos: PropTypes.array.isRequired,
};

export default ProductEquipos;
