import "../styles/styles.css";
import daysTimesData from "../data/daysTimes.json";
import hoursImage from "../assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg";
import iconHoursImage from "../assets/images/icon-hours.svg";

const content = document.querySelector("#content");

function createHours() {

    const hours = document.createElement("div");
    hours.id = "hours"; 
    hours.classList.add("wipe");  
    content.appendChild(hours);

    const hoursImg = document.createElement("img");
    hoursImg.id = "hours-image";
    hoursImg.classList.add("wipe");
    hoursImg.src = hoursImage;
    hours.appendChild(hoursImg);

    const scheduleCont = document.createElement("div");
    scheduleCont.id = "schedule-cont";
    scheduleCont.classList.add("wipe");
    hours.appendChild(scheduleCont);

    const iconHours = document.createElement("img");
    iconHours.classList.add("logo", "wipe");
    iconHours.src = iconHoursImage;
    iconHours.alt = "An ornate key";
    scheduleCont.appendChild(iconHours);

    const hoursOfOperation = document.createElement("h2");
    hoursOfOperation.id = "hours-of-operation";
    hoursOfOperation.classList.add("wipe");
    hoursOfOperation.textContent = "Hours of Operation";
    scheduleCont.appendChild(hoursOfOperation);

    const open6DaysMsg = document.createElement("p");
    open6DaysMsg.id = "open-6-days-msg";
    open6DaysMsg.classList.add("p-center", "wipe");
    open6DaysMsg.textContent = "Now open 6 days a week!";
    scheduleCont.appendChild(open6DaysMsg);

    const break1 = document.createElement("br");
    break1.classList.add("wipe");
    scheduleCont.appendChild(break1);

    const daysTimes = document.createElement("div");
    daysTimes.id = "days-times";
    daysTimes.classList.add("wipe");
    scheduleCont.appendChild(daysTimes);

    const days = document.createElement("div");
    days.id = "days";
    days.classList.add("wipe");
    daysTimes.appendChild(days);

    const times = document.createElement("div");
    times.id = "times";
    times.classList.add("wipe");
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
    break2.classList.add("wipe");
    scheduleCont.appendChild(break2);

    const openLateMsg = document.createElement("p");
    openLateMsg.id = "open-late-msg";
    openLateMsg.classList.add("p-center", "wipe");
    openLateMsg.textContent = "Open late for author talks & special events.";
    scheduleCont.appendChild(openLateMsg);

    const break3 = document.createElement("br");
    break3.classList.add("wipe");
    scheduleCont.appendChild(break3);
}

export { createHours };