import Layout from "@/layout";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";
import {
  FaRobot,
  FaSearch,
  FaFilePdf,
  FaChartLine,
  FaBrain,
  FaRocket,
  FaBuilding,
} from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdProductionQuantityLimits,
  MdGroups,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsLightningCharge, BsGraphUp } from "react-icons/bs";
import { HiOutlineChip } from "react-icons/hi";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useRef } from "react";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

import ContactUsProduct from "./ContactUsProduct";
import ContactUsGarments from "./ContactUsGarments";
import FAQ from "@/src/components/FAQ";
import BlogsByProduct from "@/src/components/BlogsByProduct";
import Link from "next/link";

// OurPartners Component - Customized for AI Page
const OurPartners = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    try {
      const res = await axios.get("/api/OurPartners");
      const [arr1, arr2] = res.data.reduce(
        ([a, b], item, index) => {
          if (index % 2 === 0) a.push(item);
          else b.push(item);
          return [a, b];
        },
        [[], []],
      );

      setData1(arr1);
      setData2(arr2);
    } catch (e) {
      console.log("ourPartners Error", e.message);
    }
  }

  return (
    <section
      className="partners-area py-50 rel z-1"
      style={{ background: "white" }}
    >
      <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
        <span className="sub-title mb-15" style={{ color: "#667eea" }}>
          <HiOutlineChip style={{ marginRight: "8px" }} />
          AI-Powered Ecosystem
        </span>
        <h2
          className="text-gradient-title3"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
          }}
        >
          Trusted by Forward-Thinking <br /> Fashion Brands
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "10px auto 0",
          }}
        >
          Industry leaders leveraging AI to transform their fashion operations
        </p>
      </div>
      <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
        <Marquee
          direction="right"
          pauseOnHover
          gradient={100}
          loop={0}
          autoFill
        >
          {data1.map((src, index) => (
            <div key={index}>
              <img
                src={`/api/partner-image?logoName=${src.logoName}`}
                alt={`Partner ${index + 1}`}
                style={{
                  margin: 20,
                  maxHeight: "80px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "grayscale(0%)",
                  transition: "all 0.3s ease",
                  mixBlendMode: "multiply",
                  opacity: "0.9",
                }}
                className="client-logo"
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.9";
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
        <Marquee direction="left" pauseOnHover gradient={100} loop={0} autoFill>
          {data2.map((src, index) => (
            <div key={index}>
              <img
                src={`/api/partner-image?logoName=${src.logoName}`}
                alt={`Partner ${index + 1}`}
                style={{
                  margin: 20,
                  maxHeight: "80px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "grayscale(0%)",
                  transition: "all 0.3s ease",
                  opacity: "0.9",
                }}
                className="client-logo"
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.9";
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

const AiSolution = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const contactSectionRef = useRef(null);

  // Scroll to contact section
  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Feature data with images
  const features = [
    {
      title: "AI-Powered Operations",
      desc: "Find, compare, and reuse product data instantly",
      points: [
        "Smart search across all product and vendor data",
        "Compare styles, costs & suppliers side-by-side",
        "Reuse existing data to save time and reduce errors",
      ],
      image: "/assets/images/AI/1.png",
    },
    {
      title: "AI Data Conversion",
      desc: "Convert Buyer PDF Techpacks into Structured ERP Data",
      points: [
        "Extract BOM, measurements, materials & more",
        "Improve data accuracy and save manual effort",
        "Faster sampling and production planning",
      ],
      image: "/assets/images/AI/2.png",
    },
    {
      title: "Smarter Sales",
      desc: "Smarter Sales Orders, Connected to Operations",
      points: [
        "Real-time availability & capacity check",
        "Instant cost & margin estimation",
        "Seamless flow from sales to production",
      ],
      image: "/assets/images/AI/3.png",
    },
    {
      title: "Intelligent Planning",
      desc: "Smarter Production Planning & Control",
      points: [
        "Auto scheduling & real-time adjustments",
        "Track WIP, delays & bottlenecks smartly",
        "Complete visibility from cutting to shipment",
      ],
      image: "/assets/images/AI/4.png",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="about-area-five py-50 rel z-1"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated background elements */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            top: "-200px",
            right: "-100px",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            bottom: "-150px",
            left: "-100px",
            animation: "pulse 6s ease-in-out infinite reverse",
          }}
        />

        <Container>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-content rel z-1" style={{ color: "white" }}>
                <div className="section-title mb-30 rmb-40">
                  <h2
                    className="sub-title mb-15"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    <HiOutlineChip style={{ marginRight: "8px" }} />
                    AI-Powered Fashion ERP
                  </h2>
                  <h2
                    style={{
                      color: "white",
                      fontSize: "3rem",
                      fontWeight: "700",
                    }}
                  >
                    Making Fashion Operations <br />
                    <span
                      style={{
                        background:
                          "linear-gradient(to right, #ffd700, #ff6b6b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Smarter with AI
                    </span>
                  </h2>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "1.1rem",
                      marginTop: "20px",
                    }}
                  >
                    Target ERP is an AI-powered ERP platform built for fashion
                    businesses of all sizes. From design to delivery, manage
                    your entire business in one place—real-time. Plan better,
                    track faster and grow smarter with complete visibility.
                  </p>
                  <div
                    className="mt-30"
                    style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
                  >
                    <Button
                      variant="contained"
                      onClick={scrollToContact}
                      style={{
                        background: "linear-gradient(135deg, #ffd700, #f7971e)",
                        color: "#000",
                        fontWeight: "600",
                        padding: "12px 32px",
                        borderRadius: "50px",
                        boxShadow: "0 8px 25px rgba(255, 215, 0, 0.4)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      className="btn-hover"
                    >
                      <BsLightningCharge style={{ marginRight: "8px" }} />
                      Book a Demo
                    </Button>

                    <Link legacyBehavior href="optimize_garment_manufacturing">
                      <Button
                        variant="outlined"
                        style={{
                          color: "white",
                          borderColor: "rgba(255,255,255,0.5)",
                          padding: "12px 32px",
                          borderRadius: "50px",
                        }}
                        className="btn-hover"
                      >
                        Take a Product Tour
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {matchesBigScreen && (
              <div className="col-lg-5">
                <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                  <div
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "30px",
                      padding: "20px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <img
                      src="assets/images/hire/ai2.png"
                      alt="AI Solutions"
                      style={{
                        borderRadius: 20,
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Our Partners Section - AI Customized */}
      <OurPartners />

      {/* Why AI Section */}
      <section className="services-area-six py-70 rel z-1">
        <Container>
          <div className="section-title text-center mb-50">
            <span className="sub-title mb-15" style={{ color: "#667eea" }}>
              <FaBrain style={{ marginRight: "8px" }} />
              Why AI in Fashion Is No Longer Optional
            </span>
            <h2 style={{ fontWeight: "700" }}>
              Transform Your Fashion Business
            </h2>
          </div>
          <div className="row">
            {[
              {
                icon: <BsLightningCharge />,
                title: "Faster Decisions",
                desc: "AI helps you predict trends, optimize inventory and act in real time.",
              },
              {
                icon: <FaChartLine />,
                title: "Lower Costs",
                desc: "Automate repetitive tasks and reduce waste across operations.",
              },
              {
                icon: <BsGraphUp />,
                title: "Demand Accuracy",
                desc: "Improve forecasting and never miss a market opportunity.",
              },
              {
                icon: <FaRocket />,
                title: "Future Ready",
                desc: "Stay ahead of change with intelligent, data-driven insights.",
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="service-item-six wow"
                  style={{
                    padding: "30px 20px",
                    borderRadius: "20px",
                    background: "white",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                >
                  <div
                    className="icon"
                    style={{
                      fontSize: "2.5rem",
                      color: "#667eea",
                      marginBottom: "15px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Features Section with Images */}
      <section
        className="about-area-five py-70"
        style={{ background: "#f8f9ff" }}
      >
        <Container>
          <div className="section-title text-center mb-50">
            <h2 style={{ fontWeight: "700" }}>AI-Powered Features</h2>
          </div>

          {features.map((feature, index) => (
            <div
              className={`row align-items-center ${index > 0 ? "mt-50" : ""}`}
              key={index}
              style={{
                padding: "40px",
                borderRadius: "30px",
                // background: "white",
                // boxShadow: "0 5px 30px rgba(0,0,0,0.06)",
                marginBottom: "30px",
              }}
            >
              <div
                className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-2"}`}
              >
                <div>
                  <h3
                    style={{
                      fontWeight: "700",
                      marginBottom: "10px",
                      fontSize: "1.8rem",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "#764ba2",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      marginBottom: "20px",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
                <ul
                  style={{ listStyle: "none", padding: 0, marginTop: "10px" }}
                >
                  {feature.points.map((point, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: "10px 0",
                        color: "#555",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "1rem",
                      }}
                    >
                      <span style={{ color: "#667eea", fontSize: "1.2rem" }}>
                        ✦
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-1"}`}
              >
                <div
                  style={{
                    borderRadius: "20px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: "100%",
                      maxWidth: "450px",
                      height: "auto",
                      borderRadius: "15px",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Single Book a Demo button for all features */}
          <div className="text-center mt-40">
            <Button
              variant="contained"
              onClick={scrollToContact}
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                padding: "14px 48px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "1.1rem",
                boxShadow: "0 8px 30px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              className="btn-hover"
            >
              <BsLightningCharge style={{ marginRight: "10px" }} />
              Book a Demo
            </Button>
          </div>
        </Container>
      </section>

      {/* Whitepaper Section */}
      <section
        className="py-70"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          position: "relative",
        }}
      >
        <Container>
          <div className="row align-items-center text-center">
            <div className="col-12">
              <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
                Are Fashion Businesses Actually Ready for AI?
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  opacity: "0.9",
                  maxWidth: "700px",
                  margin: "0 auto 30px",
                }}
              >
                Yes. With the right tools and the right partner, Target ERP
                brings AI to your everyday operations—secure, scalable and
                designed for the fashion industry.
              </p>

              <Link legacyBehavior href="optimize_garment_manufacturing">
                <Button
                  variant="contained"
                  style={{
                    background: "white",
                    color: "#667eea",
                    padding: "14px 40px",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "1rem",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  Get the Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Who This Is Built For */}
      <section className="services-area-six py-70 rel z-1">
        <Container>
          <div className="section-title text-center mb-50">
            <span className="sub-title mb-15" style={{ color: "#667eea" }}>
              <MdGroups style={{ marginRight: "8px" }} />
              Who This Is Built For
            </span>
            <h2 style={{ fontWeight: "700" }}>Built for Fashion Businesses</h2>
          </div>
          <div className="row">
            {[
              {
                icon: <FaBuilding />,
                title: "Fashion Brands",
                desc: "Manage design to delivery with real-time visibility and complete control.",
              },
              {
                icon: <MdProductionQuantityLimits />,
                title: "Apparel Manufacturers",
                desc: "Optimize production planning, capacity and quality for on-time, every time.",
              },
              {
                icon: <FaChartLine />,
                title: "Textile Mills",
                desc: "Track fabric production, dyeing and finishing with precision.",
              },
              {
                icon: <RiCustomerService2Line />,
                title: "Leading Fashion Retailers & Chains",
                desc: "Unify operations across multiple stores, channels and locations.",
              },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="service-item-six wow"
                  style={{
                    padding: "30px 20px",
                    borderRadius: "20px",
                    background: "white",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="icon"
                    style={{
                      fontSize: "2.5rem",
                      color: "#667eea",
                      marginBottom: "15px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h4 style={{ fontWeight: "600", marginBottom: "10px" }}>
                    {item.title}
                  </h4>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BlogsByProduct code="AI" limit={3} />
      {/* Contact Form Section - with ref for scrolling */}
      <section className="mt-50">
        <div ref={contactSectionRef}>
          <ContactUsProduct TypeOF={"p"} initialValue={"AI"} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-70">
        <Container>
          <div className="section-title text-center mb-50">
            <h2 style={{ fontWeight: "700" }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ margin: "0 auto" }}>
            <FAQ code="AI" defaultActive={0} />
          </div>
        </Container>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }

        .btn-hover:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .service-item-six:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15) !important;
        }

        /* Fix for Accordion styling */
        .accordion .card {
          border: none;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .accordion .card-header {
          background: none;
          border: none;
          padding: 0;
        }

        .accordion .btn-link {
          color: #333;
          text-decoration: none;
          padding: 20px;
          font-weight: 600;
          width: 100%;
          text-align: left;
        }

        .accordion .btn-link:hover {
          color: #667eea;
        }

        /* Partner logo hover effect */
        .client-logo {
          transition: all 0.3s ease;
        }

        .client-logo:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
    </Layout>
  );
};

export default AiSolution;
