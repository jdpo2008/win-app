import * as React from "react";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

import StyledTabs from "./styled/StyledTabs";
import StyledTab from "./styled/StyledTab";
import StyledTabPanel from "./styled/StyledTabPanel";

const RegionsParts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="regions-area-box"
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <StyledTabs
        className="regions-area-tabs"
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab className="regions-area-tabs-item" label="WIN PIURA" />
        <StyledTab className="regions-area-tabs-item" label="WIN TRUJILLO" />
        <StyledTab className="regions-area-tabs-item" label="WIN CHICLAYO" />
        <StyledTab className="regions-area-tabs-item" label="WIN CHIMBOTE" />
      </StyledTabs>
      <div className="regions-area-tabs-panel pb-50">
        <StyledTabPanel value={value} index={0}>
          <Slide
            direction="left"
            in={value == 0}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <img
              src="./images/seccion_provincia/banner_piura.jpg"
              alt="piura"
            />
          </Slide>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={1}>
          <Slide
            direction="left"
            in={value == 1}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <img
              src="./images/seccion_provincia/banner_trujillo.jpg"
              alt="trujillo"
            />
          </Slide>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={2}>
          <Slide
            direction="left"
            in={value == 2}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <img
              src="./images/seccion_provincia/banner_chiclayo.jpg"
              alt="chiclayo"
            />
          </Slide>
        </StyledTabPanel>
        <StyledTabPanel value={value} index={3}>
          <Slide
            direction="left"
            in={value == 3}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            <img
              src="./images/seccion_provincia/banner_chimbote.jpg"
              alt="chimbote"
            />
          </Slide>
        </StyledTabPanel>
      </div>
    </div>
  );
};

export default RegionsParts;
