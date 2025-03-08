import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoFlagAlt,
  CoGift,
  CoHamburgerMenu,
  CoHome,
  CoList,
  CoMap,
  CoRestaurant,
  CoSearch,
  FaCanadianMapleLeaf,
  FaCompressAlt,
  FaExpandAlt,
  FaGlobe,
  FaHeart,
  FaPhoneAlt,
  FaShare,
  GiContract,
  GiExpand,
  HiChevronDown,
  HiChevronUp,
  IoClose,
  IoEllipsisVertical,
  IoRestaurant,
  MdAttachmoney,
  MdDeliverydining,
  RiPinDistanceFill,
} from "oh-vue-icons/icons";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

addIcons(
  CoFlagAlt,
  CoRestaurant,
  CoHome,
  CoMap,
  CoList,
  CoSearch,
  CoGift,
  FaShare,
  FaHeart,
  IoRestaurant,
  IoEllipsisVertical,
  GiExpand,
  GiContract,
  CoHamburgerMenu,
  IoClose,
  FaCanadianMapleLeaf,
  FaExpandAlt,
  FaCompressAlt,
  FaPhoneAlt,
  FaGlobe,
  MdDeliverydining,
  HiChevronDown,
  HiChevronUp,
  RiPinDistanceFill,
  MdAttachmoney,
);

createApp(App)
  .use(router)
  .use(createPinia())
  .component("v-icon", OhVueIcon)
  .mount("#app");
