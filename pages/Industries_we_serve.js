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
import { RiShirtLine } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";

import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

import { MdOutlineRealEstateAgent } from "react-icons/md";

const Hire_a_developer = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      {/* What We Provide Area End */}
      <section className="services-area-five pt-50 pb-150 rpt-35  rpb-100 rel z-2">
        <Container>
          <div className="col-lg-12">
            <div className="about-content my-55 rel z-1 wow fadeInLeft delay-0-2s">
              <div className="section-title text-center rmb-40">
                <h2
                  className="text-gradient-title3 mb-15"
                  style={{ fontFamily: "Play", textTransform: "uppercase" }}
                >
                  Industry Exploration and Digital Transformation
                </h2>
                <span className="sub-title mb-15">
                  Delve into the various industries we operate within, where our
                  expertise has enabled companies from diverse backgrounds to
                  embrace digital technologies, facilitating smoother processes
                  and growth.
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className=" service-item-five industries-grid wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/hire/manufacturing.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content">
                  <div className="icon-title">
                    <div
                      className="icon"
                      style={{ backgroundColor: "#88D66C", borderRadius: 20 }}
                    >
                      <GiSewingMachine />
                    </div>
                    <h4>
                      {" "}
                      <Link legacyBehavior href="#">
                        Apparel Manufacturing
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Empower manufacturing enterprises with advanced technology
                      solutions for process optimization, production efficiency,
                      and supply chain integration, ensuring operational
                      excellence and competitive advantage.
                    </p>
                  </div>
                </div>
                <span className="bg-text">Manufacturing</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="  industries-grid service-item-five wow fadeInUp delay-0-4s">
                <img src="assets/images/hire/BMS.jpeg" alt="Services" />
                <div className="content">
                  <div className="icon-title">
                    <div
                      className="icon"
                      style={{ backgroundColor: "#88D66C", borderRadius: 20 }}
                    >
                      <RiShirtLine />
                    </div>
                    <h4>
                      {" "}
                      <Link legacyBehavior href="#">
                        Apparel Buying House
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Streamline your sourcing process with our expert apparel
                      buying house services, ensuring quality production, timely
                      delivery, and innovative solutions tailored to meet your
                      brand's needs.
                    </p>
                  </div>
                </div>
                <span className="bg-text">Buying House</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className=" service-item-five industries-grid wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/hire/ecommerce.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content">
                  <div className="icon-title">
                    <div
                      className="icon"
                      style={{ backgroundColor: "#88D66C", borderRadius: 20 }}
                    >
                      <CiShoppingCart />
                    </div>
                    <h4>
                      {" "}
                      <Link legacyBehavior href="#">
                        E-Commerce
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Empower e-commerce businesses with scalable and
                      feature-rich technology solutions, enabling seamless
                      online transactions, personalized shopping experiences,
                      and enhanced customer engagement.
                    </p>
                  </div>
                </div>
                <span className="bg-text">E-Commerce</span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="  industries-grid service-item-five wow fadeInUp delay-0-4s">
                <img src="assets/images/hire/supplychain.png" alt="Services" />
                <div className="content">
                  <div className="icon-title">
                    <div
                      className="icon"
                      style={{ backgroundColor: "#88D66C", borderRadius: 20 }}
                    >
                      <FaShip />
                    </div>
                    <h4>
                      {" "}
                      <Link legacyBehavior href="#">
                        Supply Chain
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Optimize supply chain operations with our comprehensive
                      software solutions, enabling efficient inventory
                      management, streamlined logistics, and enhanced
                      collaboration across the supply chain network.
                    </p>
                  </div>
                </div>
                <span className="bg-text">Supply Chain</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 round-2">
              <div className=" service-item-five industries-grid wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/hire/education.png"
                  alt="Services"
                  style={{ objectFit: "cover" }}
                />
                <div className="content">
                  <div className="icon-title">
                    <div
                      className="icon"
                      style={{ backgroundColor: "#88D66C", borderRadius: 20 }}
                    >
                      <IoSchoolSharp />
                    </div>
                    <h4>
                      {" "}
                      <Link legacyBehavior href="#">
                        Education
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Transform the education sector with our cutting-edge
                      technology solutions designed to enhance learning
                      experiences, streamline administrative processes, and
                      drive student success <br />
                      <br />
                    </p>
                  </div>
                </div>
                <span className="bg-text">Education</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="  industries-grid service-item-five wow fadeInUp delay-0-4s">
                <img src="assets/images/hire/realestate.png" alt="Services" />
                <div className="content">
                  <div className="icon-title">
                    <div
                      className="icon"
                      style={{ backgroundColor: "#88D66C", borderRadius: 20 }}
                    >
                      <MdOutlineRealEstateAgent />
                    </div>
                    <h4>
                      {" "}
                      <Link legacyBehavior href="#">
                        Real Estate
                      </Link>{" "}
                    </h4>
                  </div>
                  <div className="bottom-part">
                    <p>
                      Modernize real estate operations with our innovative
                      technology solutions, facilitating property management,
                      sales automation, and customer relationship management for
                      increased efficiency and profitability.
                    </p>
                  </div>
                </div>
                <span className="bg-text">Real Estate</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};
export default Hire_a_developer;
