import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import ContactinBlog from "./ContactinBlog";
import { useRouter } from "next/router";
import { Divider, IconButton } from "@mui/material";
import { blogData } from "@/src/blogData";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogData[id];
  const currentBlogIndex = parseInt(id, 10);

  if (!blog) {
    // Handle case when blog data is not found
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
                    <a className="tag">{blog.tags[0]}</a>
                  </Link>
                  <a className="date" href="#">
                    <i className="far fa-calendar-alt mx-3" />
                    {blog.date}
                  </a>
                </div>
                <div className="title mb-20">
                  <h3>{blog.title}</h3>
                </div>
                <div className="image mb-40">
                  <img src={blog.image} alt="Blog Single" />
                </div>
                <p>{blog.content}</p>
                <ul className="list-style-one pt-10 pb-40">
                  {blog.points.map((point, index) => (
                    <li key={index}>
                      <div>
                        {point.title}{" "}
                        <p style={{ color: "#2f3f51" }}>{point.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <h4>Summary & Results</h4>
                <p>{blog.summary}</p>
              </div>

              <div className="tag-share pt-25 pb-55 wow fadeInUp delay-0-2s">
                <div className="item">
                  <h5>Tags</h5>
                  <div className="tag-coulds">
                    {blog.tags.map((tag, index) => (
                      <Link key={index} legacyBehavior href="#">
                        {tag}
                      </Link>
                    ))}
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
                                src={blog.image}
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
                                  {blog.title}
                                </Link>
                              </h5>
                              <span className="date">
                                <i className="far fa-calendar-alt" />
                                <a href={"#"}> {blog.date}</a>
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
                      src={blogData[prevIndex].image}
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
                        {blogData[prevIndex].title}
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      {blogData[prevIndex].date}
                    </span>
                  </div>
                </div>
              )}
              {nextIndex !== null && (
                <div className="post-item">
                  <div className="image">
                    <img
                      src={blogData[nextIndex].image}
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
                        {blogData[nextIndex].title}
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      {blogData[nextIndex].date}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <Divider />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BlogDetails;
