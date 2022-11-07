// Top Menu

const scopeMessage = function(event) {
    alert("This functionality is outside the project scope");
}

const logoutMessage = function(event) {
    alert("Logout successful! (This functionality is outside the project scope");
}

// Page

// Toggles favourite icon on/off
const toggleFavourite = function(event) {
    // Get Button
    const buttonFavourite = this;
    // Toggle icon text
    if (buttonFavourite.innerText === "star_border") {
        buttonFavourite.innerText = "star";
    } else if (buttonFavourite.innerText === "star") {
        buttonFavourite.innerText = "star_border";
    }
}

// Displays alert message that link is copied
const shareMessage = () => alert("Link copied (This functionality is outside the project scope)");

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
const logoutButton = document.querySelector("#logout");
const addButton = document.querySelector("#add-page");
const uploadButton = document.querySelector("#upload-item");
const favouriteButtons = document.querySelectorAll(".favourite");
const shareButtons = document.querySelectorAll(".share");
const deleteButtons = document.querySelectorAll(".delete");
const newsButtons = document.querySelectorAll(".news-button");

// Set Event Listeners
logoutButton.addEventListener("click", logoutMessage);
addButton.addEventListener("click", scopeMessage);
uploadButton.addEventListener("click", scopeMessage);
favouriteButtons.forEach(favouriteButton => favouriteButton.addEventListener("click", toggleFavourite));
shareButtons.forEach(shareButton => shareButton.addEventListener("click", shareMessage));
deleteButtons.forEach(deleteButton => deleteButton.addEventListener("click", deletePage));
newsButtons.forEach(newsButton => newsButton.addEventListener("click", hideNews));
