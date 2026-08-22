import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import FaqHire from "@/src/components/faqHire";
import { Nav, Tab } from "react-bootstrap";
import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
  servicesFiveActive,
  projectThreeActive,
  testimonialSlider,
} from "@/src/sliderProps";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import Slider from "react-slick";
import { Container, Paper, Typography } from "@mui/material";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";

import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

import { LiaBusinessTimeSolid } from "react-icons/lia";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IoSchoolSharp } from "react-icons/io5";
import { FaShip } from "react-icons/fa6";
import { MdOutlineFactory } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

import { MdOutlineRealEstateAgent } from "react-icons/md";

const GarmentManufacturing = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      <section className="about-area-five py-50 rel z-1">
        <Container>
          <div className="row align-items-center gap-100">
            <div className="col-lg-7">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">Empower Your</span>
                  <h2 className="text-gradient-title3">
                    Garment Business with Technology
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon icon-size">
                        <img
                          src="/assets/images/projects/ob/fashion.png"
                          alt="Icon"
                        />
                      </div>
                      {/*                     
                      <div className="icon">
                        <i className="flaticon-br-shirt" />
                      </div> */}
                      <h4 className="text-gradient-title">
                        Boost Garment <br />
                        Efficiency
                      </h4>
                      <p>
                        Automate processes, reduce errors, and speed up
                        production with advanced software
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon icon-size">
                        <img
                          src="/assets/images/projects/ob/sewing-machine.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-gradient-title">
                        Optimize Garment <br />
                        Potential
                      </h4>
                      <p>
                        Improve visibility, optimize resources, and enhance
                        decisions with smart solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {matchesBigScreen && (
              <div className="col-lg-5">
                <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                  <img
                    src="assets/images/hire/gar3.png"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain" }}
                  />
                  <img
                    src="assets/images/hire/gar1.png"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain" }}
                  />
                  <img
                    className="abut-bg-shape"
                    src="assets/images/about/about-five-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      {/* What We Provide Area End */}
      <section className="services-area-five pt-50 pb-150 rpt-35  rpb-100 rel z-2">
        <Container>
          <div className="col-lg-12">
            <div className="about-content my-55 rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title text-center rmb-40">
                <h2
                  className="text-gradient-title2 mb-15"
                  style={{ fontFamily: "Play", textTransform: "uppercase" }}
                >
                  Our Garment Industry Solutions
                </h2>
                <span className="sub-title mb-15">
                  Explore our comprehensive suite of software solutions designed
                  to enhance efficiency, streamline operations, and boost
                  productivity in the garment sector. Each of our products is
                  crafted to meet the unique needs of the industry, ensuring you
                  have the tools necessary for success.
                </span>
              </div>
            </div>
          </div>
          {/* Services Area Two start */}
          <section className="services-area-two py-50 rel z-2">
            <Container maxWidth={"lg"}>
              <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="service-item-two wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/gads.png"
                        alt="Service"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title text-center">
                        <span style={{ color: "#068FFF" }}>Buying House </span>{" "}
                        Management System
                      </h4>
                      <p className="text-center">
                        Gain complete control over your buying house operations
                        with our cutting-edge management system. Seamlessly
                        track orders, manage suppliers, and ensure accurate
                        communication throughout the production cycle. With
                        built-in automation and real-time updates, streamline
                        your buying process and improve overall efficiency.
                        <br />
                        <br />
                      </p>
                    </div>
                    <Link legacyBehavior href={{ pathname: "/blog-details" }}>
                      <a
                        className="read-more d-flex justify-content-center"
                        style={{ color: "limegreen" }}
                      >
                        Know More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="service-item-two wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src="assets/images/services/ads.png" alt="Service" />
                    </div>
                    <div className="content">
                      <h4 className="title text-center">
                        <span style={{ color: "#7E97A6" }}>
                          Operation Bulletin
                        </span>{" "}
                        & Production Monitoring
                      </h4>
                      <p className="text-center">
                        Optimize your garment production workflow with our
                        advanced Operation Bulletin software. Monitor real-time
                        production data, set and track piece rates, and
                        eliminate bottlenecks to ensure timely delivery. Gain
                        insights into worker performance, line efficiency, and
                        increase profitability with precision tracking.
                      </p>
                      <Link legacyBehavior href={{ pathname: "/blog-details" }}>
                        <a
                          className="read-more d-flex justify-content-center"
                          style={{ color: "limegreen" }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="service-item-two wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src="assets/images/services/seo.png" alt="Service" />
                    </div>
                    <div className="content">
                      <h4 className="title text-center">
                        <span style={{ color: "#008DDA" }}>
                          Sampling Module
                        </span>{" "}
                        for Garments
                      </h4>
                      <p className="text-center">
                        Take the hassle out of garment sampling with our robust
                        Sampling Module. Easily manage the entire sampling
                        process from prototype creation to final approval. Keep
                        track of sample status, communicate with stakeholders,
                        and accelerate your product development to meet market
                        demands swiftly and efficiently. <br /> <br />
                      </p>{" "}
                      <Link legacyBehavior href={{ pathname: "/blog-details" }}>
                        <a
                          className="read-more d-flex justify-content-center"
                          style={{ color: "limegreen" }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="service-item-two wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src="assets/images/services/ppc.png" alt="Service" />
                    </div>
                    <div className="content">
                      <h4 className="title text-center">
                        {" "}
                        <span style={{ color: "#5356FF" }}>
                          Garment Inspection{" "}
                        </span>
                        Software
                      </h4>
                      <p className="text-center">
                        Ensure consistent product quality with our Garment
                        Inspection Software. Conduct thorough inspections,
                        identify and categorize defects, and maintain stringent
                        quality control throughout production. Our solution
                        provides comprehensive reporting and tracking, helping
                        you reduce returns and improve customer satisfaction.{" "}
                        <br /> <br />
                      </p>{" "}
                      <Link legacyBehavior href={{ pathname: "/blog-details" }}>
                        <a
                          className="read-more d-flex justify-content-center"
                          style={{ color: "limegreen" }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="service-item-two wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/marketing.png"
                        alt="Service"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title text-center">
                        <span style={{ color: "#7E97A6" }}>Garment ERP </span>
                        for Knit & Woven (RMG)
                      </h4>
                      <p className="text-center">
                        Unify your entire garment production process with our
                        powerful ERP solution, built specifically for the knit
                        and woven sectors. From raw material management to
                        finished goods, this system integrates inventory,
                        production planning, costing, and more. Gain a
                        360-degree view of your operations, and make data-driven
                        decisions to stay competitive.
                      </p>{" "}
                      <Link legacyBehavior href={{ pathname: "/blog-details" }}>
                        <a
                          className="read-more d-flex justify-content-center"
                          style={{ color: "limegreen" }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="service-item-two wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/gads.png"
                        alt="Service"
                      />
                    </div>
                    <div className="content">
                      <h4 className="title text-center">
                        <span style={{ color: "#068FFF" }}>
                          Garment Export{" "}
                        </span>{" "}
                        Application
                      </h4>
                      <p className="text-center">
                        Simplify the complexities of international trade with
                        our Garment Export Application. Easily handle
                        documentation, manage compliance, track shipping, and
                        monitor export status in real time. Designed for garment
                        exporters, this tool reduces paperwork, increases
                        visibility, and ensures seamless export operations.
                        <br />
                        <br /> <br />{" "}
                      </p>{" "}
                      <Link legacyBehavior href={{ pathname: "/blog-details" }}>
                        <a
                          className="read-more d-flex justify-content-center"
                          style={{ color: "limegreen" }}
                        >
                          Know More <i className="far fa-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </Container>
      </section>
    </Layout>
  );
};
export default GarmentManufacturing;
