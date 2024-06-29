import "../styles/styles.css";

    const content = document.querySelector("#content");
    // console.log("test");

    function createHome() {

        const home = document.createElement("div");
        home.id = "home";
        content.appendChild(home);

        const hoursLocation = document.createElement("div");
        hoursLocation.id = "hours-location";
        home.appendChild(hoursLocation);

        const logoKey = document.createElement("img");
        logoKey.classList.add("logo");
        logoKey.src = "../assets/images/logo-key.svg";
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

        // TODO: add dynamically set days and times from daysTimes.json

        // const addSchedule = (function (days) {
        //     fetch("../data/daysTimes.json")
        //       .then((response) => response.json())
        //       .then((data) => {
        //         // Use the loaded data
        //         console.log(data);
        //         data.forEach(dayOfWeek => {
        //             dayOfWeek = document.createElement("p");
        //             dayOfWeek.textContent = data.day;
        //             days.appendChild(dayOfWeek);
        //         })
        //       })
        //       .catch((error) => {
        //         console.error("Error fetching data:", error);
        //       })       

        // })();

        const addSchedule = (function () {
            const days = document.querySelector("#days");
            const times = document.querySelector("#times");

            fetch("../data/daysTimes.json")
                .then((response) => response.json())
                .then((data) => {
                data.forEach((dayOfWeek) => {
                    const dayElement = document.createElement("p");
                    dayElement.textContent = dayOfWeek.day;
                    days.appendChild(dayElement);

                    // console.log(
                    //     `${dayOfWeek.day} ${dayOfWeek.time}`
                    // );

                });
                data.forEach((timeOfWeek) => {
                    const timeElement = document.createElement("p");
                    timeElement.textContent = timeOfWeek.time;
                    times.appendChild(timeElement);
                });
                })
                .catch((error) => {
                console.error("Error fetching data:", error);


                });
        })();


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
        logoLock.src = "../assets/images/logo-lock.svg";
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