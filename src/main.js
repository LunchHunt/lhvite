import { createApp } from 'vue';
import App from './App.vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
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
    HiChevronUp
} from "oh-vue-icons/icons";
import router from './router';
import './style.css';

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
    HiChevronUp
);

createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app');
 