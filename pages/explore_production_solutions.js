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
import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";

import OurPartners from "./OurPartners";
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

import { LiaStreamSolid } from "react-icons/lia";
import { TfiExport } from "react-icons/tfi";
import { GrIntegration } from "react-icons/gr";
import { FaBoxes } from "react-icons/fa";
import { AiOutlineFileDone } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { CiBoxes } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuFilePieChart } from "react-icons/lu";

import { HiBellAlert } from "react-icons/hi2";
import { CiShoppingTag } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
import { MdOutlineRealEstateAgent } from "react-icons/md";

import dynamic from "next/dynamic";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

import { LuMonitorDot } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import { SiLinkerd } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import { TbLayersLinked } from "react-icons/tb";
import { SlLike } from "react-icons/sl";

const GarmentManufacturing = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      <section className="about-area-two pt-75 rel z-1">
        <Container>
          <div className="row align-items-center gap-90">
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Our Products</span>
                  <h2>Streamlined Business Solutions</h2>
                </div>
                <p>
                  Elevate your business operations with our innovative software
                  solutions. Our products are designed to enhance productivity,
                  automate workflows, and provide comprehensive insights,
                  ensuring your team can focus on what matters most. From smart
                  inventory management to intuitive financial tracking, our
                  tools are crafted to adapt to your unique business needs.
                </p>
              </div>
              {/* <div className="about-btns py-3">
                <Link legacyBehavior href="#callback">
                  <a className="theme-btn style-three mt-15">
                    Get a Call Back <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div> */}
            </div>

            <div className="col-lg-6">
              <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/projects/products.png"
                  alt="Products"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>

            <section
              className="project-area px-3  overflow-hidden bg-white  rpt-100 rel z-1"
              style={{ paddingTop: 80 }}
              id="products_services"
            >
              <Container>
                <div className="product-intro mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30 text-center">
                    <h3 className="text-gradient-title2">
                      Explore Our Innovative Products
                    </h3>
                    <p>
                      Discover our range of tailored solutions designed to
                      enhance your business operations. Each product is crafted
                      with precision to meet your unique needs, helping you
                      achieve your goals efficiently.
                    </p>
                  </div>
                </div>

                {/* 3. HRMS - Target HR & Payroll Solutions */}
                <div className="row my-100">
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
                      Say goodbye to HR and payroll complexities with Target
                      HRMS. Tailored for diverse industries, especially
                      manufacturing and compliance-focused factories, our
                      solution provides a complete HR and payroll package.
                      Experience the ease of mobile-responsive dashboards,
                      ensuring that your workforce management is as dynamic as
                      your business
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

                {/* 4. TOMS */}
                <div className="row my-100">
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
                      reduces costs and delivers exceptional customer
                      experiences. Say goodbye to manual processes—choose TOMS
                      for simplified management
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

                {/* 3. Target SCM - Supply Chain Management */}
                <div className="row my-100">
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
                  <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                    <img
                      src="assets/images/projects/scm-mockup.png"
                      alt="Video"
                    />
                  </div>
                </div>
              </Container>
            </section>

            <div className="col-xl-12 ">
              <div className="about-four-content mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50 text-center">
                  <h2>Our Product Offerings</h2>
                </div>
                <ul className="list-style-one my-30">
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Business Management Software
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Our business management software simplifies processes
                        and boosts productivity by integrating various functions
                        into a single platform, enabling you to manage
                        operations with ease.
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Inventory Control Systems
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Track and manage your inventory in real-time, reducing
                        excess stock and improving order accuracy to ensure your
                        business runs smoothly.
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Financial Tracking Solutions
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Our financial tracking tools help you maintain clear
                        visibility over your financial performance, providing
                        insights for better decision-making.
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
        <div className="project-shapes">
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div>
      </section>

      {/* Partners Area start */}
      <OurPartners />
      {/* Partners Area end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-50 rel z-1">
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
          {/* <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          /> */}
          {/* <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          /> */}
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Statistics Area start */}
      <section className="statistics-area-two px-3   rel z-2 mb-100 rmb-100">
        <Container maxWidth="xl">
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
    </Layout>
  );
};
export default GarmentManufacturing;
