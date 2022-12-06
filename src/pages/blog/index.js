import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { styled } from "@mui/material/styles";

import Page from "@components/_App/Page";
import Layout from "@components/_App/Layouts";

import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Search from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";

import PageBanner from "@components/Common/PageBanner";

const CssSelect = styled(Select)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const ButtonStyled = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "6.5px 0px",
  border: "1px solid",
  lineHeight: 1,
  backgroundColor: "#dd5b10",
  borderColor: "#dd5b10",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#dd5b10",
    color: "#dd5b10",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#dd5b10",
    borderColor: "#dd5b10",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

Blog.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function Blog() {
  const [values, setValues] = React.useState({
    categoria: 0,
    search: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickSearch = () => {
    setValues({
      ...values,
    });
  };

  const router = useRouter();

  return (
    <Page
      title="Blog"
      description="Blog page cambiateawin.pe tu mejor blog de internet"
      url="blog"
    >
      <PageBanner
        pageTitle="Tu Blog favorito de INTERNET"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <Container className="search-container">
        <FormControl className="search-container-select" size="small">
          <InputLabel id="demo-select-small">Categoria</InputLabel>
          <CssSelect
            labelId="demo-select-small"
            id="demo-select-small"
            value={values.categoria}
            label="Categoria"
            onChange={handleChange("categoria")}
            color="warning"
          >
            <MenuItem value={0}>
              <em>Todas</em>
            </MenuItem>
            <MenuItem value={10}>Entretenimiento</MenuItem>
            <MenuItem value={20}>Productividad</MenuItem>
            <MenuItem value={30}>Educacion</MenuItem>
            <MenuItem value={40}>Seguridad en internet</MenuItem>
            <MenuItem value={50}>Actualidad</MenuItem>
            <MenuItem value={60}>Tecnologia</MenuItem>
          </CssSelect>
        </FormControl>

        <div className="search-container-input">
          <FormControl size="small" className="search-container-input-control">
            <InputLabel htmlFor="filled-adornment-Search">Search</InputLabel>
            <OutlinedInput
              id="filled-adornment-Search"
              type="text"
              value={values.search}
              onChange={handleChange("search")}
            />
          </FormControl>
          <ButtonStyled
            className="search-container-button"
            aria-label="toggle Search visibility"
            onClick={handleClickSearch}
          >
            <Search />
          </ButtonStyled>
        </div>
      </Container>

      <div className="blog-area pb-50 pt-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 post-card">
              <div className="single-blog-post">
                <div className="image">
                  <Link
                    href={{
                      pathname: "/blog/[blogId]",
                      query: { blogId: "my-post" },
                    }}
                  >
                    <a className="d-block">
                      <img src="/images/blog/blog1.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Seguridad</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      Noviembre 22, 2022
                    </li>
                    {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(0) Comment</a>
                        </Link>
                      </li> */}
                  </ul>
                  <h5>
                    <Link
                      href={{
                        pathname: "/blog/[blogId]",
                        query: { blogId: "my-post" },
                      }}
                    >
                      <a>
                        ¿Qué es el spyware y cómo podría poner en peligro tu
                        hogar?
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Es seguro que ya has escuchado hablar de malware, troyanos,
                    gusanos, ransomware, adware y virus propiamente dichos, pero
                    tal vez no conozcas los spyware y todo el peligro que
                    ocasionan cuando contaminan tu PC o celular.
                  </p>

                  <button
                    className="post-btn"
                    onClick={() => {
                      router.push({
                        pathname: "/blog/[blogId]",
                        query: { blogId: "" },
                      });
                    }}
                  >
                    Leer Más <Add className="post-btn-icon" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog2.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Actualidad</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      Noviembre 22, 2022
                    </li>
                    {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(0) Comment</a>
                        </Link>
                      </li> */}
                  </ul>
                  <h5>
                    <Link href="/blog">
                      <a>¿Qué es la brecha digital y cómo podemos cerrarla?</a>
                    </Link>
                  </h5>
                  <p>
                    Aunque te parezca irreal, en la actualidad hay ciudades y
                    zonas en diferentes países que aún no tienen acceso a
                    servicios como internet, lo que sigue destacando los grandes
                    problemas que existen en cuanto a la brecha digital en el
                    mundo.
                  </p>

                  <button className="post-btn">
                    Leer Más <Add className="post-btn-icon" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog3.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Entretenimiento</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      Noviembre 22, 2022
                    </li>
                    {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(0) Comment</a>
                        </Link>
                      </li> */}
                  </ul>
                  <h5>
                    <Link href="/blog">
                      <a>
                        ¿Cansado de Netflix? Mira estas 6 Alternativas
                        totalmente GRATIS
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Cada día se hace más común hacer uso de los servicios de
                    streaming para ver series y películas, tales como Netflix,
                    Prime Video, Disney+ o HBO. Sin embargo, llega un momento
                    que viste toda la programación de tu interés....
                  </p>

                  <button
                    className="post-btn"
                    onClick={() => {
                      router.push({
                        pathname: "/blog/[blogId]",
                        query: { blogId: "" },
                      });
                    }}
                  >
                    Leer Más <Add className="post-btn-icon" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog4.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Entretenimiento</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      Noviembre 22, 2022
                    </li>
                    {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(0) Comment</a>
                        </Link>
                      </li> */}
                  </ul>
                  <h5>
                    <Link href="/blog">
                      <a>Realidad aumentada: ¿Qué es y para qué sirve?</a>
                    </Link>
                  </h5>
                  <p>
                    En su época, fue un juego muy divertido para mantener una
                    audiencia conectada a internet, motivando a los jugadores
                    para que realicen caminatas y visitas a diferentes lugares
                    con el uso de otros recursos como Google Maps.
                  </p>

                  <button
                    className="post-btn"
                    onClick={() => {
                      router.push({
                        pathname: "/blog/[blogId]",
                        query: { blogId: "" },
                      });
                    }}
                  >
                    Leer Más <Add className="post-btn-icon" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog5.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Educación</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      Noviembre 22, 2022
                    </li>
                    {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(0) Comment</a>
                        </Link>
                      </li> */}
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Plataformas de cursos online que deberías conocer</a>
                    </Link>
                  </h5>
                  <p>
                    ¿Quieres aprender formalmente algo por internet y no sabes
                    dónde hacerlo? Este es un dilema que muchas personas tienen
                    en la actualidad a la hora de escoger una plataforma de
                    cursos online sólida y de confianza.
                  </p>

                  <button
                    className="post-btn"
                    onClick={() => {
                      router.push({
                        pathname: "/blog-details/[blogId]",
                        query: { blogId: "" },
                      });
                    }}
                  >
                    Leer Más <Add className="post-btn-icon" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog6.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Entretenimiento</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      Noviembre 22, 2022
                    </li>
                    {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(0) Comment</a>
                        </Link>
                      </li> */}
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>
                        Qué es WhatsApp Business, cómo funciona y cómo usarlo en
                        negocios
                      </a>
                    </Link>
                  </h5>
                  <p>
                    El mundo empresarial está cambiando y tu compañía no puede
                    quedarse fuera. Hoy en día es imposible concebir una
                    estrategia de ventas que no contemple el uso de medios de
                    comunicación y de plataformas de redes sociales...
                  </p>

                  <button
                    className="post-btn"
                    onClick={() => {
                      router.push({
                        pathname: "/blog-details/[blogId]",
                        query: { blogId: "" },
                      });
                    }}
                  >
                    Leer Más <Add className="post-btn-icon" />{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <div className="nav-links">
                  <a href="/blog-grid" className="page-numbers current">
                    1
                  </a>
                  <a href="/blog-grid" className="page-numbers">
                    2
                  </a>
                  <a href="/blog-grid" className="page-numbers">
                    3
                  </a>
                  <a
                    href="/blog-grid"
                    className="next page-numbers"
                    title="Next Page"
                  >
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
