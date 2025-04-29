import {
  Typography,
  Button,
  Container,
  InputLabel,
  Box,
  LinearProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Dialog } from "@mui/material";
import { Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { TextField, MenuItem } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import * as Yup from 'yup';

const useStyles = styled((theme) => ({
  fileInput: {
    display: "none",
  },
  chooseFileButton: {
    width: "100%",
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const CareersForm = () => {
  const theme = useTheme();
  const [openLoader, setOpenLoader] = useState(false);
  const classes = useStyles();
  const [selectedFilePhoto, setSelectedFilePhoto] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFilePath, setSelectedFilePath] = useState("");

  // Custom validation regex patterns
  const addressRegex = /^[a-zA-Z0-9\s.,:'/()\-\x{2013}\x{2014}]{1,100}$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  const contactRegex = /^\d{10}$/;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const marksRegex = /^(100(\.00?)?|\d{0,2}(\.\d{1,2})?)$/;
  const pincodeRegex = /^\d{6}$/;

  const handleFileChange = async (event) => {
    setOpenLoader(true);
    try {
      const file = event.target.files[0];
      setSelectedFilePhoto(file);
      setSelectedFileName(file.name);

      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("/api/uploadmulter", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setOpenLoader(false);
          let fileName = response.data.path.fileName;
          const createdPath = `http://103.73.189.37/askcareers/${fileName}`;
          setSelectedFilePath(createdPath);
          console.log("createdPath", createdPath);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setOpenLoader(false);
        });
    } catch (error) {
      console.error("Error handling file change:", error);
      setOpenLoader(false);
    }
  };

  // save in next js  folder
  // const handleFileChange = async (event) => {
  //   setOpenLoader(true);
  //   try {
  //     const file = event.target.files[0];
  //     setSelectedFilePhoto(file);
  //     setSelectedFileName(file.name);

  //     const formData = new FormData();
  //     formData.append("file", file);

  //     const response = await axios.post("/api/uploadmulter", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     setOpenLoader(true);
  //     let fileName = response.data.path.fileName;
  //     const createdPath = `http://103.73.189.37/askcareers/${fileName}`;
  //     setSelectedFilePath(createdPath);
  //     console.log("createdPath", createdPath);
  //     // console.log("File path:", filePath);
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Careers/CareersForm", values);
      console.log("Form submitted successfully:", response.data);
      SendMail(values);
      SendMail2(values);
      resetForm();
      setSelectedFileName("");
      setSelectedFilePath("");
      setSelectedFilePhoto("");
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
    try {
      const response = await axios.post("/api/Email/SendMail2", {
        from: "hr@asktek.net",
        to: `${datas.email}`,
        subject: "Application for Job Opportunity at ASK Technology",
        text: `
        <p>Dear ${datas.name},</p>
        <p>Thank you for considering a career opportunity at ASK Technology.</p>
        <p>We have received your application and appreciate your interest in joining our team.</p>
        <p>Our hiring team will review your application thoroughly. If your qualifications match our requirements, we will contact you for further steps in the recruitment process.</p>
        <p>If you have any questions or need further information, please feel free to reach out to us.</p>
        <p>Best Regards,</p>
        <p>ASK Technology HR Team</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ hr@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
      `,
        // attachment: "http://103.73.189.37/askcareers/resume.docx",
        attachment: selectedFilePath,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setOpenLoader(false);
    }
  };

  const SendMail2 = async (datas) => {
    try {
      const response = await axios
        .post("/api/Email/SendMail2", {
          from: "hr@asktek.net",
          to: "hr@asktek.net",
          subject: "New Job Application Received",
          text: `
        <p>Dear HR Team,</p>
        <p>A new job application has been received from:</p>
        <p><strong>Name:</strong> ${datas.name}</p>
        <p><strong>Email:</strong> ${datas.email}</p>
        <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
        <p>Please review the application and proceed with the necessary steps in the recruitment process.</p>
        <p>Best Regards,</p>
        <p>ASK Technology HR Team</p>
        <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ hr@asktek.net</p>
        <p><a href="http://www.asktek.net">www.asktek.net</a></p>
        `,
          attachment: selectedFilePath,
        })
        .then((res) => {
          if (res.data.message === "Email sent successfully.") {
            setOpenLoader(false);
            Swal.fire({
              title: "Thank you!",
              text: "Your job application has been submitted successfully. We'll review your application and get back to you shortly",
              icon: "success",
              confirmButtonText: "Done",
            });
          } else {
            setOpenLoader(false);
          }
        });
    } catch (error) {
      console.error("Error sending email:", error);
      setOpenLoader(false);
    }
  };

  return (
    <>
      <section
        className="contact-form-area py-50 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/feature-bg.jpg)",
        }}
      >
        <Container>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6 mb-40">
              <div className="d-flex justify-content-center align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title text-center mb-40">
                  <h2 className="text-gradient-title3">How to Apply</h2>
                  <p>
                    Complete the application form to submit your application.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                  <img
                    src="/assets/images/hire/hire.png"
                    alt="Why Choose"
                    style={{ maxWidth: "60%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form shadowbox-2 bg-white p-50">
                <Formik
                  initialValues={{
                    name: "",
                    phone_number: "",
                    email: "",
                    gender: "",
                    years_of_experience: "",
                    resume: null,
                  }}
                  validationSchema = {Yup.object({
                    name: Yup.string()
                      .matches(/^[A-Za-z\s]+$/, "Please enter a valid name")
                      .required("Please enter your name"),
                  
                    phone_number: Yup.string()
                      .required("Please enter your phone number"),
                  
                    email: Yup.string()
                      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address")
                      .required("Please enter your email"),
                  
                    gender: Yup.string()
                      .required("Please select your gender"),
                  
                    years_of_experience: Yup.string()
                      .matches(/^\d{1,2}$/, "Please enter a valid number up to 2 digits")
                      .required("Please enter your years of experience"),
                  
                    resume: Yup.mixed()
                      .required("Please upload your resume"),
                  })}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form className="bg-white">
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Name
                          </InputLabel>
                          <Field name="name">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={form.errors.name && form.touched.name}
                                helperText={
                                  form.errors.name &&
                                  form.touched.name &&
                                  form.errors.name
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Phone no
                          </InputLabel>

                          <Field name="phone_number">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={
                                  form.errors.phone_number &&
                                  form.touched.phone_number
                                }
                                helperText={
                                  form.errors.phone_number &&
                                  form.touched.phone_number &&
                                  form.errors.phone_number
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Email
                          </InputLabel>

                          <Field name="email">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                error={form.errors.email && form.touched.email}
                                helperText={
                                  form.errors.email &&
                                  form.touched.email &&
                                  form.errors.email
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={6}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Gender
                          </InputLabel>
                          <Field name="gender">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                select
                                variant="outlined"
                                size="small"
                                error={
                                  form.errors.gender && form.touched.gender
                                }
                                helperText={
                                  form.errors.gender &&
                                  form.touched.gender &&
                                  form.errors.gender
                                }
                              >
                                <MenuItem value="m">Male</MenuItem>
                                <MenuItem value="f">Female</MenuItem>
                                <MenuItem value="o">Other</MenuItem>
                              </TextField>
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={6}>
                          <InputLabel
                            htmlFor="resume-upload"
                            className="inputstextlabel"
                          >
                            Yrs of Experience
                          </InputLabel>

                          <Field name="years_of_experience">
                            {({ field, form }) => (
                              <TextField
                                {...field}
                                fullWidth
                                variant="outlined"
                                size="small"
                                type="number"
                                error={
                                  form.errors.years_of_experience &&
                                  form.touched.years_of_experience
                                }
                                helperText={
                                  form.errors.years_of_experience &&
                                  form.touched.years_of_experience &&
                                  form.errors.years_of_experience
                                }
                              />
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12}>
                          <Field name="resume">
                            {({ field, form }) => (
                              <>
                                <Box fullWidth>
                                  <label
                                    htmlFor="fileInput"
                                    style={{ width: "100%" }}
                                  >
                                    <Button
                                      fullWidth
                                      component="span"
                                      className={classes.chooseFileButton}
                                      variant="outlined"
                                      size="large"
                                      startIcon={<CloudUploadIcon />}
                                    >
                                      {selectedFileName
                                        ? "Change Attached"
                                        : "Upload Resume (PDF, DOCX)"}
                                    </Button>
                                    <input
                                      className={classes.fileInput}
                                      id="fileInput"
                                      type="file"
                                      accept=".pdf,.doc,.docx"
                                      onChange={(event) => {
                                        handleFileChange(event);
                                        form.setFieldValue(
                                          "resume",
                                          event.currentTarget.files[0]
                                        );
                                      }}
                                      style={{ display: "none" }}
                                    />
                                  </label>
                                </Box>
                                {/* Display error message if resume field has error */}
                                {form.errors.resume && form.touched.resume && (
                                  <Typography color="error" variant="caption">
                                    {form.errors.resume}
                                  </Typography>
                                )}
                                {/* Display selected file name */}
                                {selectedFileName && (
                                  <Typography
                                    textTransform={"capitalize"}
                                    variant="caption"
                                    color="inherit"
                                  >
                                    {selectedFileName}
                                  </Typography>
                                )}
                              </>
                            )}
                          </Field>
                        </Grid>
                        <Grid item xs={12} justifyContent={"center"}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            type="submit"
                            endIcon={<i className="far fa-long-arrow-right" />}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <p className="py-50">
              If you don't see a suitable position, feel free to send your
              resume to
              <a href="mailto:hr@asktek.net">
              <span className="sub-title mx-10" style={{ color: "blue" }}>
                {" hr@asktek.net "}
              </span>
              </a>
              We're eager to hear from talented individuals like you!
            </p>
          </div>
        </Container>
      </section>
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
export default CareersForm;
