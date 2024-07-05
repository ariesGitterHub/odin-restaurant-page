import "../styles/styles.css";
import locationImage from "../assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg";
import locationLogoLock from "../assets/images/logo-lock.svg";
import arkhamMapImage from "../assets/images/bluecollar-love-arkham-map-circle-only.png";

const content = document.querySelector("#content");

function createLocation() {
  const location = document.createElement("div");
  location.id = "location";
  location.classList.add("wipe");
  content.appendChild(location);

  const locationImg = document.createElement("img");
  locationImg.id = "location-image";
  locationImg.classList.add("wipe");
  locationImg.src = locationImage;
  location.appendChild(locationImg);

  const locationCont = document.createElement("div");
  locationCont.id = "location-cont";
  locationCont.classList.add("wipe");
  location.appendChild(locationCont);

  const logoLock = document.createElement("img");
  logoLock.classList.add("logo", "wipe", "pad-top-bot");
  logoLock.src = locationLogoLock;
  logoLock.alt = "An ornate lock";
  locationCont.appendChild(logoLock);

  const locationHeader = document.createElement("h2");
  locationHeader.id = "location-header";
  locationHeader.classList.add("wipe");
  locationHeader.textContent = "Where to Find Us!";
  locationCont.appendChild(locationHeader);

  const locationBlurb = document.createElement("p");
  locationBlurb.id = "location-blurb";
  locationBlurb.classList.add("p-center", "wipe");
  locationBlurb.textContent =
    "Look for our ivy covered iron gate at 23 Miskatonic Avenue, Rear, in beautiful Arkham, MA 01930.";
  locationCont.appendChild(locationBlurb);

  const arkhamMapImg = document.createElement("img");
  arkhamMapImg.id = "arkham-map-image";
  arkhamMapImg.classList.add("wipe");
  arkhamMapImg.src = arkhamMapImage;
  locationCont.appendChild(arkhamMapImg);

}

export { createLocation };