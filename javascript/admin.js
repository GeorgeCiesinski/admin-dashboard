// Top Menu

// Alerts display for functionality outside project scope
const logoutMessage = () => alert("Logout successful. This functionality is outside the project scope");
const addMessage = () => alert("Add page. This functionality is outside the project scope");
const uploadMessage = () => alert("Upload file. This functionality is outside the project scope");
const shareMessage = () => alert("Link copied (This functionality is outside the project scope)");

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

// Class for pageHidden
const pageHidden = ".page-hidden";

// Check if page contains hidden class and remove it
const hidePage = function(page) {
    page.style.display = "none";
}

// Check that page doesn't contains hidden class and add it
const showPage = function(page) {
    page.style.display = "block";
}

// Search
const searchPages = function(event) {
    // Get search bar content
    const searchTerm = searchBar.value;
    const pages = document.querySelectorAll(".page");
    if (searchTerm !== "" && searchTerm !== null) {
        pages.forEach(page => {
            // Reset hidden attribute
            showPage(page);
            // Get header and paragraph
            const headerText = page.getElementsByTagName("h4")[0].innerText;
            const paragraphText = page.getElementsByTagName("p")[0].innerText;
            if (!headerText.includes(searchTerm) && !paragraphText.includes(searchTerm)) {
                hidePage(page);
            }
        })
    } else if (searchTerm === "" || searchTerm === null) {
        pages.forEach(page => showPage(page));
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
const searchBar = document.querySelector("#search");

// Set Event Listeners
logoutButton.addEventListener("click", logoutMessage);
addButton.addEventListener("click", addMessage);
uploadButton.addEventListener("click", uploadMessage);
favouriteButtons.forEach(favouriteButton => favouriteButton.addEventListener("click", toggleFavourite));
shareButtons.forEach(shareButton => shareButton.addEventListener("click", shareMessage));
deleteButtons.forEach(deleteButton => deleteButton.addEventListener("click", deletePage));
newsButtons.forEach(newsButton => newsButton.addEventListener("click", hideNews));
searchBar.addEventListener("keyup", searchPages);