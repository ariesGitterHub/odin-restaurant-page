import "../styles/styles.css";
import splashImage from "../assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg";
import leafLtImage from "../assets/images/ornamental-leaf-lt.svg";
import leafRtImage from "../assets/images/ornamental-leaf-rt.svg";

const content = document.querySelector("#content");

function createSplash() {
    const splash = document.createElement("div");
    splash.id = "splash";
    splash.classList.add("wipe");
    content.appendChild(splash);

    const splashImg = document.createElement("img");
    splashImg.id = "splash-image";
    splashImg.src = splashImage;
    splashImg.alt = "An open book, framed by circular window created from stacked books, floats within a congested bookstore"
    splashImg.classList.add("wipe");
    splash.appendChild(splashImg);

    const storeNameCont = document.createElement("div");
    storeNameCont.id = "store-name-cont";
    storeNameCont.classList.add("wipe");
    splash.appendChild(storeNameCont);

    const storeName = document.createElement("h1");
    storeName.id = "store-name";
    storeName.classList.add("wipe");
    storeName.textContent = "The Hidden Garden";
    storeNameCont.appendChild(storeName);

    const subtitle = document.createElement("div");
    subtitle.id = "subtitle";
    subtitle.classList.add("wipe");
    storeNameCont.appendChild(subtitle);

    const leafLtImg = document.createElement("img");
    leafLtImg.classList.add("leaf", "wipe");
    leafLtImg.src = leafLtImage;
    subtitle.appendChild(leafLtImg);
    
    const storeNameSub = document.createElement("h2");
    storeNameSub.id = "store-name-sub";
    storeNameSub.classList.add("wipe");
    storeNameSub.textContent = " Bookstore and Cafe ";
    subtitle.appendChild(storeNameSub);

    const leafRtImg = document.createElement("img");
    leafRtImg.classList.add("leaf", "wipe");
    leafRtImg.src = leafRtImage;
    subtitle.appendChild(leafRtImg);
}

export { createSplash };
