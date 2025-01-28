import sideMenuList from "../../../side-menu-list-object";
import useTranslate from "../localization/useTranslate";
import "../side-menu.component/side-menu.component.css";

function SideMenu() {
  const { t } = useTranslate();
  return (
    <div className="SideMenu">
      <ul className="SideMenu__list">
        {sideMenuList.map((item) => (
          <li className="SideMenu__list-li" key={item.href}>
            {t(item.title)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
