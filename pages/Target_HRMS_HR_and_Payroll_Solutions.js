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
                    <h2 className="text-gradient-title2 ">
                      Target HRMS - HR & Payroll Solutions
                    </h2>
                    <h5 className="text-primary">
                      Empowering Your Workforce, Streamlining Payroll
                    </h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="/assets/images/projects/hrms-mockup.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
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
                      Say goodbye to HR and payroll complexities with Target
                      HRMS. Tailored for diverse industries, especially
                      manufacturing and compliance-focused factories, our
                      solution provides a complete HR and payroll package.
                      Experience the ease of mobile-responsive dashboards,
                      ensuring that your workforce management is as dynamic as
                      your business.
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
                    <Chip label="Key Features" size="medium" />
                  </Divider>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/hrms/perform.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>Employee Management</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/hrms/process.png"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="text-muted">Attendance Tracking</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/hrms/fiscal.png"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="text-muted">Payroll Processing</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/hrms/manager.png"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="text-muted">Benefits Administration</h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/hrms/employee.png"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="text-muted">Performance Management</h5>
                  </div>
                </div>

                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/hrms/compliance.png"
                        alt="Icon"
                      />
                    </div>
                    <h5 className="text-muted">Compliance Management</h5>
                  </div>
                </div>
              </div>
            </div>
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
                          color="info"
                        />
                      </Divider>
                    </div>

                    <div className="row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="/assets/images/projects/hrms/em.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Employee Management</h3>
                          <p>
                            Involves maintaining a centralized employee database
                            to manage personnel information such as contact
                            details, employment history, and performance
                            reviews, along with providing an employee
                            self-service portal for accessing personal
                            information, submitting leave requests, and updating
                            details.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Time & Attendance </h3>
                          <p>
                            Tracking utilizes an automated system to record
                            employee attendance, hours worked, and overtime,
                            often integrating with biometric devices or mobile
                            apps for accurate time capture.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/hrms/ta.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInUp  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="/assets/images/projects/hrms/pp.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Payroll Processing </h3>
                          <p>
                            Includes comprehensive functionality to calculate
                            salaries, deductions, and taxes accurately, along
                            with automated payroll runs that cover direct
                            deposit, check printing, and tax filing.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Benefits Administration */}
                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Benefits Administration</h3>
                          <p>
                            Encompasses the management of employee benefits such
                            as health insurance, retirement plans, and flexible
                            spending accounts, including enrollment management,
                            eligibility tracking, and employee self-service for
                            benefits selection.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/hrms/ba.png"
                            alt="Why Choose"
                            className="product-features-img  "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInUp justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="/assets/images/projects/hrms/pm.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Performance Management</h3>
                          <p>
                            Involves implementing a performance appraisal system
                            for setting goals, conducting evaluations, and
                            providing feedback, supported by performance
                            dashboards and analytics for tracking employee
                            performance and identifying areas for improvement.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Compliance Management </h3>
                          <p>
                            Ensures adherence to labor laws, regulations, and
                            company policies through automated compliance alerts
                            and notifications, facilitating timely adherence to
                            regulatory requirements.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/hrms/Typing-pana.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img "
                          />
                        </div>
                      </div>
                    </div> */}

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
                                    src="/assets/images/projects/erp/statistics.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Efficiency</h4>
                                  <p>
                                    Streamline HR processes, reduce manual
                                    tasks, and improve overall efficiency
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
                                    src="/assets/images/projects/hrms/target.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Accuracy</h4>
                                  <p>
                                    Minimize errors in payroll processing and
                                    compliance management, ensuring accurate and
                                    timely payments.
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
                                    src="/assets/images/projects/erp/satisfaction.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Employee Satisfaction</h4>
                                  <p>
                                    Provide self-service options for employees,
                                    empowering them to manage their information
                                    and benefits.
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
                                    Ensure compliance with labor laws,
                                    regulations, and industry standards,
                                    reducing the risk of penalties and fines.
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
                                    src="/assets/images/projects/erp/costs.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Cost Savings</h4>
                                  <p>
                                    Reduce administrative costs associated with
                                    HR and payroll tasks
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
                                    src="/assets/images/projects/hrms/insight.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Insightful Reporting</h4>
                                  <p>
                                    Access real-time data and analytics for
                                    informed decision-making and strategic
                                    workforce planning.
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
          {!open && <ContactUsProduct TypeOF={"p"} initialValue={"HRMS"} />}
          {/* FAQ Section */}
          <section className="pb-70">
            <Container>
              <div className="section-title text-center mb-50">
                <h2 style={{ fontWeight: "700" }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div style={{ margin: "0 auto" }}>
                <FAQ code="HRMS" defaultActive={0} />
              </div>
            </Container>
          </section>

          {/* Contact Form Section End */}
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
                        product: "HRMS",
                        enquiry_details: "",
                      }}
                      validationSchema={Yup.object({
                        name: Yup.string()
                          .max(50, "should not exceed 50 characters.")
                          .required("Please provide your full name."),
                        phone_number: Yup.string().required(
                          "Please enter your phone number.",
                        ),
                        email: Yup.string()
                          .email("Please provide a valid email address.")
                          .required("Email address is required."),
                        city: Yup.string()
                          .max(50, "should not exceed 50 characters.")
                          .required("Please specify your city."),
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
                                  error={
                                    form.errors.email && form.touched.email
                                  }
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
                                      helperText={
                                        <ErrorMessage name="country" />
                                      }
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
                            <button
                              type="submit"
                              className="theme-btn style-two"
                            >
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
        </>
      </Layout>
    </>
  );
};
export default ProjectGrid;
