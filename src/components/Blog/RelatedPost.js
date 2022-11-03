import React from "react";
import Link from "next/link";

const RelatedPost = () => {
  return (
    <>
      <div className="related-post">
        <h3 className="title">Related Post</h3>

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
                      Branding involves developing strategy to create a point of
                      differentiation
                    </a>
                  </Link>
                </h5>
                {/* <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  debitis nulla laboriosam tenetur quasi quam nostrum impedit ut
                  vitae vero rem mollitia numquam, adipisci deserunt quae
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
                </button> */}
              </div>
            </div>
          </div>

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
                </ul>
                <h5>
                  <Link
                    href={{
                      pathname: "/blog/[blogId]",
                      query: { blogId: "my-post" },
                    }}
                  >
                    <a>
                      Branding involves developing strategy to create a point of
                      differentiation
                    </a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>

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
                    <img src="/images/blog/blog3.jpg" alt="blog" />
                  </a>
                </Link>
                <Link href="/blog-grid">
                  <a className="tag">Tecnologia</a>
                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="ri-time-line"></i>
                    April 14, 2021
                  </li>
                </ul>
                <h5>
                  <Link
                    href={{
                      pathname: "/blog/[blogId]",
                      query: { blogId: "my-post" },
                    }}
                  >
                    <a>
                      Branding involves developing strategy to create a point of
                      differentiation
                    </a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
