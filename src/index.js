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