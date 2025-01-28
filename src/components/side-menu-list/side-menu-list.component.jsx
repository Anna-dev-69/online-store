import sideMenuList from "../../side-menu-list-object";
import useTranslate from "../main/localization/useTranslate";
import "../side-menu-list/side-menu-list.component.css";
import arrow from "../../assets/arrow.svg";

/**
 *
 * @param {object} props
 * @param {()=>void} props.onHandleMovePrev
 * @param {()=>void} props.onHandleMoveNext
 * @param {HTMLUListElement} props.ulRef
 * @returns
 */
const SideMenuList = (props) => {
  const { t } = useTranslate();
  return (
    <div className="SideMenuList">
      <button
        onClick={props.onHandleMovePrev}
        className="SideMenuList__button-prev"
      >
        <img
          src={arrow}
          style={{
            filter: "var(--color-arrow)",
            fontWeight: "bold",
          }}
          alt=""
        />
      </button>

      <div className="SideMenuList__container-ul">
        <ul ref={props.ulRef} className="SideMenuList__list-ul">
          {sideMenuList.map((listItem) => (
            <li key={listItem.href}>
              <div>
                <img
                  style={{ width: "257px", height: "257px" }}
                  src={listItem.imgSrc}
                ></img>
              </div>

              <div>{t(listItem.title)}</div>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={props.onHandleMoveNext}
        className="SideMenuList__button-next"
      >
        <img src={arrow} style={{ transform: "rotate(180deg)" }} alt="" />
      </button>
    </div>
  );
};

export default SideMenuList;
