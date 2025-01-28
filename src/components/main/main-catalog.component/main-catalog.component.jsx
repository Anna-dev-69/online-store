import { useState } from "react";
import sideMenuList from "../../../side-menu-list-object";
import "../main-catalog.component/main-catalog.component.css";
import MainHeader from "../main-header.component/main-header.component";

/**
 *
 * @param {object} props
 * @param {string} props.clickBurger
 * @returns
 */
function MainCatalog(props) {
  return (
    <div className="MainCatalog">
      <div className="MainCatalog__container">
        <ul className="MainCatalog__container-ul">
          {sideMenuList.map((item) => (
            <li className="MainCatalog__container-ul-li" key={item.href}>
              <div>
                <img
                  className="MainCatalog__container-ul-li-img"
                  src={item.imgSrc}
                  style={{ width: "257px", height: "257px" }}
                  alt=""
                />
              </div>
              <div className="MainCatalog__container-ul-li-text">
                {" "}
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainCatalog;
