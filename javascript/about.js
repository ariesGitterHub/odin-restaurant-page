import "../styles/styles.css";
import aboutImage from "../assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg";
import iconAboutImage from "../assets/images/icon-about.svg";

const content = document.querySelector("#content");

function createAbout() {
    const about = document.createElement("div");
    about.id = "about";
    about.classList.add("wipe");
    content.appendChild(about);

    const aboutImg = document.createElement("img");
    aboutImg.id = "about-image";
    aboutImg.classList.add("wipe");
    aboutImg.src = aboutImage;
    about.appendChild(aboutImg);

    const aboutCont = document.createElement("div");
    aboutCont.id = "about-cont";
    aboutCont.classList.add("wipe");
    about.appendChild(aboutCont);

    const iconAbout = document.createElement("img");
    iconAbout.classList.add("logo2", "wipe");
    iconAbout.src = iconAboutImage;
    iconAbout.alt = "An ornate lock";
    aboutCont.appendChild(iconAbout);

    const aboutHeader = document.createElement("h2");
    aboutHeader.id = "about-header";
    aboutHeader.classList.add("wipe");
    aboutHeader.textContent = "Our Mission";
    aboutCont.appendChild(aboutHeader);

    const aboutBlurb = document.createElement("p");
    aboutBlurb.id = "about-blurb";
    aboutBlurb.classList.add("p-center", "wipe");
    aboutBlurb.textContent =
        "Since 1766, this humble shop, our family's sole endeavor, has worked to enlighten and transcend the common by providing a sacred redoubt for the debate and exchange of ideas, both great and small.";
    aboutCont.appendChild(aboutBlurb);

    const break1 = document.createElement("br");
    break1.classList.add("wipe");
    aboutCont.appendChild(break1);

    const aboutQuote = document.createElement("p");
    aboutQuote.id = "about-quote";
    aboutQuote.classList.add("p-center", "wipe");
    aboutQuote.textContent =
      "'A most winsome and decadent establishment. The little cakes were also quite satisfactory, nearing scrumptious.' ~Edgar Allen Poe";
    aboutCont.appendChild(aboutQuote);

}

export { createAbout };
