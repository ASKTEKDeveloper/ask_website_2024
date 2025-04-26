import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Dialog,
  Container,
  Paper,
  Grid,
  LinearProgress,
  TextField,
  Autocomplete,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import countryList from "react-select-country-list";

import axios from "axios";
import { useMemo, useState } from "react";

const PartnerWithUsForm = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openLoader, setOpenLoader] = useState(false);
  const countryOptions = useMemo(() => countryList().getData(), []);

  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", {...values, enquiry_details:values.message});
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
    const subjectLine = "New Partner With Us Submission: " + datas.subject;
    const bodyMessage = `
      <p>Dear Team,</p>
      <p>We have received a new partnership inquiry from the website form:</p>
      <p><strong>Subject:</strong> Partner With Us</p>
      <p><strong>Name:</strong> ${datas.name}</p>
      <p><strong>Email:</strong> ${datas.email}</p>
      <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
      <p><strong>Details:</strong></p>
      <p>${datas.message}</p>
      <p>Please review the message and respond accordingly.</p>
      <p>Best regards,</p>
      <p>ASK Technology</p>
      <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
      <p><a href="http://www.asktek.net">www.asktek.net</a></p>
    `;
  
    await axios
      .post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: "sales@asktek.net",
        subject: subjectLine,
        text: bodyMessage,
      })
      .then((res) => {
        setOpenLoader(false);
      })
      .catch(() => setOpenLoader(false));
  };
  

  const SendMail2 = async (datas) => {
    const subjectLine = "We’ve Received Your Partnership Inquiry!";
    const bodyMessageToUser = `
      <p>Dear ${datas.name},</p>
      <p>Thank you for reaching out to partner with ASK Technology!</p>
      <p>We have received your inquiry and our team will get back to you shortly.</p>
      <p>Here are the details you provided:</p>
      <p><strong>Name:</strong> ${datas.name}</p>
      <p><strong>Email:</strong> ${datas.email}</p>
      <p><strong>Phone Number:</strong> ${datas.phone_number}</p>
      <p><strong>Message:</strong></p>
      <p>${datas.message}</p>
      <p>We appreciate your interest and look forward to exploring opportunities together.</p>
      <p>Best regards,</p>
      <p>ASK Technology</p>
      <p>📱 +91-91 98408 99559 | ☎ 044-45034080 | ✉ sales@asktek.net</p>
      <p><a href="http://www.asktek.net">www.asktek.net</a></p>
    `;
  
    await axios
      .post("/api/Email/SendMail3", {
        from: "sales@asktek.net",
        to: `${datas.email}`,
        subject: subjectLine,
        text: bodyMessageToUser,
      })
      .then((res) => {
        setOpenLoader(false);
        Swal.fire({
          title: "Thank you for reaching out!",
          text: "Your partnership inquiry has been successfully submitted. We’ll be in touch soon.",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch(() => setOpenLoader(false));
  };
  

  return (
    <>
      {/* Contact Form Section Start */}
      <section
        className="contact-form-area bg-white  py-50"
        style={{ backgroundColor: "white" }}
      >
        <Container component={Paper} elevation={3}>
          <div className="row bg-white align-items-center">
            <div className="col">
              <div className=" bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-50">
                <h3>
                  Reach Out to Us for{" "}
                  <span className="text-gradient-title2">PARTNERSHIP</span>{" "}
                  Opportunities
                </h3>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    phone_number: "",
                    email: "",
                    country:"",
                    company_name:"",
                    city:"",
                    TypeOfReq: "c",
                    product: "",
                    message: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .matches(/^[A-Za-z\s]+$/, "enter valid name")
                      .max(50, "should not exceed 50 characters.")
                      .required("Please provide your full name."),

                    phone_number: Yup.string()
                      .matches(
                        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                        "Please provide a valid phone number."
                      )
                      .required("Phone number is required."),
                    email: Yup.string()
                      .matches(
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                        "Please provide a valid email address"
                      )
                      .required("Email address is required."),
                      city: Yup.string()
                      .max(50, "should not exceed 50 characters.").matches(
                        /^[A-Za-z\s]+$/,
                        "enter valid city name"
                      ),
                    
                    product:Yup.string().required("Select Any Product"),
                    country:Yup.object().required("Select Your Country"),
                    message: Yup.string()
                      .max(200, "should not exceed 200 characters.")
                  })}
                  onSubmit={handleSubmit}
                >
                  <Form>
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
                              type="number"
                              {...field}
                              fullWidth
                              label="Phone Number"
                              variant="standard"
                              error={
                                form.errors.phone_number &&
                                form.touched.phone_number
                              }
                              helperText={<ErrorMessage name="phone_number" />}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
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
                      <Grid item xs={12} sm={4}>
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
                        <Grid item xs={12} sm={4}>
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
                                    size={matchesSmallScreen && "small"}
                                    variant="standard"
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
                        <Grid item xs={12} sm={4}>
                            <Field name="product">
                              {({ field,form }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  select
                                  label="Partner"
                                  variant="standard"
                                  size={matchesSmallScreen && "small"}
                                  error={
                                    form.errors.product && form.touched.product
                                  }
                                  helperText={<ErrorMessage name="product" />}
                                >
                                  <MenuItem value="ApparelBuyingHouse">
                                   Apparel Buying House
                                  </MenuItem>
                                  <MenuItem value="GarmentManufacture">
                                   Garment Manufacture
                                  </MenuItem>
                                
                                </TextField>
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
                              label="Message"
                              variant="standard"
                              error={
                                form.errors.message && form.touched.message
                              }
                              helperText={<ErrorMessage name="message" />}
                            />
                          )}
                        </Field>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className="d-flex justify-content-center align-items-center mt-25 gap-2"
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
            {/* {matchesBigScreen && (
              <div className="col-lg-4 bg-white">
                <div className="contact-right-image wow fadeInLeft delay-0-2s">
                  <img
                    src="assets/images/background/bg2.jpg"
                    alt="FAQs"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
            )} */}
          </div>
        </Container>
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
export default PartnerWithUsForm;
