import * as React from "react";
import Link from "@utils/ActiveLink";

import { PATH_PAGE } from "@routes/paths";
import useAuth from "../../../../hooks/useAuth";

const NavbarStyle = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const { isAuthorized, unauthorize } = useAuth();

  const logout = () => {
    unauthorize();
  };

  console.log(isAuthorized);

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href={PATH_PAGE.root}>
                <a className="navbar-brand">
                  <img className="logo" src="/images/logo.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href={PATH_PAGE.root} activeClassName="active">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href={PATH_PAGE.blog.root} activeClassName="active">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href={PATH_PAGE.postula} activeClassName="active">
                      <a className="nav-link">Postula</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href={PATH_PAGE.gamers} activeClassName="active">
                      <a className="nav-link">Gamers</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href={PATH_PAGE.afiliaciones}
                      activeClassName="active"
                    >
                      <a className="nav-link">Afiliaciones</a>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link href={PATH_PAGE.contacto} activeClassName="active">
                      <a className="nav-link">Contactos</a>
                    </Link>
                  </li> */}

                  {isAuthorized && (
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="dropdown-toggle nav-link"
                        >
                          Mantenimiento
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/maintenance/security/users"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Empleos
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/features-2" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Regiones
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/features-2" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Categorias
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/features-2" activeClassName="active">
                            <a onClick={toggleNavbar} className="nav-link">
                              Blogs
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}

                  {isAuthorized && (
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="dropdown-toggle nav-link"
                        >
                          Seguridad
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/seguridad/usuarios"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Usuarios
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/seguridad/perfiles"
                            activeClassName="active"
                          >
                            <a onClick={toggleNavbar} className="nav-link">
                              Perfiles
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        About Us
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-simple" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Simple
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about-modern" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Modern
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Pages
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Pages I</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link href="/team" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 1</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/team-2" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 2</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/how-it-works"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>How It Works</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/gallery"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Gallery</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Services</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/pricing"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Pricing Plan</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages II</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/feedback"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Reviews</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/sign-in"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Sign In</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/sign-up"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Sign Up</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/forget-password"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>
                                      Forget Password
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/privacy-policy"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Privacy Policy</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/terms-conditions"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>
                                      Terms & Conditions
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages III</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    href="/screenshots"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Screenshots</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/faq" activeClassName="active">
                                    <a onClick={toggleNavbar}>FAQ</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/coming-soon"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Coming Soon</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/404" activeClassName="active">
                                    <a onClick={toggleNavbar}>404 Error Page</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/app-download"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>App Download</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/contact"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Contact Us</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Features
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/features" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 1
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/features-2" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Features 2
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Blog
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog-grid" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Grid
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Right Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-left-sidebar"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Left Sidebar
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Details
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact
                      </a>
                    </Link>
                  </li> */}
                </ul>
              </div>

              {!isAuthorized && (
                <div className="others-options">
                  <Link href="/auth/login">
                    <a className="default-btn">Ingresar</a>
                  </Link>
                </div>
              )}
              {isAuthorized && (
                <div className="others-options">
                  <button
                    type="button"
                    className="default-btn"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyle;
