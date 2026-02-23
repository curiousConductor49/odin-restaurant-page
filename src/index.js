import { createAndAppendHomeContent } from "./home-page.js";
import { createAndAppendMenuContent } from "./menu-page.js";
import { createAndAppendAboutContent } from "./about-page.js";

// createAndAppendHomeContent(document.querySelector("#content"));
// createAndAppendMenuContent(document.querySelector("#content"));
// createAndAppendAboutContent(document.querySelector("#content"));

// pseudocode!!
// store the DOM content div + btn elements in variables
// add event listeners to the buttons
// the anon callback function should remove the current child section of the content div (use a switch statement?), then call the button's respective page-loader function
// compare the btn being clicked versus whether the div is currently populated
// if the div is populated, check if it's the same tab that's being clicked, if so then just return, if not then use conditional logic to load the right page based on the btn being being clicked
// if the div is not populated, then just load the page based on the btn being clicked

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