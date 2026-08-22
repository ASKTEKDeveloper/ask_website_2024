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
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactUsProduct = ({ TypeOF, initialValue }) => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);

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
  };

  const productsMapping = {
    ERP: "ERP for Textile & Garment Industries",
    SCM: "Target SCM - Supply Chain Management",
    HRMS: "HRMS - Target HR & Payroll Solutions",
    TOMS: "TOMS - Target Order Management Solutions",
    // TCMS: "TCMS - Cargo and courier Management Solutions",
    TBMS: "TBMS - Buying House Management Solutions",
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
        title: "Thank you!",
        text:
          TypeOF === "s"
            ? "Your service request has been submitted successfully. Our team will get back to you shortly."
            : "Your product demo request has been submitted successfully. We'll get back to you shortly to schedule the demo.",
        icon: "success",
        confirmButtonText: "Done",
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
      const response = await axios.post("/api/Email/SendMail", {
        from: "sales@asktek.net",
        to: datas.email,
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        subject: "Your Product Demo Request Confirmation",
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Ask@99559#",
        text: `
          <p>Dear ${datas.name},</p>
          <p>Thank you for your interest in our <b>${
            productsMapping[datas.product] || datas.product
          }</b> demo!</p>
          <p>Your request has been received successfully. We're excited to assist you further.</p>
          <p>Our team will review your request and get back to you shortly to schedule the demo.</p>
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
      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending product demo email:", error);
      setOpenLoader(false);
    }
  };

  const SendMailService = async (datas) => {
    try {
      const approvs = await axios.post("/api/Email/SendMail", {
        FromMailid: "sales@asktek.net",
        ToMailid: datas.email,
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        Subject: "Your Service Request Confirmation",
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Ask@99559#",
        Body: `
        <p>Dear ${datas.name},</p>
        <p>Thank you for your interest in our <b>${
          servicesMapping[datas.product] || datas.product
        }</b></p>
        <p>Your service request has been received successfully. We're excited to assist you further.</p>
        <p>Our team will review your request and get back to you shortly.</p>
        <p>If you have any immediate questions or concerns, please don't hesitate to contact us.</p>
        <p>Best Regards,</p>
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
      const subjectLine =
        TypeOF === "s"
          ? "New Service Request Received: " +
            (servicesMapping[datas.product] || datas.product)
          : "New Product Demo Request Received: " +
            (productsMapping[datas.product] || datas.product);

      const bodyMessage =
        TypeOF === "s"
          ? `
        <p>Dear Team,</p>
        <p>A new service request has been received from our website:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Company Name:</strong> ${datas.company_name}</p>
        <p><strong>City:</strong> ${datas.city}</p>
        <p><strong>Service :</strong> ${
          servicesMapping[datas.product] || datas.product
        }</p>
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
        <p><strong>Product:</strong> ${
          productsMapping[datas.product] || datas.product
        }</p>
        <p><strong>Enquiry Details:</strong></p>
        <p>${datas.enquiry_details}</p>
        <p>Please review the request and respond accordingly.</p>
        <p>Best regards,</p>
        <p>ASK TECHNOLOGY</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `;

      const approvs = await axios.post("/api/Email/SendMail", {
        FromMailid: "sales@asktek.net",
        ToMailid: "sales@asktek.net",
        CcMailid: "",
        CcMailid1: "",
        CcMailid2: "",
        Subject: subjectLine,
        SmtpServer: "us2.smtp.mailhostbox.com",
        MailPassowrd: "Ask@99559#",
        Body: bodyMessage,
        SmtpPort: 587,
        Filepathattach: "",
      });
    } catch (error) {
      console.error("Error sending internal email:", error);
    }
  };

  return (
    <>
      <div className="sticky-button-container">
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="primary"
          className="sticky-button headShake "
        >
          Book Demo
        </Button>
      </div>
      {/* Contact Form Section Start */}
      <section
        id="callback"
        className="contact-form-area  pb-100 px-3  rpy-100  mt-100 mb-4 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/feature-bg.jpg)",
        }}
      >
        <Container>
          <div className="row gap-100 align-items-center   shadowbox-2 bg-white">
            <div className="col-lg-12 pt-50 ">
              <div
                className={`d-flex bg-white justify-content-center ${
                  matchesSmallScreen && "flex-column-reverse"
                }  align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s`}
              >
                <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                  <img
                    src={
                      TypeOF == "s"
                        ? "/assets/images/projects/erp/Calling-amico.png"
                        : "/assets/images/projects/erp/Demo-amico.png"
                    }
                    alt="Why Choose"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div
                  className={`section-title mb-40   ${
                    matchesSmallScreen && "text-center"
                  }`}
                >
                  <h2 className="text-gradient-title2">
                    {TypeOF == "s"
                      ? "Request a Call Back Today"
                      : "Request a Demo Today"}
                  </h2>
                  <span className="sub-title  mb-10 text-gradient-title2">
                    {TypeOF == "s"
                      ? "Explore Our Services"
                      : "Experience Our Products"}
                  </span>
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
                    TypeOfReq: TypeOF,
                    product: initialValue,
                    enquiry_details: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .matches(/^[A-Za-z\s]+$/, "enter valid name")
                      .required("Please provide your full name."),

                    phone_number: Yup.string().required(
                      "Please enter your phone number."
                    ),

                    email: Yup.string()
                      .matches(
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        "Please provide a valid email address"
                      )
                      .required("Email address is required."),

                    city: Yup.string().matches(
                      /^[A-Za-z\s]+$/,
                      "enter valid city name"
                    ),
                    // .required("Please specify your city."),

                    company_name: Yup.string().required(
                      "Please specify the name of your company."
                    ),
                    enquiry_details: Yup.string().max(
                      200,
                      "should not exceed 200 characters."
                    ),
                    // .required("type your requirements  here"),
                  })}
                  onSubmit={handleSubmit}
                >
                  <Form className="bg-white p-10 m-25">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Field name="name">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="Name"
                              variant="standard"
                              color="info"
                              // required
                              error={form.errors.name && form.touched.name}
                              helperText={<ErrorMessage name="name" />}
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
                              // required
                              error={
                                form.errors.phone_number &&
                                form.touched.phone_number
                              }
                              helperText={<ErrorMessage name="phone_number" />}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="company_name">
                          {({ field, form }) => (
                            <TextField
                              // required
                              {...field}
                              fullWidth
                              label="Your Company Name"
                              variant="standard"
                              error={
                                form.errors.company_name &&
                                form.touched.company_name
                              }
                              helperText={<ErrorMessage name="company_name" />}
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
                              // required
                              label="Email"
                              variant="standard"
                              type="email"
                              error={form.errors.email && form.touched.email}
                              helperText={<ErrorMessage name="email" />}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field name="city">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              label="City"
                              // required
                              variant="standard"
                              error={form.errors.city && form.touched.city}
                              helperText={<ErrorMessage name="city" />}
                            />
                          )}
                        </Field>
                      </Grid>
                      {TypeOF == "s" ? (
                        <Grid item xs={12} sm={6}>
                          <Field name="product">
                            {({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                select
                                label="Services"
                                variant="standard"
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
                              </TextField>
                            )}
                          </Field>
                        </Grid>
                      ) : (
                        <Grid item xs={12} sm={6}>
                          <Field name="product">
                            {({ field }) => (
                              <TextField
                                {...field}
                                fullWidth
                                select
                                // required
                                label="Products"
                                variant="standard"
                              >
                                <MenuItem value="ERP" defaultChecked>
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
                                {/*
                                <MenuItem value="TCMS">
                                  Target - Cargo & Courier Management
                                </MenuItem>
                            */}
                              </TextField>
                            )}
                          </Field>
                        </Grid>
                      )}

                      <Grid item xs={12}>
                        <Field name="enquiry_details">
                          {({ field, form }) => (
                            <TextField
                              {...field}
                              fullWidth
                              multiline
                              rows={3}
                              label="Remarks"
                              variant="standard"
                              error={
                                form.errors.enquiry_details &&
                                form.touched.enquiry_details
                              }
                              helperText={
                                <ErrorMessage name="enquiry_details" />
                              }
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className="d-flex justify-content-center align-items-center gap-2"
                      >
                        <button type="submit" className="theme-btn style-four">
                          Request Call Back
                          <i className="far fa-long-arrow-right" />
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
      {/* Contact Form Section End */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"lg"}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogContent className=" p-0 m-0 ">
          <Container>
            <div className="row gap-20 align-items-center   bg-white">
              <div className="col-lg-12 ">
                <div
                  className={`d-flex bg-white pt-50 justify-content-center ${
                    matchesSmallScreen && "flex-column-reverse"
                  }  align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s`}
                >
                  {!matchesSmallScreen && (
                    <>
                      <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                        <img
                          src={
                            TypeOF == "s"
                              ? "/assets/images/projects/erp/Calling-amico.png"
                              : "/assets/images/projects/erp/Demo-amico.png"
                          }
                          alt="Why Choose"
                          style={{ maxWidth: "100px" }}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={`section-title ${
                      matchesSmallScreen && "text-center"
                    }`}
                  >
                    <h3 className="text-gradient-title3">
                      {TypeOF == "s"
                        ? "Request a Call Back Today"
                        : "Request a Demo Today"}
                    </h3>
                    <span className="sub-title  mb-10 text-gradient-title2">
                      {TypeOF == "s"
                        ? "Explore Our Services"
                        : "Experience Our Products"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="    rmb-55 wow fadeInRight delay-0-2s">
                  <Formik
                    initialValues={{
                      name: "",
                      phone_number: "",
                      company_name: "",
                      email: "",
                      city: "",
                      TypeOfReq: TypeOF,
                      product: initialValue,
                      enquiry_details: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string()
                        .matches(/^[A-Za-z\s]+$/, "enter valid name")
                        .required("Please provide your full name."),

                      phone_number: Yup.string().matches(/^\+?[1-9][0-9-]*(?: [0-9-]+)*$/, "Please enter a valid phone number.").required(
                  "Please enter your phone number."
                ),

                      email: Yup.string()
                        .matches(
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                          "Please provide a valid email address"
                        )
                        .required("Email address is required."),

                      city: Yup.string().matches(
                        /^[A-Za-z\s]+$/,
                        "enter valid city name"
                      ),
                      // .required("Please specify your city."),

                      company_name: Yup.string().required(
                        "Please specify the name of your company."
                      ),
                      enquiry_details: Yup.string().max(
                        200,
                        "should not exceed 200 characters."
                      ),
                      // .required("type your requirements  here"),
                    })}
                    onSubmit={handleSubmit}
                  >
                    <Form className="bg-white p-10 m-25">
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Field name="name">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Name"
                                variant="standard"
                                color="info"
                                size={matchesSmallScreen && "small"}
                                error={form.errors.name && form.touched.name}
                                helperText={<ErrorMessage name="name" />}
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
                                size={matchesSmallScreen && "small"}
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
                        <Grid item xs={12} sm={6}>
                          <Field name="company_name">
                            {({ field, form }) => (
                              <TextField
                                size={matchesSmallScreen && "small"}
                                {...field}
                                fullWidth
                                label="Your Company Name"
                                variant="standard"
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
                        <Grid item xs={12} sm={6}>
                          <Field name="email">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                size={matchesSmallScreen && "small"}
                                label="Email"
                                variant="standard"
                                type="email"
                                error={form.errors.email && form.touched.email}
                                helperText={<ErrorMessage name="email" />}
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Field name="city">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="City"
                                size={matchesSmallScreen && "small"}
                                variant="standard"
                                error={form.errors.city && form.touched.city}
                                helperText={<ErrorMessage name="city" />}
                              />
                            )}
                          </Field>
                        </Grid>

                        {TypeOF == "s" ? (
                          <Grid item xs={12} sm={6}>
                            <Field name="product">
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  select
                                  label="Services"
                                  variant="standard"
                                  size={matchesSmallScreen && "small"}
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
                                </TextField>
                              )}
                            </Field>
                          </Grid>
                        ) : (
                          <Grid item xs={12} sm={6}>
                            <Field name="product">
                              {({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  select
                                  size={matchesSmallScreen && "small"}
                                  label="Products"
                                  variant="standard"
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
                                </TextField>
                              )}
                            </Field>
                          </Grid>
                        )}

                        <Grid item xs={12}>
                          <Field name="enquiry_details">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={3}
                                label="Remarks"
                                size={matchesSmallScreen && "small"}
                                variant="standard"
                                error={
                                  form.errors.enquiry_details &&
                                  form.touched.enquiry_details
                                }
                                helperText={
                                  <ErrorMessage name="enquiry_details" />
                                }
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
                          >
                            Request Call Back
                            <i className="far fa-long-arrow-right" />
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
      {/* loader popup dialog box */}
      <Dialog
        open={openLoader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <LinearProgress />
      </Dialog>
    </>
  );
};
export default ContactUsProduct;
