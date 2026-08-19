import { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const formatTitleForURL = (title) => {
  return String(title || "")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_\-]/g, "")
    .toLowerCase();
};

const BlogsByProduct = ({ code, productCode, productId, limit = 3 }) => {
  const productShortCode = (code || productCode || "").trim();
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!productShortCode && !productId) {
        setBlogData([]);
        return;
      }

      setLoading(true);

      try {
        const params = new URLSearchParams();

        if (productShortCode) params.append("code", productShortCode);
        if (productId) params.append("productId", String(productId));
        if (limit) params.append("limit", String(limit));

        const response = await axios.get(
          `/api/BlogsManage/ByProductCode?${params.toString()}`,
        );
        setBlogData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching blog data by product:", error);
        setBlogData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [productShortCode, productId, limit]);

  if (!loading && !blogData.length) return null;

  return (
    <section className="py-70" style={{ background: "#f8f9ff" }}>
      <Container>
        <div className="section-title text-center mb-50">
          <h2 style={{ fontWeight: "700" }}>Read Our Blogs</h2>
        </div>

        {loading && (
          <p style={{ margin: 0, color: "#666" }}>Loading blogs...</p>
        )}

        <div className="row g-4 align-items-stretch">
          {blogData
            .slice(0, Number(limit) || blogData.length)
            .map((blog, index) => (
              <div
                className="col-lg-4 col-md-6 d-flex"
                key={blog.BlogID || index}
              >
                <div
                  className="blog-standard-item wow fadeInUp delay-0-2s"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "18px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 10px 30px rgba(25, 35, 58, 0.08)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="image" style={{ height: "220px" }}>
                    <img
                      src={`/api/blog-image?BlogFileName=${blog.BlogFileName}`}
                      alt={blog.BlogTitle || "Blog"}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  <div
                    className="content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      padding: "28px 24px 22px",
                    }}
                  >
                    <div className="blog-meta-two mb-10">
                      <Link
                        href={`/blog-details?id=${blog.BlogID}&title=${formatTitleForURL(
                          blog.BlogTitle,
                        )}`}
                      >
                        <span className="tag" style={{ display: "inline-block" }}>
                          {blog.Category || "General"}
                        </span>
                      </Link>
                    </div>

                    <h4
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.45",
                        marginBottom: "12px",
                        minHeight: "3.4em",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      <Link
                        href={`/blog-details?id=${blog.BlogID}&title=${formatTitleForURL(
                          blog.BlogTitle,
                        )}`}
                        style={{ color: "#1c2b3a" }}
                      >
                        {blog.BlogTitle}
                      </Link>
                    </h4>

                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.96rem",
                        lineHeight: "1.7",
                        marginBottom: "18px",
                        minHeight: "4.8em",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {blog.Summary ||
                        blog.Category ||
                        "Read the latest updates from our blog."}
                    </p>

                    <div className="blog-meta-two mt-auto">
                      <Link
                        href={`/blog-details?id=${blog.BlogID}&title=${formatTitleForURL(
                          blog.BlogTitle,
                        )}`}
                      >
                        <span className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-40">
          <Link href="/blog" passHref>
            <Button
              variant="contained"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                padding: "12px 40px",
                borderRadius: "50px",
                fontWeight: "600",
              }}
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogsByProduct;
