import { loadHomePage } from "./home-page.js";
import { loadMenuPage } from "./menu-page.js";
import { loadAboutPage } from "./about-page.js";
import "./styles.css";

const contentDiv = document.querySelector("#content");
const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const aboutTab = document.querySelector("#about-tab");
const pageTabs = document.querySelectorAll(".nav-btn");

// default content and appearance for when page is landed on
loadHomePage(contentDiv);
homeTab.style.color = "#295390";

function changeTabColour(event) {
    pageTabs.forEach(tab => tab.style.color = "#232937");
    event.target.style.color = "#295390";
}

function switchTab(event) {
    switch (event.target) {
        case homeTab:
            if (contentDiv.contains(homeTab)) {
                return;
            } else {
                contentDiv.replaceChildren();
                loadHomePage(contentDiv);
            }
            break;
        case menuTab:
            if (contentDiv.contains(menuTab)) {
                return;
            } else {
                contentDiv.replaceChildren();
                loadMenuPage(contentDiv);
            }
            break;
        case aboutTab:
            if (contentDiv.contains(aboutTab)) {
                return;
            } else {
                contentDiv.replaceChildren();
                loadAboutPage(contentDiv);
            }
            break;
    }
}

// tab switching logic
homeTab.addEventListener("click", (event) => {
    switchTab(event);
    changeTabColour(event);
});
menuTab.addEventListener("click", (event) => {
    switchTab(event);
    changeTabColour(event);
});
aboutTab.addEventListener("click", (event) => {
    switchTab(event);
    changeTabColour(event);
});