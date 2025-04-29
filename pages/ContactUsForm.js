import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Dialog, Grid, LinearProgress, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import axios from "axios";
import { useState } from "react";

const ContactUsForm = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openLoader, setOpenLoader] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Contact/ContactUS", values);
      console.log("Form submitted successfully:", response.data);
      SendMail(values);
      SendMail2(values);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "Error submitting form. Please try again later.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const SendMail = async (datas) => {
    setOpenLoader(true);
    const subjectLine = "New Contact Form Submission: " + datas.subject;
    const bodyMessage = `
        <p>Dear Team,</p>
        <p>A new message has been received from the website contact form:</p>
        <p><strong>Subject:</strong> ${datas.subject}</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Message:</strong></p>
        <p>${datas.message}</p>
        <p>Please review the message and respond accordingly.</p>
        <p>Best regards,</p>
        <p>Best regards,</p>
        <p>ASK Technology HR Team</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
    `;
    const approvs = await axios
      .post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: "sales@asktek.net",
        subject: subjectLine,
        text: bodyMessage,
      })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
          setOpenLoader(false);
        } else {
          setOpenLoader(false);
        }
      });
  };

  const SendMail2 = async (datas) => {
    setOpenLoader(true);
    const subjectLine = "Your Message has been Received";
    const bodyMessageToUser = `
        <p>Dear ${datas.name},</p>
        <p>Thank you for contacting us!</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here are the details you provided:</p>
        <p><strong>Subject:</strong> ${datas.subject}</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Message:</strong></p>
        <p>${datas.message}</p>
        <p>Best regards,</p>
        <p>ASK Technology HR Team</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
    `;
    const approvs = await axios
      .post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: `${datas.email}`,
        subject: subjectLine,
        text: bodyMessageToUser,
      })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
          setOpenLoader(false);

          Swal.fire({
            title: "Thank you!",
            text: "Your message has been successfully submitted. We'll review it and respond shortly.",
            icon: "success",
            confirmButtonText: "Done",
          });
        } else {
          setOpenLoader(false);
        }
      });
  };

  return (
    <>
      {/* Contact Form Section Start */}
      <section className="contact-page-form  " id="contactus">
        <div className="container">
          <div className="contact-form-wrap form-style-two bg-white wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>We’re Here to Help You</h2>
                </div>
                <p>
                  Got a project in mind? We’d love to hear about it. Take five
                  minutes to fill out our project form so that we can get to
                  know you and understand your project.
                </p>
              </div>
            </div>
            <Formik
              initialValues={{
                name: "",
                phone_number: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .matches(/^[A-Za-z\s]+$/, "enter valid name")
                  .max(50, "should not exceed 50 characters.")
                  .required("Please provide your full name."),

                // subject: Yup.string().required(
                //   "Please provide a subject for your message."
                // ),
                phone_number: Yup.string().matches(
                  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  "Please provide a valid phone number."
                )
                .required(" Please enter your phone number."),

                email: Yup.string()
                .matches(
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  "Please provide a valid email address"
                )
                .required("Email address is required."),

                message: Yup.string().max(
                  200,
                  "should not exceed 200 characters."
                ),
                // .required("Type here, whats on your mind"),
              })}
              onSubmit={handleSubmit}
            >
              <Form className=" p-10 m-25">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field name="name">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Name"
                          variant="outlined"
                          color="info"
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
                          variant="outlined"
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
                    <Field name="email">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          // required
                          label="Email"
                          variant="outlined"
                          type="email"
                          error={form.errors.email && form.touched.email}
                          helperText={<ErrorMessage name="email" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field name="subject">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          color="info"
                          // required
                          error={form.errors.subject && form.touched.subject}
                          helperText={<ErrorMessage name="subject" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name="message">
                      {({ field, form }) => (
                        <TextField
                          {...field}
                          fullWidth
                          multiline
                          rows={3}
                          label="Type Something..."
                          variant="outlined"
                          error={form.errors.message && form.touched.message}
                          helperText={<ErrorMessage name="message" />}
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="d-flex justify-content-center align-items-center gap-2"
                  >
                    <button type="submit" className="theme-btn style-two">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
      {/* Contact Form Section End */}
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
export default ContactUsForm;
