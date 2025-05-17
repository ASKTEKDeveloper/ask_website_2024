import React, { useEffect, useState } from "react";
import Layout from "@/layout";
import Link from "next/link";
import axios from "axios";
import PageBanner from "@/src/components/PageBanner";

const case_study = () => {
  const [allCaseStudy, setAllCaseStudy] = useState([]);
  useEffect(() => {
    GetAllCaseStudy();
  }, []);
  const GetAllCaseStudy = async () => {
    try {
      const res = await axios.get("/api/CaseStudy/CaseStudyApi");
      setAllCaseStudy(res.data);
    } catch (e) {
      console.log("error while get all case study");
    }
  };
  const formatTitleForURL = (title) => {
    return title?.replace(/\s+/g, "_"); // Replace spaces with underscores
  };
  return (
    <Layout>
      <PageBanner pageName={"Case Studies"} />

      <section className="project-grid-area rel z-2 py-50 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <h2>Explore Insights from Our Latest Case Studies</h2>
                <p>
                  Discover how we solve real-world challenges through
                  innovation, strategy, and technology. Our case studies
                  showcase success stories across different industries,
                  highlighting impactful results and key lessons learned from
                  each project.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {allCaseStudy.map((caseStudy) => (
              <div key={caseStudy.caseStudyId} className="col-xl-4 col-md-6">
                <div className="project-grid-item wow fadeInUp delay-0-2s">
                  <div className="image" style={{ height: "250px" }}>
                    <img
                      style={{ height: "100%" }}
                      src={`/api/case-study-image?BlogFileName=${caseStudy.CaseStudyFileName}`}
                      alt="Project Grid"
                    />
                  </div>
                  <div className="content" style={{flexDirection:'column'}}>
                   
                      <h4
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          height: "4.8em",
                          lineHeight: "1.6em",
                        }}
                      >
                        {caseStudy.CaseStudyTitle}
                      </h4>
                    <Link
                      
                      legacyBehavior
                      href={`/case-study-details?id=${caseStudy.CaseStudyId}&title=${formatTitleForURL(caseStudy.CaseStudyTitle)}`}
                    >
                      <span className="read-more" style={{cursor:'pointer'}}>
                          Read More <i className="far fa-arrow-right" />
                        </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default case_study;
