import Layout from "@/layout";
import {
  Chip,
  Container,
  Divider,
  Dialog,
  DialogContent,
  TextField,
  Grid,
  LinearProgress,
  Autocomplete,
} from "@mui/material";
import ContactUsProduct from "./ContactUsProduct";
import React, { useMemo, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Slide from "@mui/material/Slide";
import countryList from "react-select-country-list";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectGrid = () => {
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const countryOptions = useMemo(() => countryList().getData(), []);

  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const brochuresPath = {
    ERP: "/assets/docs/ERP.pdf",
    SCM: "/assets/docs/HRMS.pdf",
    HRMS: "/assets/docs/HRMS.pdf",
    TOMS: "/assets/docs/TOMS.pdf",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", values);
      console.log("Form submitted successfully:", response.data);
      setOpen(false);
      SendMailProduct(values);
      SendMailInternal(values);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form. Please try again later.");
    }
  };

  const SendMailProduct = async (datas) => {
    try {
      const response = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: datas.email,
        subject: "Thank You for Downloading Our Product Brochure",
        text: `
        <p>Dear ${datas.name},</p>
        <p>Thank you for downloading our product brochure!</p>
        <p>We hope you find the information helpful and informative. 
        If you have any questions or would like further assistance, feel free to reach out to us.</p>
        <p>Best regards,</p>
        <p>ASK TECHNOLOGY</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `,
      });

      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending product demo email:", error);
      setOpenLoader(false);
    }
  };

  const SendMailInternal = async (datas) => {
    try {
      const subjectLine = "User Downloaded Product Brochure";

      const bodyMessage = `
<p>Dear Team,</p>
<p>A user has downloaded our product brochure from our website:</p>
<p><strong>Name:</strong> ${datas.name}</p>
<p><strong>Email:</strong> ${datas.email}</p>
<p><strong>Phone Number:</strong> ${datas.phone_number}</p>
<p><strong>Company Name:</strong> ${datas.company_name}</p>
<p><strong>City:</strong> ${datas.city}</p>
<p><strong>Country:</strong> ${datas.country.label}</p>
<p><strong>Product Name:</strong> ${datas.product}</p>
<p>Please take note of this and follow up with the user if necessary.</p>
<p>Best regards,</p>
<p>ASK TECHNOLOGY</p>
<p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
<p><a href="http://www.asktek.net">www.asktek.net</a></p>
`;
      const approvs = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: "sales@asktek.net",
        subject: subjectLine,
        text: bodyMessage,
      });

      const product = datas.product;
      const brochurePath = brochuresPath[product];
      console.log("path", brochuresPath[product]);
      const link = document.createElement("a");
      link.href = brochurePath;
      link.setAttribute("download", `brochure_${product}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setOpenLoader(false);
      Swal.fire({
        title: "Thank you!",
        text: "Your product brochure has been successfully downloaded. If you have any further questions, feel free to reach out to us.",
        icon: "success",
        confirmButtonText: "Done",
      });
    } catch (error) {
      console.error("Error sending internal email:", error);
    }
  };

  return (
    <>
      <Layout>
        <>
          <section className="project-grid-area rel z-2 pt-50 ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                    <h2 className="text-gradient-title4 ">
                      TOMS - Order Management System
                    </h2>
                    <h5 className="text-primary">
                      Streamline Your Order and Inventory Management
                    </h5>

                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="/assets/images/projects/mockup-erp.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
                      />
                    </div>

                    <div className="d-flex justify-content-center align-items-center my-50 ">
                      <div class="button">
                        <a
                          onClick={handleButtonClick}
                          style={{ color: "white" }}
                        >
                          Download Brochure
                        </a>

                        <b class="top">Click to </b>
                        <b class="bottom">Document</b>
                      </div>
                    </div>
                    <p>
                      TOMS is our comprehensive Order and Inventory Management
                      solution designed to streamline and optimize your business
                      operations. With TOMS, you can effortlessly manage your
                      orders, track inventory levels, and ensure seamless supply
                      chain management. From order processing to inventory
                      replenishment, TOMS empowers you to enhance efficiency,
                      reduce costs, and deliver exceptional customer
                      experiences. Say goodbye to manual processes and
                      inefficiencies—choose TOMS for simplified order and
                      inventory management
                    </p>
                  </div>
                  <div className="project-shapes">
                    <img
                      className="shape one"
                      src="/assets/images/shapes/project-left.png"
                      alt="shape"
                    />
                    <img
                      className="shape two"
                      src="/assets/images/shapes/project-right.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Functional Flow */}
          <section className="about-area-five  rel z-1 mb-25 ">
            <Container>
              <div className="row align-items-center gap-100">
                <div className="col-lg-12">
                  <div className="about-content  rel z-1 wow fadeInLeft delay-0-2s mb-25">
                    <div className="section-title text-center rmb-40 ">
                      <span className="sub-title   mb-15">
                        Functional Flow for
                      </span>
                      <h3 className="text-gradient-title">TOMS</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-50  d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
                    <img src="assets/images/flowchart/toms.png" alt="steps" />
                  </div>
                </div>
              </div>
            </Container>
          </section>
          <section className="service-details-area  ">
            <Container>
              <div className="row gap-100 mb-50">
                <div className="col-lg-12 ">
                  <h4 className="my-4 pb-4 text-center ">
                    Key Features{" "}
                    {/* Key Features of <span className="text-primary">TOMS</span> */}
                  </h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature-item style-two wow fadeInUp delay-0-2s">
                        <div className="icon">
                          <img
                            src="assets/images/services/4.png"
                            alt="Icon"
                            className="industries-icon"
                          />
                        </div>

                        <h4>Customer Management</h4>

                        <p>
                          involves efficiently managing customer information,
                          including contact details, purchase history, and
                          preferences, to personalize interactions and enhance
                          satisfaction. It also entails streamlining
                          communication and support processes to improve service
                          delivery.
                          <br />
                          <br />
                        </p>
                      </div>

                      <div className="feature-item style-two wow fadeInUp delay-0-2s">
                        <div className="icon">
                          <img
                            src="assets/images/services/2.png"
                            alt="Icon"
                            className="industries-icon"
                          />
                        </div>
                        <h4>Order and Sales Management</h4>
                        <p>
                          involves seamlessly processing orders from various
                          channels, including online platforms, retail stores,
                          and phone orders, with automated workflows and order
                          tracking capabilities. It further encompasses
                          generating sales orders, managing order statuses, and
                          tracking order fulfillment to ensure timely delivery
                          and customer satisfaction.
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="feature-item style-two wow fadeInDown delay-0-2s">
                        <div className="icon">
                          <img
                            src="assets/images/services/3.png"
                            alt="Icon"
                            className="industries-icon"
                          />
                        </div>

                        <h4> Inventory Management </h4>
                        <p>
                          optimizes inventory levels and minimizes stockouts by
                          accurately forecasting demand, setting reorder points,
                          and automating inventory replenishment processes. It
                          also includes tracking inventory movement, monitoring
                          stock levels in real-time, and streamlining inventory
                          operations to reduce carrying costs and improve cash
                          flow.
                        </p>
                      </div>
                      <div className="feature-item style-two wow fadeInDown delay-0-2s">
                        <div className="icon">
                          <img
                            src="assets/images/services/1.png"
                            alt="Icon"
                            className="industries-icon"
                          />
                        </div>

                        <h4> MIS Reporting</h4>

                        <p>
                          enables access to comprehensive management information
                          system (MIS) reporting tools to gain insights into
                          sales performance, inventory trends, and customer
                          behavior. It involves generating customizable reports
                          and dashboards to monitor key performance indicators
                          (KPIs), identify opportunities for improvement, and
                          make data-driven business decisions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 pt-100">
                  <div className="service-details-content">
                    <div className="section-title text-center">
                      <Divider>
                        <Chip label="Modules" size="medium" color="success" />
                      </Divider>
                    </div>

                    {/* Customer Management  */}
                    <div className="row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="/assets/images/projects/toms/cm.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Customer Management </h3>
                          <p>
                            streamlines customer data capture, organizing
                            contact details, purchase history, and preferences
                            seamlessly. It efficiently tracks interactions and
                            support tickets, enhancing customer relationships
                            and bolstering satisfaction. With intuitive
                            features, it optimizes engagement, empowering
                            businesses to drive growth effortlessly. .
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Order and Sales Management */}
                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Order and Sales Management</h3>
                          <p>
                            Effortlessly create and manage sales orders from
                            diverse channels, overseeing order statuses and
                            tracking fulfillment seamlessly. Streamline sales
                            operations with automated invoice generation and
                            comprehensive sales reporting, ensuring efficient
                            financial management.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/toms/os.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Inventory Management */}
                    <div className="row gap-90 fadeInUp  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="/assets/images/projects/toms/ir.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Inventory Management</h3>
                          <p>
                            Effectively monitor inventory levels, track stock
                            movement, and manage product catalogs, SKUs, and
                            variants with precision. Optimize inventory
                            management through automated alerts, reorder points,
                            and replenishment workflows, minimizing stockouts
                            and maximizing operational efficiency.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* MIS Reporting */}
                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>MIS Reporting</h3>
                          <p>
                            Generate customizable reports and dynamic dashboards
                            to analyze sales performance, inventory turnover,
                            and customer demographics. Monitor key metrics and
                            performance indicators to identify trends and areas
                            for improvement, enabling data-driven
                            decision-making and strategic business growth.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/toms/mis.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-50">
                      <div className="col-xl-8 col-md-12  content">
                        <h3>
                            Our Integration -{" "}
                          <span
                            style={{ fontFamily: "Oswald", color: "#31363F" }}
                          >
                            TALLY
                          </span>
                        </h3>
                        <p className="my-3">
                          Connecting Tally software to other programs or
                          databases in order to streamline corporate procedures
                          and enable data interchange is known as Tally
                          integration. This may entail integrating with
                          databases, e-commerce sites, CRMs, and other systems.
                          A variety of techniques, such as APIs, ODBC
                          interfaces, and XML interfaces, can be used to
                          accomplish integration and enable two-way data
                          transfer.
                        </p>
                      </div>
                      <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                        <img src="assets/images/tally.png" alt="Video" />
                      </div>
                    </div>
                    <div className="col-xl-12 mt-50 ">
                      <section className="services-area  pt-75 pb-10 rel z-1">
                        <div className="container">
                          <div className="row medium-gap">
                            <div className="col-xl-12">
                              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">
                                  Business Benefits
                                </span>
                                <h3 style={{ color: "#0D9276" }}>
                                  Unlocking Business Advantages
                                </h3>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/4.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Minimized Stockouts</h4>
                                  <p>
                                    Minimize stockouts, overstocking, and
                                    inventory holding costs by optimizing
                                    inventory levels and replenishment
                                    processes.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/1.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Automated Workflows</h4>
                                  <p>
                                    Automate repetitive tasks and workflows,
                                    freeing up time for strategic
                                    decision-making and driving business growth
                                    initiatives.
                                  </p>
                                </div>
                              </div>{" "}
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/8.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Enhanced Customer Satisfaction</h4>
                                  <p>
                                    Provide personalized customer experiences,
                                    efficient order fulfillment, and timely
                                    support to enhance customer satisfaction and
                                    loyalty.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/6.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Proactive Customer Service</h4>
                                  <p>
                                    Anticipate customer needs, address inquiries
                                    promptly, and resolve issues effectively to
                                    foster long-term relationships and drive
                                    repeat business.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/5.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Streamlined Operations</h4>
                                  <p>
                                    Streamline order processing, inventory
                                    management, and customer interactions to
                                    enhance operational efficiency and minimize
                                    manual errors.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/7.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Improved Product Availability</h4>
                                  <p>
                                    Ensure product availability, reduce excess
                                    inventory, and improve cash flow with
                                    accurate demand forecasting and inventory
                                    optimization strategies.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/3.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Actionable Insights</h4>
                                  <p>
                                    Gain actionable insights into sales
                                    performance, inventory trends, and customer
                                    behavior with robust MIS reporting and
                                    analytics capabilities.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-7s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/toms/2.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Informed Business Decisions</h4>
                                  <p>
                                    Make informed business decisions, identify
                                    growth opportunities, and mitigate risks
                                    based on real-time data and performance
                                    metrics.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* Contact Form Section Start */}
          {!open && <ContactUsProduct TypeOF={"p"} initialValue={"TOMS"} />}
          {/* Contact Form Section End */}
        </>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={"xs"}
          TransitionComponent={Transition}
          keepMounted
        >
          <DialogContent className=" p-0 m-0 ">
            <div className=" align-items-center bg-white">
              <div className="col-lg-12 pt-50 ">
                <div
                  className={`d-flex bg-white justify-content-center ${
                    matchesSmallScreen && "flex-column-reverse"
                  }  align-items-centercontact-info-wrap wow fadeInLeft delay-0-2s`}
                >
                  <div className={`section-title text-center`}>
                    <h4
                      className="text-gradient-title3"
                      style={{ fontFamily: "oswald" }}
                    >
                      Please fill in the below details to download our product
                      brochure
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="   rmb-55 wow fadeInRight delay-0-2s">
                  <Formik
                    initialValues={{
                      name: "",
                      phone_number: "",
                      company_name: "",
                      email: "",
                      city: "",
                      country: "",
                      TypeOfReq: "d",
                      product: "TOMS",
                      enquiry_details: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .max(50, "should not exceed 50 characters.")
                        .required("Please provide your full name."),
                      phone_number: Yup.string()
                        .matches(
                          /^\+?[1-9][0-9-]*(?: [0-9-]+)*$/,
                          "Please enter a valid phone number."
                        )
                        .required("Please enter your phone number."),
                      email: Yup.string()
                        .email("Please provide a valid email address.")
                        .required("Email address is required."),
                      city: Yup.string()
                        .max(50, "should not exceed 50 characters.")
                        .required("Please specify your city."),
                      country: Yup.object().required(
                        "Please select your country."
                      ),
                      company_name: Yup.string()
                        .max(80, "should not exceed 80 characters.")
                        .required("Please specify the name of your company."),
                    })}
                    onSubmit={handleSubmit}
                  >
                    <Form className="bg-white p-25 ">
                      <Grid container spacing={1}>
                        <Grid item xs={12} className="mb-10">
                          <Field name="name">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Name"
                                variant="outlined"
                                color="info"
                                size="small"
                                error={form.errors.name && form.touched.name}
                                helperText={<ErrorMessage name="name" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="phone_number">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Phone no"
                                variant="outlined"
                                size="small"
                                error={
                                  form.errors.phone_number &&
                                  form.touched.phone_number
                                }
                                helperText={
                                  <ErrorMessage name="phone_number" />
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="company_name">
                            {({ field, form }) => (
                              <TextField
                                size="small"
                                {...field}
                                fullWidth
                                label="Your Company Name"
                                variant="outlined"
                                error={
                                  form.errors.company_name &&
                                  form.touched.company_name
                                }
                                helperText={
                                  <ErrorMessage name="company_name" />
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="email">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                size="small"
                                label="Email"
                                variant="outlined"
                                type="email"
                                error={form.errors.email && form.touched.email}
                                helperText={<ErrorMessage name="email" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="city">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="City"
                                size="small"
                                variant="outlined"
                                error={form.errors.city && form.touched.city}
                                helperText={<ErrorMessage name="city" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} className="mb-10">
                          <Field name="country">
                            {({ field, form }) => (
                              <Autocomplete
                                options={countryOptions || []}
                                getOptionLabel={(option) => option.label}
                                value={field.value || null}
                                onChange={(event, value) =>
                                  form.setFieldValue(field.name, value)
                                }
                                onBlur={() =>
                                  form.setFieldTouched(field.name, true)
                                }
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    fullWidth
                                    label="Country"
                                    size="small"
                                    variant="outlined"
                                    error={
                                      form.errors.country &&
                                      form.touched.country
                                    }
                                    helperText={<ErrorMessage name="country" />}
                                  />
                                )}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="d-flex justify-content-center mt-25 align-items-center"
                        >
                          <button type="submit" className="theme-btn style-two">
                            Download
                            <i className="far fa-long-arrow-right" />
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog
          open={openLoader}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <LinearProgress />
        </Dialog>
      </Layout>
    </>
  );
};
export default ProjectGrid;
