import Layout from "@/layout";
import { Chip, Container, Divider } from "@mui/material";
import ContactUsGarments from "./ContactUsGarments";
import FAQ from "@/src/components/FAQ";
import ProductBrochures from "@/src/components/ProductBrochures";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProjectGrid = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Layout>
        <>
          <section className="project-grid-area rel z-2 py-50 rpy-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                    <h2>
                      TARGET -{" "}
                      <span className="text-success">
                        INSPECTION ON GO
                      </span>{" "}
                    </h2>
                    <h5>Tailored for Garment Industry Quality</h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="assets/images/projects/iog-mockup.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center my-50 ">
                      <ProductBrochures code="IOG" />
                    </div>
                    <p>
                      Inspection On Go is a robust solution designed to
                      streamline garment inspection processes from order
                      creation to quality checks, optimizing workflow and
                      ensuring transparency at every stage. It integrates
                      real-time monitoring, offline capabilities, and mobile
                      accessibility to help manufacturers and quality assurance
                      teams maintain high standards, even in remote or
                      disconnected environments
                    </p>
                  </div>
                  <div className="project-shapes">
                    <img
                      className="shape one"
                      src="assets/images/shapes/project-left.png"
                      alt="shape"
                    />
                    <img
                      className="shape two"
                      src="assets/images/shapes/project-right.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="section-title text-center ">
                  <Divider>
                    {/* <Chip label="Key Features" size="medium" /> */}
                  </Divider>
                </div>
              </div>
            </div>
          </section>

          <section className="about-area-five  rel z-1 mb-50 ">
            <Container>
              <div className="row align-items-center gap-100">
                <div className="col-lg-12">
                  <div className="about-content  rel z-1 wow fadeInLeft delay-0-2s mb-75">
                    <div className="section-title text-center rmb-40 ">
                      <span className="sub-title mb-15">
                        Functional Flow for
                      </span>
                      <h3 className="text-gradient-title2">Inspection On Go</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-50  d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
                    <img src="assets/images/flowchart/iog.png" alt="steps" />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="service-details-area px-3  rpt-100 pb-50 rpb-85">
            <Container>
              <div className="row gap-100">
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="section-title text-center mb-4">
                      <Divider>
                        <Chip
                          label="Functional Areas"
                          size="medium"
                          color="info"
                        />
                      </Divider>
                    </div>

                    {/* Order Processing */}
                    <div className="row gap-90 fadeInUp  justify-content-center align-items-center mt-75">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/iog/1.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Buyer Order Management</h3>
                          <p>
                            Seamlessly handle all aspects of buyer orders, from
                            initial inquiry to direct order creation, enhancing
                            efficiency and customer satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Inventory Management */}
                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center mt-75">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Factory Order</h3>
                          <p>
                            TARGET - IOG structures the FOS in terms of trading.
                            Once on generating the FOS the system provides with
                            the Projected Profit report for the merchandiser and
                            the management for high level expected Margin.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/iog/2.png"
                            alt="Why Choose"
                            className="product-features-img drp-shadow-img"
                          />
                        </div>
                      </div>
                    </div>

                    {/* •	Offline Capabilities */}
                    <div className="row gap-90   fadeInUp justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image rmb-55">
                          <img
                            src="assets/images/projects/iog/3.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Inspection Audits</h3>
                          <p>
                            TARGET - IOG acts as a user friendly tool especially
                            for Inspection module where the QA will be able to
                            inspect in factory even during the crucial period
                            without internet access. TARGET - IOG captures the
                            data locally during offline and uploads the data
                            back.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* •	Real-Time Data Visualization */}
                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Access Control Management</h3>
                          <p>
                            Multi-level access control ensures only authorized
                            personnel can access sensitive data. Access the
                            entire organization structure from anywhere through
                            our cloud server integrated solution.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/iog/4.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    {/* Production Management */}
                    <div className="mt-3 row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="assets/images/projects/iog/5.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Real-Time Reporting with Target MIS</h3>
                          <p>
                            Target MIS serves as a real-time reporting
                            assistant, offering end-to-end traceability from
                            Buyer Order to Factory Order and Inspection Status.
                            It caters to various management levels by providing
                            information in both summarized and detailed formats
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-6 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Inspection On-Go for QA</h3>
                          <p>
                            Explore the unique products tailored inspections
                            through the Target Inspection on Go module.
                            Effortlessly configure a variety of quality check
                            types to ensure each item is properly checked for
                            defects. Web and Mobile Integrated Solution.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="assets/images/projects/iog/6.png"
                            alt="Why Choose"
                            className="product-features-img "
                          />
                        </div>
                      </div>
                    </div>

                    {/* Offline Functionality & Sync Feature
                     */}
                    <div className="mt-3 row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="assets/images/projects/iog/7.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Offline Functionality & Sync Feature</h3>
                          <p>
                            Our app supports offline inspections and data
                            recording. Once online, the sync feature updates all
                            information seamlessly, ensuring no data loss and
                            keeping records up-to-date on both web and mobile
                            platforms.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-12 mt-50 ">
                      <section className="services-area  pt-75 pb-10 rel z-1">
                        <div className="container">
                          <div className="row medium-gap">
                            <div className="col-xl-12">
                              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                                <span className="sub-title mb-15">
                                  Business Benefits
                                </span>
                                <h3 style={{ color: "#8758FF" }}>
                                  Unlocking Business Advantages
                                </h3>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-4s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/time-management.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Data-Driven Decision Making</h4>
                                  <p>
                                    Make informed decisions based on real-time
                                    data and historical trends, leading to
                                    better quality control and optimized
                                    production.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-6s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/vision.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Predictive Quality Control</h4>
                                  <p>
                                    Use trends and patterns to predict potential
                                    quality issues and take preventative action
                                    before they impact production.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-3s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/eye-care.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Increased Transparency</h4>
                                  <p>
                                    Share analytics and insights across teams,
                                    fostering greater transparency and
                                    collaboration in improving product quality.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                              <div
                                className={`${
                                  matchesSmallScreen &&
                                  "d-flex flex-column  justify-content-center align-items-center gap-4"
                                } benefits-item wow fadeInUp delay-0-5s`}
                              >
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="assets/images/projects/erp/satisfaction.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div
                                  className={`content ${
                                    matchesSmallScreen && "text-center"
                                  }`}
                                >
                                  <h4>Continuous Improvement</h4>
                                  <p>
                                    With access to detailed analytics,
                                    manufacturers can refine their processes
                                    over time, resulting in higher-quality
                                    output and reduced defect rates.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
          {/* Contact Form Section Start */}
          <ContactUsGarments TypeOF={"p"} initialValue={"IOG"} />
          {/* Contact Form Section End */}
          {/* FAQ Section */}
          <section className="pb-70">
            <Container>
              <div className="section-title text-center mb-50">
                <h2 style={{ fontWeight: "700" }}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div style={{ margin: "0 auto" }}>
                <FAQ code="IOG" defaultActive={0} />
              </div>
            </Container>
          </section>
        </>
      </Layout>
    </>
  );
};
export default ProjectGrid;
