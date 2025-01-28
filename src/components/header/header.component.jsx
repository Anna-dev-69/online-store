import serviceNavigation from "../../navigation-objects/service-navigation";
import "../header/header.component.css";
import useTranslate from "../main/localization/useTranslate";
// import UseTranslate from "../main/localization/useTranslate";
import SelectLocalization from "../select-localization/select-localization.component";

function Header() {
  const { t } = useTranslate();

  return (
    <div className="Header">
      <div className="Header__container">
        <div className="Header__menu">
          <ul className="Header__menu-list">
            {serviceNavigation.map((item) => (
              <li className="Header__menu-list-li" key={item.href}>
                <a className="Header__menu-list-link" href={item.href}>
                  {t(item.title)}
                  {/* {console.log(t(item.title))} */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="Header__contacts">
          <SelectLocalization />
          <ul className="Header__contacts-list">
            <li>
              <a style={{ color: "grey", cursor: "default" }}>
                {t("доставка")} с 8:00 до 23:00
              </a>
            </li>
            <li>
              <a>+7 (800) 800-80-80</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
