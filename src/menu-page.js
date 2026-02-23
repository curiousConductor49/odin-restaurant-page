function loadMenuPage(displayDiv) {
    // create outer elements and append text content
    const menuContainer = document.createElement("section");
    const menuHeading  = document.createElement("h1");
    menuHeading.textContent = "Our Menu";
    menuContainer.appendChild(menuHeading);
    menuContainer.setAttribute("id", "menu-container");

    // create menu categories and lists and append them for the appetizers section
    const appetizers = document.createElement("section");
    const appetizersHeading = document.createElement("h2");
    appetizersHeading.textContent = "Appetizers";
    appetizers.setAttribute("id", "appetizers");

    const appetizersList = document.createElement("ul");
    appetizersList.setAttribute("id", "appetizers-list");
    appetizers.appendChild(appetizersHeading);
    appetizers.appendChild(appetizersList);

    const appetizerItem1 = document.createElement("li");
    appetizerItem1.textContent = "Cram Canapés";
    appetizersList.appendChild(appetizerItem1);

    const appetizerItem2 = document.createElement("li");
    appetizerItem2.textContent = "Salmon Croquettes";
    appetizersList.appendChild(appetizerItem2);

    const appetizerItem3 = document.createElement("li");
    appetizerItem3.textContent = "Creamy Clam Dip and Chips";
    appetizersList.appendChild(appetizerItem3);

    const appetizerItem4 = document.createElement("li");
    appetizerItem4.textContent = "Lobster Sliders";
    appetizersList.appendChild(appetizerItem4);

    // create menu categories and lists and append them for the soups section
    const soups = document.createElement("section");
    const soupsHeading = document.createElement("h2");
    soupsHeading.textContent = "Soups";
    soups.setAttribute("id", "soups");

    const soupsList = document.createElement("ul");
    soupsList.setAttribute("id", "soups-list");
    soups.appendChild(soupsHeading);
    soups.appendChild(soupsList);

    const soupItem1 = document.createElement("li");
    soupItem1.textContent = "Creamy Clam Chowder";
    soupsList.appendChild(soupItem1);

    const soupItem2 = document.createElement("li");
    soupItem2.textContent = "Oyster Soup";
    soupsList.appendChild(soupItem2);

    const soupItem3 = document.createElement("li");
    soupItem3.textContent = "Lobster Chowder";
    soupsList.appendChild(soupItem3);

    const soupItem4 = document.createElement("li");
    soupItem4.textContent = "Crustacean Brew (Prawns, Shrimp, Crawfish)";
    soupsList.appendChild(soupItem4);

    // create menu categories and lists and append them for the salads section
    const salads = document.createElement("section");
    const saladsHeading = document.createElement("h2");
    saladsHeading.textContent = "Salads";
    salads.setAttribute("id", "salads");

    const saladsList = document.createElement("ul");
    saladsList.setAttribute("id", "salads-list");
    salads.appendChild(saladsHeading);
    salads.appendChild(saladsList);

    const saladItem1 = document.createElement("li");
    saladItem1.textContent = "Cucumber and Smoked Mackerel Salad";
    saladsList.appendChild(saladItem1);

    const saladItem2 = document.createElement("li");
    saladItem2.textContent = "Spinach and Smoked Salmon Salad";
    saladsList.appendChild(saladItem2);

    const saladItem3 = document.createElement("li");
    saladItem3.textContent = "Avacado and King Crab Salad";
    saladsList.appendChild(saladItem3);

    // create menu categories and lists and append them for the mains section
    const mains = document.createElement("section");
    const mainsHeading = document.createElement("h2");
    mainsHeading.textContent = "Mains";
    mains.setAttribute("id", "mains");

    const mainsList = document.createElement("ul");
    mainsList.setAttribute("id", "mains-list");
    mains.appendChild(mainsHeading);
    mains.appendChild(mainsList);

    const mainItem1 = document.createElement("li");
    mainItem1.textContent = "Sheet Pan Salmon";
    mainsList.appendChild(mainItem1);

    const mainItem2 = document.createElement("li");
    mainItem2.textContent = "Smoked Cheddar Shrimp";
    mainsList.appendChild(mainItem2);

    const mainItem3 = document.createElement("li");
    mainItem3.textContent = "Seared Scallops";
    mainsList.appendChild(mainItem3);

    const mainItem4 = document.createElement("li");
    mainItem4.textContent = "Steamed Mussels";
    mainsList.appendChild(mainItem4);

    const mainItem5 = document.createElement("li");
    mainItem5.textContent = "Roasted Halibut";
    mainsList.appendChild(mainItem5);

    const mainItem6 = document.createElement("li");
    mainItem6.textContent = "Cod Cakes";
    mainsList.appendChild(mainItem6);

    const mainItem7 = document.createElement("li");
    mainItem7.textContent = "Baked Stuffed Clams";
    mainsList.appendChild(mainItem7);

    const mainItem8 = document.createElement("li");
    mainItem8.textContent = "Lobster Rolls";
    mainsList.appendChild(mainItem8);

    // create menu categories and lists and append them for the desserts section
    const desserts = document.createElement("section");
    const dessertsHeading = document.createElement("h2");
    dessertsHeading.textContent = "Desserts";
    desserts.setAttribute("id", "desserts");

    const dessertsList = document.createElement("ul");
    dessertsList.setAttribute("id", "desserts-list");
    desserts.appendChild(dessertsHeading);
    desserts.appendChild(dessertsList);

    const dessertItem1 = document.createElement("li");
    dessertItem1.textContent = "Sorbet-Topped Fruit Tarts";
    dessertsList.appendChild(dessertItem1);

    const dessertItem2 = document.createElement("li");
    dessertItem2.textContent = "Strawberry Parfait";
    dessertsList.appendChild(dessertItem2);

    const dessertItem3 = document.createElement("li");
    dessertItem3.textContent = "Key Lime Pie";
    dessertsList.appendChild(dessertItem3);

    const dessertItem4 = document.createElement("li");
    dessertItem4.textContent = "Tiramisu";
    dessertsList.appendChild(dessertItem4);

    const dessertItem5 = document.createElement("li");
    dessertItem5.textContent = "Chocolate Lava Cake";
    dessertsList.appendChild(dessertItem5);

    const dessertItem6 = document.createElement("li");
    dessertItem6.textContent = "Carrot Cake";
    dessertsList.appendChild(dessertItem6);

    const dessertItem7 = document.createElement("li");
    dessertItem7.textContent = "Blueberry Cheesecake";
    dessertsList.appendChild(dessertItem7);

    const dessertItem8 = document.createElement("li");
    dessertItem8.textContent = "Boston Cream Pie";
    dessertsList.appendChild(dessertItem8);

    // append content to restaurant page's div container
    menuContainer.appendChild(appetizers);
    menuContainer.appendChild(soups);
    menuContainer.appendChild(salads);
    menuContainer.appendChild(mains);
    menuContainer.appendChild(desserts);

    displayDiv.appendChild(menuContainer);
}

export { loadMenuPage };