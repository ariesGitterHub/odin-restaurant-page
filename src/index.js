import "../styles/styles.css";
import { createSplash } from "../javascript/splash.js";
import { createAbout } from "../javascript/about.js";
import { createEvents } from "../javascript/events.js";
import { createHours } from "../javascript/hours.js";
import { createLocation } from "../javascript/location.js";
import { createMenu } from "../javascript/menu.js";

createSplash(); // Seems like the simplest way to institute a default on webpage load up.

const buttonListeners = (function () {
    const content = document.querySelector("#content");  

    function wipeOut() {
        const wipe = content.querySelectorAll(".wipe"); 
        wipe.forEach(function (child) {
        child.remove();
        });   
    }

    const nav = document.querySelector("nav");

    let currentBtn = "";
    let currentFunction = "";

    function isCurrentFunction() {
        if (currentFunction === "isSplash") {
            wipeOut();
            createSplash();
        } 

        if (currentFunction === "isAbout") {
            wipeOut();
            createAbout();
        } 

        if (currentFunction === "isEvents") {
            wipeOut();
            createEvents();
        } 
        
        if (currentFunction === "isHours") {
            wipeOut();
            createHours();
        }

        if (currentFunction === "isLocation") {
            wipeOut();
            createLocation();
        } 

        if (currentFunction === "isMenu") {
            wipeOut();
            createMenu();
        } 
    }

    nav.addEventListener("click", (event) => {
    let currentBtn = "";

        const isButton = event.target.nodeName === "BUTTON";
        if (!isButton) {
            return
        }
        // console.dir(event.target.id);

        if (event.target.id === "splash-btn" && currentBtn !== "splash-btn") {
          currentBtn = "splash-btn";
        currentFunction = "isSplash";
        }

        if (
            event.target.id === "about-btn" &&
            currentBtn !== "about-btn"
        ) {
            currentBtn = "about-btn";
            currentFunction = "isAbout";
        }

        if (
            event.target.id === "events-btn" &&
            currentBtn !== "events-btn"
        ) {
            currentBtn = "events-btn";
            currentFunction = "isEvents";
        }

        if (event.target.id === "hours-btn" && 
            currentBtn !== "hours-btn"
        ) {
            currentBtn = "hours-btn";
            currentFunction = "isHours";
        }

        if (
            event.target.id === "location-btn" &&
            currentBtn !== "location-btn"
        ) {
            currentBtn = "location-btn";
            currentFunction = "isLocation";
        }

        if (
            event.target.id === "menu-btn" &&
            currentBtn !== "menu-btn"
        ) {
            currentBtn = "menu-btn";
            currentFunction = "isMenu";
        }

    isCurrentFunction();
    });
})()