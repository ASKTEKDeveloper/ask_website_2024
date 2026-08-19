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
import CloseIcon from "@mui/icons-material/Close";

import Slide from "@mui/material/Slide";
import ContactUsGarments from "./ContactUsGarments";
import countryList from "react-select-country-list";
import FAQ from "@/src/components/FAQ";

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
    ERP: "/assets/docs/ERP.pdf",
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
        SmtpPort: 587,
        Filepathattach: "",
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
<p><strong>Product Name :</strong> ${datas.product}</p>
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
                    <h2>TARGET - ERP for Textile & Garment Industries</h2>
                    <h5>
                      Unleashing Excellence in Textile & Garment Manufacturing
                    </h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/projects/erp-mockup.png"
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
                      Elevate your textile and garment manufacturing with
                      TARGET, our comprehensive ERP solution. Tailored for
                      manufacturers and exporters, TARGET streamlines production
                      processes, optimizes inventory management, and simplifies
                      export documentation. Experience efficiency like never
                      before, and watch your operations seamlessly align with
                      global standards.
                    </p>
                  </div>
                  <div className="project-shapes">
                    <img
                      className="shape one"
                      src="assets/images/shapes/project-left.png"
                      alt="shape"
                    />
                    <img
                      className="shape two"
                      src="assets/images/shapes/project-right.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="section-title text-center ">
                  <Divider>
                    {/* <Chip label="Key Features" size="medium" /> */}
                  </Divider>
                </div>
              </div>
            </div>
          </section>

          <section className="about-area-five  rel z-1 mb-50 ">
            <Container>
              <div className="row align-items-center gap-100">
                <div className="col-lg-12">
                  <div className="about-content  rel z-1 wow fadeInLeft delay-0-2s mb-75">
                    <div className="section-title text-center rmb-40 ">
                      <span className="sub-title mb-15">
                        Functional Flow for
                      </span>
                      <h3 className="text-gradient-title2">TARGET ERP</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-50  d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
                    <img src="assets/images/flowchart/erp.png" alt="steps" />
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
                    <div className="section-title text-center mb-4">
                      <Divider>
                        <Chip
                          label="Functional Areas"
                          size="medium"
                          color="info"
                        />
                      </Divider>
                    </div>

                    {/* Supply Chain Integration */}
                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Order Processing </h3>
                          <p>
                            Entails seamlessly handling customer orders and
                            overseeing order fulfillment operations, including
                            the generation of invoices, packing slips, and
                            shipping labels
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/orderpp.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Order Processing */}
                    <div className="row gap-90 fadeInUp  justify-content-center align-items-center mt-75">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/erp/ssm.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Supply Chain Integration</h3>
                          <p>
                            Facilitates collaboration with suppliers and
                            distributors by tracking shipments, managing
                            supplier performance, and optimizing procurement
                            processes.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Inventory Management */}
                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center mt-75">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Inventory Management</h3>
                          <p>
                            Involves optimizing inventory levels through
                            advanced forecasting techniques to minimize
                            stockouts, alongside managing multi-location
                            warehouses and monitoring material movements.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/im.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Quality Control */}
                    <div className="row gap-90   fadeInUp justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/erp/Manufacturing.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Quality Control</h3>
                          <p>
                            Measures are implemented throughout the production
                            process, including the capture and analysis of
                            quality data to enhance product quality and
                            compliance
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Production Management */}
                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Production Management</h3>
                          <p>
                            Aims to optimize efficiency by implementing
                            real-time monitoring and scheduling to streamline
                            processes. This involves overseeing the tracking of
                            raw materials, work-in-progress, and finished goods
                            to ensure smooth operations throughout the
                            production cycle
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/ppp.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    {/* Production Management */}
                    <div className="mt-3 row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="assets/images/projects/erp/finance.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Financial Management</h3>
                          <p>
                            {" "}
                            Automates processes such as invoicing, billing, and
                            payment processing, while also generating financial
                            reports like profit and loss statements and balance
                            sheets
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Commercial Invoicing */}
                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Commercial Invoicing</h3>
                          <p>
                            Generate professional invoices tailored to global
                            buyers' requirements, ensuring smooth transactions
                            and financial compliance.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/erp/ci.png"
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
                                <h3 style={{ color: "#8758FF" }}>
                                  Unlocking Business Advantages
                                </h3>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-4s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/time-management.png"
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
                                    Streamline processes and eliminate manual
                                    tasks to increase operational efficiency
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-6s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/vision.png"
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
                                    Gain real-time insights into production,
                                    inventory, and financial data for informed
                                    decision-making.
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
                                    src="assets/images/projects/erp/costs.png"
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
                                    Optimize inventory levels, minimize
                                    stockouts, and reduce production downtime to
                                    lower costs.
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
                                    src="assets/images/projects/erp/satisfaction.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Increased Customer Satisfaction</h4>
                                  <p>
                                    Deliver products on time and meet quality
                                    standards to enhance customer satisfaction.
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
                                    src="assets/images/projects/erp/approval.png"
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
                                    Ensure compliance with industry regulations
                                    and standards, reducing the risk of
                                    penalties, fines, and litigation.
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
                                    src="assets/images/projects/erp/maximize.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Scalability</h4>
                                  <p>
                                    Scale your operations seamlessly as your
                                    business grows, with the flexibility to add
                                    new features and modules.
                                  </p>
                                </div>
                              </div>{" "}
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
          {!open && <ContactUsGarments TypeOF={"p"} initialValue={"GERP"} />}
          {/* Contact Form Section End */}
          {/* FAQ Section */}
          <section className="pb-70">
            <Container>
              <div className="section-title text-center mb-50">
                <h2 style={{ fontWeight: "700" }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div style={{ margin: "0 auto" }}>
                <FAQ code="GERP" defaultActive={0} />
              </div>
            </Container>
          </section>
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
                      product: "ERP",
                      enquiry_details: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .max(50, "should not exceed 50 characters.")
                        .required("Please provide your full name."),
                      phone_number: Yup.string()
                        .matches(
                          /^\+?[1-9][0-9-]*(?: [0-9-]+)*$/,
                          "Please enter a valid phone number.",
                        )
                        .required("Please enter your phone number."),
                      email: Yup.string()
                        .email("Please provide a valid email address.")
                        .required("Email address is required."),
                      city: Yup.string().required("Please specify your city."),
                      country: Yup.object().required(
                        "Please select your country.",
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
