import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="header-top-wrap bg-primary">
      <div className="container-fluid">
        <div className="header-top">
          <div className="container">
            <div className="header-top">
              <ul>
                <li>
                  <i className="far fa-envelope" style={{ color: "white" }} />{" "}
                  <a
                    href="mailto:sales@asktek.net"
                    style={{ color: "white", fontSize: "small" }}
                  >
                    sales@asktek.net
                  </a>
                </li>

                <li>
                  <i className="far fa-phone" style={{ color: "white" }} />{" "}
                  <a
                    href="callto:+919840899559"
                    style={{ color: "white", fontSize: "small" }}
                  >
                    +91 98408 99559
                  </a>
                </li>

                <li>
                  <i className="far fa-tty" style={{ color: "white" }} />{" "}
                  <a
                    href="callto:04445034080"
                    style={{ color: "white", fontSize: "small" }}
                  >
                    044-45034080
                  </a>
                </li>

                {/* <li className="for-none" style={{ color: "white" }}>
                  <i className="far fa-clock" /> Working Hours : Mon - Sat, 10
                  AM to 7 PM
                </li> */}
                <li>
                  <div className="social-style-one">
                    <a
                      href="https://www.facebook.com/people/Target-ByAsktek/pfbid02yS6174HdoPoxyCWDEuxUtfwSP2y2N4qZXQ48qgr66DJuxSpnjLTbBuXXJS3Qt49Cl/?mibextid=ZbWKwL"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.youtube.com/@asktechnology4871"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                    <a
                      href="https://www.instagram.com/targetbyasktek/?igsh=MWF5YXE5YW5oano3NA%3D%3D"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/askteksolutions/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
