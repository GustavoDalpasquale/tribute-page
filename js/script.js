import MenuMobile from "./modules/menu-mobile.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import ScrollSmooth from "./modules/scroll-smooth.js";
import Slide from "./modules/slide.js";

const menuMobile = new MenuMobile(
  ".menu-button",
  ".menu-list",
  "active-navbar-mobile"
);
menuMobile.Init();

const scrollAnimation = new ScrollAnimation("[data-anime='scroll']", "active");
scrollAnimation.init();

const scrollSmooth = new ScrollSmooth(".navbar a[href^='#']");
scrollSmooth.init();

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
