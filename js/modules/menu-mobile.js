import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, activeClass, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (activeClass === undefined) {
      this.activeClass = "active";
    } else {
      this.activeClass = activeClass;
    }

    if (events === undefined) {
      this.events = ["ontouchstart", "click"];
    } else {
      this.events = events;
    }

    // bind
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  Init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
