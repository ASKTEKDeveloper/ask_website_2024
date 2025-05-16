import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import ContactinBlog from "./ContactinBlog";
import parse, { domToReact } from "html-react-parser";
import { useRouter } from "next/router";
import { Dialog, Divider, IconButton, LinearProgress } from "@mui/material";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const router = useRouter();
  const [caseStudy, setCaseStudy] = useState(null);
  const [caseStudyData,setCaseStudyData]=useState([])
  const [currentIndex,setCurrentIndex]=useState()
  const [openLoader, setOpenLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return; // wait until router is fully loade
    GetCaseStudy();
  }, [router.isReady, router.query.id]);

  const { nextIndex, prevIndex } = useMemo(() => {
    if (caseStudyData.length === 0 || currentIndex === undefined) {
      return { nextIndex: null, prevIndex: null };
    }
  
    const next = currentIndex + 1 < caseStudyData.length ? currentIndex + 1 : null;
    const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : null;
  
    return { nextIndex: next, prevIndex: prev };
  }, [caseStudyData, currentIndex]);
  
  // Get all Blogs Request
  const GetCaseStudy = async () => {
    setOpenLoader(true);
    try {
      const res = await axios.post('/api/CaseStudy/CaseStudyApi');
      const data = res.data;
      setCaseStudyData(data);

      const index = data.findIndex(item => String(item.CaseStudyId) === String(id));
      if (index !== -1) {
        setCaseStudy(data[index]);
        setCurrentIndex(index);
      }
        
      setLoading(false);
    } catch (error) {
      console.error("Error fetching CaseStudy:", error);
      setError("Failed to load CaseStudy data.");
      setLoading(false);
    } finally {
      setOpenLoader(false);
    }
  };

  const formatTitleForURL = (title) => {
    return title.replace(/\s+/g, "_"); // Replace spaces with underscores
  };

  if (loading) {
    return (
      <Layout>
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
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!caseStudy) {
    return <div>Case Study not found</div>;
  }
  // Custom parser options for anchor tags
  const parserOptions = {
    replace: (domNode) => {
      if (domNode.name === "a") {
        return (
          <a
            style={{
              textDecoration: "none",
              color: "green",
            }}
            href={domNode.attribs.href}
            target={domNode.attribs.target || "_self"}
            rel={domNode.attribs.rel || "noopener noreferrer"}
          >
            {domToReact(domNode.children, parserOptions)}
          </a>
        );
      }
    },
  };

  return (
    <Layout>
      <PageBanner pageName={"Case Study Details"} />
      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">  
            <div className="col-lg-8">
              <div className="blog-details-content wow fadeInUp delay-0-2s">
                <div className="blog-meta-two pb-15">
                  <Link legacyBehavior href="#">
                    <a className="tag">{caseStudy.Category}</a>
                  </Link>
                  <a className="date" href="#">
                    <i className="far fa-calendar-alt mx-3" />
                    {moment(caseStudy.CreatedDate).format("LL")}
                  </a>
                </div>
                <div className="title mb-20">
                  <h3>{caseStudy.CaseStudyTitle}</h3>
                </div>
                <div className="image mb-40 d-flex justify-content-center align-items-center">
                  <img
                    src={`/api/case-study-image?BlogFileName=${caseStudy?.CaseStudyFileName}`}
                    alt="Blog Single"
                  />
                </div>
                <p>{parse(caseStudy.CaseStudyDescription, parserOptions)}</p>
                {/* <p>{parse(caseStudy.BlogDescription)}</p> */}
                {caseStudy.URL && (
                  <iframe
                    width="100%"
                    height="315"
                    src={caseStudy.URL}
                    title={caseStudy.CaseStudyTitle}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                )}
                <h4>The Results</h4>
                <p>{caseStudy?.Summary}</p>
              </div>

              <div className="tag-share pt-25 pb-55 wow fadeInUp delay-0-2s">
                <div className="item">
                  <h5>Tags</h5>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="#">
                      <a>{caseStudy.Category}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="mb-50 wow fadeInUp delay-0-2s">
                  <ContactinBlog />
                </div>
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Case Studies</h4>
                  <div style={{ maxHeight: "800px", overflow: "auto" }}>
                    <ul>
                      {caseStudyData.map(
                        (item, index) =>
                          index !== currentIndex && (
                            <li key={index}>
                              <div className="image">
                                <img
                                  src={`/api/case-study-image?BlogFileName=${item?.CaseStudyFileName}`}
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
                                      pathname: "/case-study-details",
                                      query: {
                                        id: item.CaseStudyId,
                                        title:formatTitleForURL(item.CaseStudyTitle),
                                      },
                                    }}
                                  >
                                    <a>{item.CaseStudyTitle}</a>
                                  </Link>
                                </h5>
                                <span className="date">
                                  <i className="far fa-calendar-alt" />
                                  <a href={"#"}>
                                    {moment(caseStudy.CreatedDate).format("LL")}
                                  </a>
                                </span>
                              </div>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="next-prev-post col-12  py-40 wow fadeInUp delay-0-2s">
              {prevIndex !== null && (
                <div className="post-item">
                  <div className="image">
                    <img
                      src={`/api/case-study-image?BlogFileName=${caseStudyData[prevIndex].CaseStudyFileName}`}
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
                          pathname: "/case-study-details",
                          query: {
                            id: caseStudyData[prevIndex].CaseStudyId,
                            title: caseStudyData[prevIndex].CaseStudyTitle,
                          },
                        }}
                      >
                        <a>{caseStudyData[prevIndex].CaseStudyTitle}</a>
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      {moment(caseStudyData[prevIndex].CreatedDate).format("LL")}
                    </span>
                  </div>
                </div>
              )}
              {nextIndex !== null && (
                <div className="post-item">
                  <div className="image">
                    <img
                      src={`/api/case-study-image?BlogFileName=${caseStudyData[nextIndex].CaseStudyFileName}`}
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
                          pathname: "/case-study-details",
                          query: {
                            id: caseStudyData[nextIndex].CaseStudyId,
                            title: formatTitleForURL(caseStudyData[nextIndex].CaseStudyTitle),
                          },
                        }}
                      >
                        <a>{caseStudyData[nextIndex].CaseStudyTitle}</a>
                      </Link>
                    </h5>
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      {moment(caseStudyData[nextIndex].CreatedDate).format("LL")}
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
