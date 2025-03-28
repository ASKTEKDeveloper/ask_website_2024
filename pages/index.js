import Layout from "@/layout";
import { projectSliderActive, sliderTwoActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Nav, Tab } from "react-bootstrap";
import { Container } from "@mui/material";
import { useRef, useState } from "react";
import { Dialog, LinearProgress } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { LiaStreamSolid } from "react-icons/lia";
import { TfiExport } from "react-icons/tfi";
import { GrIntegration } from "react-icons/gr";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
import { FaBoxes } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuMonitorDot } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import { SiLinkerd } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import { TbLayersLinked } from "react-icons/tb";
import { SlLike } from "react-icons/sl";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { CiBoxes } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuFilePieChart } from "react-icons/lu";

import { HiBellAlert } from "react-icons/hi2";
import { CiShoppingTag } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";

import ContactUsForm from "./ContactUsForm";
import BlogList from "./BlogList";
import Testimonials from "./Testimonials";
import ContactUsGarments from "./ContactUsGarments";
import OurPartners from "./OurPartners";


const icons = [
  "angular.png",
  "AngularIonic.png",
  "sql.png",
  "Mongodb-PNG-Image-HD.png",
  "dotnet.webp",
  "node.png",
  "php.png",
  "wordpress.png",
  "vbnet.png",
  "react.png",
  "native.png",
  "Python.png",
  "apple.png",
  "android-icon.webp",
  "aws.png",
  "flutter.svg",
];

const PartnerIcon = ({ imageName }) => (
  <div className="partner-icon" style={{ padding: 30 }}>
    <img
      src={`assets/images/icons/${imageName}`}
      alt="Partner"
      style={{
        margin: 20,
        maxWidth: "100px",
        objectFit: "contain",
        mixBlendMode: "multiply",
        maxHeight: "80px",
      }}
    />
  </div>
);

