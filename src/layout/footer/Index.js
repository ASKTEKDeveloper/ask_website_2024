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
        className="main-footer bgc-gray footer-white rel z-1"
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingTop: 18,
        }}
      >
        <div
          className="row align-items-start medium-gap"
          style={{ padding: "18px 20px 0", margin: 0 }}
        >
          <div className="col-lg-4" style={{ paddingRight: 12 }}>
            <div
              className="footer-widget widget_about wow fadeInUp delay-0-2s"
              style={{ marginBottom: 0 }}
            >
              <div
                className="footer-logo mb-20 d-flex justify-content-center align-items-center"
                style={{ marginBottom: 14 }}
              >
                <img
                  src="assets/images/logos/logo-one.png"
                  alt="Logo"
                  className="footer-logo-img"
                  style={{ maxHeight: 62, objectFit: "contain" }}
                />
              </div>
              <p
                style={{
                  color: "#EEEEEE",
                  marginBottom: 10,
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
                className="text-center"
              >
                #36,2nd floor, Railway Border Rd, opposite to Kodambakkam
                Railway Station, Akbarabad, Kodambakkam, Chennai, Tamil Nadu
                600024.
              </p>
              <h5
                className="text-center"
                style={{ marginBottom: 8, fontSize: 15 }}
              >
                Follow Us
              </h5>
              <div
                className="social-style-one text-center d-flex justify-content-center align-items-center"
                style={{ gap: 8 }}
              >
                <a
                  href="https://www.facebook.com/people/Target-ByAsktek/pfbid02yS6174HdoPoxyCWDEuxUtfwSP2y2N4qZXQ48qgr66DJuxSpnjLTbBuXXJS3Qt49Cl/?mibextid=ZbWKwL"
                  target="_blank"
                  style={{ width: 28, height: 28 }}
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://www.youtube.com/@asktechnology4871"
                  target="_blank"
                  style={{ width: 28, height: 28 }}
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  href="https://www.instagram.com/targetbyasktek/?igsh=MWF5YXE5YW5oano3NA%3D%3D"
                  target="_blank"
                  style={{ width: 28, height: 28 }}
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/askteksolutions/"
                  target="_blank"
                  style={{ width: 28, height: 28 }}
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8" style={{ paddingLeft: 12 }}>
            <div className="row g-2 align-items-start">
              <div className="col-md-6">
                <div
                  className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s"
                  style={{ marginBottom: 0, textAlign: "center" }}
                >
                  <h3
                    className="footer-title"
                    style={{
                      marginBottom: 10,
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    Quick Links
                  </h3>
                  <ul
                    className="list-style-two"
                    style={{
                      marginBottom: 0,
                      lineHeight: 1.7,
                      listStyle: "none",
                      paddingLeft: 0,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="about-us">{`About Us`}</Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link
                        legacyBehavior
                        href="Our_Engagement_Model"
                      >{`Engagement Model`}</Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="contact">{`Contact US`}</Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="Careers">{`Careers`}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s"
                  style={{ marginBottom: 0, textAlign: "center" }}
                >
                  <h3
                    className="footer-title"
                    style={{
                      marginBottom: 10,
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    Products
                  </h3>
                  <ul
                    className="list-style-two"
                    style={{
                      marginBottom: 0,
                      lineHeight: 1.7,
                      listStyle: "none",
                      paddingLeft: 0,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="erp-for-textiles-and-garments">
                        <a>Garment ERP for Knit &amp; Woven</a>
                      </Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="buying_house_management">
                        <a>Buying House Management</a>
                      </Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="garment_inspection_softwares">
                        <a>Garment Inspection Software</a>
                      </Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="operation_bulletin">
                        Operation Bulletin (QUICK OB)
                      </Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link
                        legacyBehavior
                        href="Target_HRMS_HR_and_Payroll_Solutions"
                      >
                        <a>Target HRMS – HR &amp; Payroll Solution</a>
                      </Link>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <Link legacyBehavior href="ai_solution">
                        <a>AI Solutions for Garment Manufacturing</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer-shapes">
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
        </div> */}
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
              All Rights Reserved And Designed by{" "}
              <a
                href="https://live.asktek.net/asktek.net_website_manager_ui/"
                target="_blank"
              >
                {" "}
                Ask Technology.
              </a>
            </Typography>
          </div>
        </div>
      </footer>
    </Container>
  );
};
export default Footer;
