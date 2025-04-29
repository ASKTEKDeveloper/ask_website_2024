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
          <section className="project-grid-area rel z-2 py-50 rpy-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                    <h2 className="text-gradient-title ">
                      Target SCM - Supply Chain Management
                    </h2>
                    <h5 className="text-success">
                      Powering Your Supply Chain Dynamics
                    </h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="/assets/images/projects/scm-mockup.png"
                        alt="Service Details"
                        className="drp-shadow-img"
                        style={{ objectFit: "contain", maxWidth: "70%" }}
                      />
                    </div>
                    {/* <div className="d-flex justify-content-center align-items-center my-50 ">
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
                    </div> */}
                    <p>
                      Transform your supply chain with Target SCM, a versatile
                      solution applicable across industries. Boost purchase and
                      distribution processes, and gain real-time visibility into
                      your supply chain. With online tools for customer purchase
                      orders and tracking, Target SCM ensures efficiency and
                      transparency in every link of your supply chain.
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
              <div className="row justify-content-center">
                <div className="section-title text-center mb-10">
                  <Divider>
                    {/* <Chip label="Key Features" size="medium" /> */}
                  </Divider>
                </div>
                {/* <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/planning-strategy.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Supplier Management</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/time-sheet.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Inventory Optimization</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/inventory-management.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Procurement Automation</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/businessorder.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Warehouse Management</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/supply-chain.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Logistics & Distribution</h5>
                  </div>
                </div>

                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/quality-assurance.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Supplier Collaboration</h5>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Functional Flow */}
          <section className="about-area-five  rel z-1 mb-25 ">
            <Container>
              <div className="row align-items-center gap-100">
                <div className="col-lg-12">
                  <div className="about-content  rel z-1 wow fadeInLeft delay-0-2s mb-75">
                    <div className="section-title text-center rmb-40 ">
                      <span className="sub-title   mb-15">
                        Functional Flow for
                      </span>
                      <h3 className="text-gradient-title">TARGET SCM</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-50  d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
                    <img src="assets/images/flowchart/scm.png" alt="steps" />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="service-details-area px-3  rpt-100 pb-50 rpb-85">
            <Container>
              <div className="row gap-100">
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="section-title text-center">
                      <Divider>
                        <Chip
                          label="Functional Areas"
                          size="medium"
                          color="success"
                        />
                      </Divider>
                    </div>

                    <div className="row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="/assets/images/projects/scm/Logistics-amico.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Supplier Management</h3>
                          <p>
                            Supplier Management involves streamlining supplier
                            onboarding and relationship management, as well as
                            monitoring supplier performance to ensure timely
                            deliveries.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Supplier Collaboration</h3>
                          <p>
                            Involves collaborating with suppliers to improve
                            forecasting accuracy and reduce lead times by
                            sharing demand forecasts and production schedules to
                            align supply with demand.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/scm/Agreement-rafiki.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInUp  justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="/assets/images/projects/scm/Logistics-pana.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Inventory Optimization</h3>
                          <p>
                            Involves optimizing inventory levels across the
                            supply chain to minimize carrying costs while
                            implementing demand forecasting and replenishment
                            strategies for efficient inventory management.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Procurement Automation</h3>
                          <p>
                            focuses on automating procurement processes, from
                            purchase requisition to invoice reconciliation, to
                            ensure compliance with procurement policies and
                            regulations.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/scm/Port-amico.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInUp justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="/assets/images/projects/scm/Port-rafiki.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Warehouse Management</h3>
                          <p>
                            Entails efficiently managing warehouse operations,
                            including receiving, storage, and picking, while
                            implementing barcode scanning and RFID technology
                            for accurate inventory tracking.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Logistics & Distribution </h3>
                          <p>
                            Aims to plan and optimize transportation routes to
                            reduce shipping costs and improve delivery times,
                            while also tracking shipments in real-time and
                            providing visibility to stakeholders throughout the
                            supply chain.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/scm/Heavy box-amico.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
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
                                } benefits-item wow fadeInUp delay-0-3s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/costs.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Cost Reduction</h4>
                                  <p>
                                    Optimize inventory levels, reduce
                                    procurement costs, and minimize
                                    transportation expenses.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-3s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/statistics.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Improved Efficiency</h4>
                                  <p>
                                    Automate manual processes, reduce lead
                                    times, and increase productivity across the
                                    supply chain.
                                  </p>
                                </div>
                              </div>{" "}
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-3s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/vision.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Enhanced Visibility</h4>
                                  <p>
                                    Gain real-time visibility into inventory
                                    levels, order statuses, and transportation
                                    routes for better decision-making.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-3s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/collaboration.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Better Collaboration</h4>
                                  <p>
                                    Foster collaboration with suppliers and
                                    partners to improve forecasting accuracy and
                                    reduce supply chain risks.
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
                                    src="/assets/images/projects/erp/approval.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Compliance</h4>
                                  <p>
                                    Ensure compliance with regulatory
                                    requirements and internal policies, reducing
                                    the risk of fines and penalties.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-5s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/satisfaction.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Customer Satisfaction</h4>
                                  <p>
                                    Meet customer demand with on-time deliveries
                                    and accurate order fulfillment, leading to
                                    increased customer satisfaction and loyalty.
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
        {!open &&  <ContactUsProduct TypeOF={"p"} initialValue={"SCM"} />}
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
                      country:'',
                      TypeOfReq: "d",
                      product: "SCM",
                      enquiry_details: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().max(50, "should not exceed 50 characters.").required(
                        "Please provide your full name."
                      ),
                      phone_number: Yup.string().matches(/^\+?[1-9][0-9-]*(?: [0-9-]+)*$/, "Please enter a valid phone number.").required(
                  "Please enter your phone number."
                ),
                      email: Yup.string()
                        .email("Please provide a valid email address.")
                        .required("Email address is required."),
                      city: Yup.string().max(50, "should not exceed 50 characters.").required("Please specify your city."),
                      country: Yup.object().required("Please select your country."),
                      company_name: Yup.string().max(80, "should not exceed 80 characters.").required(
                        "Please specify the name of your company."
                      ),
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
