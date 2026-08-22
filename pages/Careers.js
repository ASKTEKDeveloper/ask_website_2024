import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import path from "path";
import {
  Chip,
  Typography,
  Button,
  Container,
  Divider,
  InputLabel,
  Stack,
  Box,
  LinearProgress,
} from "@mui/material";
import Link from "next/link";
import { CgWorkAlt } from "react-icons/cg";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Grid } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import { TextField, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import CareersForm from "./CareersForm";

const StyledButton = styled(Button)({
  whiteSpace: "nowrap",
  width: "100%",
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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

const Careers = () => {
  const theme = useTheme();
  const [openLoader, setOpenLoader] = useState(false);
  const classes = useStyles();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedFilePhoto, setSelectedFilePhoto] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFilePath, setSelectedFilePath] = useState("");

  const handleFileChange = async (event) => {
    try {
      const file = event.target.files[0];
      setSelectedFilePhoto(file);
      setSelectedFileName(file.name);

      // Create FormData object to send the file to server
      const formData = new FormData();
      formData.append("file", file);

      // Log the FormData object to verify file data
      console.log("formData:", formData);

      // Upload file to server
      const response = await axios.post("/api/upload", formData);

      // Assuming server returns the file path
      const filePath = response.data.filePath;
      setSelectedFilePath(filePath);
      console.log("file path", filePath);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setOpenLoader(true);
    try {
      const response = await axios.post("/api/Careers/CareersForm", values);
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
    const approvs = await axios
      .post("/api/Email/SendMail3", {
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
    const approvs = await axios
      .post("/api/Email/SendMail3", {
        from: "hr@asktek.net",
        to: `${datas.email}`,
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
            })
      .then((res) => {
        if (res.data === "Email Send Succefully") {
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
  };

  return (
    <Layout>
      <img
        src="assets/images/careers/careers.jpg"
        alt="Blog Single"
        style={{ maxWidth: "100%" }}
      />

      <section className="project-grid-area rel z-2 py-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="section-title text-center mb-50 wow  delay-0-2s">
                <h4 className="text-gradient-title2 ">
                  {" "}
                  We're on the lookout for talented individuals like you to join
                  our team! At ASK Technology, we offer a dynamic, innovative
                  environment where your ideas are valued, and your growth is
                  supported
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-six  rel z-1">
        <div className="container">
          <div className="section-title text-center mb-45">
            <h3 className="text-black-50">Why Choose Us ?</h3>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <CgWorkAlt />
                </div>
                <h4>Innovative Careers</h4>
                <p>Join a team that thrives on innovation and creativity.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <AiOutlineRise />
                </div>
                <h4>Growth Opportunities</h4>
                <p>
                  We invest in your growth and offer opportunities for
                  advancement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <RiTeamLine />
                </div>
                <h4>Collaborative Culture</h4>
                <p>
                  Work alongside brilliant minds in a supportive, inclusive
                  environment.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-3 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon" style={{ color: "#0C359E" }}>
                  <HiOutlineComputerDesktop />
                </div>
                <h4>Meaningful Impact</h4>
                <p>
                  Contribute to projects that make a difference in our world.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      <CareersForm />
      {/* loader popup dialog box */}
      <Dialog
        open={openLoader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <LinearProgress />
      </Dialog>
    </Layout>
  );
};
export default Careers;
