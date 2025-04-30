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

            <li className="dropdown">
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
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("home")}>
                Company
              </a>
              <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="about-us">About US</Link>
                </li>
                <li>
                  <Link href="Industries_we_serve">Industries</Link>
                </li>
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

            <li className="dropdown">
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
            </li>
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
            <ul className="p-0 m-0  " style={{ minWidth: "850px" }}>
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

                  <div
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
                  </div>
                </div>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          {/* services */}
          <li className="dropdown">
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
          </li>

          {/* Company */}
          <li className="dropdown">
            <a href="#">Company</a>
            <ul>
              <li>
                <Link href="about-us">About US</Link>
              </li>
              <li>
                <Link href="Industries_we_serve">Industries</Link>
              </li>
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
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
