import "../catalog-burger/catalog-burger.component.css";
import useTranslate from "../localization/useTranslate";

/**
 *
 * @param {object} props
 * @param {never[]} props.components
 * @param {boolean} props.currentStyleBurger
 * @param {()=>void} props.onClickBurger
 * @returns
 */
const CatalogBurger = (props) => {
  const { t } = useTranslate();
  return (
    <div className="CatalogBurger">
      {props.components?.map((component) => component)}
      <div className="CatalogBurger__container" onClick={props.onClickBurger}>
        <div
          className={`CatalogBurger__container-1 ${
            props.currentStyleBurger ? "active" : props.styleBurger
          }`}
        ></div>
        <div
          className={`CatalogBurger__container-2 ${
            props.currentStyleBurger ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`CatalogBurger__container-3 ${
            props.currentStyleBurger ? "active" : ""
          }`}
        ></div>
      </div>

      <div
        style={{
          color: "rgb(255, 255, 255)",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p>{t("каталог")}</p>
      </div>
    </div>
  );
};

export default CatalogBurger;
