import React, { useEffect, useState } from 'react'
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import axios from 'axios';

const case_study = () => {
    const [allCaseStudy,setAllCaseStudy]=useState([])
    useEffect(()=>{
        GetAllCaseStudy()
    },[])
    const GetAllCaseStudy=async ()=>{
        try{
            const res=await axios.get('/api/CaseStudy/CaseStudyApi')
            setAllCaseStudy(res.data)
        }catch(e){
            console.log("error while get all case study")
        }
    }
  return (
    <Layout>
    <section className="project-grid-area rel z-2 py-130 rpy-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <h2>Let’s Insides About Recent Project Best Work Gallery</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae
                vitae .
              </p>
            </div>
          </div>
        </div>
        <div className="row">
            {
                allCaseStudy.map(caseStudy=>
                    <div key={caseStudy.caseStudyId} className="col-xl-4 col-md-6">
                        <div className="project-grid-item wow fadeInUp delay-0-2s">
                        <div className="image">
                            <img
                            src={`/api/case-study-image?BlogFileName=${caseStudy.CaseStudyFileName}`}
                            alt="Project Grid"
                            />
                            <a
                            className="plus"
                            href="assets/images/projects/project-grid1.jpg"
                            />
                        </div>
                        <div className="content">
                            <h4>
                            <Link legacyBehavior href="project-details">
                                {caseStudy.CaseStudyTitle}
                            </Link>
                            </h4>
                            <Link legacyBehavior href={`/case-study-details?id=${caseStudy.CaseStudyId}`}>
                            <a className="detail-btn">
                                <i className="far fa-arrow-right" />
                            </a>
                            </Link>
                        </div>
                        </div>
                    </div>
                )
            }
          
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default case_study
