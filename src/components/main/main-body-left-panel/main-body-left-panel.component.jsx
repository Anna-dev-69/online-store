import "../main-body-left-panel/main-body-left-panel.component.css";
import SideMenu from "../side-menu.component/side-menu.component";
import socnetwork from "../../../assets/socnetwork.svg";
import vk from "../../../assets/vk.svg";
import classmates from "../../../assets/classmates.svg";
import popular from "../../../popular.object";
import useTranslate from "../localization/useTranslate";

const MainBodyLeftPanel = () => {
  const { t } = useTranslate();
  return (
    <div className="MainBody__left-panel">
      <SideMenu />

      <div className="MainBody__left-panel-subscribe">
        <div className="MainBody__left-panel-subscribe-text">
          {t("подписывайтесь")}
        </div>
        <div className="MainBody__left-panel-subscribe-links">
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src={classmates}
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src={socnetwork}
              alt=""
            />
          </div>
          <div>
            <img style={{ width: "50px", height: "50px" }} src={vk} alt="" />
          </div>
        </div>
      </div>

      <div className="MainBody__left-panel-popular-container">
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2d2d2d",
            marginBottom: "1rem",
          }}
        >
          {t("популярное")}
        </div>
        <div className="MainBody__left-panel-popular-list">
          <ul className="MainBody__left-panel-popular-list-ul">
            {popular.map((item) => (
              <li
                className="MainBody__left-panel-popular-list-ul-li"
                key={item.href}
              >
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>
                    <img src={item.imgSrc} alt="" />
                  </div>
                  <div className="MainBody__left-panel-popular-list-ul-li-text-container">
                    <div style={{ fontSize: "16px" }}>{item.title}</div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      {item.price}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainBodyLeftPanel;
