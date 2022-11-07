// News

const hideNews = function(event) {
    // Get Target Span
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
newsButtons.forEach(newsButton => newsButton.addEventListener("click", hideNews));