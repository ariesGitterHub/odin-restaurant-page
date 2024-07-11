import "../styles/styles.css";
import eventsImage from "../assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg";
import eventItemsData from "../data/eventItems.json";

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
    eventsImg.alt = "A woman stands before an events board at a bookstore"
	events.appendChild(eventsImg);

	const eventsCont = document.createElement("div");
	eventsCont.id = "events-cont";
	eventsCont.classList.add("wipe");
	events.appendChild(eventsCont);

    const addEventItems = (function () {
        eventItemsData.forEach((eventItem) => {
            const eventSquare = document.createElement("div");
            eventSquare.classList.add("wipe", "event-square");

            const what = document.createElement("p");
            what.classList.add("wipe", "what");
            what.textContent = eventItem.what;
            eventSquare.appendChild(what);

            const break1 = document.createElement("br");
            break1.classList.add("wipe");
            eventSquare.appendChild(break1);

            const when = document.createElement("p");
            when.classList.add("wipe", "when");
            when.textContent = `${eventItem.when}`;
            eventSquare.appendChild(when);

            const break2 = document.createElement("br");
            break2.classList.add("wipe");
            eventSquare.appendChild(break2);

            const blurb = document.createElement("p");
            blurb.classList.add("wipe", "blurb");
            blurb.textContent = eventItem.blurb;
            eventSquare.appendChild(blurb);

            eventsCont.appendChild(eventSquare);
        });
    })();
}

export { createEvents };
