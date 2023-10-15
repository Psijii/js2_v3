
/**
 * Handles tag-based search when the search button is clicked.
 *
 * This function adds a click event listener to the "search-button" element in the DOM.
 * When the button is clicked, it prevents the default form submission behavior, retrieves
 * the value from the "search-field-tags" input field, and redirects the user to a search
 * results page with the specified tag as a query parameter.
 *  @function tagSearch
 */

export function tagSearch() {

 const searchBtn = document.getElementById("search-button");

 searchBtn.addEventListener("click", (e) => {

   e.preventDefault();
   
   const searchInput = document.getElementById("search-field-tags");
   const tag = searchInput.value;
   
   window.location.href = `/search.html?tag=${tag}`;

 });

}

