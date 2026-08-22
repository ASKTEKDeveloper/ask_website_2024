import Link from "next/link";
import React from "react";

const OurCEO = () => {
  return (
    <section className="about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1">
      <div className="container pt-4">
        <div className="row align-items-start gap-100">
          <div className="col-lg-6">
            <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-60 rmb-40">
                {/* <span className="sub-title mb-15">Meet Our CEO</span> */}
                <h2>
                  Meet Our <span className="text-success">CEO</span>{" "}
                </h2>
              </div>
              <div className="row gap-40">
                <div className="col-12">
                  <div className="service-item style-three">
                    <p>
                      I am a seasoned entrepreneur and IT professional,
                      currently serving as the Founder and CEO of Asktek
                      Solutions, a leading IT solutions provider catering
                      specifically to the apparel industry. With over 20 years
                      of experience, I have leveraged my extensive background in
                      information technology to identify and address critical
                      bottlenecks in apparel manufacturing processes. My passion
                      for solving these challenges has driven me to develop
                      innovative software solutions that enhance operational
                      efficiency, streamline workflows, and drive growth within
                      the fashion sector.
                    </p>
                    <p>
                      My unique blend of expertise in both IT and apparel
                      manufacturing enables me to bridge the gap between
                      technology and production effectively. I am committed to
                      innovation, constantly seeking to provide tailored
                      software solutions that address the specific needs of the
                      apparel industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
              <img src="assets/images/salahuddin.svg" alt="About" />
            </div>
          </div>
        </div>
        <section className="services-area-six py-50 rel z-1">
          <div className="container">
            <div className="section-title text-center mb-30 rmb-40">
              <span className="sub-title ">Key Highlights </span>
            </div>
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6">
                <div className="service-item-six wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/erp.png"
                      alt="Fashion Automation Icon"
                      className="team_icons"
                    />
                  </div>
                  <h4>
                    <Link legacyBehavior href="#">
                      ERP Solutions
                    </Link>
                  </h4>
                  <p>
                    Custom ERP systems tailored for textile and garment
                    industries. Streamline operations and improve efficiency
                    with advanced tools. Designed to meet industry-specific
                    needs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item-six wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <img
                      src="assets/images/deal.png"
                      alt="Fashion Automation Icon"
                      className="team_icons"
                    />
                  </div>
                  <h4>
                    <Link legacyBehavior href="#">
                      House Automation
                    </Link>
                  </h4>
                  <p>
                    Automate sourcing and production processes with buying house
                    software. Enhance productivity and reduce manual effort.
                    Ideal for seamless supply chain management.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item-six wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <img
                      src="assets/images/human-resources.png"
                      alt="Fashion Automation Icon"
                      className="team_icons"
                    />
                  </div>
                  <h4>
                    <Link legacyBehavior href="#">
                      Production Tools
                    </Link>
                  </h4>
                  <p>
                    Optimize production with operation bulletin and shrinkage
                    tools. <br />
                    Reduce waste and improve workflow efficiency. <br />
                    Tailored for fashion and garment manufacturers.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item-six wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/globalization.png"
                      alt="Fashion Automation Icon"
                      className="team_icons"
                    />
                  </div>
                  <h4>
                    <Link legacyBehavior href="#">
                      Digital Shift
                    </Link>
                  </h4>
                  <p>
                    Transform your business with corporate software for fashion
                    technology. Drive innovation and streamline operations. Stay
                    ahead in the competitive market.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item-six wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <img
                      src="assets/images/global-connection.png"
                      alt="Fashion Automation Icon"
                      className="team_icons"
                    />
                  </div>
                  <h4>
                    <Link legacyBehavior href="#">
                      Global Impact
                    </Link>
                  </h4>
                  <p>
                    Our software is trusted across India and Bangladesh. Boost
                    productivity and operational efficiency. Designed for
                    manufacturers in the fashion industry.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item-six wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <img
                      src="assets/images/garment.png"
                      alt="Fashion Automation Icon"
                      className="team_icons"
                    />
                  </div>
                  <h4>
                    <Link legacyBehavior href="#">
                      Fashion Automation
                    </Link>
                  </h4>
                  <p>
                    Automate product creation, sourcing, and production
                    processes. Designed exclusively for fashion brands. Improve
                    efficiency and reduce time-to-market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row">
          <div className="col-12">
            <div className="service-item style-three">
              <p>
                At Asktek Solutions, our mission is to empower the fashion
                industry by improving efficiency, reducing waste, and increasing
                productivity through cutting-edge software applications. Our
                solutions provide a competitive advantage by leveraging fashion
                technology to drive digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-bg-shape">
        <img src="assets/images/background/about-bg-shape.png" alt="About" />
      </div> */}
    </section>
  );
};

export default OurCEO;
