import "../styles/styles.css";
import locationImage from "../assets/images/tiffany-chan-lT2hiMUACco-unsplash.jpg";
import iconLocationImage from "../assets/images/icon-location.svg";
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

  const iconLocation = document.createElement("img");
  iconLocation.classList.add("logo", "wipe", "pad-top-bot");
  iconLocation.src = iconLocationImage;
  iconLocation.alt = "An ornate lock";
  locationCont.appendChild(iconLocation);

  const locationHeader = document.createElement("h2");
  locationHeader.id = "location-header";
  locationHeader.classList.add("wipe");
  locationHeader.textContent = "Where to Find Us!";
  locationCont.appendChild(locationHeader);

  const locationBlurb = document.createElement("p");
  locationBlurb.id = "location-blurb";
  locationBlurb.classList.add("p-center", "wipe");
  locationBlurb.textContent =
    "Look for our ivy wretched iron gate at 23 Miskatonic Avenue, Rear, in beautiful Arkham, MA 01930. And please mind that cats, that shelter about.";
  locationCont.appendChild(locationBlurb);

  const arkhamMapImg = document.createElement("img");
  arkhamMapImg.id = "arkham-map-image";
  arkhamMapImg.classList.add("wipe");
  arkhamMapImg.src = arkhamMapImage;
  locationCont.appendChild(arkhamMapImg);

}

export { createLocation };