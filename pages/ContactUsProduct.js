import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import {
  Container,
  Grid,
  Button,
  Dialog,
  DialogContent,
  TextField,
  MenuItem,
  LinearProgress,
  Autocomplete,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import countryList from "react-select-country-list";
import Slide from "@mui/material/Slide";
import { BsLightningCharge, BsCpu } from "react-icons/bs";
import { HiOutlineChip } from "react-icons/hi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactUsProduct = ({ TypeOF, initialValue }) => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const countryOptions = useMemo(() => countryList().getData(), []);
  const isAI = initialValue === "AI" || TypeOF === "ai";

  const handleButtonClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, [7000]);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const servicesMapping = {
    MobileAppSolutions: "Mobile App Solutions",
    EnterpriseAppDevelopment: "Enterprise Application Development",
    EcommerceAppDevelopment: "E-commerce Application Development",
    UIUX: "UI/UX Strategy",
    DigitalMarketing: "Digital Marketing",
    ERPDevelopment: "ERP Software Development",
    AI: "AI Solutions for Garment Manufacturing",
  };

  const productsMapping = {
    GERP: "Garment ERP Software for Knit and Woven (RMG)",
    TBMS: "Buying House Management",
    IOG: "Garment Inspection Software",
    ERP: "Garment ERP for Brands",
    OB: "Operation Bulletin (QUICK OB)",
    HRMS: "Target HRMS – HR & Payroll Solution",
    AI: "AI Solutions for Garment Manufacturing",
    // SCM: "Target SCM - Supply Chain Management",
    // TOMS: "TOMS - Target Order Management Solutions",
    // AI: "AI Solutions for Garment Manufacturing",
  };

  const garmentsMapping = {
    SM: "Sampling Module",
    IOG: "Garment Inspection Software",
    GERP: "Garment ERP Software for Knit and Woven (RMG)",
    GEA: "Garment Export Application",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", values);
      console.log("Form submitted successfully:", response.data);
      setOpen(false);
      TypeOF === "s" ? SendMailService(values) : SendMailProduct(values);
      SendMailInternal(values);
      Swal.fire({
        title: isAI ? "🚀 AI Solutions Inquiry Received!" : "Thank you!",
        text: isAI
          ? "Your AI Solutions inquiry has been submitted successfully. Our AI experts will get back to you shortly with innovative solutions tailored for your fashion business."
          : TypeOF === "s"
            ? "Your service request has been submitted successfully. Our team will get back to you shortly."
            : "Your product demo request has been submitted successfully. We'll get back to you shortly to schedule the demo.",
        icon: "success",
        confirmButtonText: isAI ? "Explore AI" : "Done",
        confirmButtonColor: isAI ? "#764ba2" : "#1976d2",
      }).then((result) => {
        if (result.isConfirmed) {
          resetForm();
        }
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Error submitting form. Please try again later.");
    } finally {
      setOpenLoader(false);
      setSubmitting(false);
    }
  };

  const SendMailProduct = async (datas) => {
    try {
      const productName = isAI
        ? "AI Solutions for Garment Manufacturing"
        : productsMapping[datas.product] || datas.product;

      const response = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: datas.email,
        subject: isAI
          ? "Your AI Solutions Inquiry Confirmation"
          : "Your Product Demo Request Confirmation",
        text: `
          <p>Dear ${datas.name},</p>
          <p>Thank you for your interest in our <b>${productName}</b> ${isAI ? "AI solutions" : "demo"}!</p>
          <p>Your request has been received successfully. We're excited to assist you further.</p>
          ${
            isAI
              ? `
          <p>Our AI experts will review your business requirements and get back to you with tailored AI solutions that can transform your fashion operations.</p>
          <p>We'll help you leverage AI for:</p>
          <ul>
            <li>Smart inventory management</li>
            <li>Predictive analytics</li>
            <li>Automated quality control</li>
            <li>Intelligent production planning</li>
          </ul>
          `
              : `
          <p>Our team will review your request and get back to you shortly to schedule the demo.</p>
          `
          }
          <p>If you have any immediate questions or concerns, please don't hesitate to contact us.</p>
          <p>Best Regards,</p>
          <p>ASK Technology</p>
          <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
          <p><a href="http://www.asktek.net">www.asktek.net</a></p>
        `,
      });
      setOpen(false);
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending product demo email:", error);
      setOpenLoader(false);
    }
  };

  const SendMailService = async (datas) => {
    try {
      const serviceName = isAI
        ? "AI Solutions for Garment Manufacturing"
        : servicesMapping[datas.product] || datas.product;

      const approvs = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: datas.email,
        subject: isAI
          ? "Your AI Solutions Inquiry Confirmation"
          : "Your Service Request Confirmation",
        text: `
        <p>Dear ${datas.name},</p>
        <p>Thank you for your interest in our <b>${serviceName}</b></p>
        <p>Your service request has been received successfully. We're excited to assist you further.</p>
        ${
          isAI
            ? `
        <p>Our AI team will contact you shortly to discuss how our intelligent solutions can revolutionize your fashion business operations.</p>
        <p>With Target AI Solutions, you can expect:</p>
        <ul>
          <li>AI-powered data conversion from PDF techpacks</li>
          <li>Smart production planning and control</li>
          <li>Real-time inventory optimization</li>
          <li>Intelligent sales order management</li>
        </ul>
        `
            : `
        <p>Our team will review your request and get back to you shortly.</p>
        `
        }
        <p>If you have any immediate questions or concerns, please don't hesitate to contact us.</p>
        <p>Best Regards,</p>
        <p>ASK Technology</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `,
        SmtpPort: 587,
        Filepathattach: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error sending service request email:", error);
      setOpenLoader(false);
    }
  };

  const SendMailInternal = async (datas) => {
    try {
      const productName = isAI
        ? "AI Solutions for Garment Manufacturing"
        : TypeOF === "s"
          ? servicesMapping[datas.product] || datas.product
          : productsMapping[datas.product] || datas.product;

      const subjectLine = isAI
        ? "New AI Solutions Inquiry Received: " + productName
        : TypeOF === "s"
          ? "New Service Request Received: " + productName
          : "New Product Demo Request Received: " + productName;

      const bodyMessage = isAI
        ? `
        <p>Dear Team,</p>
        <p>A new AI Solutions inquiry has been received from our website:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Company Name:</strong> ${datas.company_name}</p>
        <p><strong>City:</strong> ${datas.city}</p>
        <p><strong>Country:</strong> ${datas.country.label}</p>
        <p><strong>AI Solution Interest:</strong> ${productName}</p>
        <p><strong>Additional Details:</strong></p>
        <p>${datas.enquiry_details || "No additional details provided"}</p>
        <p>Please review the inquiry and assign to the AI solutions team for follow-up.</p>
        <p>Best regards,</p>
        <p>ASK TECHNOLOGY</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `
        : TypeOF === "s"
          ? `
        <p>Dear Team,</p>
        <p>A new service request has been received from our website:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Company Name:</strong> ${datas.company_name}</p>
        <p><strong>City:</strong> ${datas.city}</p>
        <p><strong>Country:</strong> ${datas.country.label}</p>
        <p><strong>Service :</strong> ${productName}</p>
        <p><strong>Other Details:</strong></p>
        <p>${datas.enquiry_details}</p>
        <p>Please review the request and respond accordingly.</p>
        <p>Best regards,</p>
        <p>ASK TECHNOLOGY</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `
          : `
        <p>Dear Team,</p>
        <p>A new product demo request has been received from the website contact form:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Company Name:</strong> ${datas.company_name}</p>
        <p><strong>City:</strong> ${datas.city}</p>
        <p><strong>Country:</strong> ${datas.country.label}</p>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Enquiry Details:</strong></p>
        <p>${datas.enquiry_details}</p>
        <p>Please review the request and respond accordingly.</p>
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
    } catch (error) {
      console.error("Error sending internal email:", error);
    }
  };

  return (
    <>
      {/* Sticky Button - Fixed position to right edge */}
      <div className="sticky-button-container">
        <Button
          onClick={handleButtonClick}
          variant="contained"
          className={`sticky-button ${isAI ? "ai-button" : ""}`}
          style={
            isAI
              ? {
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: "700",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  letterSpacing: "0.5px",
                  textTransform: "none",
                  minWidth: "auto",
                  height: "auto",
                  lineHeight: "1.4",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  animation: "glowing 1500ms infinite",
                }
              : {
                  backgroundColor: "#FF7F3E",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textTransform: "none",
                  lineHeight: "1.4",
                  animation: "glowing 1500ms infinite",
                }
          }
        >
          {isAI ? (
            <>
              <BsLightningCharge style={{ fontSize: "1rem" }} />
              Unlock AI
            </>
          ) : (
            "Book Demo"
          )}
        </Button>
      </div>

      {/* Contact Form Section */}
      <section
        id="callback"
        className={`contact-form-area pb-100 px-3 rpy-100 mt-100 mb-4 bgs-cover ${isAI ? "" : ""}`}
        style={{
          backgroundImage: isAI
            ? "inherit"
            : "url(assets/images/background/feature-bg.jpg)",
        }}
      >
        <Container>
          <div
            className={`row gap-100 align-items-center shadowbox-2 ${isAI ? "ai-form-container" : "bg-white"}`}
            style={
              isAI
                ? {
                    background: "white",
                    borderRadius: "30px",
                    boxShadow: "0 20px 60px rgba(102, 126, 234, 0.15)",
                    padding: "30px",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                  }
                : {}
            }
          >
            <div className="col-lg-12 pt-50">
              <div
                className={`d-flex ${isAI ? "bg-transparent" : "bg-white"} justify-content-center ${
                  matchesSmallScreen && "flex-column-reverse"
                } align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s`}
              >
                <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                  <img
                    src={
                      isAI
                        ? "/assets/images/projects/erp/AI-amico.png"
                        : TypeOF == "s"
                          ? "/assets/images/projects/erp/Calling-amico.png"
                          : "/assets/images/projects/erp/Demo-amico.png"
                    }
                    alt="Why Choose"
                    style={{ maxWidth: isAI ? "200px" : "180px" }}
                  />
                </div>
                <div
                  className={`section-title mb-40 ${matchesSmallScreen && "text-center"}`}
                >
                  {isAI ? (
                    <>
                      <span
                        className="sub-title mb-10"
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea, #764ba2)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "700",
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <HiOutlineChip style={{ fontSize: "1.2rem" }} />
                        AI-Powered Solutions
                      </span>
                      <h2
                        style={{
                          fontSize: "2rem",
                          fontWeight: "800",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          marginBottom: "10px",
                        }}
                      >
                        Transform Your Fashion Business <br />
                        <span
                          style={{
                            background:
                              "linear-gradient(to right, #ffd700, #f7971e)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          with AI Innovation
                        </span>
                      </h2>
                      <p style={{ color: "#555", fontSize: "0.95rem" }}>
                        Leverage AI to optimize operations, predict trends, and
                        make data-driven decisions.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2
                        className="text-gradient-title2"
                        style={{ fontSize: "2rem" }}
                      >
                        {TypeOF == "s"
                          ? "Request a Call Back Today"
                          : "Request a Demo Today"}
                      </h2>
                      <span
                        className="sub-title mb-10 text-gradient-title2"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {TypeOF == "s"
                          ? "Explore Our Services"
                          : "Experience Our Products"}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="rmb-55 wow fadeInRight delay-0-2s">
                <Formik
                  initialValues={{
                    name: "",
                    phone_number: "",
                    company_name: "",
                    email: "",
                    city: "",
                    country: "",
                    TypeOfReq: isAI ? "ai" : TypeOF,
                    product: isAI ? "AI" : initialValue,
                    enquiry_details: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .matches(/^[A-Za-z\s]+$/, "enter valid name")
                      .max(50, "should not exceed 50 characters.")
                      .required("Please provide your full name."),

                    phone_number: Yup.string()
                      .matches(
                        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                        "Please provide a valid phone number.",
                      )
                      .required("Please enter your phone number."),

                    email: Yup.string()
                      .matches(
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        "Please provide a valid email address",
                      )
                      .required("Email address is required."),

                    city: Yup.string()
                      .max(50, "should not exceed 50 characters.")
                      .matches(/^[A-Za-z\s]+$/, "enter valid city name"),
                    country: Yup.object().required(
                      "Please select your country.",
                    ),

                    company_name: Yup.string()
                      .max(80, "should not exceed 80 characters.")
                      .required("Please specify the name of your company."),
                    enquiry_details: Yup.string().max(
                      200,
                      "should not exceed 200 characters.",
                    ),
                  })}
                  onSubmit={handleSubmit}
                >
                  <Form
                    className={`p-10 m-25 ${isAI ? "bg-transparent" : "bg-white"}`}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field name="name">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Name"
                              variant="standard"
                              color={isAI ? "secondary" : "info"}
                              size="small"
                              error={form.errors.name && form.touched.name}
                              helperText={<ErrorMessage name="name" />}
                              InputLabelProps={{
                                style: { fontSize: "0.85rem" },
                              }}
                              inputProps={{ style: { fontSize: "0.9rem" } }}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="phone_number">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Phone no"
                              variant="standard"
                              color={isAI ? "secondary" : "info"}
                              size="small"
                              error={
                                form.errors.phone_number &&
                                form.touched.phone_number
                              }
                              helperText={<ErrorMessage name="phone_number" />}
                              InputLabelProps={{
                                style: { fontSize: "0.85rem" },
                              }}
                              inputProps={{ style: { fontSize: "0.9rem" } }}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="company_name">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Your Company Name"
                              variant="standard"
                              color={isAI ? "secondary" : "info"}
                              size="small"
                              error={
                                form.errors.company_name &&
                                form.touched.company_name
                              }
                              helperText={<ErrorMessage name="company_name" />}
                              InputLabelProps={{
                                style: { fontSize: "0.85rem" },
                              }}
                              inputProps={{ style: { fontSize: "0.9rem" } }}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="email">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Email"
                              variant="standard"
                              type="email"
                              color={isAI ? "secondary" : "info"}
                              size="small"
                              error={form.errors.email && form.touched.email}
                              helperText={<ErrorMessage name="email" />}
                              InputLabelProps={{
                                style: { fontSize: "0.85rem" },
                              }}
                              inputProps={{ style: { fontSize: "0.9rem" } }}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={isAI ? 6 : 4}>
                        <Field name="city">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="City"
                              variant="standard"
                              color={isAI ? "secondary" : "info"}
                              size="small"
                              error={form.errors.city && form.touched.city}
                              helperText={<ErrorMessage name="city" />}
                              InputLabelProps={{
                                style: { fontSize: "0.85rem" },
                              }}
                              inputProps={{ style: { fontSize: "0.9rem" } }}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={isAI ? 6 : 4}>
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
                                  variant="standard"
                                  color={isAI ? "secondary" : "info"}
                                  size="small"
                                  error={
                                    form.errors.country && form.touched.country
                                  }
                                  helperText={<ErrorMessage name="country" />}
                                  InputLabelProps={{
                                    style: { fontSize: "0.85rem" },
                                  }}
                                  inputProps={{ style: { fontSize: "0.9rem" } }}
                                />
                              )}
                            />
                          )}
                        </Field>
                      </Grid>

                      {/* Hide dropdown for AI - only show hidden field */}
                      {!isAI && TypeOF == "s" ? (
                        <Grid item xs={12} sm={4}>
                          <Field name="product">
                            {({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                select
                                label="Services"
                                variant="standard"
                                size="small"
                                InputLabelProps={{
                                  style: { fontSize: "0.85rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.9rem" } }}
                              >
                                <MenuItem value="MobileAppSolutions">
                                  Mobile App Solutions
                                </MenuItem>
                                <MenuItem value="EnterpriseAppDevelopment">
                                  Enterprise Application Development
                                </MenuItem>
                                <MenuItem value="EcommerceAppDevelopment">
                                  E-Commerce Application Development
                                </MenuItem>
                                <MenuItem value="UIUX">UI/UX Strategy</MenuItem>
                                <MenuItem value="DigitalMarketing">
                                  Digital Marketing
                                </MenuItem>
                                <MenuItem value="ERPDevelopment">
                                  ERP Software Development
                                </MenuItem>
                                <MenuItem value="AI">
                                  AI Solutions for Garment Manufacturing
                                </MenuItem>
                              </TextField>
                            )}
                          </Field>
                        </Grid>
                      ) : !isAI && TypeOF != "s" ? (
                        <Grid item xs={12} sm={4}>
                          <Field name="product">
                            {({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                select
                                label="Products"
                                variant="standard"
                                size="small"
                                InputLabelProps={{
                                  style: { fontSize: "0.85rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.9rem" } }}
                              >
                                <MenuItem value="GERP">
                                  Garment ERP Software for Knit and Woven (RMG)
                                </MenuItem>
                                <MenuItem value="TBMS">
                                  Buying House Management
                                </MenuItem>
                                <MenuItem value="IOG">
                                  Garment Inspection Software
                                </MenuItem>
                                <MenuItem value="ERP">
                                  Garment ERP for Brands
                                </MenuItem>
                                <MenuItem value="OB">
                                  Operation Bulletin (QUICK OB)
                                </MenuItem>
                                <MenuItem value="HRMS">
                                  Target HRMS – HR & Payroll Solution
                                </MenuItem>
                                <MenuItem value="AI">
                                  AI Solutions for Garment Manufacturing
                                </MenuItem>

                                {/* <MenuItem value="ERP" defaultChecked>
                                  Target ERP - for Textile & Garment Industries
                                </MenuItem>
                                <MenuItem value="TBMS">
                                  TARGET BMS - Buying house management
                                </MenuItem>
                                <MenuItem value="TOMS">
                                  TOMS - Target Order Management Solutions
                                </MenuItem>
                                <MenuItem value="SCM">
                                  Target SCM - Supply Chain Management
                                </MenuItem>
                                <MenuItem value="HRMS">
                                  HRMS - Target HR & Payroll Solutions
                                </MenuItem>
                                <MenuItem value="AI">
                                  AI Solutions for Garment Manufacturing
                                </MenuItem> */}
                              </TextField>
                            )}
                          </Field>
                        </Grid>
                      ) : null}

                      <Grid item xs={12}>
                        <Field name="enquiry_details">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              multiline
                              rows={2}
                              label={isAI ? "Your AI Requirements" : "Remarks"}
                              variant="standard"
                              color={isAI ? "secondary" : "info"}
                              size="small"
                              placeholder={
                                isAI
                                  ? "Tell us about your business challenges..."
                                  : ""
                              }
                              error={
                                form.errors.enquiry_details &&
                                form.touched.enquiry_details
                              }
                              helperText={
                                <ErrorMessage name="enquiry_details" />
                              }
                              InputLabelProps={{
                                style: { fontSize: "0.85rem" },
                              }}
                              inputProps={{ style: { fontSize: "0.9rem" } }}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className="d-flex justify-content-center align-items-center gap-2"
                      >
                        <button
                          type="submit"
                          className="theme-btn style-four"
                          style={
                            isAI
                              ? {
                                  background:
                                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                  color: "white",
                                  padding: "10px 35px",
                                  borderRadius: "50px",
                                  fontWeight: "600",
                                  fontSize: "0.95rem",
                                  border: "none",
                                  boxShadow:
                                    "0 8px 25px rgba(102, 126, 234, 0.4)",
                                  transition: "all 0.3s ease",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                                  cursor: "pointer",
                                }
                              : {}
                          }
                          onMouseEnter={(e) => {
                            if (isAI) {
                              e.target.style.transform = "translateY(-3px)";
                              e.target.style.boxShadow =
                                "0 12px 35px rgba(102, 126, 234, 0.5)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (isAI) {
                              e.target.style.transform = "translateY(0)";
                              e.target.style.boxShadow =
                                "0 8px 25px rgba(102, 126, 234, 0.4)";
                            }
                          }}
                        >
                          {isAI ? (
                            <>
                              <BsLightningCharge style={{ fontSize: "1rem" }} />
                              Unlock AI Power
                              <i className="far fa-long-arrow-right" />
                            </>
                          ) : (
                            <>
                              Request Call Back
                              <i className="far fa-long-arrow-right" />
                            </>
                          )}
                        </button>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dialog - AI Customized with compact size and no scroll */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
        TransitionComponent={Transition}
        keepMounted
        PaperProps={{
          style: {
            borderRadius: "20px",
            maxHeight: "90vh",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent className="p-0 m-0" style={{ overflow: "hidden" }}>
          <Container style={{ padding: isAI ? "15px 20px" : "20px" }}>
            <div
              className={`row gap-20 align-items-center ${isAI ? "ai-dialog" : ""}`}
              style={
                isAI
                  ? {
                      // background:
                      //   "linear-gradient(135deg, #f8f6ff 0%, #f0edff 100%)",
                      borderRadius: "15px",
                      padding: "15px",
                    }
                  : {}
              }
            >
              <div className="col-lg-12">
                <div
                  className={`d-flex ${isAI ? "bg-transparent" : "bg-white"} pt-20 justify-content-center ${
                    matchesSmallScreen && "flex-column-reverse"
                  } align-items-center gap-3 contact-info-wrap wow fadeInLeft delay-0-2s`}
                >
                  {!matchesSmallScreen && (
                    <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                      <img
                        src={
                          isAI
                            ? "/assets/images/projects/erp/AI-amico.png"
                            : TypeOF == "s"
                              ? "/assets/images/projects/erp/Calling-amico.png"
                              : "/assets/images/projects/erp/Demo-amico.png"
                        }
                        alt="Why Choose"
                        style={{ maxWidth: isAI ? "120px" : "80px" }}
                      />
                    </div>
                  )}
                  <div
                    className={`section-title ${matchesSmallScreen && "text-center"}`}
                  >
                    {isAI ? (
                      <>
                        <h4
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "700",
                            fontSize: "1.3rem",
                            marginBottom: "2px",
                          }}
                        >
                          🚀 Unlock AI Innovation
                        </h4>
                        <span
                          className="sub-title mb-0"
                          style={{
                            background:
                              "linear-gradient(to right, #ffd700, #f7971e)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: "600",
                            fontSize: "0.8rem",
                          }}
                        >
                          Transform Your Fashion Business with AI
                        </span>
                      </>
                    ) : (
                      <>
                        <h3
                          className="text-gradient-title3"
                          style={{ fontSize: "1.5rem" }}
                        >
                          {TypeOF == "s"
                            ? "Request a Call Back"
                            : "Request a Demo"}
                        </h3>
                        <span
                          className="sub-title mb-10 text-gradient-title2"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {TypeOF == "s"
                            ? "Explore Our Services"
                            : "Experience Our Products"}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="rmb-55 wow fadeInRight delay-0-2s">
                  <Formik
                    initialValues={{
                      name: "",
                      phone_number: "",
                      company_name: "",
                      email: "",
                      city: "",
                      country: "",
                      TypeOfReq: isAI ? "ai" : TypeOF,
                      product: isAI ? "AI" : initialValue,
                      enquiry_details: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .matches(/^[A-Za-z\s]+$/, "enter valid name")
                        .required("Please provide your full name."),

                      phone_number: Yup.string()
                        .matches(
                          /^\+?[1-9][0-9-]*(?: [0-9-]+)*$/,
                          "Please enter a valid phone number.",
                        )
                        .required("Please enter your phone number."),

                      email: Yup.string()
                        .matches(
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                          "Please provide a valid email address",
                        )
                        .required("Email address is required."),

                      city: Yup.string().matches(
                        /^[A-Za-z\s]+$/,
                        "enter valid city name",
                      ),
                      country: Yup.object().required(
                        "Please select your country.",
                      ),

                      company_name: Yup.string().required(
                        "Please specify the name of your company.",
                      ),
                      enquiry_details: Yup.string().max(
                        200,
                        "should not exceed 200 characters.",
                      ),
                    })}
                    onSubmit={handleSubmit}
                  >
                    <Form
                      className={`p-5 m-10 ${isAI ? "bg-transparent" : "bg-white"}`}
                    >
                      <Grid container spacing={1.5}>
                        <Grid item xs={12} sm={6}>
                          <Field name="name">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Name"
                                variant="standard"
                                color={isAI ? "secondary" : "info"}
                                size="small"
                                error={form.errors.name && form.touched.name}
                                helperText={<ErrorMessage name="name" />}
                                InputLabelProps={{
                                  style: { fontSize: "0.8rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.85rem" } }}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field name="phone_number">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Phone no"
                                variant="standard"
                                color={isAI ? "secondary" : "info"}
                                size="small"
                                error={
                                  form.errors.phone_number &&
                                  form.touched.phone_number
                                }
                                helperText={
                                  <ErrorMessage name="phone_number" />
                                }
                                InputLabelProps={{
                                  style: { fontSize: "0.8rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.85rem" } }}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field name="company_name">
                            {({ field, form }) => (
                              <TextField
                                size="small"
                                {...field}
                                fullWidth
                                label="Your Company Name"
                                variant="standard"
                                color={isAI ? "secondary" : "info"}
                                error={
                                  form.errors.company_name &&
                                  form.touched.company_name
                                }
                                helperText={
                                  <ErrorMessage name="company_name" />
                                }
                                InputLabelProps={{
                                  style: { fontSize: "0.8rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.85rem" } }}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field name="email">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                size="small"
                                label="Email"
                                variant="standard"
                                type="email"
                                color={isAI ? "secondary" : "info"}
                                error={form.errors.email && form.touched.email}
                                helperText={<ErrorMessage name="email" />}
                                InputLabelProps={{
                                  style: { fontSize: "0.8rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.85rem" } }}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={isAI ? 6 : 4}>
                          <Field name="city">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="City"
                                size="small"
                                variant="standard"
                                color={isAI ? "secondary" : "info"}
                                error={form.errors.city && form.touched.city}
                                helperText={<ErrorMessage name="city" />}
                                InputLabelProps={{
                                  style: { fontSize: "0.8rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.85rem" } }}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={isAI ? 6 : 4}>
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
                                    variant="standard"
                                    size="small"
                                    color={isAI ? "secondary" : "info"}
                                    error={
                                      form.errors.country &&
                                      form.touched.country
                                    }
                                    helperText={<ErrorMessage name="country" />}
                                    InputLabelProps={{
                                      style: { fontSize: "0.8rem" },
                                    }}
                                    inputProps={{
                                      style: { fontSize: "0.85rem" },
                                    }}
                                  />
                                )}
                              />
                            )}
                          </Field>
                        </Grid>

                        {/* Hide dropdown for AI */}
                        {!isAI && TypeOF == "s" ? (
                          <Grid item xs={12} sm={4}>
                            <Field name="product">
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  select
                                  label="Services"
                                  variant="standard"
                                  size="small"
                                  InputLabelProps={{
                                    style: { fontSize: "0.8rem" },
                                  }}
                                  inputProps={{
                                    style: { fontSize: "0.85rem" },
                                  }}
                                >
                                  <MenuItem value="MobileAppSolutions">
                                    Mobile App Solutions
                                  </MenuItem>
                                  <MenuItem value="EnterpriseAppDevelopment">
                                    Enterprise Application Development
                                  </MenuItem>
                                  <MenuItem value="EcommerceAppDevelopment">
                                    E-Commerce Application Development
                                  </MenuItem>
                                  <MenuItem value="UIUX">
                                    UI/UX Strategy
                                  </MenuItem>
                                  <MenuItem value="DigitalMarketing">
                                    Digital Marketing
                                  </MenuItem>
                                  <MenuItem value="ERPDevelopment">
                                    ERP Software Development
                                  </MenuItem>
                                  <MenuItem value="AI">
                                    AI Solutions for Garment Manufacturing
                                  </MenuItem>
                                </TextField>
                              )}
                            </Field>
                          </Grid>
                        ) : !isAI && TypeOF != "s" ? (
                          <Grid item xs={12} sm={4}>
                            <Field name="product">
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  select
                                  size="small"
                                  label="Products"
                                  variant="standard"
                                  InputLabelProps={{
                                    style: { fontSize: "0.8rem" },
                                  }}
                                  inputProps={{
                                    style: { fontSize: "0.85rem" },
                                  }}
                                >
                                  <MenuItem value="TBMS" defaultChecked>
                                    TARGET BMS - Buying house management
                                  </MenuItem>
                                  <MenuItem value="ERP" defaultChecked>
                                    ERP for Textile & Garment Industries
                                  </MenuItem>
                                  <MenuItem value="SCM">
                                    Target SCM - Supply Chain Management
                                  </MenuItem>
                                  <MenuItem value="HRMS">
                                    HRMS - Target HR & Payroll Solutions
                                  </MenuItem>
                                  <MenuItem value="TOMS">
                                    TOMS - Target Order Management Solutions
                                  </MenuItem>
                                  <MenuItem value="AI">
                                    AI Solutions for Garment Manufacturing
                                  </MenuItem>
                                </TextField>
                              )}
                            </Field>
                          </Grid>
                        ) : null}

                        <Grid item xs={12}>
                          <Field name="enquiry_details">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={1}
                                label={
                                  isAI ? "Your AI Requirements" : "Remarks"
                                }
                                size="small"
                                variant="standard"
                                color={isAI ? "secondary" : "info"}
                                placeholder={
                                  isAI
                                    ? "Tell us about your business challenges..."
                                    : ""
                                }
                                error={
                                  form.errors.enquiry_details &&
                                  form.touched.enquiry_details
                                }
                                helperText={
                                  <ErrorMessage name="enquiry_details" />
                                }
                                InputLabelProps={{
                                  style: { fontSize: "0.8rem" },
                                }}
                                inputProps={{ style: { fontSize: "0.85rem" } }}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="d-flex justify-content-center align-items-center gap-2"
                        >
                          <button
                            type="submit"
                            className="theme-btn style-four"
                            style={
                              isAI
                                ? {
                                    background:
                                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                    color: "white",
                                    padding: "8px 30px",
                                    borderRadius: "50px",
                                    fontWeight: "600",
                                    fontSize: "0.9rem",
                                    border: "none",
                                    boxShadow:
                                      "0 8px 25px rgba(102, 126, 234, 0.4)",
                                    transition: "all 0.3s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    cursor: "pointer",
                                  }
                                : {}
                            }
                            onMouseEnter={(e) => {
                              if (isAI) {
                                e.target.style.transform = "translateY(-2px)";
                                e.target.style.boxShadow =
                                  "0 12px 35px rgba(102, 126, 234, 0.5)";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (isAI) {
                                e.target.style.transform = "translateY(0)";
                                e.target.style.boxShadow =
                                  "0 8px 25px rgba(102, 126, 234, 0.4)";
                              }
                            }}
                          >
                            {isAI ? (
                              <>
                                <BsLightningCharge
                                  style={{ fontSize: "0.9rem" }}
                                />
                                Unlock AI Power
                                <i className="far fa-long-arrow-right" />
                              </>
                            ) : (
                              <>
                                Request Call Back
                                <i className="far fa-long-arrow-right" />
                              </>
                            )}
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </Container>
        </DialogContent>
      </Dialog>

      {/* Loader Dialog */}
      <Dialog
        open={openLoader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <LinearProgress color={isAI ? "secondary" : "primary"} />
      </Dialog>

      {/* Custom Styles */}
      <style jsx>{`
        .sticky-button-container {
          position: fixed;
          top: 50%;
          right: -43px;
          transform: translateY(-50%);
          z-index: 1000;
        }

        .sticky-button {
          transform: rotate(-90deg);
          white-space: nowrap;
          border-radius: 5px;
          min-width: auto;
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 700;
          text-transform: none;
          line-height: 1.4;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }

        .sticky-button:hover {
          transform: rotate(-90deg) scale(1.05);
        }

        @keyframes glowing {
          0% {
            box-shadow: 0 0 5px rgba(255, 127, 62, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 127, 62, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 127, 62, 0.5);
          }
        }

        .sticky-button.ai-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .sticky-button.ai-button:hover {
          box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
        }

        @keyframes glowing {
          0% {
            box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(102, 126, 234, 0.6);
          }
          100% {
            box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
          }
        }

        .ai-form-section {
          position: relative;
          overflow: hidden;
        }

        .ai-form-section::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(102, 126, 234, 0.05);
          top: -100px;
          right: -100px;
          animation: pulse 4s ease-in-out infinite;
        }

        .ai-form-container {
          position: relative;
          z-index: 1;
        }

        .ai-dialog {
          position: relative;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }

        /* Compact form styles */
        .MuiFormControl-root {
          margin-top: 4px !important;
        }

        .MuiFormLabel-root {
          font-size: 0.8rem !important;
        }

        .MuiInput-root {
          font-size: 0.85rem !important;
        }

        .MuiFormHelperText-root {
          font-size: 0.7rem !important;
          margin-top: 2px !important;
        }
      `}</style>
    </>
  );
};

export default ContactUsProduct;
