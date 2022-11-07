// Page
const toggleFavourite = function(event) {
    // Get Button
    const buttonFavourite = this;
    if (buttonFavourite.innerText === "star_border") {
        buttonFavourite.innerText = "star";
    } else if (buttonFavourite.innerText === "star") {
        buttonFavourite.innerText = "star_border";
    }
}

// News
const hideNews = function(event) {
    // Get Button
    const newsSpan = this;
    // Get the p element of button's news-item
    const newsItem = event.target.parentNode.parentNode;
    const newsP = newsItem.getElementsByTagName("p");
    // Toggle visibility
    if (newsSpan.innerText === "visibility_off") {
        // Hide P
        newsP[0].hidden = true;
        // Change span icon
        newsSpan.innerText = "visibility";
    } else if (newsSpan.innerText === "visibility") {
        // Unhide P
        newsP[0].hidden = false;
        newsSpan.innerText = "visibility_off";
    }
}

// Get elements
const newsButtons = document.querySelectorAll(".news-button");
const favouriteButtons = document.querySelectorAll(".favourite");

// Set Event Listeners
newsButtons.forEach(newsButton => newsButton.addEventListener("click", hideNews));
favouriteButtons.forEach(favouriteButton => favouriteButton.addEventListener("click", toggleFavourite));