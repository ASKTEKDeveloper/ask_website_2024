import Link from "next/link";
import { useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
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
              <a href="#" onClick={() => active("Project")}>
                Products
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link href="Target_Order_Management_System">
                    Target Order Management Solutions
                  </Link>
                </li>
                <li>
                  <Link href="buying_house_management">
                    Target - Buying House Management
                  </Link>
                </li>

                <li>
                  <Link href="erp-for-textiles-and-garments">
                    ERP for Textile & Garment Industries{" "}
                  </Link>
                </li>
                <li>
                  <Link href="Target_SCM_Supply_Chain_Managements">
                    Target SCM - Supply Chain Management.
                  </Link>
                </li>
                {/* <li>
                  <Link href="Target_SCM_Supply_Chain_Managements">
                  Target Cargo and courier Management solution 
                  </Link>
                </li>                 */}
                <li>
                  <Link href="Target_HRMS_HR_and_Payroll_Solutions">
                    HRMS - Target HR & Payroll Solutions
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <Link
                href="Industries_we_serve"
                onClick={() => active("Careers")}
              >
                Industries
              </Link>
            </li>

            <li className="dropdown">
              <Link href="Careers" onClick={() => active("Careers")}>
                Careers
              </Link>
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
                  <Link href="Our_Engagement_Model">Engagement Model</Link>
                </li>
                {/* <li>
                  <Link href="index3">Our Team</Link>
                </li> */}
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
              <Link href="contact" onClick={() => active("contact")}>
                Contact Us
              </Link>
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

          <li className="dropdown">
            <a href="#">Products</a>
            <ul className="px-1 mt-1" style={{ minWidth: "850px" }}>
              <li className="product-card-style-img">
                <Row>
                  <Col lg="6">
                    <Link
                      href="erp-for-textiles-and-garments"
                      className="product-card-style"
                    >
                      <Row>
                        <Col xs="3">
                          <img
                            src="assets/images/logos/erp.png"
                            alt="Logo"
                            title="Logo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col xs="9" className="d-flex justify-content-start ">
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.5}
                          >
                            <Typography variant="h5" fontFamily={"Oswald"}>
                              {`TARGET - ERP `}{" "}
                              <DoubleArrowIcon className="iconarrow2" />
                            </Typography>
                            <Typography variant="subtitle2" color="gray">
                              Textile & Garment industries
                            </Typography>
                            <Typography
                              variant="caption"
                              color="gray"
                              whiteSpace={"normal"}
                            >
                              Seamlessly Track Enquiries to Shipments with Our
                              Integrated Software Solution
                            </Typography>
                          </Stack>
                        </Col>
                      </Row>
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link
                      href="buying_house_management"
                      className="product-card-style"
                    >
                      <Row>
                        <Col xs="3">
                          <img
                            src="assets/images/logos/bms.png"
                            alt="Logo"
                            title="Logo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col xs="9" className="d-flex justify-content-start ">
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.5}
                          >
                            <Typography variant="h5" fontFamily={"Oswald"}>
                              {`TARGET - BMS `}{" "}
                              <DoubleArrowIcon className="iconarrow5" />
                            </Typography>
                            <Typography variant="subtitle2" color="gray">
                              Buying House Management
                            </Typography>
                            <Typography
                              variant="caption"
                              color="gray"
                              whiteSpace={"normal"}
                            >
                              Enhance Communication and Simplify Vendor
                              Collaboration with Target BMS{" "}
                            </Typography>
                          </Stack>
                        </Col>
                      </Row>
                    </Link>
                  </Col>
                  <Col lg="6">
                    {" "}
                    <Link
                      href="Target_Order_Management_System"
                      className="product-card-style"
                    >
                      <Row>
                        <Col xs="3">
                          <img
                            src="assets/images/logos/toms.png"
                            alt="Logo"
                            title="Logo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col xs="9" className="d-flex justify-content-start ">
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.5}
                          >
                            <Typography
                              variant="h5"
                              color="#2C4E80"
                              fontFamily={"Oswald"}
                            >
                              TOMS <LocalShippingIcon className="iconarrow" />
                            </Typography>
                            <Typography variant="subtitle2" color="gray">
                              Target Order Management Solution
                            </Typography>
                            <Typography
                              variant="caption"
                              color="gray"
                              whiteSpace={"normal"}
                            >
                              Your Simple Accounting and Inventory Solution
                              Tailored for Small to Medium Corporates and
                              Wholesale Suppliers
                            </Typography>
                          </Stack>
                        </Col>
                      </Row>
                    </Link>
                  </Col>
                  <Col lg="6">
                    <Link
                      href="Target_SCM_Supply_Chain_Managements"
                      className="product-card-style"
                    >
                      <Row>
                        <Col xs="3">
                          <img
                            src="assets/images/logos/scm.png"
                            alt="Logo"
                            title="Logo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col xs="9" className="d-flex justify-content-start ">
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.5}
                          >
                            <Typography variant="h5" fontFamily={"Oswald"}>
                              TSCM
                              <LocalShippingIcon className="iconarrow3" />
                            </Typography>
                            <Typography variant="subtitle2" color="gray">
                              Target - Supply Chain Management
                            </Typography>
                            <Typography
                              variant="caption"
                              color="gray"
                              whiteSpace={"normal"}
                            >
                              Elevate Your Supply Chain Management. Enhance
                              Efficiency and Customer Satisfaction with Timely
                              Deliveries
                            </Typography>
                          </Stack>
                        </Col>
                      </Row>
                    </Link>
                  </Col>
                  <Col lg="6">
                    {" "}
                    <Link
                      href="Target_HRMS_HR_and_Payroll_Solutions"
                      className="product-card-style"
                    >
                      <Row>
                        <Col xs="3">
                          <img
                            src="assets/images/logos/hrms.png"
                            alt="Logo"
                            title="Logo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col xs="9" className="d-flex justify-content-start ">
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.5}
                          >
                            <Typography variant="h5" fontFamily={"Oswald"}>
                              TARGET - HRMS
                              <DoubleArrowIcon className="iconarrow4" />
                            </Typography>
                            <Typography variant="subtitle2" color="gray">
                              HR & Payroll Solutions
                            </Typography>
                            <Typography
                              variant="caption"
                              color="gray"
                              whiteSpace={"normal"}
                            >
                              The Top HR Software for Businesses Big and Small.
                              Easy to Use, All-in-One HR Management and Payroll
                            </Typography>
                          </Stack>
                        </Col>
                      </Row>
                    </Link>
                  </Col>                 
                  {/* <Col lg="6">
                    <Link
                      href="Target_SCM_Supply_Chain_Managements"
                      className="product-card-style"
                    >
                      <Row>
                        <Col xs="3">
                          <img
                            src="assets/images/logos/cms.png"
                            alt="Logo"
                            title="Logo"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col xs="9" className="d-flex justify-content-start ">
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.5}
                          >
                            <Typography variant="h5" fontFamily={"Oswald"}>
                              TCMS
                              <LocalShippingIcon className="iconarrow3" />
                            </Typography>
                            <Typography variant="subtitle2" color="gray">
                              Target Cargo & Courier Management solution
                            </Typography>
                            <Typography
                              variant="caption"
                              color="gray"
                              whiteSpace={"normal"}
                            >
                              The Ultimate Solution for Cargo and Courier
                              Service Providers. Guarantee Timely Deliveries and
                              Ensure Customer Satisfaction
                            </Typography>
                          </Stack>
                        </Col>
                      </Row>
                    </Link>
                  </Col> */}
                </Row>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <Link href="Industries_we_serve">Industries</Link>
          </li>

          <li className="dropdown">
            <Link href="Careers">Careers</Link>
          </li>

          <li className="dropdown">
            <a href="#">Company</a>
            <ul>
              <li>
                <Link href="about-us">About US</Link>
              </li>
              <li>
                <Link href="Our_Engagement_Model">Engagement Model</Link>
              </li>
              {/* <li>
                <Link href="index3">Our Team</Link>
              </li> */}
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <Link href="blog">Blogs</Link>
          </li>

          <li className="dropdown">
            <Link href="contact">Contact US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
