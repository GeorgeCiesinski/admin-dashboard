// News

const hideNews = function(event) {
    // Get Target Span
    const newsSpan = event.target;
    console.log(newsSpan.innerText);
    // Get the p element of button's news-item
    const newsItem = event.target.parentNode.parentNode.parentNode;
    const newsP = newsItem.getElementsByTagName("p");
    console.log(newsP[0]);

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
    // Set p to hidden

    // Change button content to visibility on

}

// Get elements
const newsButtons = document.querySelectorAll(".news-button");
newsButtons.forEach(newsButton => newsButton.addEventListener("click", hideNews));