import React from "react";
import Link from "next/link";
import { styled } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Search from "@mui/icons-material/Search";

const ButtonStyled = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "0px 0px",
  border: "1px solid",
  lineHeight: 1,
  backgroundColor: "#dd5b10",
  borderColor: "#dd5b10",
  color: "#fff",
  height: "39px",
  width: "10%",
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

const BlogSidebar = () => {
  const [values, setValues] = React.useState({
    categoria: "",
    search: "",
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickSearch = () => {
    setValues({
      ...values,
    });
  };

  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
          <FormControl
            sx={{ marginTop: 2, marginBottom: 2, width: "35ch" }}
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
            sx={{ marginTop: 2, marginRight: 0 }}
          >
            <Search />
          </ButtonStyled>
        </div>

        <div className="widget widget_pakap_posts_thumb">
          <h3 className="widget-title">Popular Blogs</h3>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg1" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>Being The Best-Selling Smart Phone This Year</a>
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 15, 2020
              </span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg2" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>Love Songs Helped Me Through Heartbreak</a>
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 14, 2020
              </span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg3" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>Two Fashion Designers Busy With 2020 Winter Fashion</a>
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 13, 2020
              </span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg4" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>Working in the Office is a Tradition For Women</a>
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 12, 2020
              </span>
            </div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categorias</h3>

          <ul>
            <li>
              <Link href="/blog-right-sidebar">
                <a>
                  Business <span className="post-count">(2)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-right-sidebar">
                <a>
                  Privacy <span className="post-count">(5)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-right-sidebar">
                <a>
                  Technology <span className="post-count">(6)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-right-sidebar">
                <a>
                  Tips <span className="post-count">(2)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-right-sidebar">
                <a>
                  Log in <span className="post-count">(1)</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog-right-sidebar">
                <a>
                  Uncategorized <span className="post-count">(1)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog-right-sidebar">
              <a>Advertisment</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Business</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Life</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Lifestyle</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Fashion</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Ads</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Inspiration</a>
            </Link>

            <Link href="/blog-right-sidebar">
              <a>Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
