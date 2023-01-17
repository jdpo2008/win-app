import { useState } from "react";
import { m } from "framer-motion";
import { Typography, Container, Box, Divider, Grid, Card } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import Layout from "@components/_App/Layouts";
import Page from "@components/_App/Page";

import MotionContainer from "@components/Common/animate/MotionContainer";
import AppMainCarrousel from "@components/Home/AppMainCarrousel";
import Image from "@components/Common/Image";

const GAMER_BANNER_IMAGES = [
  {
    id: 1,
    image: "/images/banner/banner_gamer_1.jpg",
    title: "banner_gamer_1.jpg",
  },
  {
    id: 2,
    image: "/images/banner/banner_gamer_2.jpg",
    title: "banner_gamer_2.jpg",
  },
  {
    id: 3,
    image: "/images/banner/banner_gamer_3.jpg",
    title: "banner_gamer_3.jpg",
  },
];

const GAMER_NAMES_IMGAES = [
  {
    id: 1,
    image: "/images/gamers/names/Recurso_14.png",
    poster: "/images/gamers/Call-of-Duty-PNG-HD.png",
    title: "Recurso_14.png",
  },
  {
    id: 2,
    image: "/images/gamers/names/Recurso_15.png",
    poster: "/images/gamers/free_fire.png",
    title: "Recurso_15.png",
  },

  {
    id: 3,
    image: "/images/gamers/names/Recurso_17.png",
    poster: "/images/gamers/fortnite.png",
    title: "Recurso_17.png",
  },
  {
    id: 4,
    image: "/images/gamers/names/Recurso_18.png",
    poster: "/images/gamers/valorant.png",
    title: "Recurso_18.png",
  },
  {
    id: 5,
    image: "/images/gamers/names/Recurso_16.png",
    poster: "/images/gamers/leaguelegends.png",
    title: "Recurso_16.png",
  },
  {
    id: 6,
    image: "/images/gamers/names/Recurso_19.png",
    poster: "/images/gamers/dota_2.png",
    title: "Recurso_19.png",
  },
];

