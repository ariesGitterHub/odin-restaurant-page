import "../styles/styles.css";
import eventsImage from "../assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg";


const content = document.querySelector("#content");

function createEvents() {
    const events = document.createElement("div");
    events.id = "events";
    events.classList.add("wipe");
    content.appendChild(events);

    const eventsImg = document.createElement("img");
    eventsImg.id = "events-image";
    eventsImg.classList.add("wipe");
    eventsImg.src = eventsImage;
    events.appendChild(eventsImg);

    const eventsCont = document.createElement("div");
    eventsCont.id = "events-cont";
    eventsCont.classList.add("wipe");
    events.appendChild(eventsCont);
}

export { createEvents };
