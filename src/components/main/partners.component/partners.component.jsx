import useTranslate from "../localization/useTranslate";
import "../partners.component/partners.component.css";
import partners from "./partners-object";

function Partners() {
  const { t } = useTranslate();
  return (
    <div className="Partners">
      <div className="Partners__container">
        <div className="Partners__title">{t("наши партнеры")}</div>
        <div>
          <ul className="Partners__list">
            {partners.map((item) => (
              <li key={item.key}>
                <img src={item.imgSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
