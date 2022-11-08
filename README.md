# admin-dashboard
Admin dashboard built as an assignment for The Odin Project

## Project Scope

The purpose of this project is to build a mock admin dashboard using grid as much as possible. I have added a number of visual features to the dashboard, but some features are considered outside the project scope. For example, there is only one page (the dashboard) so any feature that would lead to another page does not work, including the side-menu navbar, the add page button, and a few other features. The working features are described below.

## Features

### Search Bar

The search bar uses a `keyup` event listener and searches the pages for the search term. All pages missing the search term are hidden. When the search bar is emptied, all pages are shown again. 

### Favourite, Share and Delete Page

Each page has a favourite, share, and delete page button. The favourite button toggles on and off, and the delete page button deletes it. The share button is outside the project scope.

### Hide and Show News Items

Each news item has a button to hide and show the news item. 

## Running Project Locally

1. Clone the repository
2. Navigate into the repo
3. Open the `index.html` in your preferred browser

## Additional Notes

I learned a lot from this project. For example, while I used grid for many features, flex was more suitable for some uses, such as column wrapping. At first I tried to do everything in grid and it turned out to be a ton of extra work. When I switched to flex, I achieved the same result in a few lines of code.

I also learned how to make a grid responsive. This mostly relied on built in functions like `repeat`, `autofit` and `minmax`.

Besides this, I discovered a new source for page icons. In the past, I relied on [Font Awesome](https://fontawesome.com/), but for this project I discovered Google Material Symbols and Icons, which can be easier to use in some cases.