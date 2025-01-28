import navigation from "../../../navigation-objects/navigation";
import useTranslate from "../../main/localization/useTranslate";
import "../footer-navigation.component/footer-navigation.component.css";

function FooterNavigation() {
  const { t } = useTranslate();
  return (
    <div>
      <div className="Footer__navigation">
        {navigation.map((item) => (
          <div
            key={item.groupTitle}
            style={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <p
              style={{
                color: "rgb(45, 45, 45)",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {t(item.groupTitle)}
            </p>
            <ul className="Footer__navigation-list">
              {item.links.map((item) => (
                <li key={item.title}>
                  <a>{t(item.title)}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterNavigation;
