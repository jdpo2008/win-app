import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

const Information = () => {
  return (
    <>
      <div className="information-area bg-gradient-color pb-50">
        <div className="information-cards">
          <div className="information-cards-item-01">
            <h1>Realiza lo que necesitas sin salir de casa</h1>
            <div className="information-cards-item-01-phone">
              <div className="contactanos">
                <span
                  style={{
                    color: "rgb(78, 77, 75)",
                    fontWeight: "bolder",
                    marginTop: "10px",
                  }}
                >
                  Llámanos
                </span>
                <div className="information-cards-item-01-phone-circle">
                  <PhoneInTalkIcon className="information-cards-item-01-phone-circle-icon" />
                  <span>(01) 999 562 753</span>
                </div>
                <div className="information-cards-item-01-phone-circle-redes">
                  <div
                    style={{
                      flex: "1 1 40%",
                      color: "green",
                      display: "flex",
                      marginRight: "5px",
                    }}
                  >
                    <WhatsAppIcon
                      style={{ fontSize: "2.5rem", marginTop: "2px" }}
                    />
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bolder",
                        lineHeight: "20px",
                      }}
                    >
                      Escribenos Whatsapp
                    </span>
                  </div>
                  <div
                    style={{
                      flex: "1 1 40%",
                      color: "blue",
                      display: "flex",
                      marginLeft: "5px",
                    }}
                  >
                    <MapsUgcIcon
                      style={{ fontSize: "2.5rem", marginTop: "2px" }}
                    />
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bolder",
                        lineHeight: "20px",
                      }}
                    >
                      Escribenos Messenger
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h4>¡Cambiate a WIN!</h4>
          </div>
          <div className="information-cards-item-02">
            <div className="information-cards-item-02-bg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
