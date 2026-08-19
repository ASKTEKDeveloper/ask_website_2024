import { Container, Typography } from "@mui/material";
import Link from "next/link";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl">
      <footer
        className="main-footer bgc-gray footer-white rel z-1  "
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <div className="row p-50 pb-0 medium-gap">
          <div className="col-lg-4">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-30 d-flex justify-content-center align-items-center">
                <img
                  src="assets/images/logos/logo-one.png"
                  alt="Logo"
                  className="footer-logo-img"
                />
              </div>
              <p style={{ color: "#EEEEEE" }} className="text-center">
                #36,2nd floor, Railway Border Rd, opposite to Kodambakkam
                Railway Station, Akbarabad, Kodambakkam, Chennai, Tamil Nadu
                600024.
              </p>
              <h5 className="text-center">Follow Us</h5>
              <div className="social-style-one text-center d-flex justify-content-center align-items-center ">
                <a
                  href="https://www.facebook.com/people/Target-ByAsktek/pfbid02yS6174HdoPoxyCWDEuxUtfwSP2y2N4qZXQ48qgr66DJuxSpnjLTbBuXXJS3Qt49Cl/?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://www.youtube.com/@asktechnology4871"
                  target="_blank"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  href="https://www.instagram.com/targetbyasktek/?igsh=MWF5YXE5YW5oano3NA%3D%3D"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/askteksolutions/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="about-us">{`About Us`}</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="Our_Engagement_Model"
                      >{`Engagement Model`}</Link>
                    </li>
                    {/* <li>
                      <Link
                        legacyBehavior
                        href="Industries_we_serve"
                      >{`Industries`}</Link>
                    </li> */}
                    <li>
                      <Link legacyBehavior href="contact">{`Contact US`}</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="Careers">{`Careers`}</Link>
                    </li>
                    {/* <li>
                      <Link
                        legacyBehavior
                        href="hire_a_developer"
                      >{`Hire a Developer`}</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="mobile-app-solutions">
                        <a>Mobile App Solutions</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="enterprise-application-services"
                      >
                        <a>Enterprise Application Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="ecommerce-application-development"
                      >
                        <a>Ecommerce Application Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="ui-ux-strategy">
                        <a>UI/UX Strategy</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="digital-marketing-services">
                        <a>Digital Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="erp-software-services">
                        <a>ERP Software Development</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Products</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link
                        legacyBehavior
                        href="Target_Order_Management_System"
                      >
                        <a>Target Order Management Solutions</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="buying_house_management">
                        <a>TARGET BMS - Buying house management</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="erp-for-textiles-and-garments">
                        <a>ERP for Textile & Garment Industries</a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="Target_SCM_Supply_Chain_Managements"
                      >
                        Target SCM - Supply Chain Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="Target_HRMS_HR_and_Payroll_Solutions"
                      >
                        <a>HRMS - Target HR & Payroll Solutions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shapes">
          <img
            className="shape one"
            src="assets/images/footer/footer-bg-weve-shape.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/footer/footer-bg-line-shape.png"
            alt="Shape"
          />
          <img
            className="shape three wow fadeInRight delay-0-8s"
            src="assets/images/footer/footer-right.png"
            alt="Shape"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center text-center">
          <div>
            <Typography
              variant="caption"
              textTransform="uppercase"
              textAlign="center"
              width={"100%"}
              className="text-center"
              color="#C9D7DD"
              mb={3}
              fontSize={matchesSmallScreen && "8px"}
            >
              © Copyright 2024 by Ask Technology. <br />
              All Rights Reserved And Designed by <a href="http://vc.asktek.net/ASK_WEB_ADMIN_PANEL_UI" target="_blank"> Ask Technology.</a>
            </Typography>
          </div>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
