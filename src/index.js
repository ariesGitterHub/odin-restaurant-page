import "../styles/styles.css";
import { createSplash } from "../javascript/splash.js";

createSplash()

const buttonListeners = (function () {
    const splash = document.querySelector("#splash");
    const about = document.querySelector("#about");
    const events = document.querySelector("#events");
    const hours = document.querySelector("#hours");
    const location = document.querySelector("#location");
    const menu = document.querySelector("#menu");

    const splashBtn = document.querySelector("#splash-btn");
    const aboutBtn = document.querySelector("#about-btn");
    const eventsBtn = document.querySelector("#events-btn");
    const hoursBtn = document.querySelector("#hours-btn");
    const locationBtn = document.querySelector("#location-btn");
    const menuBtn = document.querySelector("#menu-btn");

    const nav = document.querySelector("nav");

    nav.addEventListener("click", (event) => {
      const isButton = event.target.nodeName === "BUTTON";
      if (!isButton) {
        return;
      }
      console.dir(event.target.id);
      if (event.target.id === "splash-btn") {
        console.log("TITTIES");
        splash.style.display = "flex";
        // show hours...
      }


      if (event.target.id === "hours-btn") {
        console.log("BOOBIES");
        splash.style.display = "none";
        // show hours...
      }

    });

})()