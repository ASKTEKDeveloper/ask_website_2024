import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const OurPartners = () => {
  const [data1,setData1]=useState([])
  const [data2,setData2]=useState([])
  useEffect(()=>{
    getAllData()
  },[])
  async function getAllData(){
      try{
        const res=await axios.get("/api/OurPartners")
        const [arr1, arr2] = res.data.reduce(
          ([a, b], item, index) => {
            if (index % 2 === 0) a.push(item);
            else b.push(item);
            return [a, b];
          },
          [[], []]
        );
    
        setData1(arr1);
        setData2(arr2);
      }catch(e){
        console.log("ourPartners Error",e.message)
      }
  }

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
              {data1.map((src, index) => (
                <div key={index}>
                  <img
                    src={`/api/partner-image?logoName=${src.logoName}`}
                    alt={`Partner ${index + 1}`}
                    style={{ margin: 20 }}
                    className="client-logo"
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <Marquee
              direction="left"
              pauseOnHover
              gradient={100}
              loop={0}
              autoFill
            >
              {data2.map((src, index) => (
                <div key={index}>
                  <img
                    src={`/api/partner-image?logoName=${src.logoName}`}
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
