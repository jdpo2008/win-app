import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PageBanner from "@components/Common/PageBanner";
import RelatedPost from "@components/Blog/RelatedPost";
import BlogSidebar from "@components/Blog/BlogSidebar";

const BlogDetails = () => {
  const router = useRouter();
  const { blogId } = router.query;

  console.log(
    `[MyComp render] router.isReady=${router.isReady}, blogId=${blogId}`
  );

  React.useEffect(() => {
    if (!blogId) {
      return; // NOTE: router.query might be empty during initial render
    }

    // doSomethingWithData(id);
  }, [blogId]);

  return (
    <>
      <PageBanner
        pageTitle="Tu Blog favorito de INTERNET"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
      />

      <div className="blog-details-area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Link href="/blog-grid">
                    <a className="tag">Branding</a>
                  </Link>
                  <img src="/images/blog/blog1.jpg" alt="blog-details" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="ri-calendar-2-line"></i>
                        March 14, 2021
                      </li>
                      {/* <li>
                        <i className="ri-message-2-line"></i>
                        <Link href="/blog-details">
                          <a>(4) Comments</a>
                        </Link>
                      </li> */}
                    </ul>
                  </div>

                  <h4>
                    Branding involves developing strategy to create a pin point
                    of differentiation the marketing
                  </h4>
                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur{" "}
                    <strong>adipisicing</strong> elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea <a href="/blog-details">commodo</a>{" "}
                    consequat. Duis aute irure dolor in reprehenderit in sed
                    quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem.
                  </p>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="post-author-meta">
                    <div className="d-flex align-items-center">
                      <img src="/images/user/user6.jpg" alt="user" />
                      <div className="title">
                        <span className="name">
                          By{" "}
                          <Link href="/blog-grid">
                            <a>EnvyTheme</a>
                          </Link>
                        </span>
                        <span className="date">March 17, 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Compartir:</span>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          className="facebook"
                          target="_blank"
                        >
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          className="twitter"
                          target="_blank"
                        >
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          className="linkedin"
                          target="_blank"
                        >
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          className="instagram"
                          target="_blank"
                        >
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Related Blog Post */}
                <RelatedPost />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="right-sidebar">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
