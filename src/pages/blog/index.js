import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
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
    backgroundColor: "#000",
    borderColor: "#000",
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
    categoria: "",
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
    <Page title="Blog">
      <PageBanner
        pageTitle="Tu Blog favorito de INTERNET"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControl sx={{ m: 2.5, width: "40ch" }} size="small">
          <InputLabel id="demo-select-small">Categoria</InputLabel>
          <CssSelect
            labelId="demo-select-small"
            id="demo-select-small"
            value={values.categoria}
            label="Categoria"
            onChange={handleChange("categoria")}
            color="warning"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </CssSelect>
        </FormControl>

        <div>
          <FormControl
            sx={{ marginTop: 2.5, marginBottom: 2.5, width: "33ch" }}
            size="small"
          >
            <InputLabel htmlFor="filled-adornment-Search">Search</InputLabel>
            <OutlinedInput
              id="filled-adornment-Search"
              type="text"
              value={values.search}
              onChange={handleChange("search")}
            />
          </FormControl>
          <ButtonStyled
            aria-label="toggle Search visibility"
            onClick={handleClickSearch}
            sx={{ marginTop: 2.5, marginRight: 2.5 }}
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
                    <a className="tag">Tutorial</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        Branding involves developing strategy to create a point
                        of differentiation
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                    <a className="tag">Educacion</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        Design is a plan or specification for the construction
                        of an object for bussiness logic
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                    <a className="tag">Educacion</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        The new minimum is a digital magazine with a header
                        featuring a thin
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                    <a className="tag">Educacion</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        WordPress is open source software you can use to create
                        a beautiful
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                    <a className="tag">Entretenimiento</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        Bootstrap 5 is open source software you can use to
                        create a beautiful
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                      April 14, 2021
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
                        Beautiful designs, powerful features, and the freedom to
                        build
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                      <img src="/images/blog/blog7.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Educacion</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        Branding involves developing strategy to create a point
                        of differentiation
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                      <img src="/images/blog/blog8.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Educacion</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        Most designs, powerful features, and the freedom to
                        build anything you
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
                      <img src="/images/blog/blog9.jpg" alt="blog" />
                    </a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="tag">Tutorial</a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2021
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
                        Branding involves developing strategy to create a point
                        in the sockets
                      </a>
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                    debitis nulla laboriosam tenetur quasi quam nostrum impedit
                    ut vitae vero rem mollitia numquam, adipisci deserunt quae
                    dignissimos maxime. Fugiat, nisi?
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
