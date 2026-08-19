import Link from "next/link";
import { useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Fragment } from "react";
import Slider from "react-slick";
import Hero4Slider from "@/src/components/slider/Hero4Slider";
import { projectThreeActive, servicesFiveActive } from "@/src/sliderProps";
import ProgressBar from "@/src/components/ProgressBar";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo-one.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Products
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link href="optimize_garment_manufacturing">
                    Discover Apparel ERP Solution
                  </Link>
                </li>
                <li>
                  <Link href="explore_production_solutions">
                    Explore Business Management Solution
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            {/* <li className="dropdown">
              <a href="#" onClick={() => active("services")}>
                services
              </a>
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link
                    href="mobile-app-solutions"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Mobile App Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    href="enterprise-application-services"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Enterprise Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="ecommerce-application-development"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    E-Commerce Application Development
                  </Link>
                </li>
                <li>
                  <Link href="ui-ux-strategy" style={{ whiteSpace: "nowrap" }}>
                    UI/UX Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="digital-marketing-services"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="erp-software-services"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    ERP Software Development
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}

            <li className="dropdown">
              <a href="#" onClick={() => active("home")}>
                Company
              </a>
              <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="about-us">About US</Link>
                </li>
                {/* <li>
                  <Link href="Industries_we_serve">Industries</Link>
                </li> */}
                <li>
                  <Link href="Careers">Careers</Link>
                </li>
                <li>
                  <Link href="OurTeam">Our Team</Link>
                </li>
                <li>
                  <Link href="Our_Engagement_Model">Engagement Model</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("home")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <Link href="blog" onClick={() => active("blog")}>
                Blogs
              </Link>
            </li>
            <li className="dropdown">
              <Link href="case_study" onClick={() => active("case_study")}>
                Case Study
              </Link>
            </li>

            <li className="dropdown">
              <Link href="contact" onClick={() => active("contact")}>
                Contact Us
              </Link>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("partner_with_us")}>
                Partner With Us
              </a>
              <ul style={activeSubMenu("partner_with_us")}>
                <li>
                  <Link href="partner_with_us"> Partner With Us</Link>
                </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => active("partner_with_us")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            {/* <li className="dropdown">
              <a href="#" onClick={() => active("hire_a_developer")}>
                Hire a Developer
              </a>
              <ul style={activeSubMenu("hire_a_developer")}>
                <li>
                  <Link href="hire_a_developer">Hire a Developer</Link>
                </li>
              </ul>
              <div
                className="dropdown-btn"
                onClick={() => active("hire_a_developer")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>

        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          {/* Products */}
          <li className="dropdown">
            <a href="#">Products</a>
            <ul className="p-0 m-0  " style={{ minWidth: "425px" }}>
              <li className="product-card-style-imgsw m-0 pl-2">
                <div
                  style={{
                    display: "flex",
                    direction: "row",
                    gap: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="p-0 m-0  "
                >
                  <div
                    className=" service-item-five industries-grid wow fadeInUp delay-0-2s m-0 p-0"
                    // style={{ maxHeight: "350px" }}
                  >
                    <img
                      src="assets/images/hire/manufacturing.png"
                      alt="Services"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      className="content"
                      style={{ maxWidth: "100%", bottom: 0 }}
                    >
                      <div className="icon-title">
                        <div className="icon2">
                          <img
                            src="assets/images/services/garments.png"
                            alt="Icon"
                            style={{
                              borderRadius: 20,
                              maxWidth: "110px",
                              objectFit: "contain",
                              backgroundColor: "none",
                            }}
                          />
                        </div>
                        <h4
                          style={{
                            padding: "11px",
                            borderRadius: "11px",
                            backgroundColor: "#639c78",
                            width: "fit-content",
                          }}
                        >
                          {" "}
                          <Link
                            legacyBehavior
                            href="optimize_garment_manufacturing"
                          >
                            <a
                              href="optimize_garment_manufacturing"
                              className="hovernav"
                            >
                              Discover Apparel ERP Solution
                            </a>
                          </Link>{" "}
                        </h4>
                        <div className="bottom-parts">
                          <p style={{ color: "white" }}>
                            Explore A range of Innovation Solutions Design to
                            Enhance every aspect of your Apparel Business From
                            Enquiry to Shipment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="bg-text">GARMENTS</span>
                  </div>

                  {/* <div
                    className="  industries-grid service-item-five wow fadeInUp delay-0-4s m-0 p-0 "
                    // style={{ maxHeight: "350px" }}
                  >
                    <img
                      src="assets/images/hire/garmentisnpetion.png"
                      alt="Services"
                    />
                    <div
                      className="content"
                      style={{ maxWidth: "100%", bottom: 0 }}
                    >
                      <div className="icon-title">
                        <div className="icon2">
                          <img
                            src="assets/images/services/erp11.png"
                            alt="Icon"
                            style={{
                              borderRadius: 20,
                              maxWidth: "80px",
                              objectFit: "contain",
                              backgroundColor: "none",
                            }}
                          />
                        </div>
                        <h4
                          className="bg-warning"
                          style={{
                            padding: "11px",
                            borderRadius: "11px",
                            width: "fit-content",
                          }}
                        >
                          {" "}
                          <Link
                            legacyBehavior
                            href="explore_production_solutions"
                          >
                            <a
                              href="explore_production_solutions"
                              className="hovernav2"
                            >
                              Explore Business Management Solution
                            </a>
                          </Link>{" "}
                        </h4>

                        <div className="bottom-parts">
                          <p style={{ color: "white" }}>
                            Discover a variety of Tailored Solution for
                            efficient Order Management , Inventory , Supply
                            Chain and Finance Optimization.
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="bg-text">PRODUCT</span>
                  </div> */}
                </div>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          {/* services */}
          {/* <li className="dropdown">
            <a href="#">services</a>
            <ul>
              <li>
                <Link
                  href="mobile-app-solutions"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Mobile App Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="enterprise-application-services"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Enterprise Application Development
                </Link>
              </li>
              <li>
                <Link
                  href="ecommerce-application-development"
                  style={{ whiteSpace: "nowrap" }}
                >
                  E-Commerce Application Development
                </Link>
              </li>
              <li>
                <Link href="ui-ux-strategy" style={{ whiteSpace: "nowrap" }}>
                  UI/UX Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="digital-marketing-services"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="erp-software-services"
                  style={{ whiteSpace: "nowrap" }}
                >
                  ERP Software Development
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li> */}

          {/* Company */}
          <li className="dropdown">
            <a href="#">Company</a>
            <ul>
              <li>
                <Link href="about-us">About US</Link>
              </li>
              {/* <li>
                <Link href="Industries_we_serve">Industries</Link>
              </li> */}
              <li>
                <Link href="Careers">Careers</Link>
              </li>
              <li>
                <Link href="OurTeam">Our Team</Link>
              </li>
              <li>
                <Link href="Our_Engagement_Model">Engagement Model</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          {/* Blogs */}
          <li className="dropdown">
            <Link href="blog">Blogs</Link>
          </li>
          <li className="dropdown">
            <Link href="case_study">Case Study</Link>
          </li>
          {/* Contact US */}
          <li className="dropdown">
            <Link href="contact">Contact US</Link>
          </li>

          {/* AI SOLUTION BUTTON - Compact Modern Design */}
          <li
            className="dropdown"
            style={{ marginLeft: "6px", display: "flex", alignItems: "center" }}
          >
            <Link href="ai_solution" legacyBehavior>
              <a
                className="ai-solution-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px 14px",
                  borderRadius: "50px",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "12px",
                  textDecoration: "none",
                  position: "relative",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px rgba(102, 126, 234, 0.35)",
                  letterSpacing: "0.3px",
                  lineHeight: "1.2",
                }}
              >
                {/* Rainbow Border Animation - Outer Ring */}
                <span
                  style={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "50px",
                    padding: "2px",
                    background:
                      "conic-gradient(from 0deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #9b59b6, #ff6b6b)",
                    backgroundSize: "200% 200%",
                    animation: "rainbowSpin 3s linear infinite",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                  }}
                />

                {/* AI Icon - Compact SVG */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    position: "relative",
                    zIndex: "1",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(255,255,255,0.2))",
                    }}
                  >
                    <path
                      d="M12 4C9.79086 4 8 5.79086 8 8C8 9.68629 9.04662 11.1467 10.5 11.7016V13.5L13 11.5L14.5 13.5V11.7016C15.9534 11.1467 17 9.68629 17 8C17 5.79086 15.2091 4 13 4H12Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M10 15V19M14 15V19M8 15L6 19M16 15L18 19"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="8" r="1.5" fill="#764ba2" />
                    <circle cx="9.5" cy="7" r="1" fill="#764ba2" />
                    <circle cx="14.5" cy="7" r="1" fill="#764ba2" />
                    <path
                      d="M11 8L10.5 10.5L12.5 9.5L11.5 11.5"
                      stroke="#FFD700"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="#FFD700"
                      fillOpacity="0.3"
                    />
                  </svg>
                  <span style={{ fontSize: "11px" }}>AI</span>
                  <span
                    style={{
                      fontSize: "9px",
                      opacity: "0.7",
                      fontWeight: "400",
                    }}
                  >
                    Solution
                  </span>
                  <span
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "20px",
                      padding: "1px 6px",
                      fontSize: "7px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.3px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      animation: "pulse 1.5s ease-in-out infinite",
                      marginLeft: "1px",
                    }}
                  >
                    New
                  </span>
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes rainbowSpin {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        .ai-solution-btn:hover {
          transform: scale(1.05) translateY(-1px);
          box-shadow: 0 4px 20px rgba(102, 126, 234, 0.5);
        }

        .ai-solution-btn:hover span[style*="rainbowSpin"] {
          animation-duration: 1.5s;
        }

        .ai-solution-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </nav>
  );
};

export default Menu;