const Index = () => {
  const sliderRef = useRef(null);
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openLoader, setOpenLoader] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = projectSliderActive(setCurrentSlide);
  const [open, setOpen] = useState(false);

  const clientImages = Array.from(
    { length: 22 },
    (_, i) => `assets/images/clients/${i + 1}.jpeg`
  );

  return (
    <Layout header={2}>
      <Slider
        {...sliderTwoActive}
        ref={sliderRef}
        className="slider-two-active"
      >
        <div
          className={`slider-item-two ${
            matchesSmallScreen ? "pt-100" : "pt-150"
          }`}
        >
          <Container>
            <div className="slide-content">
              <span className="sub-title" style={{ color: "#3E54AC" }}>
                Welcome to ASK Technology
              </span>
              <h2
                style={{ textTransform: "capitalize", color: "#0079FF" }}
                className="text-shadow1 text-gradient-title4"
              >
                WE BRING SUCCESS TO YOUR GREAT BUSINESS
              </h2>
              <p>
                Revolutionize your operations with Ask Technology's cutting-edge
                solutions. From ERP tailored for Textile & Garment Industries to
                Enterprise-level Goods Traders Management, our suite of products
                is designed for excellence
              </p>

              <Link href="#products_services" passHref>
                <span className="theme-btn style-two mt-15">
                  Explore Our Solutions{" "}
                  <i className="fas fa-long-arrow-right" />
                </span>
              </Link>
            </div>
          </Container>
          {!matchesSmallScreen ? (
            <div className="slider-image pt-1">
              <img
                src="assets/images/home/home5.png"
                alt="Blog"
                style={{
                  mixBlendMode: "multiply",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 80,
                  // boxShadow:
                  //   "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              />
            </div>
          ) : (
            <div
              className="p-25 slider-image"
              style={{
                backgroundImage: "url(assets/images/home/home5.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                mixBlendMode: "multiply",
              }}
            />
          )}
        </div>
      </Slider>
      {/* <Hero4Slider /> */}
      {/* About Area start */}
      <section className="about-area px-3  py-100  rpb-100 rel z-1">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow  delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15 ">ASK TECHNOLOGY</span>
                  <h3 className="text-gradient-title3 ">
                    Empowering Businesses with Innovative Solutions
                  </h3>
                </div>
                <p>
                  At ASK Technology, we are more than just an IT services
                  company, we are your trusted partner in leveraging technology
                  to drive innovation and growth. With a relentless focus on
                  delivering exceptional solutions tailored to your unique
                  needs, we have established ourselves as a leader in the
                  industry
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="#contactus">
                    <a className="theme-btn style-three mt-15">
                      Connect With Us <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  <Link legacyBehavior href="about-us">
                    <a className="theme-btn mt-15">
                      Read More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>IT Consulting</h4>
                      <p>
                        Our IT consulting services encompass strategic planning
                        to align technology initiatives with business
                        objectives, ensuring optimal efficiency and performance.
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>Business Growth</h4>
                      <p>
                        Our ERP products, tailored for textile, garment, and
                        rental management industries, streamline operations and
                        catalyze business growth through enhanced efficiency and
                        productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className=""
                    src="assets/images/about/image2.jpg"
                    alt="About"
                    style={{ borderRadius: 20 }}
                  />
                  <img
                    className=""
                    src="assets/images/about/about2.jpg"
                    alt="About"
                    style={{ mixBlendMode: "multiply", borderRadius: 20 }}
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className=""
                    src="assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className=""
                    src="assets/images/about/image22.jpg"
                    alt="About"
                    style={{ borderRadius: 20 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* About Area end */}

      {/* Project Area start */}
      <section
        className="project-area px-3  overflow-hidden bgc-lighter  rpt-100 rel z-1"
        style={{ paddingTop: 80 }}
        id="products_services"
      >
        <Container>
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <h2 className="new-font-play">
              PRODUCTS & <span style={{ color: "#9376E0" }}>SERVICES</span>
            </h2>
          </div>

          <Slider {...settings} className="project-slider-active">
            {/*1,ERP for Textile & Garment Industries - 'TARGET'{" "} */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 0 ? 9999 : 1 }}
              >
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#FC6736" }}>TARGET - ERP </span>{" "}
                      for Textiles & Garments
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Unleashing Excellence in Textiles & Garments Industries
                    </span>
                  </h3>
                  <p className="my-3">
                    Elevate your textile and garment manufacturing with TARGET,
                    our comprehensive ERP solution. Tailored for manufacturers
                    and exporters, TARGET streamlines production processes,
                    optimizes inventory management, and simplifies export
                    documentation. Experience efficiency like never before, and
                    watch your operations seamlessly align with global standards
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <LiaStreamSolid />
                      </div>
                      <h6 className="mb-0">Streamlined Production</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <FaBoxes />
                      </div>
                      <h6 className="mb-0">Real-Time Inventory</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <TfiExport />
                      </div>
                      <h6 className="mb-0">Effortless Export</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <GrIntegration />
                      </div>
                      <h6 className="mb-0">Seamless Integration</h6>
                    </div>
                  </div>

                  <div
                    className="content col-12 mt-3 "
                    style={{ padding: 0, cursor: "pointer" }}
                  >
                    <Link
                      legacyBehavior
                      href="/erp-for-textiles-and-garments"
                      style={{}}
                    >
                      <a className="theme-btn style-four ">
                        Know More
                        <i className="fas fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/erp-mockup.png"
                    alt="Video"
                  />
                </div>
              </div>
            </div>

            {/* 2. Target SCM - Supply Chain Management */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 1 ? 9999 : 1 }}
              >
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/scm-mockup.png"
                    alt="Video"
                  />
                </div>
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#87A922" }}>Target SCM </span> -
                      Supply Chain Management
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Powering Your Supply Chain Dynamics
                    </span>
                  </h3>
                  <p className="my-3">
                    Transform your supply chain with Target SCM, a versatile
                    solution applicable across industries. Boost purchase and
                    distribution processes, and gain real-time visibility into
                    your supply chain. With online tools for customer purchase
                    orders and tracking, Target SCM ensures efficiency and
                    transparency in every link of your supply chain
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <FaBoxes />
                      </div>
                      <h6 className="mb-0">Optimized Stock</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <AiOutlineFileDone />
                      </div>
                      <h6 className="mb-0">Efficient Order Fulfilment</h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <CiShop />
                      </div>
                      <h6 className="mb-0">Collaborative Vendor Sourcing</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <MdOutlineMonitorHeart />
                      </div>
                      <h6 className="mb-0">Live Monitoring</h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer", zIndex: 99 }}
                    >
                      <Link
                        legacyBehavior
                        href="/Target_SCM_Supply_Chain_Managements"
                      >
                        <a className="theme-btn style-four ">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. HRMS - Target HR & Payroll Solutions */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 2 ? 9999 : 1 }}
              >
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#EE4266" }}>Target HRMS </span> -
                      HR & Payroll Solutions
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Empowering Your Workforce, Streamlining Payroll
                    </span>
                  </h3>
                  <p className="my-3">
                    Say goodbye to HR and payroll complexities with Target HRMS.
                    Tailored for diverse industries, especially manufacturing
                    and compliance-focused factories, our solution provides a
                    complete HR and payroll package. Experience the ease of
                    mobile-responsive dashboards, ensuring that your workforce
                    management is as dynamic as your business
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <GrCompliance />
                      </div>
                      <h6 className="mb-0">Regulatory Compliance</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <MdOutlineWorkHistory />
                      </div>
                      <h6 className="mb-0">Automated Payroll</h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <IoPersonCircleOutline />
                      </div>
                      <h6 className="mb-0">Self Service Portal</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <LuMonitorDot />
                      </div>
                      <h6 className="mb-0">Book Free Demo</h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link
                        legacyBehavior
                        href="/Target_HRMS_HR_and_Payroll_Solutions"
                      >
                        <a className="theme-btn style-four ">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/hrms-mockup.png"
                    alt="Video"
                  />
                </div>
              </div>
            </div>

            {/* 4. TOMS */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 3 ? 9999 : 1 }}
              >
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/mockup-erp.png"
                    alt="Video"
                  />
                </div>
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#337357" }}>TOMS </span> -
                      Streamline Your Order and Inventory Management
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Revolutionizing Your Order and Inventory Management
                    </span>
                  </h3>
                  <p className="my-3">
                    TOMS streamlines operations, manages orders, tracks
                    inventory, and ensures seamless supply chain management.
                    From order processing to inventory replenishment, TOMS
                    reduces costs and delivers exceptional customer experiences.
                    Say goodbye to manual processes—choose TOMS for simplified
                    management
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <LiaLuggageCartSolid />
                      </div>
                      <h6 className="mb-0">Order Processing Efficiency</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <CiBoxes />
                      </div>
                      <h6 className="mb-0">Inventory Optimization</h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <LiaShippingFastSolid />
                      </div>
                      <h6 className="mb-0">Supply Chain Visibility</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <LuFilePieChart />
                      </div>
                      <h6 className="mb-0">Analytics and Reporting</h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer", zIndex: 99 }}
                    >
                      <Link
                        legacyBehavior
                        href="/Target_Order_Management_System"
                      >
                        <a className="theme-btn style-four ">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. BMS - Target HR & Payroll Solutions */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 2 ? 9999 : 1 }}
              >
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#EE4266" }}>Target BMS </span> -
                      Buying House Management Solutions
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Streamline Vendor Collaboration with Target BMS
                    </span>
                  </h3>
                  <p className="my-3">
                    TARGET - BMS is a comprehensive business management solution
                    designed to streamline operations and enhance efficiency.
                    Our product includes modules tailored to address specific
                    organizational needs, offering powerful functionalities to
                    optimize processes and drive growth. From managing orders to
                    tracking finances, TARGET - BMS empowers you to succeed in
                    today’s competitive landscape.
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <TbReport />
                      </div>
                      <h6 className="mb-0">MIS Analysis Reports</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <HiBellAlert />
                      </div>
                      <h6 className="mb-0">Alerts & Reminders for Advance</h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <CiShoppingTag />
                      </div>
                      <h6 className="mb-0">
                        Vendor Registration and Fabric Bidding
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <IoCardOutline />
                      </div>
                      <h6 className="mb-0">Fabric Bidding</h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/buying_house_management">
                        <a className="theme-btn style-four ">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/bms-mockup.png"
                    alt="Video"
                  />
                </div>
              </div>
            </div>

            {/* 5. Operation Bulletin */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 1 ? 9999 : 1 }}
              >
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img src="assets/images/projects/ob-mockup.png" alt="Video" />
                </div>
                <div className="col-xl-8 col-md-12 content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#87A922" }}>Quick OB </span> -
                      Operation Bulletin
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Streamlining Your Garment Production
                    </span>
                  </h3>
                  <p className="my-3">
                    Welcome to Ask Technology, where innovation meets experience
                    in the apparel industry. Quick OB is a cloud-based
                    application designed to help garment manufacturers
                    streamline their operation bulletin planning, improve
                    accuracy, and optimize resource allocation.
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <FaBoxes />
                      </div>
                      <h6 className="mb-0">Operation Bulletin Planning</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <AiOutlineFileDone />
                      </div>
                      <h6 className="mb-0">Accurate SMV Calculation</h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <CiShop />
                      </div>
                      <h6 className="mb-0">Real-Time Production Tracking</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <MdOutlineMonitorHeart />
                      </div>
                      <h6 className="mb-0">Comprehensive Reporting</h6>
                    </div>

                    <div
                      className="content col-12 mt-3"
                      style={{ padding: 0, cursor: "pointer", zIndex: 99 }}
                    >
                      <Link legacyBehavior href="/operation_bulletin">
                        <a className="theme-btn style-four">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Inspection on go */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 2 ? 9999 : 1 }}
              >
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#EE4266" }}>Target </span> -
                      INSPECTION ON GO
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Tailored for Garment Industry Quality
                    </span>
                  </h3>
                  <p className="my-3">
                    Inspection On Go is a robust solution designed to streamline
                    garment inspection processes from order creation to quality
                    checks, optimizing workflow and ensuring transparency at
                    every stage. It integrates real-time monitoring, offline
                    capabilities, and mobile accessibility to help manufacturers
                    and quality assurance teams maintain high standards, even in
                    remote or disconnected environments.
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <GrCompliance />
                      </div>
                      <h6 className="mb-0">Buyer Order Management</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <MdOutlineWorkHistory />
                      </div>
                      <h6 className="mb-0">Factory Order Insights</h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <IoPersonCircleOutline />
                      </div>
                      <h6 className="mb-0">Inspection Audits</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <LuMonitorDot />
                      </div>
                      <h6 className="mb-0">Access Control Management</h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/garment_inspection_softwares">
                        <a className="theme-btn style-four ">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/iog-mockup.png"
                    alt="Video"
                  />
                </div>
              </div>
            </div>

            {/* 6. TARGET - GARMENTS SAMPLING */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 2 ? 9999 : 1 }}
              >
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/mockup-sampling.png"
                    alt="Video"
                  />
                </div>
                <div className="col-xl-8 col-md-12 content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#87A922" }}>TARGET </span> -
                      GARMENTS SAMPLING
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Streamlining the Sampling Process in the Apparel Industry
                    </span>
                  </h3>
                  <p className="my-3">
                    Managing samples manually in the apparel industry often
                    leads to inefficiencies, miscommunication, and costly
                    errors. Our integrated software automates and optimizes the
                    entire sampling process, providing a seamless connection
                    with purchasing, inventory, production, and delivery. This
                    ensures accurate tracking and communication between
                    departments, minimizing errors and aligning sample
                    specifications with bulk orders.
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <FaBoxes />
                      </div>
                      <h6 className="mb-0">Sampling Costing</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <AiOutlineFileDone />
                      </div>
                      <h6 className="mb-0">
                        Sample Order Entry and Assortment
                      </h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <CiShop />
                      </div>
                      <h6 className="mb-0">Purchase Management</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <MdOutlineMonitorHeart />
                      </div>
                      <h6 className="mb-0">Inventory Management</h6>
                    </div>

                    <div
                      className="content col-12 mt-3"
                      style={{ padding: 0, cursor: "pointer", zIndex: 99 }}
                    >
                      <Link legacyBehavior href="/garments_sampling_software">
                        <a className="theme-btn style-four">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Exports */}
            <div className="project-slider-item">
              <div
                className="row"
                style={{ zIndex: currentSlide === 2 ? 9999 : 1 }}
              >
                <div className="col-xl-8 col-md-12 content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                      <span style={{ color: "#87A922" }}>TARGET </span> -
                      Garment Export Management Solution
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Streamline Your Garment Exports
                    </span>
                  </h3>
                  <p className="my-3">
                    Our Garment Export Documentation application streamlines the
                    entire export process, allowing quick creation of essential
                    documents like invoices and packing lists, ensuring accurate
                    tracking and compliance.
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <TbReport />
                      </div>
                      <h6 className="mb-0">Buyer Order Management</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <HiBellAlert />
                      </div>
                      <h6 className="mb-0">Pre-Shipment Management</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <CiShoppingTag />
                      </div>
                      <h6 className="mb-0">Packing List Management</h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <IoCardOutline />
                      </div>
                      <h6 className="mb-0">Post-Shipment Management</h6>
                    </div>

                    <div
                      className="content col-12 mt-3"
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/garments_exports_software">
                        <a className="theme-btn style-four">
                          Know More
                          <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/projects/exports-mockup.png"
                    alt="Garment Export Management"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </Container>
        <div className="project-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/project-left.png"
            alt="shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div>
      </section>
      {/* Project Area end */}

      {/* Services Area start */}
      <section className="services-area px-3  bgc-gray text-white pt-75 pb-10 rel z-1">
        <Container>
          <div className="row medium-gap">
            <div className="col-xl-12 col-md-12">
              <div
                className={`${
                  matchesSmallScreen && "text-center"
                } section-title mb-60 wow fadeInUp delay-0-2s`}
              >
                <span className="sub-title mb-15">Our Services</span>
                <h2 style={{ fontFamily: "Oswald", color: "#EEF5FF" }}>
                  We Provide the Best IT Services
                </h2>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <Link href="/mobile-app-solutions">
                <div className="service-two-item service-two-item22 mx-4 wow fadeInUp delay-0-3s">
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img
                        src="assets/images/about/mobile-app.png"
                        className="icon"
                      />
                    </div>
                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        Mobile App Solutions
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Unlock the potential of mobile technology with our
                        bespoke mobile app solutions. From concept to
                        deployment, we craft intuitive and engaging apps
                        tailored to your business needs, ensuring seamless user
                        experiences across iOS and Android platforms
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-6 col-md-6">
              <Link href="/erp-software-services">
                <div className="service-two-item service-two-item22 mx-4 wow fadeInUp delay-0-4s">
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img src="assets/images/about/erp.png" className="icon" />
                    </div>
                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        ERP Software Development
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Transform your business operations with our custom ERP
                        software development services. Tailored to your unique
                        requirements, our ERP solutions streamline processes,
                        centralize data, and provide real-time insights,
                        empowering you to make informed decisions and drive
                        business growth
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-6 col-md-6">
              <Link href="/enterprise-application-services">
                <div className="service-two-item service-two-item22 mx-4 wow fadeInUp delay-0-4s">
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img src="assets/images/about/crm.png" className="icon" />
                    </div>
                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        Enterprise Application Development
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Empower your business with scalable and robust
                        enterprise applications that streamline operations and
                        enhance productivity. Our custom-built solutions are
                        designed to address your unique business challenges,
                        driving efficiency and growth
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-6 col-md-6">
              <Link href="/ecommerce-application-development">
                <div className="service-two-item service-two-item22 mx-4 wow fadeInUp delay-0-6s">
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img
                        src="assets/images/about/ecommerce.png"
                        className="icon"
                      />
                    </div>
                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        E-Commerce Application Development
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Revolutionize your online presence with our e-commerce
                        application development services. From user-friendly
                        interfaces to secure payment gateways, we create dynamic
                        e-commerce platforms that drive sales and enhance
                        customer engagement
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-6 col-md-6">
              <Link href="/UI/UX Strategy">
                <div className="service-two-item service-two-item22 mx-4 wow fadeInUp delay-0-5s">
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img src="assets/images/about/ui.png" className="icon" />
                    </div>

                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        UI/UX Strategy
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Elevate your digital presence with our UI/UX strategy
                        services. We combine innovative design principles with
                        user-centric strategies to create intuitive interfaces
                        and delightful user experiences, ensuring maximum
                        engagement and retention
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-6 col-md-6">
              <Link href="/digital-marketing-services">
                <div className="service-two-item service-two-item22 mx-4 wow fadeInUp delay-0-7s">
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img
                        src="assets/images/about/video.png"
                        className="icon"
                      />
                    </div>
                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        Digital Marketing
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Amplify your online reach and drive growth with our
                        digital marketing solutions. From SEO and PPC campaigns
                        to social media management, we help you navigate the
                        digital landscape and connect with your target audience
                        effectively, driving traffic, leads, and conversions
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {/* Services Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area px-3  py-130 rpy-100 rel z-1">
        <Container>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 new-font-play">
                  Why Choose Ask Technology
                </span>
                <h5 className="my-4">
                  At Ask Technology, we understand that the right technology
                  partner can make all the difference. Here's why we stand out
                  in the crowded tech landscape
                </h5>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-20 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <TbBulb className="nav-icons" />
                    <span>Innovation</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <SiLinkerd className="nav-icons" />
                    <span>Tailoring</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <LuBrainCircuit className="nav-icons" />
                    <span>Expertise</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <RiFocus2Line className="nav-icons" />
                    <span>Client-Centric</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap5"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap5"
                  >
                    <TbLayersLinked className="nav-icons" />
                    <span>End-to-End</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap6"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap6"
                  >
                    <SlLike className="nav-icons" />
                    <span>Excellence</span>
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/Deconstructed.png"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Innovation at the Core
                        </h3>
                        <p>
                          Our commitment to innovation drives everything we do.
                          From developing cutting-edge solutions to adopting the
                          latest technologies, we ensure your business stays
                          ahead in a rapidly evolving digital landscape
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Strategic UI/UX Assessment</li>
                          <li>
                            Thorough Contextual Research and 360° Planning
                          </li>
                          <li>
                            Advanced Wireframing &amp; Prototyping Techniques
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Tailored Solutions, Every Time
                        </h3>
                        <p>
                          Our approach is personalized to fit your specific
                          requirements. We delve deep into understanding your
                          business intricacies to provide tailor-made solutions
                          that perfectly match your objectives. No cookie-cutter
                          approaches here – just bespoke strategies for your
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Customized Strategy Development</li>
                          <li>Thorough Needs Analysis and Consultation</li>
                          <li>Personalized Product Development</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/technology.png"
                          alt="Why Choose"
                          // className="why-choose-img"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/expert.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Proven Expertise
                        </h3>
                        <p>
                          With years of experience in IT technology services, we
                          bring a wealth of expertise to the table. Our team of
                          skilled professionals is dedicated to delivering
                          solutions that not only meet but exceed expectations
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Decades of IT Technology Services Experience</li>
                          <li>In-depth Industry Expertise and Insight</li>
                          <li>Commitment to Exceeding Client Expectations</li>
                        </ul>

                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Client-Centric Approach
                        </h3>
                        <p>
                          Your success is our priority. We pride ourselves on
                          our client-centric approach, ensuring open
                          communication, transparency, and a collaborative
                          partnership. Your challenges are our challenges, and
                          your victories are our victories.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Commitment to Prioritizing Your Success</li>
                          <li>
                            Emphasis on Open Communication and Transparency
                          </li>
                          <li>Building Collaborative Partnerships</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/excellence.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap5">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-4">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/End-to-End.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          End-to-End Services
                        </h3>
                        <p>
                          From web and mobile app development to ready-to-go ERP
                          products and technology training, we offer end-to-end
                          services. This holistic approach ensures that all your
                          technology needs are met under one roof.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive Web and Mobile App Development</li>
                          <li>Ready-to-Deploy ERP Solutions</li>
                          <li>Technology Training and Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap6">
                  <div className="row gap-20 align-items-center">
                    <div className="col-lg-8">
                      <div className="why-choose-content">
                        <h3 className="text-gradient-title4">
                          Commitment to Excellence
                        </h3>
                        <p>
                          Excellence is not just a goal; it's a standard. We are
                          committed to delivering solutions that not only meet
                          high-quality benchmarks but set new standards in the
                          industry. Your success story is our measure of
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Setting High-Quality Standards</li>
                          <li>Pioneering Industry-Leading Solutions</li>
                          <li>Your Success Drives Our Pursuit of Excellence</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/Commitment.png"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </Container>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Partners Area start */}
      <OurPartners/>
      {/* Partners Area end */}

      {/* Work Process Area start */}
      <section className="work-process-area px-3  py-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Discover</h4>
                  <p>
                    From your idea to our understanding, we dive deep to shape
                    the plan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Planning</h4>
                  <p>
                    With clarity in mind, we map out every detail for seamless
                    execution
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Design &amp; Dev</h4>
                  <p>
                    Bringing ideas to life with precision in design and
                    development
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Testing</h4>
                  <p>
                    Ensuring perfection through rigorous testing for flawless
                    performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Project Delivery</h4>
                  <p>
                    From final touches to delivery, we ensure excellence every
                    step of the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area End */}

      {/* Techveel Area start */}
      <section className=" about-area-four px-3  pt-25 mb-100 rpt-0 rel z-2">
        <Container>
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-four-image rel z-1 mb-65 wow fadeInRight delay-0-2s">
                <div className="about-circle">
                  <img
                    src="assets/images/about/about-circle.png"
                    alt="Circle"
                  />
                  <img
                    className="text"
                    src="assets/images/about/about-circle-text4.png"
                    alt="Circle Text"
                    style={{ mixBlendMode: "screen" }}
                  />
                </div>
                {!matchesSmallScreen && (
                  <div className="image">
                    <img
                      src="assets/images/about/techveel.jpg"
                      alt="About"
                      style={{
                        maxWidth: "339px",
                        height: "362px",
                        objectFit: "contain",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-6 col-lg-10">
              <div className="about-four-content mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <span
                    className="sub-title mb-15"
                    style={{
                      fontFamily: "Oswald",
                      color: "#43766C",
                      fontSize: "x-large",
                      letterSpacing: "2px",
                    }}
                  >
                    TECHVEEL
                  </span>
                  <h2>
                    Our In-house Technology Training and Placement Academy
                  </h2>
                  <span className="bg-text">TECHVEEL</span>
                </div>
                <p>
                  Placement services are designed to empower individuals with
                  the skills needed to thrive in the ever-evolving tech
                  landscape. Whether you're a fresh graduate or a professional
                  looking to upskill, our diverse courses cater to all
                </p>
                <ul className="list-style-one my-30">
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Expert Instructors{" "}
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Learn from industry experts and experienced
                        professionals
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Hands-On Experience{" "}
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Gain practical skills through real-world projects
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Placement Assistance{" "}
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Our dedicated placement support helps you land your
                        dream job
                      </span>
                    </p>
                  </li>
                </ul>
                <Link
                  legacyBehavior
                  href="https://techveel.com/#technology"
                  passHref
                >
                  <a
                    className="theme-btn mt-10"
                    target="_blank"
                    style={{
                      color: "orange",
                      marginRight: 10,
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    }}
                  >
                    Discover Courses <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="https://techveel.com/" passHref>
                  <a className="theme-btn mt-10" target="_blank">
                    Explore Placements <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Techveel Area end */}

      {/* Statistics Area start */}
      <section className="statistics-area-two px-3   rel z-2 mb-100 rmb-100">
        <Container maxWidth="lg">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-10">
                  Learn About Our Company Statistics
                </span>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/programming.png"
                    alt="programming"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={500}
                  >
                    <Counter end={500} />
                  </span>
                  <span className="counter-title">Projects Delivered</span>
                  <p>
                    Showcasing our commitment to excellence, integrity, and
                    client satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-7s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/review.png"
                    alt="review"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text percent"
                    data-speed={2000}
                    data-stop={98.9}
                  >
                    <Counter end={98.9} />
                  </span>
                  <span className="counter-title">Happy clients </span>
                  <p>
                    clients happiness is our priority, reflected in our
                    impressive 98.9% satisfaction rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/reputation.png"
                    alt="review"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={25}
                  >
                    <Counter end={25} />
                  </span>
                  <span className="counter-title">Years of Experience</span>
                  <p>
                    and industry expertise, we bring a wealth of experience to
                    every project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/teamwork.png"
                    alt="reputation"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={25}
                  >
                    <Counter end={100} />
                  </span>
                  <span className="counter-title">Engineers </span>
                  <p>
                    of our team is dedicated to delivering innovative solutions
                    and driving success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Statistics Area end */}

      {/* Skills Area start */}
      <section className="skills-area px-3 ">
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <div className="skills-content mt-60 rmt-0 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span
                        className="sub-title mb-15 text-center"
                        style={{
                          fontFamily: "Oswald",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Our Tech Stack
                      </span>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <Marquee
                      direction="left"
                      pauseOnClick
                      gradient={100}
                      loop={0}
                      autoFill
                      speed={90}
                    >
                      {icons.map((icon, index) => (
                        <PartnerIcon key={index} imageName={icon} />
                      ))}
                    </Marquee>
                  </div>
                  <div className="col-lg-12 my-4">
                    <div className="section-title mb-55 container wow fadeInUp delay-0-2s">
                      {/* <span className="sub-title mb-15" style={{fontFamily:'oswald'}} >Our Tech Stack</span> */}
                      <h2
                        style={{
                          textAlign: "center",
                          fontFamily: "oswald",
                          color: "#007F73",
                        }}
                        className="text-gradient-title2"
                      >
                        Explore the robust technologies we master, powering our
                        innovative solutions and driving digital transformation
                      </h2>
                      <span className="bg-text">TECHNOLOGY</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <Marquee
                      direction="right"
                      pauseOnClick
                      gradient={100}
                      loop={0}
                      autoFill
                      speed={90}
                    >
                      {icons.map((icon, index) => (
                        <PartnerIcon key={index} imageName={icon} />
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Skills Area end */}

      {/* Blog Area end */}
      {/* Testimonials Area Three Start */}
      <Testimonials />
      {/* Testimonials Area Three End */}
      <div id="contactus">
        <ContactUsForm />
      </div>

      <BlogList />
      {/* Contact Form Section Start */}
      {!open && <ContactUsGarments TypeOF={"p"} initialValue={""} />}

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
};
export default Index;
