function createAndAppendAboutContent(primaryDivContainer) {
    // create page content container
    const aboutContainer = document.createElement("section");
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About Us";
    aboutContainer.appendChild(aboutHeading);
    
    // create story section and inner elements
    const storySection = document.createElement("section");
    storySection.setAttribute("id", "story-container");

    const storyHeading = document.createElement("h2");
    storyHeading.textContent = "Our Story";
    storySection.appendChild(storyHeading);

    // const goalSection = document.createElement("section");
    // goalSection.setAttribute("id", "goal-container");
    // const locationSection = document.createElement("section");
    // locationSection.setAttribute("id", "location-container");
}

export { createAndAppendAboutContent };