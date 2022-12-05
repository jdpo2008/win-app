import React from "react";
import Link from "next/link";

import { PATH_PAGE } from "@routes/paths";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Link href="/">
              <a className="logo">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>

            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.messenger.com/" target="_blank">
                  <i className="ri-messenger-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href={PATH_PAGE.root}>
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={PATH_PAGE.blog.root}>
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={PATH_PAGE.postula}>
                  <a className="nav-link">Postula</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={PATH_PAGE.afiliaciones}>
                  <a className="nav-link">Afiliaciones</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={PATH_PAGE.contacto}>
                  <a className="nav-link">Contacta</a>
                </Link>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; {currentYear} <strong>WinAPP</strong>. All Rights
              Reserved by{" "}
              <a href="https://envytheme.com/" target="_blank">
                innovacionesjd.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
