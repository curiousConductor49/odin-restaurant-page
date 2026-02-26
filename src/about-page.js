function loadAboutPage(displayDiv) {
    // create page content container
    const aboutContainer = document.createElement("section");
    const aboutHeading = document.createElement("h1");
    aboutHeading.textContent = "About Us";
    aboutContainer.appendChild(aboutHeading);
    aboutContainer.setAttribute("id", "about-container");
    
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
    visionSection.appendChild(visionHeading);

    const visionDescription1 = document.createElement("p");
    visionDescription1.textContent = "We at the Grand Blue have always strived to provide our customers with top-class culinary experience without compromising the safety of you or the breath-taking scenery you dine in."
    const visionDescription2 = document.createElement("p");
    visionDescription2.textContent = "We emphasize cutting-edge technology to service our establishment and uphold a safety-first policy with year-round checks and inspections. Regular consulting sessions are held with ocean wildlife experts and habitat specialists to responsibly and sustainably conform all aspects of the Grand Blue to nature's needs, whether it be waste dispoal, electrical consumption, or ingredient sources.";

    const blockquoteContainer = document.createElement("div");
    blockquoteContainer.setAttribute("id", "blockquote-container");
    const founderQuoteBlock = document.createElement("blockquote");
    const founderQuoteText = document.createElement("p");
    founderQuoteText.textContent = `"Never forget the Grand Blue brings you to nature, not the other way around. You're eating in the living room of a blue whale, so don't bang the cutlery."`;
    founderQuoteBlock.appendChild(founderQuoteText);
    const founderQuoteSpeaker = document.createElement("p");
    founderQuoteSpeaker.textContent = "—John Blue, one of the founding members of the Grand Blue";
    blockquoteContainer.appendChild(founderQuoteBlock);
    blockquoteContainer.appendChild(founderQuoteSpeaker);

    const visionDescription3 = document.createElement("p");
    visionDescription3.textContent = "A significant portion of our proceeds has and always will go to a significant number of ocean pollution clean-up efforts and environmental non-profits. You can dine safely and comfortably knowing your marine neighbours are at just as much ease."

    // append vision section children
    visionSection.appendChild(visionDescription1);
    visionSection.appendChild(visionDescription2);
    visionSection.appendChild(blockquoteContainer);
    visionSection.appendChild(visionDescription3);

    // create location section and inner elements
    const locationSection = document.createElement("section");
    locationSection.setAttribute("id", "location-container");

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Our Location";
    locationSection.appendChild(locationHeading);

    const locationDescription = document.createElement("p");
    locationDescription.textContent = "The Grand Blue currently has establishments open in 8 different locations across the world, all of them situated for optimal viewing and the least disturbance to marine ecosystems and whale migration routes. We hope to open a ninth and tenth location shortly within the first half of 20XX. Please contact one of our outreach staff for further details if you wish to book a trip or place a reservation."
    locationSection.appendChild(locationDescription);

    // append sections to page content container, then to the display div
    aboutContainer.appendChild(storySection);
    aboutContainer.appendChild(visionSection);
    aboutContainer.appendChild(locationSection);
    displayDiv.appendChild(aboutContainer);
}

export { loadAboutPage };