const GamersPage = () => {
  const [image, setImage] = useState("/images/gamers/free_fire.png");
  return (
    <Page title="Planes Gamers">
      <>
        <MotionContainer>
          <AppMainCarrousel dots={false} images={GAMER_BANNER_IMAGES} />

          <Box
            sx={{
              backgroundColor: "rgb(110,34,7)",
              background:
                "linear-gradient(90deg, rgba(29,8,1,1) 0%, rgba(18,5,1,1) 20%, rgba(0,0,0,1) 50%, rgba(18,5,1,1) 80%, rgba(29,8,1,1) 100%)",
              minHeight: "550px",
            }}
          >
            <m.div>
              <Container>
                <Grid
                  container
                  gap={2}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  padding={5}
                >
                  <Grid xs={12} sm={12}>
                    <Divider
                      sx={{
                        alignItems: "center",
                        "::before": {
                          backgroundColor: "orangered",
                          height: "3px",
                        },
                        ":after": {
                          backgroundColor: "orangered",
                          height: "3px",
                        },
                      }}
                      textAlign="center"
                    >
                      <Typography
                        variant="h3"
                        color={"white"}
                        style={{ textShadow: "orangered 0.05em 0.05em 0.05em" }}
                      >
                        UNA BUENA PARTIDA
                      </Typography>
                      <Typography
                        variant="h3"
                        color={"white"}
                        style={{ textShadow: "orangered 0.05em 0.05em 0.05em" }}
                      >
                        MERECE UN BUEN PLAN
                      </Typography>
                    </Divider>
                  </Grid>
                </Grid>
              </Container>
            </m.div>
          </Box>

          <Box
            sx={{
              backgroundImage: "url(/images/fondo_games.png)",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "750px",
            }}
          >
            <Grid
              container
              padding={"20px"}
              display={"flex"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid sm={12} style={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  style={{
                    color: "white",
                    lineHeight: 1,
                    textShadow: "orangered 0.05em 0.05em 0.05em",
                  }}
                >
                  Optimizado para tus
                </Typography>
                <Typography
                  variant="h2"
                  style={{
                    color: "orangered",
                    lineHeight: 1.2,
                    textShadow: "orangered 0.05em 0.05em 0.05em",
                  }}
                >
                  Juegos favoritos
                </Typography>
              </Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                  width: "100%",
                  padding: "50px",
                }}
              >
                <div style={{ width: "30%", marginTop: "35px", height: "50%" }}>
                  <Card
                    sx={{
                      background: "white",
                      position: "relative",
                      minHeight: "450px",
                      minWidth: "200px",
                      opacity: "0.55",
                      boxShadow: "orangered 0em 0em 0.5em 0.4em",
                      padding: "10px",
                      zIndex: 0,
                    }}
                  ></Card>

                  {image.includes("valorant") ? (
                    <img
                      src={image}
                      alt="juegos_ofrecidos"
                      style={{
                        position: "relative",
                        top: -480,
                        left: 30,
                        zIndex: 990,
                      }}
                      width={270}
                    />
                  ) : (
                    <img
                      src={image}
                      alt="juegos_ofrecidos"
                      style={{
                        position: "relative",
                        top: -480,
                        left: -20,
                        zIndex: 990,
                      }}
                      width={340}
                    />
                  )}

                  <div
                    style={{
                      width: "80%",
                      height: "45%",
                      backgroundColor: "black",
                      borderRadius: "10px",
                      position: "relative",
                      top: -420,
                      left: 35,
                      zIndex: 990,
                      padding: "10px",
                      textAlign: "justify",
                    }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat eaque animi iusto pariatur voluptatum debitis
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    width: "70%",
                    marginTop: "35px",
                    padding: "30px",
                    marginLeft: "50px",
                  }}
                >
                  <Grid container gap={3}>
                    {GAMER_NAMES_IMGAES.map((x) => (
                      <Grid key={x.id} xs={12} sm={4}>
                        <img
                          src={x.image}
                          alt={x.title}
                          width={150}
                          style={{ cursor: "pointer" }}
                          onClick={() => setImage(x.poster)}
                        />
                        {/* <Image
                          src={x.image}
                          alt={x.title}
                          sx={{ width: "auto" }}
                          ratio={"4/3"}
                        /> */}
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </Grid>
          </Box>

          <Box
            sx={{
              backgroundColor: "rgb(110,34,7)",
              background:
                "linear-gradient(90deg, rgba(29,8,1,1) 0%, rgba(18,5,1,1) 20%, rgba(0,0,0,1) 50%, rgba(18,5,1,1) 80%, rgba(29,8,1,1) 100%)",
              minHeight: "550px",
            }}
          >
            <Grid
              container
              gap={2}
              display={"flex"}
              justifyContent={"flex-end"}
              padding={5}
            >
              <Grid xs={12} sm={12}>
                <Divider
                  sx={{
                    alignItems: "center",
                    "::before": {
                      backgroundColor: "orangered",
                      height: "3px",
                    },
                    ":after": {
                      backgroundColor: "orangered",
                      height: "3px",
                    },
                  }}
                  textAlign="center"
                >
                  <Typography
                    variant="h3"
                    color={"white"}
                    style={{ textShadow: "orangered 0.05em 0.05em 0.05em" }}
                  >
                    CONOCE LOS BENEFICIOS
                  </Typography>
                  <Typography
                    variant="h3"
                    color={"white"}
                    style={{ textShadow: "orangered 0.05em 0.05em 0.05em" }}
                  >
                    DE TU PLAN GAMER
                  </Typography>
                </Divider>
              </Grid>
            </Grid>
          </Box>
        </MotionContainer>
      </>
    </Page>
  );
};

GamersPage.authorization = false;
GamersPage.getLayout = function getLayout(page) {
  return (
    <Layout variant="main" isLoadding={false}>
      {page}
    </Layout>
  );
};

export default GamersPage;
