import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import ContactinBlog from "./ContactinBlog";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { Dialog, Divider, IconButton, LinearProgress } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
// import { blogData } from "@/src/blogData";

const BlogDetails = () => {
  const router = useRouter();
  const [blogData, setblogData] = useState([]);
  const [openLoader, setOpenLoader] = useState(false);
  const tokent =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudGxpc3QiOlt7IlVzZXJJRCI6IjEiLCJMb2dpbkNvZGUiOiIwMSIsIkxvZ2luTmFtZSI6IkFkbWluIiwiRW1haWxJZCI6ImFkbWluQGdtYWlsLmNvbSIsIlVzZXJUeXBlIjoiQURNSU4ifV0sImlhdCI6MTYzODM1NDczMX0.ZW6zEHIXTxfT-QWEzS6-GuY7bRupf2Jc_tp4fXIRabQ";

  useEffect(() => {
    getAllBlog();
  }, []);

  // get all Reviews Request
  const getAllBlog = async () => {
    setOpenLoader(true);
    try {
      const res = await axios.get("/api/BlogsManage/Blogs", {
        headers: { Authorization: tokent, "Content-Type": "application/json" },
      });
      setblogData(res.data);
      setOpenLoader(false);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setOpenLoader(false);
    }
  };

  const { id } = router.query;
  const blog = blogData[id];
  const currentBlogIndex = parseInt(id, 10);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const prevIndex = currentBlogIndex - 1 >= 0 ? currentBlogIndex - 1 : null;
  const nextIndex =
    currentBlogIndex + 1 < blogData.length ? currentBlogIndex + 1 : null;

  return (
    <Layout>
      <PageBanner pageName={"Blog Details"} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-details-content wow fadeInUp delay-0-2s">
                <div className="blog-meta-two pb-15">
                  <Link legacyBehavior href="#">
                    <a className="tag">{blog.Category}</a>
                  </Link>
                  <a className="date" href="#">
                    <i className="far fa-calendar-alt mx-3" />{" "}
                    {moment(blog.CreatedDate).format("LL")}
                  </a>
                </div>
                <div className="title mb-20">
                  <h3>{blog.BlogTitle}</h3>
                </div>
                <div className="image mb-40">
                  <img
                    src={`/api/blog-image?BlogFileName=${blog.BlogFileName}`}
                    alt="Blog Single"
                  />
                </div>
                <p> {parse(blog.BlogDescription)}</p>
                <h4>Summary & Results</h4>
                <p>{blog.Summary}</p>
              </div>

              <div className="tag-share pt-25 pb-55 wow fadeInUp delay-0-2s">
                <div className="item">
                  <h5>Tags</h5>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="#">
                      <a>{blog.Category}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Blogs</h4>
                  <ul>
                    {blogData.map(
                      (blog, index) =>
                        index !== currentBlogIndex && (
                          <li key={index}>
                            <div className="image">
                              <img
                                src={`/api/blog-image?BlogFileName=${blog.BlogFileName}`}
                                alt="News"
                                style={{
                                  objectFit: "cover",
                                  maxWidth: "90px",
                                  height: "90px",
                                  borderRadius: "10px",
                                }}
                              />
                            </div>
                            <div className="content">
                              <h5>
                                <Link
                                  legacyBehavior
                                  href={{
                                    pathname: "/blog-details",
                                    query: { id: index },
                                  }}
                                >
                                  <a>{blog.BlogTitle}</a>
                                </Link>
                              </h5>
                              <span className="date">
                                <i className="far fa-calendar-alt" />
                                <a href={"#"}>
                                  {" "}
                                  {moment(blog.CreatedDate).format("LL")}
                                </a>
                              </span>
                            </div>
                          </li>
                        )
                    )}
                  </ul>
                </div>
                <div className="mb-50 wow fadeInUp delay-0-2s">
                  <ContactinBlog />
                </div>
              </div>
            </div>
            <hr />
            <div className="next-prev-post col-12  py-40 wow fadeInUp delay-0-2s">
              {prevIndex !== null && (
                <div className="post-item">
                  <div className="image">
                    <img
                      src={`/api/blog-image?BlogFileName=${blogData[prevIndex].BlogFileName}`}
                      alt="Post"
                      style={{
                        objectFit: "cover",
                        maxWidth: "90px",
                        height: "90px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <Link
                        legacyBehavior
                        href={{
                          pathname: "/blog-details",
                          query: { id: prevIndex },
                        }}
                      >
                        <a>{blogData[prevIndex].BlogTitle}</a>
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      {moment(blogData[prevIndex].CreatedDate).format("LL")}
                    </span>
                  </div>
                </div>
              )}
              {nextIndex !== null && (
                <div className="post-item">
                  <div className="image">
                    <img
                      src={`/api/blog-image?BlogFileName=${blogData[nextIndex].BlogFileName}`}
                      alt="Post"
                      style={{
                        objectFit: "cover",
                        maxWidth: "90px",
                        height: "90px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <Link
                        legacyBehavior
                        href={{
                          pathname: "/blog-details",
                          query: { id: nextIndex },
                        }}
                      >
                        <a>{blogData[nextIndex].BlogTitle}</a>
                      </Link>

                      {/* <Link
                        legacyBehavior
                        href={{
                          pathname: "/blog-details",
                          query: { id: nextIndex },
                        }}
                      >
                        {blogData[nextIndex].BlogTitle}
                      </Link> */}
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      {moment(blogData[nextIndex].CreatedDate).format("LL")}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <Divider />
          </div>
        </div>
      </section>
      {/* loader popup dialog box */}
      <Dialog
        open={openLoader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <LinearProgress />
      </Dialog>
    </Layout>
  );
};
export default BlogDetails;
