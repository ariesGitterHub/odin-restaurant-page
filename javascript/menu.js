import "../styles/styles.css";
import menuImage from "../assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg";

const content = document.querySelector("#content");

function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.classList.add("wipe");
  content.appendChild(menu);

  const menuImg = document.createElement("img");
  menuImg.id = "menu-image";
  menuImg.classList.add("wipe");
  menuImg.src = menuImage;
  menu.appendChild(menuImg);

  const menuCont = document.createElement("div");
  menuCont.id = "menu-cont";
  menuCont.classList.add("wipe");
  menu.appendChild(menuCont);
}

export { createMenu };
