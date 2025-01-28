import { Link } from "react-router-dom";
import "../banner-container/banner-container.component.css";
import useTranslate from "../main/localization/useTranslate";
import banner from "../../assets/banner.jpg";

/**
 *
 * @param {object} props

 *
 * @returns
 */
const BannerContainer = (props) => {
  const { t } = useTranslate();
  return (
    <div className="MainBody__banner-container">
      <div className="MainBody__banner-container-img">
        <img style={{ width: "100%" }} src={banner} alt="" />
      </div>
      <div className="MainBody__banner-container-sales">
        <div className="MainBody__banner-container-sales-text">
          <div
            style={{
              color: "rgb(45, 45, 45)",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Скидки на детскую мебель
          </div>
          <div style={{ color: "rgb(164, 165, 169)" }}>
            Сезонные скидки, распродажи, ликвидация остатков! Все товары с
            сезонными скидками.
          </div>
        </div>
        <div className="MainBody__banner-container-sales-button">
          <Link
            style={{ color: "#ffffff", textDecoration: "none" }}
            to="/catalogPage"
          >
            {t("все товары")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
