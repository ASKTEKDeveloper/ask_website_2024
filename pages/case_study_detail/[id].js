import React, { useEffect, useState } from 'react'
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from 'axios';

const case_study_detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [caseStudy,setCaseStudy]=useState(null)

  useEffect(() => {
    if (!router.isReady) return; // wait until router is fully loade
    GetCaseStudy();
  }, [router.isReady, router.query.id]);
  
  const GetCaseStudy=async()=>{
    try{
      const res=await axios.post('/api/CaseStudy/CaseStudyApi',{
        CaseStudyId:id
      })
      setCaseStudy(res.data)
    }catch(e){
      console.log("error while getting sace study ")
    }
  }

  return (
      <Layout>
      <section className="project-details-area pt-130 rpt-100 pb-60 rpb-30">
        <div className="container">
            <div className="image w-full mb-45 text-center">
              <img
                src={`/api/case-study-image?BlogFileName=${caseStudy?.CaseStudyFileName}`}
                alt="Project Details"
              />
            </div>
          <div className="project-details-content">
            <div className="section-title mb-25">
              <h2>{caseStudy?.CaseStudyTitle}</h2>
            </div>
            <p>
              {
                caseStudy?.Summary
              }
            </p>
            <div className="row justify-content-center">
            {
              caseStudy?.CaseStudyDescription
            }
            </div>
          </div>
        </div>
      </section>
      {/* Project Details Area end */}
      {/* Next Prev Project start */}
      <div className="next-prev-project pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service next-prev-project mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-prev.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="detail-btn">
                    <i className="far fa-angle-left" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    Cyber Security
                  </Link>
                </h4>
                <Link legacyBehavior href="/case_study">
                  <a className="category">IT Solutions</a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="project-details">
                    UI/UX Strategy
                  </Link>
                </h4>
                <Link legacyBehavior href="/project-details">
                  <a className="category">IT Solutions</a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/projects/project-next.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="detail-btn">
                    <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default case_study_detail
