import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const Testimonials = () => {
  const tokent =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudGxpc3QiOlt7IlVzZXJJRCI6IjEiLCJMb2dpbkNvZGUiOiIwMSIsIkxvZ2luTmFtZSI6IkFkbWluIiwiRW1haWxJZCI6ImFkbWluQGdtYWlsLmNvbSIsIlVzZXJUeXBlIjoiQURNSU4ifV0sImlhdCI6MTYzODM1NDczMX0.ZW6zEHIXTxfT-QWEzS6-GuY7bRupf2Jc_tp4fXIRabQ";

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [reviewData, setreviewData] = useState([]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    getAllReview();
  });

  // get all Reviews Request
  const getAllReview = async () => {
    try {
      const res = await axios.get("/api/ReviewManage/Reviews", {
        headers: { Authorization: tokent, "Content-Type": "application/json" },
      });
      setreviewData(res.data);
      console.log("Reviews data", res.data);
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
    autoplaySpeed: 5000,
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
                  <div className="testi-image-item">
                    <img src="assets/images/clients/1.png" alt="Author" />
                  </div>
                  <div className="testi-image-item">
                    <img src="assets/images/clients/4.webp" alt="Author" />
                  </div>
                  <div className="testi-image-item">
                    <img
                      src="assets/images/clients/5.jpg"
                      alt="Author"
                      className="p-10"
                    />
                  </div>
                  <div className="testi-image-item">
                    <img src="assets/images/clients/7.jpg" alt="Author" />
                  </div>
                </Slider>
                <Slider
                  {...slider}
                  asNavFor={nav2}
                  ref={(slider) => setSlider1(slider)}
                  className="testi-content-slider"
                >
                  <div className="testi-content-item">
                    <p>
                      Working with Ask Technology has been a game-changer for
                      our business. Their innovative solutions and dedicated
                      support have helped us streamline operations and enhance
                      customer experiences. Highly recommend!
                    </p>
                    <h6 className=" text-end" style={{ textAlign: "right" }}>
                      - GRT Jewellers
                    </h6>
                  </div>

                  <div className="testi-content-item">
                    <p>
                      We've been partnering with Ask Technology for years, and
                      they continue to exceed our expectations. Their ERP
                      solutions have revolutionized our manufacturing processes,
                      improving efficiency and profitability. Truly a trusted
                      partner!
                    </p>
                    <h6 className=" text-end" style={{ textAlign: "right" }}>
                      - Vijay Garments
                    </h6>
                  </div>
                  
                  <div className="testi-content-item">
                    <p>
                      Ask Technology's dedication and professionalism are
                      unmatched. Their custom software solutions have
                      streamlined our procurement processes, saving us time and
                      resources. Couldn't be happier with the results!
                    </p>
                    <h6 className=" text-end" style={{ textAlign: "right" }}>
                      - Padma Buying House
                    </h6>
                  </div>
                  <div className="testi-content-item">
                    <p>
                      Ask Technology has been pivotal in helping us stay ahead
                      in a competitive market. Their tailored technology
                      solutions have enhanced our operations and customer
                      service, driving growth and success. Highly impressed and
                      satisfied!
                    </p>
                    <h6 className=" text-end" style={{ textAlign: "right" }}>
                      - Prince Jewellers
                    </h6>
                  </div>
                </Slider>
              </div>
            </div>
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
