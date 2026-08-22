import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { blogData } from "@/src/blogData";
import { useRouter } from "next/router";
import ContactinBlog from "./ContactinBlog";

const Blog = () => {
  return (
    <Layout>
      <PageBanner pageName={"Blog Standard"} />
      <section className="blog-standard-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-standard-inner">
                {blogData.map((blog, index) => (
                  <div
                    key={index}
                    className="blog-standard-item wow fadeInUp delay-0-2s"
                  >
                    <div className="image">
                      <img src={blog.image} alt="Blog" />
                    </div>
                    <div className="content">
                      <div className="blog-meta-two mb-5">
                        <Link href={`/blog-details?id=${index}`}>
                          <span className="tag">{blog.tags[0]}</span>
                        </Link>
                      </div>
                      <h4>
                        <Link href={`/blog-details?id=${index}`}>
                          {blog.title}
                        </Link>
                      </h4>
                      <p>
                        {blog.introduction.length > 100
                          ? blog.introduction.slice(0, 100) + "....."
                          : blog.introduction}
                      </p>
                      <div className="blog-meta-two">
                        <span>
                          <i className="far fa-calendar-alt mx-2" /> {blog.date}
                        </span>
                      </div>
                      <hr />
                      <Link href={`/blog-details?id=${index}`}>
                        <span className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="mb-50 wow fadeInUp delay-0-2s">
                  <ContactinBlog />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
