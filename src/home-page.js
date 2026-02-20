function createAndAppendHomeContent(primaryDivContainer) {
    // create the elements for the first section
    const pageBanner = document.createElement("section");
    const headline = document.createElement("h1");
    const tagline = document.createElement("p");
    // set the text content and attributes for each element
    headline.textContent = "Welcome to Grand Blue";
    tagline.textContent = "...where the ocean's finest cuisine awaits.";
    pageBanner.appendChild(headline);
    pageBanner.appendChild(tagline);
    pageBanner.setAttribute("id", "page-banner");

    // create and append the elements for the second section
    const restaurantFeatures = document.createElement("section");

    const diningFeature = document.createElement("article");
    const diningFeatureHeading = document.createElement("h2");
    const diningFeatureDescription = document.createElement("p");

    const serviceFeature = document.createElement("article");
    const serviceFeatureHeading = document.createElement("h2");
    const serviceFeatureDescription = document.createElement("p");

    const sceneryFeature = document.createElement("article");
    const sceneryFeatureHeading = document.createElement("h2");
    const sceneryFeatureDescription = document.createElement("p");

    const ambienceFeature = document.createElement("article");
    const ambienceFeatureHeading = document.createElement("h2");
    const ambienceFeatureDescription = document.createElement("p");


    // create and set the text content for each element
    diningFeatureHeading.textContent = "Immaculate dining";
    diningFeatureDescription.textContent = "You order, we deliver.";

    serviceFeatureHeading.textContent = "Pristine service";
    serviceFeatureDescription.textContent = "All hands on deck, always.";

    sceneryFeatureHeading.textContent = "Underwater sceneries";
    sceneryFeatureDescription.textContent = "Mystique and marvels right behind the glass.";
    
    ambienceFeatureHeading.textContent = "World-class ambience";
    ambienceFeatureDescription.textContent = "No clinks or chatter, just waves and whalesong.";

    // append elements and attributes for each element
    diningFeature.appendChild(diningFeatureHeading);
    diningFeature.appendChild(diningFeatureDescription);

    serviceFeature.appendChild(serviceFeatureHeading);
    serviceFeature.appendChild(serviceFeatureDescription);

    sceneryFeature.appendChild(sceneryFeatureHeading);
    sceneryFeature.appendChild(sceneryFeatureDescription);

    ambienceFeature.appendChild(ambienceFeatureHeading);
    ambienceFeature.appendChild(ambienceFeatureDescription);

    restaurantFeatures.appendChild(diningFeature);
    restaurantFeatures.appendChild(serviceFeature);
    restaurantFeatures.appendChild(sceneryFeature);
    restaurantFeatures.appendChild(ambienceFeature);

    restaurantFeatures.setAttribute("id", "restaurant-features");
    
    // append both sections to restaurant page's div container
    primaryDivContainer.appendChild(pageBanner);
    primaryDivContainer.appendChild(restaurantFeatures);
}

export { createAndAppendHomeContent };