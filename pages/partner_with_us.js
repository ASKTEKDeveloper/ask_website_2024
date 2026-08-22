import Layout from "@/layout";
import { Container} from "@mui/material";
import { FaUserPlus, FaChartLine, FaBuilding } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PartnerWithUsForm from "./PartnerWithUsForm";


const Partner_with_us = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      {/* <PageBanner pageName={"Hire a Developer"} /> */}
      <section className="about-area-five py-50 rel z-1">
        <Container>
          <div className="row align-items-center gap-100">
            {matchesBigScreen && (
              <div className="col-lg-6">
                <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                    {/* <img
                      src="assets/images/hire/intro1.jpg"
                      alt="About"
                      style={{ borderRadius: 20, objectFit: "contain" }}
                    /> */}
                  <img
                    src="assets/images/hire/intro2.jpg"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain",width:"70%" }}
                  />
                  <img
                    className="abut-bg-shape mt-0"
                    src="assets/images/about/about-five-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            )}
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30 rmb-40">
                  <span className="sub-title mb-15">Our Partners</span>
                  <h2 className="text-gradient-title3">
                    Together , the possiblities <br /> are endless.
                  </h2>
                  <p className="mt-20">
                    Join us by using our Partner Program to grow not just our company, but also to strengthen valuable collaborations that lead to mutual success. 
                    Together, we can achieve greater heights, drive innovation, and create lasting value for our businesses. 
                    Unlock new opportunities, reach untapped markets, and expand your business horizons with us. 
                    Let’s build a future of growth, success, and meaningful partnerships.
                  </p>
                </div>      
            </div>
          </div>
          </div>
        </Container>
      </section>
      <section className="services-area-six py-50 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-45">
            <h3 className="text-black-50">Why partner up with us? </h3>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow ">
                <div className="icon">
                  <FaUserPlus />
                </div>
                <h4>Get New Clients</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow ">
                <div className="icon">
                  <FaChartLine />
                </div>
                <h4>Reach Out to New Markets</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow ">
                <div className="icon">
                  <FaBuilding />
                </div>
                <h4>Grow Your Company</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow ">
                <div className="icon">
                  <FaHandshake />
                </div>
                <h4>Boost Connections</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow ">
                <div className="icon">
                  <MdGroups />
                </div>
                <h4>Make Your Network Strong</h4>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow ">
                <div className="icon">
                  <RiMoneyDollarCircleLine />
                </div>
                <h4>Make Money</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
      <PartnerWithUsForm />
      </Container>
    </Layout>
  );
};
export default Partner_with_us;
