import "../styles/styles.css";
import menuImage from "../assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg";
import menuItemsData from "../data/menuItems.json";

function createMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.id = "menu";
    menu.classList.add("wipe");
    content.appendChild(menu);

    const menuImg = document.createElement("img");
    menuImg.id = "menu-image";
    menuImg.classList.add("wipe");
    menuImg.src = menuImage;
    menuImg.alt= "A narrow outdoor seating area for a bookstore cafe"
    menu.appendChild(menuImg);

    const menuCont = document.createElement("div");
    menuCont.id = "menu-cont";
    menuCont.classList.add("wipe");
    menu.appendChild(menuCont);

    const addMenuItems = (function () {
        try {
            menuItemsData.forEach((menuItem) => {
            const menuSquare = document.createElement("div");
            menuSquare.classList.add("wipe", "menu-square");

            const item = document.createElement("p");
            item.classList.add("wipe", "item");
            item.textContent = menuItem.item;
            menuSquare.appendChild(item);

            const price = document.createElement("p");
            price.classList.add("wipe", "price");
            price.textContent = `(${menuItem.price})`;
            menuSquare.appendChild(price);

            const break1 = document.createElement("br");
            break1.classList.add("wipe");
            menuSquare.appendChild(break1);

            const description = document.createElement("p");
            description.classList.add("wipe", "description");
            description.textContent = menuItem.description;
            menuSquare.appendChild(description);

            menuCont.appendChild(menuSquare);
        });
        } catch {
            console.error("Error loading menuItemsData:", error);
        }
    
  })();
}

export { createMenu };
