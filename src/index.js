import "../styles/styles.css";
import { createSplash } from "../javascript/splash.js";



import { createHours } from "../javascript/hours.js";


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

    const content = document.querySelector("#content");
    

    function wipeOut() {
        const wipe = content.querySelectorAll(".wipe"); 
        wipe.forEach(function (child) {
        child.remove();
    });   
    }


    const nav = document.querySelector("nav");

    let currentBtn = "splash-btn";
    let currentFunction = "isSplash";
    
    console.log(currentBtn);
    console.log(currentFunction);

    function isCurrentFunction() {
        if (currentFunction === "isSplash") {
            wipeOut();
            createSplash();
            //NEED TO WIPE OUT PRIOR FUNCTION STATES!!!!!!!
        } 
        
        if (currentFunction === "isHours") {
            wipeOut();
            createHours();
        }
    }


    nav.addEventListener("click", (event) => {

        const isButton = event.target.nodeName === "BUTTON";
        if (!isButton) {
            return;
        }
        console.dir(event.target.id);
        if (event.target.id === "splash-btn" && currentBtn !== "splash-btn") {
          currentBtn = "splash-btn";
        currentFunction = "isSplash";
        }
        // if (event.target.id === "about-btn") {
        //     splash.style.display = "none";
        //     about.style.display = "flex";
        //     events.style.display = "none";
        //     hours.style.display = "none";
        //     location.style.display = "none";
        //     menu.style.display = "none";
        // }
        // if (event.target.id === "events-btn") {
        //     splash.style.display = "none";
        //     about.style.display = "none";
        //     events.style.display = "flex";
        //     hours.style.display = "none";
        //     location.style.display = "none";
        //     menu.style.display = "none";
        // }
        if (event.target.id === "hours-btn" && currentBtn !== "hours-btn") {
            currentBtn = "hours-btn";
            currentFunction = "isHours";
        }
        // if (event.target.id === "location-btn") {
        //     splash.style.display = "none";
        //     about.style.display = "none";
        //     events.style.display = "none";
        //     hours.style.display = "none";
        //     location.style.display = "flex";
        //     menu.style.display = "none";
        // }
        // if (event.target.id === "menu-btn") {
        //     splash.style.display = "none";
        //     about.style.display = "none";
        //     events.style.display = "none";
        //     hours.style.display = "none";
        //     location.style.display = "none";
        //     menu.style.display = "flex";
        // }
    isCurrentFunction();
    });

})()