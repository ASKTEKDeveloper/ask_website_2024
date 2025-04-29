import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { TextField, Dialog, Grid, LinearProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const ContactinBlog = () => {
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
        <p>ASK TECHNOLOGY</p>
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
          setOpen(false);
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
        <p>Your Website</p>
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
          setOpen(false);
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
    <div
      className="card p-25 "
      style={{
        borderRadius: 20,
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <div className="row text-center mb-35 justify-content-center">
        <div className="col-12">
          <div className="section-title wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Leave a Message</span> */}
            <h3 className="text-gradient-title3 ">Leave a Message</h3>
          </div>
          <p>Have any question? Ready to talk to us!</p>
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
          name: Yup.string().max(50, "should not exceed 50 characters.").required("Please provide your full name."),
          // subject: Yup.string().required(
          //   "Please provide a subject for your message."
          // ),
          phone_number: Yup.string().matches(
            /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
            "Please provide a valid phone number."
          )
          .required(" Please enter your phone number."),
          email: Yup.string()
            .email("Please provide a valid email address.")
            .required("Email address is required."),
          message: Yup.string().max(200, "should not exceed 200 characters."),
          // .required("Type here, whats on your mind"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="">
          <Grid spacing={10}>
            <Grid item xs={12} className="mb-20 pb-20">
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
            <Grid item xs={12} className="mb-20 pb-20">
              <Field name="phone_number">
                {({ field, form }) => (
                  <TextField
                    type="number"
                    {...field}
                    fullWidth
                    label="Phone no"
                    variant="outlined"
                    error={
                      form.errors.phone_number && form.touched.phone_number
                    }
                    helperText={<ErrorMessage name="phone_number" />}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} className="mb-20 pb-20">
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
            <Grid item xs={12} className="mb-20 pb-20">
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
            <Grid item xs={12} className="mb-20 pb-20">
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
              className="d-flex mb-20 justify-content-center align-items-center gap-2"
            >
              <button type="submit" className="theme-btn style-two">
                send message <i className="far fa-long-arrow-right" />
              </button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
      {/* loader popup dialog box */}
      <Dialog
        open={openLoader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <LinearProgress />
      </Dialog>
    </div>
  );
};
export default ContactinBlog;
