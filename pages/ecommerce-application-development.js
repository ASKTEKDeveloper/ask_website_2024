import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Nav, Tab } from "react-bootstrap";
import {
  Chip,
  Container,
  Divider,
  Grid,
  Button,
  Dialog,
  DialogContent,
  TextField,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("/api/Enquiry/ProductEnquiry", values);
      console.log("Form submitted successfully:", response.data);
      setOpen(false);
      Swal.fire({
        title: "Thank you!",
        text: "Your service request has been submitted successfully. Our team will get back to you shortly.",
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
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageBanner pageName={"Enterprise Applications Development"} />
      <div className="sticky-button-container">
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="warning"
          className="sticky-button headShake "
        >
          Quick Enquiry
        </Button>
      </div>
      {/* mobile-services*/}
      <section className="about-area-two px-3  py-130 rpy-100 rel z-1">
        <Container>
          <div className="row align-items-center gap-90">
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Our Services</span>
                  <h2>Ecommerce Application Development</h2>
                </div>
                <p>
                  Unlock the potential of online retail with our Ecommerce
                  Application Development service. From customizing platforms
                  like Magento, Shopify, WooCommerce, and OpenCart to building
                  bespoke solutions tailored to your business needs, we create
                  seamless and secure ecommerce experiences. Our expertise
                  ensures optimized performance, intuitive user interfaces, and
                  robust features to drive sales, enhance customer engagement,
                  and scale your online business effectively. Trust us to
                  transform your ecommerce vision into reality and stay ahead in
                  the competitive digital marketplace.
                </p>

                <div className="about-btns py-3">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn style-three mt-15">
                      Get a Call Back <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/services/e-commerce.png" alt="About" />
                {/* <div className="bg-circle-shape" /> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* About Area end */}

      {/* Services Area Two start */}
      <section className="services-area-two px-3  mt-50 rel z-2">
        <Container maxWidth={"lg"}>
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Our Services</span>
            {/* <h2>Mobile App Solutions</h2> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/magento.svg" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#7E97A6" }}>Magento </span>{" "}
                  </h4>
                  <p className="text-center">
                    Harness the power of Magento for your ecommerce store. Our
                    Magento development services cover everything from design
                    customization to module development, ensuring a robust and
                    scalable ecommerce solution that meets your business needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/shopify.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#008DDA" }}>Shopify </span>
                  </h4>
                  <p className="text-center">
                    Launch your online store quickly and easily with Shopify.
                    Our Shopify development services include theme
                    customization, app integration, and store optimization,
                    enabling you to create a seamless shopping experience for
                    your customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/woo.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    {" "}
                    <span style={{ color: "#5356FF" }}>WooCommerce </span>
                  </h4>
                  <p className="text-center">
                    Build a powerful ecommerce website with WooCommerce. Our
                    WooCommerce development services include custom theme
                    design, plugin development, and payment gateway integration,
                    helping you create a unique and engaging online store.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/opencart.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#7E97A6" }}>OpenCart</span>
                    <br />
                    <br />
                  </h4>
                  <p className="text-center">
                    Create a feature-rich ecommerce store with OpenCart. Our
                    OpenCart development services cover everything from
                    installation and setup to customization and optimization,
                    ensuring a fast, secure, and user-friendly shopping
                    experience for your customers.
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/storeecom.png"
                    alt="Service"
                  />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#65B741" }}> E-commerce Store </span>{" "}
                    Management
                  </h4>
                  <p className="text-center">
                    Let us handle the day-to-day management of your ecommerce
                    store. Our ecommerce store management services include
                    product updates, inventory management, order processing, and
                    customer support, allowing you to focus on growing your
                    business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="service-item-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/services/migra.png" alt="Service" />
                </div>
                <div className="content">
                  <h4 className="title text-center">
                    <span style={{ color: "#008DDA" }}>E-commerce Store </span>
                    Migration
                  </h4>
                  <p className="text-center">
                    Seamlessly migrate your ecommerce store to a new platform.
                    Our ecommerce store migration services ensure a smooth
                    transition with minimal disruption to your business,
                    preserving your data, SEO rankings, and customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Services Area Two end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area px-3  py-130 rpy-100 rel z-1">
        <Container>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 new-font-play">
                  Why Choose Ask Technology
                </span>
                <h5 className="my-4">
                  At Ask Technology, we understand that the right technology
                  partner can make all the difference. Here's why we stand out
                  in the crowded tech landscape
                </h5>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <i className="flaticon-creativity" />{" "}
                    <span>Innovation</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <i className="flaticon-test" /> <span>Tailoring</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <i className="flaticon-creativity" /> <span>Expertise</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <i className="flaticon-support" />{" "}
                    <span>Client-Centric</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap5"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap5"
                  >
                    <i className="flaticon-cyber-security-1" />{" "}
                    <span>End-to-End</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap6"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap6"
                  >
                    <i className="flaticon-support" /> <span>Excellence</span>
                  </Nav.Link>
                </li>
              </Nav>

              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src={
                            "https://ik.imagekit.io/sathishask2024/Deconstructed.gif?updatedAt=1710852540100"
                          }
                          // src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3 style={{ fontFamily: "oswald" }}>
                          Innovation at the Core
                        </h3>
                        <p>
                          Our commitment to innovation drives everything we do.
                          From developing cutting-edge solutions to adopting the
                          latest technologies, we ensure your business stays
                          ahead in a rapidly evolving digital landscape
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Strategic UI/UX Assessment</li>
                          <li>
                            Thorough Contextual Research and 360° Planning
                          </li>
                          <li>
                            Advanced Wireframing &amp; Prototyping Techniques
                          </li>
                        </ul>
                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3 style={{ fontFamily: "oswald" }}>
                          Tailored Solutions, Every Time
                        </h3>
                        <p>
                          Our approach is personalized to fit your specific
                          requirements. We delve deep into understanding your
                          business intricacies to provide tailor-made solutions
                          that perfectly match your objectives. No cookie-cutter
                          approaches here – just bespoke strategies for your
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Customized Strategy Development</li>
                          <li>Thorough Needs Analysis and Consultation</li>
                          <li>Personalized Product Development</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="https://ik.imagekit.io/sathishask2024/Visionary%20technology-amico.png?updatedAt=1710852508007"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Proven Expertise</h3>
                        <p>
                          With years of experience in IT technology services, we
                          bring a wealth of expertise to the table. Our team of
                          skilled professionals is dedicated to delivering
                          solutions that not only meet but exceed expectations
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Decades of IT Technology Services Experience</li>
                          <li>In-depth Industry Expertise and Insight</li>
                          <li>Commitment to Exceeding Client Expectations</li>
                        </ul>

                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Client-Centric Approach</h3>
                        <p>
                          Your success is our priority. We pride ourselves on
                          our client-centric approach, ensuring open
                          communication, transparency, and a collaborative
                          partnership. Your challenges are our challenges, and
                          your victories are our victories.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Commitment to Prioritizing Your Success</li>
                          <li>
                            Emphasis on Open Communication and Transparency
                          </li>
                          <li>Building Collaborative Partnerships</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap5">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>End-to-End Services</h3>
                        <p>
                          From web and mobile app development to ready-to-go ERP
                          products and technology training, we offer end-to-end
                          services. This holistic approach ensures that all your
                          technology needs are met under one roof.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive Web and Mobile App Development</li>
                          <li>Ready-to-Deploy ERP Solutions</li>
                          <li>Technology Training and Support</li>
                        </ul>
                        {/* <Link legacyBehavior href="/about">
      <a className="theme-btn mt-30">
        Learn More <i className="fas fa-long-arrow-right" />
      </a>
    </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap6">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Commitment to Excellence</h3>
                        <p>
                          Excellence is not just a goal; it's a standard. We are
                          committed to delivering solutions that not only meet
                          high-quality benchmarks but set new standards in the
                          industry. Your success story is our measure of
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Setting High-Quality Standards</li>
                          <li>Pioneering Industry-Leading Solutions</li>
                          <li>Your Success Drives Our Pursuit of Excellence</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </Container>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Partners Area start */}
      <section className="partners-area-two bgc-secondary px-3 pt-80 pb-50 rel z-1">
        <Container>
          <div className="section-title text-white text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Our Partners</span> */}
            <h2>Our Partners</h2>
            <span className="bg-text">Partners</span>
          </div>
          {/* <Marquee
            direction="right"
            pauseOnHover
            // gradient={100}
            loop={0}
            autoFill
            
          >
            <div style={{ padding: 20 }} className="partner-item">
              <div>
              <img
                src="assets/images/partners/partner1.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
              </div>
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner2.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner3.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner4.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner5.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>
          </Marquee> */}
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/partners/partner1.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/partners/partner2.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/partners/partner3.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/partners/partner4.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/partners/partner5.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </Container>
        <div className="partners-shapes">
          <img
            className="left-shape"
            src="assets/images/partners/partner-shape-left.png"
            alt="Shape"
          />
          <img
            className="right-shape"
            src="assets/images/partners/partner-shape-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Partners Area end */}

      {/* Work Process Area start */}
      <section className="work-process-area px-3  pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Discover</h4>
                  <p>
                    From your idea to our understanding, we dive deep to shape
                    the plan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Planning</h4>
                  <p>
                    With clarity in mind, we map out every detail for seamless
                    execution
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Design &amp; Dev</h4>
                  <p>
                    Bringing ideas to life with precision in design and
                    development
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Testing</h4>
                  <p>
                    Ensuring perfection through rigorous testing for flawless
                    performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Project Delivery</h4>
                  <p>
                    From final touches to delivery, we ensure excellence every
                    step of the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hero-area-two bgs-cover"
        style={{ backgroundImage: "url(assets/images/hero/hero-two.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content-two pt-50 pb-50 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
                <h1>Industries we serve</h1>
                <span className="sub-title">
                  Explore our diverse clientele across various industries, from
                  healthcare and finance to retail and manufacturing. Our
                  tailored solutions cater to the unique needs of each sector,
                  driving innovation, efficiency, and growth for businesses
                  worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center pb-50">
            <Marquee
              direction="right"
              pauseOnHover
              // gradient={100}
              loop={0}
              autoFill
            >
              {/* <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img
                    src="assets/images/services/sewing-machine.png"
                    alt="Icon"
                    className="industries-icon"
                  />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Garments
                  </Link>
                </h5>
              </div>
            </div> */}
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/manufacture.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Manufacturing
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/online-marketing.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      E-commerce
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/patient.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Healthcare
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/seller.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Retail
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/wholesaler.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Wholesale
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/logistics.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Logistics
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/hotel.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Hospitality
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/vacation.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Travel
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/car-services.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Automotive
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/invesment.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Financial
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/e-learning.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      E-Learning
                    </Link>
                  </h5>
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div className="hero-shapes-two">
          <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
        </div>
      </section>

      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-50 pb-100 px-3  rpy-100  mb-4 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/feature-bg.jpg)",
        }}
      >
        <Container>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-12 mb-40">
              <div className="d-flex justify-content-center align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                  <img
                    src="/assets/images/projects/erp/Calling-amico.png"
                    alt="Why Choose"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
                <div className="section-title mb-40">
                  <h2 className="text-gradient-title2">
                    Request a Call Back Today
                  </h2>
                  <span className="sub-title  mb-10 text-gradient-title2">
                    Explore Our Services
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-12 ">
              <div className="contact-form shadowbox-2 bg-white p-50 rmb-55 wow fadeInRight delay-0-2s">
                <Formik
                  initialValues={{
                    name: "",
                    phone_number: "",
                    company_name: "",
                    email: "",
                    city: "",
                    TypeOfReq: "s",
                    product: "EcommerceAppDevelopment",
                    enquiry_details: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required(
                      "Please provide your full name."
                    ),
                    phone_number: Yup.string().required(
                      "Please enter your phone number."
                    ),
                    email: Yup.string()
                      .email("Please provide a valid email address.")
                      .required("Email address is required."),
                    city: Yup.string().required("Please specify your city."),
                    company_name: Yup.string().required(
                      "Please specify the name of your company."
                    ),
                    enquiry_details: Yup.string().max(
                      200,
                      "should not exceed 200 characters."
                    ),
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
                      <Grid item xs={12} sm={6}>
                        <Field name="product">
                          {({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              select
                              label="Products"
                              variant="standard"
                            >
                              <MenuItem value="MobileAppSolutions">
                                Mobile App Solutions
                              </MenuItem>
                              <MenuItem value="EnterpriseAppDevelopment">
                                Enterprise Application Development
                              </MenuItem>
                              <MenuItem value="EcommerceAppDevelopment">
                                Ecommerce Application Development
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
      <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
        <DialogContent className="bg-white p-0 m-0 ">
          <div className="form-style-two bg-white">
            <div className="mb-25 pt-10 p-5 bg-info text-center">
              <h3 style={{ color: "white", fontFamily: "oswald" }}>
                Quick Enquiry
              </h3>
            </div>
            <Formik
              initialValues={{
                name: "",
                phone_number: "",
                company_name: "",
                email: "",
                city: "",
                TypeOfReq: "s",
                product: "EcommerceAppDevelopment",
                enquiry_details: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Please provide your full name."),
                phone_number: Yup.string().required(
                  "Please enter your phone number."
                ),
                email: Yup.string()
                  .email("Please provide a valid email address.")
                  .required("Email address is required."),
                city: Yup.string().required("Please specify your city."),
                company_name: Yup.string().required(
                  "Please specify the name of your company."
                ),
                enquiry_details: Yup.string().max(
                  200,
                  "should not exceed 200 characters."
                ),
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
                  <Grid item xs={12} sm={6}>
                    <Field name="product">
                      {({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          select
                          label="Products"
                          variant="standard"
                        >
                          <MenuItem value="MobileAppSolutions">
                            Mobile App Solutions
                          </MenuItem>
                          <MenuItem value="EnterpriseAppDevelopment">
                            Enterprise Application Development
                          </MenuItem>
                          <MenuItem value="EcommerceAppDevelopment">
                            Ecommerce Application Development
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
                          helperText={<ErrorMessage name="enquiry_details" />}
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
        </DialogContent>
      </Dialog>
    </Layout>
  );
};
export default Services;
