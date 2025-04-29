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
} from "@mui/material";
import ContactUsProduct from "./ContactUsProduct";
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

import Slide from "@mui/material/Slide";

import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import ContactUsGarments from "./ContactUsGarments";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectGrid = () => {
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);

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
    BMS: "/assets/docs/BMS.pdf",
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
        SmtpPort: 587,
        Filepathattach: "",
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
                  <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s ">
                    <h2 className="text-gradient-title1">
                      <span className="text-gradient-title2">TARGET </span> -
                      Garment Export Management Solution
                    </h2>
                    <h5>Streamline Your Garment Exports</h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/projects/exports-mockup.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
                      />
                    </div>

                    <p>
                      Our Garment Export Documentation application is designed
                      to streamline the entire export process for your team,
                      allowing quick and efficient creation of essential
                      documents such as invoices for buyers and customs, along
                      with detailed size and packing information. Whether
                      integrated with your ERP system or used as a standalone
                      solution, the application supports a smooth workflow from
                      buyer order management to shipment, tracking, and
                      analysis. With its ability to handle multiple buyer
                      formats, it offers flexibility to meet specific needs and
                      ensure accurate documentation. <br />
                      <br />
                      The application covers all critical stages of the export
                      process. In the pre-shipment phase, it facilitates order
                      acceptance, sample invoicing, courier invoice generation,
                      letter of credit (LC) management, and the creation of both
                      customs and buyer invoices. It also allows for the
                      generation of precise packing lists with size-wise
                      details, ensuring clarity and consistency. Post-shipment,
                      the application manages EPCG obligations, bill of lading
                      (B/L), duty drawback entries and collections, as well as
                      payment tracking. Additionally, it accommodates other
                      required documents to ensure compliance and completion of
                      the export process.
                      <br />
                      <br /> With robust reporting capabilities on MIS
                      (Management Information Systems), this solution provides
                      vital insights and metrics to help you optimize export
                      operations and maintain control over all essential
                      documentation.
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
            </div>
          </section>

          <section className="service-details-area px-3  rpt-100 rpb-85">
            <Container>
              <div className="row gap-100">
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="section-title text-center mb-100 ">
                      <Divider>
                        <Chip
                          label="Functional Areas"
                          size="medium"
                          color="info"
                        />
                      </Divider>
                    </div>

                    <div className="mt-3 row gap-90  justify-content-center align-items-center mt-75 mb-100 ">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="assets/images/projects/exports/1.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Buyer Order Management</h3>
                          </div>
                          <p>
                            The Buyer Order Management module offers a
                            centralized platform for handling all buyer orders
                            efficiently. It enables users to store and access
                            detailed information about each order, including
                            size, quantity, and delivery timelines. This module
                            streamlines the process from order creation to
                            fulfillment, ensuring that all necessary details are
                            readily available, improving accuracy and enhancing
                            order processing efficiency.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Access detailed order information.</li>
                            <li>Improves order handling accuracy</li>
                            <li>Ensures smooth order execution.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center mb-100">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Pre-Shipment Management</h3>
                          </div>
                          <p>
                            The Pre-Shipment Management module covers all
                            essential steps leading up to the shipment of goods.
                            From order acceptance to generating sample invoices,
                            courier invoices, and managing letters of credit,
                            this module ensures that all documentation is
                            properly handled. It facilitates the creation of
                            customs and buyer invoices, streamlining the export
                            process while adhering to international trade
                            standards.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Handles order acceptance and invoicing.</li>
                            <li>Manages LC documentation.</li>
                            <li>Creates customs and buyer invoices.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/exports/2.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInUp  mb-100 justify-content-center align-items-center mb-100 ">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/exports/3.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Packing List Management</h3>
                          </div>
                          <p>
                            This module simplifies the creation of detailed
                            packing lists, including size-wise breakdowns of
                            products. It ensures that packing details are
                            accurate, which is crucial for maintaining
                            consistency and clarity during shipment. With this
                            feature, users can easily generate precise packing
                            lists that match buyer specifications, facilitating
                            a smooth handover during the shipping process.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Generates accurate packing lists.</li>
                            <li>Matches buyer specifications.</li>
                            <li>Ensures clear shipping handover.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center mb-100 ">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Post-Shipment Management</h3>
                          </div>
                          <p>
                            Once the shipment is on its way, the Post-Shipment
                            Management module handles important post-dispatch
                            processes, such as managing EPCG obligations,
                            generating and tracking bills of lading, and
                            handling duty drawback entries and collections. It
                            also assists in monitoring payments, ensuring that
                            financial transactions are tracked and recorded
                            correctly for efficient reconciliation.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Manages EPCG and duty drawback.</li>
                            <li>Tracks bills of lading.</li>
                            <li>Monitors payments for reconciliation.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6   fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image ">
                          <img
                            src="assets/images/projects/exports/4.png"
                            alt="Why Choose"
                            className="drp-shadow-img product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInUp  mb-100 justify-content-center align-items-center mb-100 ">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/exports/5.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>Documentation and Compliance</h3>
                          </div>
                          <p>
                            Ensuring compliance with export regulations is
                            crucial, and this module helps users manage the
                            necessary documents throughout the export process.
                            It provides a streamlined way to handle all required
                            paperwork, ensuring compliance with local and
                            international standards.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Manages compliance paperwork.</li>
                            <li>Adheres to export standards.</li>
                            <li>Streamlines document handling.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center ">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="blog-details-content wow fadeInUp delay-0-2s">
                          <div className="title mb-20">
                            <h3>MIS Reporting</h3>
                          </div>
                          <p>
                            The MIS Reporting module provides comprehensive
                            insights into your export activities. It generates
                            detailed reports on shipment tracking, financial
                            performance, and other key metrics, enabling users
                            to analyze and optimize their operations. With this
                            module, businesses can make data-driven decisions to
                            improve overall export efficiency.
                          </p>
                          <ul className="list-style-one pt-10 pb-40">
                            <li>Generates detailed export reports.</li>
                            <li>Provides operational insights .</li>
                            <li>Supports data-driven decisions.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6   fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image ">
                          <img
                            src="assets/images/projects/exports/6.png"
                            alt="Why Choose"
                            className="drp-shadow-img product-features-img "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Contact Form Section Start */}
          <ContactUsGarments TypeOF={"p"} initialValue={"GEA"} />
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
                      TypeOfReq: "d",
                      product: "BMS",
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
