import "../footer/footer.component.css";
import logo from "../../assets/logo.png";
import classmates from "../../assets/classmates.svg";
import vk from "../../assets/vk.svg";
import socnetwork from "../../assets/socnetwork.svg";
import FooterNavigation from "./footer-navigation.component/footer-navigation.component";
import useTranslate from "../main/localization/useTranslate";

function Footer() {
  const { t } = useTranslate();
  return (
    <div className="Footer">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="Footer__container">
          <div className="Footer__container-logo-menu">
            <div style={{ textAlign: "left" }}>
              <img style={{ width: "200px" }} src={logo} alt="" />
            </div>
            <FooterNavigation />
          </div>
          <div className="Footer__container-contacts">
            <div className="Footer__container-contacts-address">
              <div
                style={{
                  color: "rgb(45, 45, 45)",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                {t("контакты")}
              </div>
              <div className="Footer__container-address">
                <div
                  style={{
                    borderRight: "2px solid rgb(204, 204, 204)",
                    width: "50%",
                  }}
                >
                  +7 (800) 800-80-80
                </div>
                <div style={{ width: "50%" }}>+7 (800) 800-80-80</div>
              </div>
              <div style={{ fontSize: "1.1rem", color: "rgb(45, 45, 45)" }}>
                г. Москва, 1-я Тверская-Ямская улица, дом 21
              </div>
            </div>

            <div className="Footer__container-contacts-img">
              <div>
                <img src={classmates} alt="" />
              </div>
              <div>
                <img src={socnetwork} alt="" />
              </div>
              <div>
                <img src={vk} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__footer"></div>
      </div>
    </div>
  );
}

export default Footer;
