import mainHitsCards from "../components/main/main-hits.component/main-hits.cards";
import mainAction from "./main-action.object";
import meinNew from "./main-new.object";

const goods = [
  {
    title: "хиты",
    links: mainHitsCards,
  },
  {
    title: "новинки",
    links: meinNew,
  },
  {
    title: "акции",
    links: mainAction,
  },
];

export default goods;
