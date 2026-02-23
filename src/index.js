import { createAndAppendHomeContent } from "./home-page.js";
import { createAndAppendMenuContent } from "./menu-page.js";
import { createAndAppendAboutContent } from "./about-page.js";

const contentDiv = document.querySelector("#content");
const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const aboutTab = document.querySelector("#about-tab");

// default for when page is landed on
createAndAppendHomeContent(contentDiv);

function switchTab(event) {
    switch (event.target) {
        case homeTab:
            if (contentDiv.contains(homeTab)) {
                return;
            } else {
                contentDiv.replaceChildren();
                createAndAppendHomeContent(contentDiv);
            }
            break;
        case menuTab:
            if (contentDiv.contains(menuTab)) {
                return;
            } else {
                contentDiv.replaceChildren();
                createAndAppendMenuContent(contentDiv);
            }
            break;
        case aboutTab:
            if (contentDiv.contains(aboutTab)) {
                return;
            } else {
                contentDiv.replaceChildren();
                createAndAppendAboutContent(contentDiv);
            }
            break;
    }
}

// tab switching logic
homeTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
aboutTab.addEventListener("click", switchTab);