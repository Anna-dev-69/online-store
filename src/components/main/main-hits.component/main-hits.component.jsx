import { useState } from "react";
import "../main-hits.component/main-hits.component.css";
import MainHitsCards from "./main-hits-cards.component/main-hits-cards.component";
import goods from "../../../data/goods";
import useTranslate from "../localization/useTranslate";

function Goods() {
  const [currentTab, setCurrentTab] = useState(0);
  const { t } = useTranslate();

  console.log("goods", goods);

  return (
    <div className="MainHits">
      <div className="MainHits__container">
        <div className="MainHits__container-title">
          {goods.map((item, index) => {
            const isActive = index === currentTab;

            return (
              <div
                className="MainHits__container-title-div-link"
                style={
                  isActive
                    ? {
                        borderBottom: "2px solid var(--bg-button-hover)",
                        paddingBottom: "0.5rem",
                      }
                    : {}
                }
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentTab(index);
                  }}
                  style={
                    isActive
                      ? {
                          textDecoration: "none",
                          color: "var(--bg-button-hover)",
                        }
                      : { textDecoration: "none", color: "inherit" }
                  }
                  href=""
                >
                  {t(item.title)}
                </a>
              </div>
            );
          })}
        </div>

        <div className="MainHits__container-cards">
          <MainHitsCards items={goods[currentTab].links} />
        </div>
      </div>
    </div>
  );
}

export default Goods;
{
  /* <div className="MainHits__container-title-div-link">
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              Новинки
            </a>
          </div>
          <div className="MainHits__container-title-div-link">
            <a style={{ textDecoration: "none", color: "inherit" }} href="">
              Акции
            </a>
          </div> */
}
// </div>
