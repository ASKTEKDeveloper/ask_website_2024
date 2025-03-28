import Marquee from "react-fast-marquee";
const OurPartners = () => {
  const clientImages = Array.from(
    { length: 22 },
    (_, i) => `assets/images/clients/${i + 1}.jpeg`
  );

  return (
    <>
      {/* Partners Area start */}
      <section className="partners-area pb-50 pt-50 rmt-30 rpb-70 rel z-1">
        <div>
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Global Partners</span> */}
            <h2 className="text-gradient-title2">Our Partners</h2>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <Marquee
              direction="right"
              pauseOnHover
              gradient={100}
              loop={0}
              autoFill
            >
              {clientImages.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Partner ${index + 1}`}
                    style={{ margin: 20 }}
                    className="client-logo"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      {/* Partners Area end */}
    </>
  );
};
export default OurPartners;
