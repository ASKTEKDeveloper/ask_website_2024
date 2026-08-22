import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import axios from "axios";
// import { blogData } from "@/src/blogData";

const BlogList = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const tokent =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudGxpc3QiOlt7IlVzZXJJRCI6IjEiLCJMb2dpbkNvZGUiOiIwMSIsIkxvZ2luTmFtZSI6IkFkbWluIiwiRW1haWxJZCI6ImFkbWluQGdtYWlsLmNvbSIsIlVzZXJUeXBlIjoiQURNSU4ifV0sImlhdCI6MTYzODM1NDczMX0.ZW6zEHIXTxfT-QWEzS6-GuY7bRupf2Jc_tp4fXIRabQ";
  const [blogData, setblogData] = useState([]);
  useEffect(() => {
    getAllBlog();
  }, []);

  // get all Reviews Request
  const getAllBlog = async () => {
    try {
      const res = await axios.get("/api/BlogsManage/Blogs", {
        headers: { Authorization: tokent, "Content-Type": "application/json" },
      });
      setblogData(res.data);
      console.log("Reviews data", res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const formatTitleForURL = (title) => {
    return title.replace(/\s+/g, "_"); // Replace spaces with underscores
  };
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
        <div
          style={{
            maxHeight: "500px",
            overflowY: "auto",
            // padding: "10px",
            // border: "1px solid #eee",
            // borderRadius: "4px",
          }}
        >
          {blogData.map((data, index) => (
            <div
              className="blog-item style-four wow fadeInUp delay-0-2s"
              key={index}
            >
              <div className="image">
                <img
                  src={`/api/blog-image?BlogFileName=${data.BlogFileName}`}
                  alt="data"
                  style={{ maxWidth: "250px", objectFit: "contain" }}
                />
              </div>
              <div className="content">
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />{" "}
                    <a href="#"> {moment(data.CreatedDate).format("LL")} </a>
                  </li>
                </ul>
                <h4>
                  <Link
                    legacyBehavior
                    href={{
                      pathname: "/blog-details",
                      query: {
                        id: index,
                        title: formatTitleForURL(blogData[index].BlogTitle),
                      },
                    }}
                  >
                    <a>{data.BlogTitle}</a>
                  </Link>
                </h4>
                <div className="author-more">
                  <span className="author">
                    <a href="/" style={{ color: "#456e96" }}>
                      {data.Category}
                    </a>
                  </span>

                  <Link
                    legacyBehavior
                    href={{
                      pathname: "/blog-details",
                      query: {
                        id: index,
                        title: formatTitleForURL(blogData[index].BlogTitle),
                      },
                    }}
                  >
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogList;
