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

    // create vision section and inner elements
    const visionSection = document.createElement("section");
    visionSection.setAttribute("id", "vision-container");

    const visionHeading = document.createElement("h2");
    visionHeading.textContent = "Our Vision";
    visionHeading.appendChild(goalHeading);

    const visionDescription1 = document.createElement("p");
    visionDescription1.textContent = "We at the Grand Blue have always strived to provide our customers with top-class culinary experience without compromising the safety of you or the breath-taking scenery you dine in."
    const visionDescription2 = document.createElement("p");
    visionDescription2.textContent = "We emphasize cutting-edge technology to service our establishment and uphold a safety-first policy with year-round checks and inspections. Regular consulting sessions are held with ocean wildlife experts and habitat specialists to conform all aspects of the Grand Blue, whether it be waste dispoal, electrical consumption, or supply sources, to nature's needs.";
    const visionDescription3 = document.createElement("p");
    visionDescription3.textContent = "All on-site staff undergo intensive training, including diving lessons and first aid as part of the onboarding process. All customers are required to complete safety and guidance modules as outlined by our establishment upon entry. All ingredients for our menu items are sourcd sustainably and responsibly.";

    const founderQuoteBlock = document.createElement("blockquote");
    const founderQuoteText = document.createElement("p");
    founderQuoteText.textContent = "Never forget the Grand Blue brings you to nature, not the other way around. You're eating in the living room of a blue whale, but you're as small as shrimp on the grand scale of things, so don't bang the cutlery."
    founderQuoteBlock.appendChild(founderQuoteText);

    const founderQuoteSpeaker = document.createElement("p");
    founderQuoteSpeaker.textContent = "—John Blue, one of the founding members of the Grand Blue";

    const visionDescription4 = document.createElement("p");
    visionDescription4.textContent = "A significant portion of our proceeds has and always will go to a number of pollution clean-up efforts and verified ocean environmental non-profits. You can dine safely and comfortably knowing  your marine neighbours are at just as much ease."

    // create location section and inner elements
    // const locationSection = document.createElement("section");
    // locationSection.setAttribute("id", "location-container");
}

export { createAndAppendAboutContent };