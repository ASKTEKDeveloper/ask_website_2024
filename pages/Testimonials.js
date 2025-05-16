import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import VideoPopup from "@/src/components/VideoPopup";
import Link from "next/link";

const Testimonials = () => {
  const tokent =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudGxpc3QiOlt7IlVzZXJJRCI6IjEiLCJMb2dpbkNvZGUiOiIwMSIsIkxvZ2luTmFtZSI6IkFkbWluIiwiRW1haWxJZCI6ImFkbWluQGdtYWlsLmNvbSIsIlVzZXJUeXBlIjoiQURNSU4ifV0sImlhdCI6MTYzODM1NDczMX0.ZW6zEHIXTxfT-QWEzS6-GuY7bRupf2Jc_tp4fXIRabQ";

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [reviewData, setreviewData] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  useEffect(() => {
    getAllReview();
  }, []);

  // get all Reviews Request
  const getAllReview = async () => {
    try {
      const res = await axios.get("/api/ReviewManage/Reviews", {
        headers: { Authorization: tokent, "Content-Type": "application/json" },
      });
      setreviewData(res.data);
      // console.log("Reviews data", res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const thumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const slider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000
  };

  const formatTitleForURL = (title) => {
    return title.replace(/\s+/g, "_"); // Replace spaces with underscores
  };

  return (
    <>
      <section className="testimonials-area pt-100 mb-100 mt-50 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <Slider
                  {...thumbs}
                  asNavFor={nav1}
                  ref={(slider) => setSlider2(slider)}
                  className="testi-image-slider"
                >
                  {reviewData.map((data, index) => (
                    <div key={index} className="testi-image-item">
                      <img
                        src={`/api/client-logo?logoFileName=${data.LogoFileName}`}
                        // src={`http://103.73.189.37/ASK_WEB_ADMIN_PANEL_API/api/ClientLogos/${data.LogoFileName}`}
                        alt="Author"
                      />
                    </div>
                  ))}
                </Slider>
                <Slider
                  {...slider}
                  asNavFor={nav2}
                  ref={(slider) => setSlider1(slider)}
                  className="testi-content-slider"
                >
                  {reviewData.map((data, index) => (
                    <div key={index} className="testi-content-item">
                      <p>{data.Review}</p>
                      <h6 className=" text-end" style={{ textAlign: "right" }}>
                        - {data.CompanyName}
                      </h6>

                      <div className="about-btns mb-45">
                      { data.URL && ( <Link legacyBehavior  href={data.URL}>
                        <a className="theme-btn style-three mt-15">
                        Watch Testimonial <i className="fas fa-play" />
                        </a>
                      </Link>)}
                      { data.CaseStudyId && (
                      <Link legacyBehavior href={`/case-study-details?id=${data.CaseStudyId}&title=${formatTitleForURL(data.CaseStudyTitle)}`}>
                        <a className="theme-btn mt-15">
                          Read More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>)}
                    </div>

                    {/* { data.URL && (
                        <a
                          className="theme-btn mt-10"
                          href={data.URL}
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}
                        >
                          Watch Testimonial <i className="fas fa-play" />
                        </a>
                      )}
                        { data.CaseStudyId && (
                        <a
                          className="theme-btn mt-10"
                          href={`/case-study-details?id=${data.CaseStudyId}`}
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                          }}
                        >
                          Read More <i className="fas fa-play" />
                        </a>
                      )} */}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            {open && <VideoPopup close={setOpen} videoURL={videoURL} />}
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/bg1.jpg"
                  alt="Testimonial"
                  style={{ borderRadius: 20 }}
                />
                <div className="testi-image-over">
                  <h3 className="text-dark">
                    Be Part of Our Client Success Stories!
                  </h3>
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
