import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Container } from "@mui/material";
import { useRef, useState } from "react";
import { blogData } from "@/src/blogData";

const BlogList = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className="blog-area-four pb-100 rpb-70 rel z-1">
      <Container>
        <div className="row justify-content-between align-items-end mb-30">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title mb-25 wow fadeInLeft delay-0-2s">
              <span className="sub-title mb-10">Our Blog &amp; News</span>
              <h2>Latest Blog, News &amp; Articles</h2>
              <span className="bg-text">Blog</span>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link legacyBehavior href="/blog">
              <a className="theme-btn style-four mb-30 wow fadeInRight delay-0-2s">
                View More.. <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
        {blogData.map((blog, index) => (
          <div
            className="blog-item style-four wow fadeInUp delay-0-2s"
            key={index}
          >
            <div className="image">
              <img src={blog.image} alt="Blog" />
            </div>
            <div className="content">
              <ul className="blog-meta">
                <li>
                  <i className="far fa-calendar-alt" />{" "}
                  <a href="#" >{blog.date}</a>
                </li>
              </ul>
              <h4>
                <Link
                  legacyBehavior
                  href={{
                    pathname: "/blog-details",
                    query: { id: index },
                  }}
                >
                  {blog.title}
                </Link>
              </h4>
              <div className="author-more">
                <span className="author">
                  <a href="/" style={{ color: "#456e96" }}>
                    {" "}
                    By ASK TECHNOLOGY
                  </a>
                </span>
                {/* <Link legacyBehavior href="/blog-details"> */}
                  <Link
                    legacyBehavior
                    href={{
                      pathname: "/blog-details",
                      query: { id: index },
                    }}
                  >
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                {/* </Link> */}
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default BlogList;
