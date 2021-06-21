function pageInit() {
    console.log("no")
    let contentDiv = document.getElementById("content");

    //Creation of image bar
    const imageBar = document.createElement("div");
    imageBar.id = "image-logo";
    const restaurantName = document.createElement("p");
    restaurantName.textContent = "Vaffanculo's";
    imageBar.appendChild(restaurantName);

    // Creation of navbar
    const navbar = document.createElement("div");
    navbar.id = "navbar";
    const navbarList = document.createElement("ul");

    for(let i = 0; i < 5; i++) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        if(i == 0) {
            link.innerText = "Home";
        } else if (i == 1) {
            link.innerText = "Menu";
        } else if (i == 2) {
            link.innerText = "Locations";
        } else if (i == 3) {
            listItem.classList.add("last-child");
            link.innerText = "Contact";
        } else if (i == 4) {
            listItem.classList.add("red", "last-child");
            link.innerText = "Order";
        }
        link.href = "";

        listItem.appendChild(link);
        navbarList.appendChild(listItem);
    }
    navbar.appendChild(navbarList);

    //Creation of image container
    const imageCont = document.createElement("div");
    imageCont.id = "image-container";
    const restHeader = document.createElement("h3");
    restHeader.textContent = "Rated Top 100 Italian Restaurants in the Country";
    const sloganHeader = document.createElement("h1");
    sloganHeader.textContent = "The Taste of Italy";
    const flagDiv = document.createElement("div");
    flagDiv.id = "italy-flag";

    imageCont.appendChild(restHeader);
    imageCont.appendChild(sloganHeader);
    imageCont.appendChild(flagDiv);

    //Creation of split container
    const splitContainer = document.createElement("div");
    splitContainer.id = "table-container";
    // Left pane
    const leftPane = document.createElement("div");
    leftPane.id = "left-pane";
    const dineHeader = document.createElement("h3");
    dineHeader.textContent = "Dine With Us";
    const hoursHeader = document.createElement("h4");
    hoursHeader.innerHTML = "Sunday: Closed <br> Monday-Thursday: 12:00PM - 10:00PM <br> Friday-Saturday: 2:00PM - 11:00PM";
    const bookHeader = document.createElement("h1");
    bookHeader.textContent = "Book A Table";
    const buttonCont = document.createElement("div");
    buttonCont.id = "button-container";
    const bookButton = document.createElement("button");
    bookButton.id = "book-button";
    bookButton.classList.add("hvr-shadow");
    bookButton.textContent = "Book Now";
    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.classList.add("hvr-shadow");
    menuButton.textContent = "Menu";
    buttonCont.appendChild(bookButton);
    buttonCont.appendChild(menuButton);

    leftPane.appendChild(dineHeader);
    leftPane.appendChild(flagDiv);
    leftPane.appendChild(hoursHeader);
    leftPane.appendChild(bookHeader);
    leftPane.appendChild(buttonCont);

    //Right pane
    const rightPane = document.createElement("div");
    rightPane.id = "right-pane";
    splitContainer.appendChild(leftPane);
    splitContainer.appendChild(rightPane);

    contentDiv.appendChild(imageBar);
    contentDiv.appendChild(navbar);
    contentDiv.appendChild(imageCont);
    contentDiv.appendChild(splitContainer);
}

export { pageInit as default };