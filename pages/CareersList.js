import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Chip, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Careers = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <img
        src="assets/images/careers/careers.jpg"
        alt="Blog Single"
        style={{ maxWidth: "100%" }}
      />

      <section className="blog-details-area py-130 rpy-100">
        <Container>
          <div className="row gap-60 ">
            <div className="col-lg-12">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Search</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    className="default-search-form"
                  >
                    <input type="text" placeholder="Find Jobs" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tag-share pt-25 pb-55 wow fadeInUp delay-0-2s">
                <div className="item">
                  <h5>Tags</h5>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="#" className="tag">
                      <a className="tag">FRONT END</a>
                    </Link>
                    <Link legacyBehavior href="#">
                      BACK END
                    </Link>
                    <Link legacyBehavior href="#">
                      TESTING
                    </Link>
                    <Link legacyBehavior href="#">
                      INTERN
                    </Link>
                  </div>
                </div>
              </div>

              <h4 className="comment-title mb-25 text-gradient-title2">
                Current Openings
              </h4>
              <div className="row comments mx-0 ">
                <div className="comment-body my-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4 shadowbox-4 wow fadeInUp delay-0-2s">
                  <div
                    className={
                      matchesSmallScreen
                        ? "d-flex flex-column  justify-content-center align-items-center gap-3"
                        : "content"
                    }
                  >
                    <h5 className="text-center my-2">Full Stack Developer</h5>
                    <Typography variant="subtitle2" color="#51829B" mb={2}>
                      FULL TIME | 3-5 Years | 5-9 LPA
                    </Typography>
                    <div className="tag-coulds p-0">
                      <Link legacyBehavior href="#" className="tag">
                        <a className="tag">REACT</a>
                      </Link>
                      <Link legacyBehavior href="#">
                        NODE js
                      </Link>
                      <Link legacyBehavior href="#">
                        MERN
                      </Link>
                      <Link legacyBehavior href="#">
                        SQL
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex flex-column  justify-content-end align-items-cente gal-2 ">
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      endIcon={<i className="fas fa-angle-double-right" />}
                      className="rounded-pill"
                    >
                      Apply
                    </Button>
                    <Button variant="text" color="info">
                      Know More
                    </Button>
                  </div>
                </div>{" "}
                <div className="comment-body my-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4 shadowbox-4 wow fadeInUp delay-0-2s">
                  <div
                    className={
                      matchesSmallScreen
                        ? "d-flex flex-column  justify-content-center align-items-center gap-3"
                        : "content"
                    }
                  >
                    <h5 className="text-center my-2">Full Stack Developer</h5>
                    <Typography variant="subtitle2" color="#51829B" mb={2}>
                      FULL TIME | 3-5 Years | 5-9 LPA
                    </Typography>
                    <div className="tag-coulds p-0">
                      <Link legacyBehavior href="#" className="tag">
                        <a className="tag">REACT</a>
                      </Link>
                      <Link legacyBehavior href="#">
                        NODE js
                      </Link>
                      <Link legacyBehavior href="#">
                        MERN
                      </Link>
                      <Link legacyBehavior href="#">
                        SQL
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex flex-column  justify-content-end align-items-cente gal-2 ">
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      endIcon={<i className="fas fa-angle-double-right" />}
                      className="rounded-pill"
                    >
                      Apply
                    </Button>
                    <Button variant="text" color="info">
                      Know More
                    </Button>
                  </div>
                </div>{" "}
                <div className="comment-body my-3  d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4 shadowbox-4 wow fadeInUp delay-0-2s">
                  <div
                    className={
                      matchesSmallScreen
                        ? "d-flex flex-column  justify-content-center align-items-center gap-3"
                        : "content"
                    }
                  >
                    <h5 className="text-center my-2">Full Stack Developer</h5>
                    <Typography variant="subtitle2" color="#51829B" mb={2}>
                      FULL TIME | 3-5 Years | 5-9 LPA
                    </Typography>
                    <div className="tag-coulds p-0">
                      <Link legacyBehavior href="#" className="tag">
                        <a className="tag">REACT</a>
                      </Link>
                      <Link legacyBehavior href="#">
                        NODE js
                      </Link>
                      <Link legacyBehavior href="#">
                        MERN
                      </Link>
                      <Link legacyBehavior href="#">
                        SQL
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex flex-column  justify-content-end align-items-cente gal-2 ">
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      endIcon={<i className="fas fa-angle-double-right" />}
                      className="rounded-pill"
                    >
                      Apply
                    </Button>
                    <Button variant="text" color="info">
                      Know More
                    </Button>
                  </div>
                </div>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                id="comment-form"
                className="comment-form bgc-lighter mt-80 wow fadeInUp delay-0-2s"
              >
                <h4>Leave a Message</h4>
                <p>Have any question? Ready to talk to us! </p>
                <div className="row mt-15">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        defaultValue=""
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="blog-email"
                        name="blog-email"
                        className="form-control"
                        defaultValue=""
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="fas fa-pencil-alt" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Write Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="agreement"
                        />
                        <label className="form-check-label" htmlFor="agreement">
                          I Agree with the trams &amp; conditions
                        </label>
                      </div>
                      <button type="submit" className="theme-btn style-two">
                        Send Comment <i className="fas fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <blockquote>
                <div className="content">
                  <h4>
                    Smashing Podcast Episode Pauloag Conve Seen Overs Analyze
                    And Compare Performance Frameworks
                  </h4>
                  <span className="name">Rasalina Willamson</span>
                </div>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};
export default Careers;
