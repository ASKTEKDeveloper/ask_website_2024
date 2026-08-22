import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { TextField, Dialog, Grid, LinearProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import ContactUsForm from "./ContactUsForm";

const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-50 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Help</span>
                <h2>Contact Informations</h2>
              </div>             
            </div>
          </div>
          <div className="row justify-content-center">           
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a href="mailto:sales@asktek.net">sales@asktek.net</a>
                <br />
                <br />
               
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Call Us</h4>
                <span>
                  Mobile : <a href="callto:+919840899559">+91 98408 99559</a>
                </span>
                <span>
                  Telephone : <a href="callto:+044-45034080">+044-45034080</a>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <span>Monday - Saturday</span>
                {/* <b>Monday - Saturday,</b> */}
                <span>10:00am - 07:00pm</span>               
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Start */}
      <div id="contactus">
        <ContactUsForm />
      </div>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map container pb-100  wow fadeInUp delay-0-2s">
        <div className="our-location ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7550794644962!2d80.22746827505244!3d13.051255813126886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267890e44ad75%3A0xa6eecf3f48cde4df!2sASK%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1711027578442!5m2!1sen!2sin"
            style={{ border: 0, width: "100%",height:"300px", borderRadius:20, }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
    </Layout>
  );
};
export default Contact;
