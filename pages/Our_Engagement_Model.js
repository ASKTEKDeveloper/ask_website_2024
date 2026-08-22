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
  projectSliderActive,
} from "@/src/sliderProps";
import { FaLaptopCode } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { PiRocketLaunchThin } from "react-icons/pi";
import { MdSupportAgent } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Slider from "react-slick";
import { Container, Divider, Paper, Typography } from "@mui/material";
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
import Testimonials from "./Testimonials";

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

const Our_Engagement_Model = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      {/* <PageBanner pageName={"Hire a Developer"} /> */}
      <section className="about-area-five pt-80 rpt-100 rpb-65 rel z-1">
        <Container>
          <div className="row align-items-center gap-100">
            <div className="col-lg-12 order-lg-1 order-sm-2  order-2">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title  rmb-40 text-center">
                  <span className="sub-title mb-15 text-center">
                    Explore Our Engagement Models
                  </span>
                  <h2 className="text-gradient-title3 text-center">
                    Tailored Solutions for Your Project Success
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-12 order-lg-2 order-sm-1 order-1  ">
              <div className="about-five-images rel z-1 wow fadeInUp delay-0-2s d-flex justify-content-center align-items-center ">
                <img
                  src="assets/images/model/Analytics-amico.png"
                  alt="About"
                  className="down-up-animation"
                  style={{
                    borderRadius: 20,
                    maxWidth: matchesBigScreen ? "40%" : "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="project-shapes">
            <img
              className="shape one"
              src="/assets/images/shapes/project-left.png"
              alt="shape"
            />
            <img
              className="shape two"
              src="/assets/images/shapes/services-bg-shape.png"
              alt="shape"
            />
          </div>
        </Container>
      </section>

      <section className="about-area-five pt-80 rpt-100 rpb-65 rel z-1">
        <Container>
          <div className="row align-items-center gap-100 my-2">
            <div className="col-lg-8 order-lg-1 order-sm-2  order-2">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="why-choose-content fadeInUp">
                  <h3
                    style={{ fontFamily: "oswald" }}
                    className="text-gradient-title3"
                  >
                    Dedicated Team
                  </h3>
                  <ul className="list-style-three pt-5">
                    <li>
                      Access a dedicated team of skilled professionals with
                      expertise tailored to your project requirements
                    </li>
                    <li>
                      Seamlessly integrate our dedicated team with your in-house
                      resources, fostering collaboration and knowledge sharing
                    </li>
                    <li>
                      Scale your team up or down according to project demands,
                      with the flexibility to add or remove resources as needed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 order-sm-1 order-1  ">
              <div className="rel z-1 wow fadeInRight delay-0-2s d-flex justify-content-center align-items-center ">
                <img
                  src="assets/images/model/Team.png"
                  alt="Why Choose"
                  className="why-choose-img"
                  style={{
                    borderRadius: 20,
                    maxWidth: matchesBigScreen ? "100%" : "50%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center gap-100 my-2">
            <div className="col-lg-4  ">
              <div className="rel z-1 wow fadeInRight delay-0-2s d-flex justify-content-center align-items-center ">
                <img
                  src="assets/images/model/time.png"
                  alt="Why Choose"
                  className="why-choose-img"
                  style={{
                    borderRadius: 20,
                    maxWidth: matchesBigScreen ? "100%" : "50%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-8    ">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="why-choose-content fadeInUp">
                  <div className="why-choose-content">
                    <h3
                      style={{ fontFamily: "oswald" }}
                      className="text-gradient-title3"
                    >
                      Time & Material
                    </h3>
                    <ul className="list-style-three pt-5">
                      <li>
                        Adapt to changing project requirements with the
                        flexibility to adjust scope, resources, and timelines as
                        needed.
                      </li>
                      <li>
                        Pay only for the actual time and resources utilized,
                        providing transparency and control over project costs.
                      </li>
                      <li>
                        Embrace an iterative development process, allowing for
                        continuous improvement and refinement throughout the
                        project lifecycle
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center gap-100 my-2">
            <div className="col-lg-8 order-lg-1 order-sm-2  order-2">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="why-choose-content fadeInUp">
                  <h3
                    style={{ fontFamily: "oswald" }}
                    className="text-gradient-title3"
                  >
                    Fixed Price Model
                  </h3>
                  <ul className="list-style-three pt-5">
                    <li>
                      Enjoy peace of mind with a predetermined project cost,
                      ensuring budget predictability and control
                    </li>
                    <li>
                      Define project requirements upfront to establish clear
                      deliverables and timelines
                    </li>
                    <li>
                      Transfer project risks to us, as we commit to delivering
                      the agreed-upon scope within the specified budget and
                      timeline
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-lg-2 order-sm-1 order-1  ">
              <div className="rel z-1 wow fadeInRight delay-0-2s d-flex justify-content-center align-items-center ">
                <img
                  src="assets/images/model/pay.png"
                  alt="Why Choose"
                  className="why-choose-img "
                  style={{
                    borderRadius: 20,
                    maxWidth: matchesBigScreen ? "100%" : "50%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="services-area  pt-75 pb-10 rel z-1">
        <Container>
          <div className="row medium-gap ">
            <div className="col-xl-12">
              <div className="section-title mb-60 wow text-center fadeInRight delay-0-2s">
                <span className="sub-title mb-15 text-uppercase">
                  Additional Services
                </span>
                <h3 style={{ color: "#0D9276" }}>Enhancing Your Projects</h3>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 fadeInUp ">
              <div className="shadowbox-2 fadeInUp">
                <div className="header-add">
                  <h4 className=" text-center  p-3" style={{ color: "white" }}>
                    Project Management
                  </h4>
                </div>
                <div className="benefits-item2 d-flex flex-column  wow fadeInUp delay-0-3s">
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-2">
                    <div className="icon fadeInUp text-gradient-title3 d-flex justify-content-center align-items-center ">
                      <FaLaptopCode />
                    </div>
                    <h6 className="text-center">
                      Streamline Your Project with Expert Management
                    </h6>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-center pt-20">
                      Our experienced project managers ensure seamless
                      coordination, communication, and delivery throughout the
                      project lifecycle. From initial planning to final
                      execution, we keep your project on track, on time, and
                      within budget.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 fadeInUp ">
              <div className="shadowbox-2 fadeInUp">
                <div
                  className="header-add"
                  style={{ backgroundColor: "#52D3D8" }}
                >
                  <h4 className=" text-center  p-3" style={{ color: "white" }}>
                    Quality Assurance
                  </h4>
                </div>
                <div className="benefits-item2 d-flex flex-column  wow fadeInUp delay-0-3s">
                  <div className="d-flex flex-column   flex-sm-column justify-content-center align-items-center gap-4 my-2">
                    <div
                      className="icon fadeInUp text-gradient-title3 d-flex justify-content-center align-items-center "
                      style={{ color: "#52D3D8" }}
                    >
                      <FaCheckDouble />
                    </div>
                    <h6 className="text-center">
                      Ensure Flawless Execution with Rigorous Testing
                    </h6>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-center pt-20">
                      Our dedicated QA team conducts thorough testing and
                      quality assurance measures to identify and rectify any
                      issues before deployment. We ensure your product meets the
                      highest standards of performance, reliability, and user
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 fadeInUp ">
              <div className="shadowbox-2 fadeInUp">
                <div
                  className="header-add"
                  style={{ backgroundColor: "#FF90BC" }}
                >
                  <h4 className=" text-center  p-3" style={{ color: "white" }}>
                    Post-Launch Maintenance
                  </h4>
                </div>
                <div className="benefits-item2 d-flex flex-column  wow fadeInUp delay-0-3s">
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-2">
                    <div
                      className="icon fadeInUp text-gradient-title3 d-flex justify-content-center align-items-center "
                      style={{ color: "#FF90BC" }}
                    >
                      <PiRocketLaunchThin />
                    </div>
                    <h6 className="text-center">
                      Stay Ahead with Ongoing Support and Maintenance
                    </h6>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-center pt-20">
                      Our commitment to your success extends beyond project
                      completion. We offer post-launch maintenance and support
                      services to address any issues, implement updates, and
                      enhance functionality, ensuring your solution remains
                      optimal and up-to-date.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 fadeInUp ">
              <div className="shadowbox-2 fadeInUp">
                <div
                  className="header-add"
                  style={{ backgroundColor: "#5F9DF7" }}
                >
                  <h4 className=" text-center  p-3" style={{ color: "white" }}>
                    Technical Support
                  </h4>
                </div>
                <div className="benefits-item2 d-flex flex-column  wow fadeInUp delay-0-3s">
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-2">
                    <div
                      className="icon fadeInUp text-gradient-title3 d-flex justify-content-center align-items-center "
                      style={{ color: "#5F9DF7" }}
                    >
                      <MdSupportAgent />
                    </div>
                    <h6 className="text-center">
                      Get Expert Assistance Whenever You Need It
                    </h6>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-center pt-20">
                      Our dedicated technical support team provides prompt and
                      reliable assistance for any technical queries or issues.
                      Whether it's troubleshooting, guidance, or advice, we're
                      here to ensure smooth operation and maximum efficiency of
                      your solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 fadeInUp ">
              <div className="shadowbox-2 fadeInUp">
                <div
                  className="header-add"
                  style={{ backgroundColor: "#35A29F" }}
                >
                  <h4 className=" text-center  p-3" style={{ color: "white" }}>
                    Consulting Services
                  </h4>
                </div>
                <div className="benefits-item2 d-flex flex-column  wow fadeInUp delay-0-3s">
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-2">
                    <div
                      className="icon fadeInUp text-gradient-title3 d-flex justify-content-center align-items-center "
                      style={{ color: "#35A29F" }}
                    >
                      <IoIosPeople />
                    </div>
                    <h6 className="text-center">
                      Leverage Our Expertise for Strategic Guidance
                    </h6>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-center pt-20">
                      Tap into our extensive industry knowledge and experience
                      for strategic consulting services. From technology
                      roadmaps to business process optimization, we offer
                      valuable insights and recommendations to drive your
                      project's success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 fadeInUp ">
              <div className="shadowbox-2 fadeInUp">
                <div
                  className="header-add"
                  style={{ backgroundColor: "#E9B384" }}
                >
                  <h4 className=" text-center  p-3" style={{ color: "white" }}>
                    Training and Workshops
                  </h4>
                </div>
                <div className="benefits-item2 d-flex flex-column  wow fadeInUp delay-0-3s">
                  <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-2">
                    <div
                      className="icon fadeInUp text-gradient-title3 d-flex justify-content-center align-items-center "
                      style={{ color: "#E9B384" }}
                    >
                      <GrWorkshop />
                    </div>
                    <h6 className="text-center text-success">
                      Empower Your Team with Knowledge and Skills
                    </h6>
                  </div>
                  <Divider />
                  <div>
                    <p className="text-center pt-20">
                      Enhance your team's capabilities with customized training
                      programs and workshops. Our experts provide hands-on
                      training and guidance to ensure your team is equipped with
                      the knowledge and skills needed to maximize the value of
                      your solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Testimonials />
    </Layout>
  );
};
export default Our_Engagement_Model;
