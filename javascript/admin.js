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

const deletePage = function(event) {
    const buttonDelete = this;
    const pageElement = buttonDelete.parentNode.parentNode;
    const pageTitle = pageElement.getElementsByTagName("h4")[0].innerText;
    let confirmDelete = confirm("Are you sure you want to delete this page?");
    if (confirmDelete) {
        pageElement.remove();
        alert(`\"${pageTitle}\" successfully deleted.`)
    }
}

// News
const hideNews = function(event) {
    // Get Button
    const buttonHide = this;
    // Get the p element of button's news-item
    const newsItem = buttonHide.parentNode.parentNode;
    const newsP = newsItem.getElementsByTagName("p");
    // Toggle visibility
    if (buttonHide.innerText === "visibility_off") {
        // Hide P
        newsP[0].hidden = true;
        // Change span icon
        buttonHide.innerText = "visibility";
    } else if (buttonHide.innerText === "visibility") {
        // Unhide P
        newsP[0].hidden = false;
        buttonHide.innerText = "visibility_off";
    }
}

// Get elements
const newsButtons = document.querySelectorAll(".news-button");
const favouriteButtons = document.querySelectorAll(".favourite");
const deleteButtons = document.querySelectorAll(".delete");

// Set Event Listeners
newsButtons.forEach(newsButton => newsButton.addEventListener("click", hideNews));
favouriteButtons.forEach(favouriteButton => favouriteButton.addEventListener("click", toggleFavourite));
deleteButtons.forEach(deleteButton => deleteButton.addEventListener("click", deletePage));