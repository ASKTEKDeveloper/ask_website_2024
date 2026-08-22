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
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const DownloadBroucher = ({ TypeOF, initialValue }) => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openLoader, setOpenLoader] = useState(false);

  const getBrochureDownloadUrl = async (productShortCode) => {
    const code = String(productShortCode || "").trim();
    if (!code) return null;

    try {
      const response = await axios.get(`/api/ProductBrochure?code=${encodeURIComponent(code)}`);
      const brochurePath = response?.data?.BrochureFileName;
      if (!brochurePath) return null;

      const normalizedPath = String(brochurePath).replace(/\\/g, "/");
      return `http://localhost:1999/api/${normalizedPath}`;
    } catch (error) {
      console.error("Error fetching brochure from product master:", error);
      return null;
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", values);
      console.log("Form submitted successfully:", response.data);

      const product = String(values.product || "").trim();
      const brochureUrl = await getBrochureDownloadUrl(product);

      if (brochureUrl) {
        const link = document.createElement("a");
        link.href = brochureUrl;
        link.setAttribute("download", `brochure_${product}.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        Swal.fire({
          title: "No brochure available",
          text: "This product does not currently have a brochure uploaded in the system.",
          icon: "info",
          confirmButtonText: "Okay",
        });
      }

      SendMailProduct(values);
      SendMailInternal(values);
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Submission failed",
        text: "Error submitting form. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setOpenLoader(false);
      setSubmitting(false);
    }
  };

  const SendMailProduct = async (datas) => {
    try {
      const response = await axios.post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: datas.email,
        subject: "Your Product Demo Request Confirmation",
        text: `
          <p>Dear ${datas.name},</p>
          <p>Thank you for your interest in our <b>${datas.product}</b> demo!</p>
          <p>Your request has been received successfully. We're excited to assist you further.</p>
          <p>Our team will review your request and get back to you shortly to schedule the demo.</p>
          <p>If you have any immediate questions or concerns, please don't hesitate to contact us.</p>
          <p>Best Regards,</p>
          <p>ASK Technology</p>
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
      const subjectLine = "New Service Request Received: ";

      const bodyMessage = `
        <p>Dear Team,</p>
        <p>A new service request has been received from our website:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p><strong>Company Name:</strong> ${datas.company_name}</p>
        <p><strong>City:</strong> ${datas.city}</p>
        <p><strong>Product Name :</strong> ${datas.product}</p>
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
                TypeOfReq: TypeOF,
                product: initialValue,
                enquiry_details: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                      .matches(/^[A-Za-z\s]+$/, "enter valid name")
                      .max(50, "should not exceed 50 characters.")
                      .required("Please provide your full name."),
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
                          helperText={<ErrorMessage name="phone_number" />}
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
                          helperText={<ErrorMessage name="company_name" />}
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
                      Download Broucher
                      <i className="far fa-long-arrow-right" />
                    </button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
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
export default DownloadBroucher;
