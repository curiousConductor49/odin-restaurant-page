import { loadHomePage } from "./home-page.js";
import { loadMenuPage } from "./menu-page.js";
import { loadAboutPage } from "./about-page.js";

const contentDiv = document.querySelector("#content");
const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const aboutTab = document.querySelector("#about-tab");

// default for when page is landed on
loadHomePage(contentDiv);

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
homeTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
aboutTab.addEventListener("click", switchTab);