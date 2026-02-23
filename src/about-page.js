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
    const storyDescription = document.createElement("p");
    storyDescription.textContent = "The Grand Blue started in 20XX as a small but focused initiative to deliver the greatest tastes and sights the ocean has to offer. Seventeen years of culinary and architectural pioneering later, we are proud to be the world's one and only dining establishment completely underwater.";
    storySection.appendChild(storyDescription);

    // const goalSection = document.createElement("section");
    // goalSection.setAttribute("id", "goal-container");
    // const locationSection = document.createElement("section");
    // locationSection.setAttribute("id", "location-container");
}

export { createAndAppendAboutContent };