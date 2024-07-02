import "../styles/styles.css";
import daysTimesData from "../data/daysTimes.json";
import splashImage from "../assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg";
import hoursLogoKey from "../assets/images/logo-key.svg";
import locationLogoLock from "../assets/images/logo-lock.svg";

    const content = document.querySelector("#content");
    // console.log("test");

    function createHome() {

        const home = document.createElement("div");
        home.id = "home";
        // home.style.backgroundImage = `url(${homeImage})`;       
        content.appendChild(home);

        const homeImg = document.createElement("img");
        homeImg.id = "home-image";
        homeImg.src = splashImage;
        home.appendChild(homeImg);

        const hoursLocation = document.createElement("div");
        hoursLocation.id = "hours-location";
        home.appendChild(hoursLocation);

        const logoKey = document.createElement("img");
        logoKey.classList.add("logo");
        logoKey.src = hoursLogoKey;
        logoKey.alt = "An ornate key";
        hoursLocation.appendChild(logoKey);

        const hoursOfOperation = document.createElement("h2");
        hoursOfOperation.textContent = "Hours of Operation";
        hoursLocation.appendChild(hoursOfOperation);

        const open6DaysMsg = document.createElement("p");
        open6DaysMsg.classList.add("p-center");
        open6DaysMsg.textContent = "Now open 6 days a week!";
        hoursLocation.appendChild(open6DaysMsg);

        const break1 = document.createElement("br");
        hoursLocation.appendChild(break1);

        const daysTimes = document.createElement("div");
        daysTimes.id = "days-times";
        hoursLocation.appendChild(daysTimes);

        const days = document.createElement("div");
        days.id = "days";
        daysTimes.appendChild(days);

        const times = document.createElement("div");
        times.id = "times";
        daysTimes.appendChild(times);

        const addSchedule = (function () {
            const days = document.querySelector("#days");
            const times = document.querySelector("#times");
            daysTimesData.forEach((dayOfWeek) => {
                const dayElement = document.createElement("p");
                dayElement.textContent = dayOfWeek.day;
                days.appendChild(dayElement);
            });
            daysTimesData.forEach((timeOfWeek) => {
                const timeElement = document.createElement("p");
                timeElement.textContent = timeOfWeek.time;
                times.appendChild(timeElement);
            });
        })()

        const break2 = document.createElement("br");
        hoursLocation.appendChild(break2);

        const openLateMsg = document.createElement("p");
        openLateMsg.classList.add("p-center");
        openLateMsg.textContent = "Open late for author talks & special events.";
        hoursLocation.appendChild(openLateMsg);

        const break3 = document.createElement("br");
        hoursLocation.appendChild(break3);

        const logoLock = document.createElement("img");
        logoLock.classList.add("logo");
        logoLock.src = locationLogoLock;
        logoLock.alt = "An ornate lock";
        hoursLocation.appendChild(logoLock);

        const location = document.createElement("h2");
        location.textContent = "Location";
        hoursLocation.appendChild(location);

        const locationAddress = document.createElement("p");
        locationAddress.classList.add("p-center");
        locationAddress.textContent =
        "Find us secretly situated at 23 Miskatonic Avenue, Rear, in beautiful Arkham, MA 01930.";
        hoursLocation.appendChild(locationAddress);
}



export { createHome };