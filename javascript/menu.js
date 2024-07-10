import "../styles/styles.css";
import menuImage from "../assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg";
import menuItemsData from "../data/menuItems.json";

const content = document.querySelector("#content");

function createMenu() {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.classList.add("wipe");
  content.appendChild(menu);

  // const menuImg = document.createElement("img");
  // menuImg.id = "menu-image";
  // menuImg.classList.add("wipe");
  // menuImg.src = menuImage;
  // menu.appendChild(menuImg);

  // const menuCont = document.createElement("div");
  // menuCont.id = "menu-cont";
  // menuCont.classList.add("wipe");
  // menu.appendChild(menuCont);

  // const menuHeader = document.createElement("h2");
  // menuHeader.id = "menu-header";
  // menuHeader.classList.add("wipe");
  // menuHeader.textContent = "Hidden Garden Menu";
  // menuCont.appendChild(menuHeader);

  // const items = document.createElement("div");
  // items.id = "items";
  // items.classList.add("wipe");
  // daysTimes.appendChild(items);

  // const times = document.createElement("div");
  // times.id = "times";
  // times.classList.add("wipe");
  // daysTimes.appendChild(times);

  const addMenuItems = (function () {
    
    for (let i = 0; i < menuItemsData.length; i++) {

      const menuSquare = document.createElement("div");
      menuSquare.id = `${i}`;
      menuSquare.classList.add("wipe", "menu-square");

      const item = document.createElement("p");
      item.classList.add("wipe", "item");
      item.textContent = `item${i}`;
      menuSquare.appendChild(item);

      const price = document.createElement("p");
      price.classList.add("wipe", "price");
      price.textContent = `price${i}`;
      menuSquare.appendChild(price);

      const description = document.createElement("p");
      description.classList.add("wipe", "description");
      description.textContent = `description${i}`;
      menuSquare.appendChild(description);

      // menuCont.appendChild(menuSquare);

      menu.appendChild(menuSquare);

    }
  })();
}

export { createMenu };
