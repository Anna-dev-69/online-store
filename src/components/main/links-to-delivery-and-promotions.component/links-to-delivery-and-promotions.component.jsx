import "../links-to-delivery-and-promotions.component/links-to-delivery-and-promotions.component.css";
import linksToDeliveryAndPromo from "./links-to-delivary-and-promo";

function LinksToDeliveryAndPromotions() {
  return (
    <div className="LinksToDeliveryAndPromotions">
      <div className="LinksToDeliveryAndPromotions__container">
        <ul className="LinksToDeliveryAndPromotions__ul">
          {linksToDeliveryAndPromo.map((item) => (
            <li key={item.href}>
              <div>
                <img
                  // style={{ width: "75px", height: "75" }}
                  src={item.imgSrc}
                  alt=""
                />
              </div>
              <div>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LinksToDeliveryAndPromotions;
