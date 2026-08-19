import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
import ContactinBlog from "./ContactinBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactUsProduct from "./ContactUsProduct";

const Blog = () => {
  const [blogData, setblogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const tokent =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudGxpc3QiOlt7IlVzZXJJRCI6IjEiLCJMb2dpbkNvZGUiOiIwMSIsIkxvZ2luTmFtZSI6IkFkbWluIiwiRW1haWxJZCI6ImFkbWluQGdtYWlsLmNvbSIsIlVzZXJUeXBlIjoiQURNSU4ifV0sImlhdCI6MTYzODM1NDczMX0.ZW6zEHIXTxfT-QWEzS6-GuY7bRupf2Jc_tp4fXIRabQ";
  useEffect(() => {
    getAllBlog();
  }, []);

  const totalPages = Math.max(1, Math.ceil(blogData.length / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedBlogs = blogData.slice(startIndex, startIndex + pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  // get all Reviews Request
  const getAllBlog = async () => {
    try {
      const res = await axios.get("/api/BlogsManage/Blogs", {
        headers: { Authorization: tokent, "Content-Type": "application/json" },
      });
      setblogData(res.data);
      setCurrentPage(1);
      console.log("Reviews data", res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const formatTitleForURL = (title) => {
    return title.replace(/\s+/g, "_"); // Replace spaces with underscores
  };

  return (
    <Layout>
      <PageBanner pageName={"Blog Standard"} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-standard-inner">
                {paginatedBlogs.map((blog, index) => {
                  const actualIndex = startIndex + index;

                  return (
                    <div
                      key={actualIndex}
                      className="blog-standard-item wow fadeInUp delay-0-2s"
                    >
                      <div className="image">
                        <img
                          src={`/api/blog-image?BlogFileName=${blog.BlogFileName}`}
                          alt="Blog"
                        />
                      </div>
                      <div className="content">
                        <div className="blog-meta-two mb-5">
                          <Link
                            href={`/blog-details?id=${actualIndex}&title=${formatTitleForURL(
                              blog.BlogTitle,
                            )}`}
                          >
                            <span className="tag">{blog.Category}</span>
                          </Link>
                        </div>
                        <h4>
                          <Link
                            href={`/blog-details?id=${actualIndex}&title=${formatTitleForURL(
                              blog.BlogTitle,
                            )}`}
                          >
                            {blog.BlogTitle}
                          </Link>
                        </h4>
                        {/* <p>
                          {blog.introduction.length > 100
                            ? blog.introduction.slice(0, 100) + "....."
                            : blog.introduction}
                        </p> */}
                        <div className="blog-meta-two">
                          <span>
                            <i className="far fa-calendar-alt mx-2" />{" "}
                            {moment(blog.CreatedDate).format("LL")}
                          </span>
                        </div>
                        <hr />
                        <Link
                          href={`/blog-details?id=${actualIndex}&title=${formatTitleForURL(
                            blog.BlogTitle,
                          )}`}
                        >
                          <span className="read-more">
                            Read More <i className="far fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  );
                })}

                {blogData.length > 0 && totalPages > 1 && (
                  <ul className="pagination flex-wrap wow fadeInUp delay-0-2s">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button
                        type="button"
                        className="page-link"
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <i className="fas fa-chevron-left" />
                      </button>
                    </li>

                    {pageNumbers.map((pageNumber) => (
                      <li
                        key={pageNumber}
                        className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
                      >
                        <button
                          type="button"
                          className="page-link"
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {String(pageNumber).padStart(2, "0")}
                        </button>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <button
                        type="button"
                        className="page-link"
                        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <i className="fas fa-chevron-right" />
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="mb-50 wow fadeInUp delay-0-2s">
                  <ContactinBlog />
                </div>
              </div>
            </div>
            <div className="col-lg-12 contactus">
              <ContactUsProduct />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
