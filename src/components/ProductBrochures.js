import { useEffect, useMemo, useState } from "react";
import {
  Autocomplete,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import countryList from "react-select-country-list";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductBrochures = ({ code, productCode }) => {
  const productShortCode = (code || productCode || "").trim();
  const [brochure, setBrochure] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLoader, setOpenLoader] = useState(false);
  const countryOptions = useMemo(() => countryList().getData(), []);
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchBrochure = async () => {
      if (!productShortCode) {
        setBrochure(null);
        return;
      }

      setLoading(true);

      try {
        const response = await axios.get(`/api/ProductBrochure?code=${encodeURIComponent(productShortCode)}`);
        setBrochure(response.data || null);
      } catch (error) {
        console.error("Error fetching brochure:", error);
        setBrochure(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBrochure();
  }, [productShortCode]);

  if (!productShortCode) return null;
  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <CircularProgress size={18} />
        <Typography variant="body2">Loading brochure...</Typography>
      </div>
    );
  }

  if (!brochure || !brochure.BrochureFileName) {
    return (
      <Typography variant="body2" color="text.secondary">
        Brochure not available for this product right now.
      </Typography>
    );
  }

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setOpenLoader(true);

    try {
      await axios.post("/api/Enquiry/ProductEnquiry", values);
      await Promise.all([
        axios.post("/api/Email/SendMail3", {
          from: "sales@asktek.net",
          to: values.email,
          subject: "Thank You for Downloading Our Product Brochure",
          text: `<p>Dear ${values.name},</p><p>Thank you for downloading our product brochure.</p><p>Best regards,<br />ASK TECHNOLOGY</p>`,
        }),
        axios.post("/api/Email/SendMail3", {
          from: "sales@asktek.net",
          to: "sales@asktek.net",
          subject: "User Downloaded Product Brochure",
          text: `<p>A user downloaded the ${values.product} brochure.</p><p><strong>Name:</strong> ${values.name}</p><p><strong>Email:</strong> ${values.email}</p><p><strong>Phone:</strong> ${values.phone_number}</p><p><strong>Company:</strong> ${values.company_name}</p><p><strong>City:</strong> ${values.city}</p><p><strong>Country:</strong> ${values.country.label}</p>`,
        }),
      ]);

      const brochureResponse = await axios.get(
        `/api/product-brochure?BrochureFileName=${encodeURIComponent(brochure.BrochureFileName)}`,
        { responseType: "blob" },
      );

      const contentType = brochureResponse.headers["content-type"] || "";
      if (!contentType.includes("pdf")) {
        throw new Error("The brochure download API did not return a PDF.");
      }

      const brochureBlob = new Blob([brochureResponse.data], {
        type: "application/pdf",
      });
      const brochureUrl = window.URL.createObjectURL(brochureBlob);
      const link = document.createElement("a");
      link.href = brochureUrl;
      link.setAttribute("download", `brochure_${productShortCode}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(brochureUrl);
      resetForm();
      setOpen(false);
      Swal.fire({
        title: "Thank you!",
        text: "Your product brochure has been successfully downloaded.",
        icon: "success",
        confirmButtonText: "Done",
      });
    } catch (error) {
      console.error("Error submitting brochure request:", error);
      Swal.fire({
        title: "Submission failed",
        text: "The brochure could not be downloaded right now. Please try again later.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setOpenLoader(false);
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().matches(/^[A-Za-z\s]+$/, "Enter a valid name").max(50).required("Please provide your full name."),
    phone_number: Yup.string().matches(/^\+?[1-9][0-9-]*(?: [0-9-]+)*$/, "Please enter a valid phone number.").required("Please enter your phone number."),
    email: Yup.string().email("Please provide a valid email address.").required("Email address is required."),
    city: Yup.string().max(50).required("Please specify your city."),
    country: Yup.object().required("Please select your country."),
    company_name: Yup.string().max(80).required("Please specify the name of your company."),
  });

  return (
    <>
      <div className="button">
        <a
          href="#download-brochure"
          onClick={(event) => {
            event.preventDefault();
            setOpen(true);
          }}
          style={{ color: "white" }}
        >
          Download Brochure
        </a>
        <b className="top">Click to </b>
        <b className="bottom">Document</b>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
        <DialogContent className="p-0 m-0">
          <div className="align-items-center bg-white">
            <div className="col-lg-12 pt-50">
              <div className={`section-title text-center ${matchesSmallScreen ? "px-3" : ""}`}>
                <h4 className="text-gradient-title3" style={{ fontFamily: "oswald" }}>
                  Please fill in the below details to download our product brochure
                </h4>
              </div>
            </div>
            <Formik
              initialValues={{ name: "", phone_number: "", company_name: "", email: "", city: "", country: null, TypeOfReq: "d", product: productShortCode, enquiry_details: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="bg-white p-25">
                <Grid container spacing={1}>
                  {[{ name: "name", label: "Name" }, { name: "phone_number", label: "Phone no" }, { name: "company_name", label: "Your Company Name" }, { name: "email", label: "Email", type: "email" }, { name: "city", label: "City" }].map((fieldConfig) => (
                    <Grid item xs={12} className="mb-10" key={fieldConfig.name}>
                      <Field name={fieldConfig.name}>
                        {({ field, form }) => (
                          <TextField {...field} fullWidth label={fieldConfig.label} type={fieldConfig.type || "text"} variant="outlined" size="small" error={Boolean(form.errors[fieldConfig.name] && form.touched[fieldConfig.name])} helperText={<ErrorMessage name={fieldConfig.name} />} />
                        )}
                      </Field>
                    </Grid>
                  ))}
                  <Grid item xs={12} className="mb-10">
                    <Field name="country">
                      {({ field, form }) => (
                        <Autocomplete options={countryOptions} getOptionLabel={(option) => option.label || ""} value={field.value || null} onChange={(event, value) => form.setFieldValue(field.name, value)} onBlur={() => form.setFieldTouched(field.name, true)} renderInput={(params) => <TextField {...params} fullWidth label="Country" size="small" error={Boolean(form.errors.country && form.touched.country)} helperText={<ErrorMessage name="country" />} />} />
                      )}
                    </Field>
                  </Grid>
                  <Grid item xs={12} className="d-flex justify-content-center mt-25 align-items-center">
                    <Button type="submit" variant="contained" className="theme-btn style-two">
                      Download
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={openLoader} fullWidth>
        <LinearProgress />
      </Dialog>
    </>
  );
};

export default ProductBrochures;
