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
              {[
                "52d9f38e-f04d-4d4b-ae06-3267a7db02fa",
                "a87f83dc-fe49-4360-8ecd-6c57749b7ca4",
              ].includes(e.id) && (
                <img
                  src={"/images/features/" + e.imagenUrl}
                  alt={e.nombre}
                  width={65}
                />
              )}
              {e.id === "f938eeee-3ba7-4527-94a7-7f244d895ef0" && (
                <img
                  src={"/images/features/" + e.imagenUrl}
                  alt={e.nombre}
                  width={49}
                />
              )}
              {e.id === "ce2d3931-8c71-43ae-86f8-1cc671addcc1" && (
                <img
                  src={"/images/features/" + e.imagenUrl}
                  alt={e.nombre}
                  width={42}
                />
              )}
              <p>
                {e.cantidad} {e.nombre}
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
