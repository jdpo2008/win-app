import React, { memo } from "react";

const CharacteristicsPlan = () => {
  return (
    <>
      <div className="characteristics-area bg-gradient-color pb-75">
        <div className="characteristics-cards">
          <div className="characteristics-bg">
            <div className="pt-100 characteristics-cards-container">
              <div className="characteristics-cards-item">
                <div className="card">
                  <div className="characteristics-cards-item-img">
                    <img
                      src="./images/seccion_2/icon_tecnologia.png"
                      alt="tecnologia"
                    />
                  </div>
                  <h5 className="characteristics-cards-item-label">
                    Mejor Tecnología
                  </h5>
                  <div className="characteristics-cards-item-description">
                    <span>100%</span>
                    <span>Fibra Optica</span>
                  </div>
                </div>
              </div>
              <div className="characteristics-cards-item">
                <div className="card">
                  <div className="characteristics-cards-item-img velocidad">
                    <img
                      src="./images/seccion_2/icon_velocidad.png"
                      alt="tecnologia"
                    />
                  </div>
                  <h5 className="characteristics-cards-item-label">
                    Mayor Velocidad
                  </h5>
                  <div className="characteristics-cards-item-description">
                    <p>
                      Descarga y subida de archivos de gran tamaño en segundos
                    </p>
                  </div>
                </div>
              </div>
              <div className="characteristics-cards-item">
                <div className="card">
                  <div className="characteristics-cards-item-img precio">
                    <img
                      src="./images/seccion_2/icon_precio.png"
                      alt="tecnologia"
                    />
                  </div>
                  <h5 className="characteristics-cards-item-label">
                    Mejor Precio
                  </h5>
                  <div className="characteristics-cards-item-description">
                    <p>El más justo al nivel de la región</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacteristicsPlan;
