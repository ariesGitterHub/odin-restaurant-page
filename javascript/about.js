import "../styles/styles.css";
import aboutImage from "../assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg";
import iconAboutImage from "../assets/images/icon-about.svg";

function createAbout() {
    const content = document.querySelector("#content");
    
    const about = document.createElement("div");
    about.id = "about";
    about.classList.add("wipe");
    content.appendChild(about);

    const aboutImg = document.createElement("img");
    aboutImg.id = "about-image";
    aboutImg.classList.add("wipe");
    aboutImg.src = aboutImage;
    aboutImg.alt = "Many pink roses hang from a wide, arched cast iron garden gate"
    about.appendChild(aboutImg);

    const aboutCont = document.createElement("div");
    aboutCont.id = "about-cont";
    aboutCont.classList.add("wipe");
    about.appendChild(aboutCont);

    const iconAbout = document.createElement("img");
    iconAbout.classList.add("logo2", "wipe");
    iconAbout.src = iconAboutImage;
    iconAbout.alt = "An ornate floral pattern";
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
        "Since 1766, this humble bookstore has worked to enlighten and transcend the common by providing a sacred forum for the free exchange of worthy ideas. Some folks also say that our coffee is pretty good too.";
    aboutCont.appendChild(aboutBlurb);

    const break1 = document.createElement("br");
    break1.classList.add("wipe");
    aboutCont.appendChild(break1);

    const aboutQuote = document.createElement("p");
    aboutQuote.id = "about-quote";
    aboutQuote.classList.add("p-center", "wipe");
    aboutQuote.textContent =
        "'A most winsome and decadent establishment. The little cakes were also quite satisfactory, nearing scrumptious.' ~Edgar Allen Poe (while visiting Arkham in 1844)";
    aboutCont.appendChild(aboutQuote);

    const break2 = document.createElement("br");
    break1.classList.add("wipe");
    aboutCont.appendChild(break2);
    }

export { createAbout };
