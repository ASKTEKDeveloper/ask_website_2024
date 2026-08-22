import { useState, useRef } from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import Link from "next/link";
import { sliderTwoActive } from "@/src/sliderProps";

const Hero4Slider = () => {
  const sliderRef = useRef(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Slider
        {...sliderTwoActive}
        ref={sliderRef}
        className="slider-two-active"
      >
        <div className="slider-item-two">
          <Container>
            <div className="slide-content">
              <span className="sub-title" style={{ color: "#3E54AC" }}>
                Welcome to ASK Technology
              </span>
              <h2 style={{ textTransform: "capitalize", color: "#0079FF" }}>
                WE BRING SUCCESS TO YOUR GREAT BUSINESS
              </h2>
              <p>
                Revolutionize your operations with Ask Technology's cutting-edge
                solutions. From ERP tailored for Textile & Garment Industries to
                Enterprise-level Goods Traders Management, our suite of products
                is designed for excellence
              </p>

              <Link href="/about">
                <a className="theme-btn style-two mt-15">
                  Explore Our Solutions{" "}
                  <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </Container>
          <div
            className="slider-image"
            style={{
              backgroundImage: "url(assets/images/home/home3.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </Slider>
      <div className="slider-arrows">
        <div className="container rel">
          <button className="prev-slider slick-arrow" onClick={previous}>
            <i className="fal fa-angle-left" />
          </button>
          <button className="next-slider slick-arrow" onClick={next}>
            <i className="fal fa-angle-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero4Slider;
