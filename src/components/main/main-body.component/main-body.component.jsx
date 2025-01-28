import "../main-body.component/main-body.component.css";
// import banner from "../../../assets/banner.jpg";
import SideMenu from "../side-menu.component/side-menu.component";
import sideMenuList from "../../../side-menu-list-object";
// import arrow from "../../../assets/arrow.svg";
import { useRef, useState } from "react";
// import socnetwork from "../../../assets/socnetwork.svg";
// import vk from "../../../assets/vk.svg";
// import classmates from "../../../assets/classmates.svg";
// import popular from "../../../popular.object";
import Goods from "../main-hits.component/main-hits.component";
import ProfAndBaby from "../prof-and-baby.component/prof-and-baby.component";
import LinksToDeliveryAndPromotions from "../links-to-delivery-and-promotions.component/links-to-delivery-and-promotions.component";
import Partners from "../partners.component/partners.component";
// import video from "../../../assets/Video.mp4";
import VideoPlayer from "../video-player.component/video-player.component";
import { Link } from "react-router-dom";
import Catalog from "../catalog/catalog.component";
import MainBodyLeftPanel from "../main-body-left-panel/main-body-left-panel.component";
import useTranslate from "../localization/useTranslate";
import BannerContainer from "../../banner-container/banner-container.component";
import SideMenuList from "../../side-menu-list/side-menu-list.component";

function MainBody() {
  const [transformStyle, setTransformStyle] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslate();
  /**
   * @type {{current:HTMLUListElement}}
   */
  const ulRef = useRef(null);

  const handleMoveNext = () => {
    ulRef.current.scrollLeft += ulRef.current.children[0].clientWidth + 42;
  };
  const handleMovePrev = () => {
    ulRef.current.scrollLeft -= ulRef.current.children[0].clientWidth + 41;
  };

  return (
    <div className="MainBody">
      <div className="MainBody__container-panels">
        <MainBodyLeftPanel />
        <div className="MainBody__right-panel">
          <BannerContainer />
          <SideMenuList
            onHandleMovePrev={handleMovePrev}
            ulRef={ulRef}
            onHandleMoveNext={handleMoveNext}
          />
          <Goods />
          <ProfAndBaby />
          <LinksToDeliveryAndPromotions />
          <Partners />
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
