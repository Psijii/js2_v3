import { logOut } from "../js/utils/logout.mjs";

const profileLink = document.getElementById("profileNavLink");
const feedLink = document.getElementById("feedNavLink");
const logOutBtn = document.getElementById("logOut");
const loggedInUser = localStorage.getItem("userId");

/**
* Checks auth and shows/hides page elements accordingly.
* 
* Checks for auth token in localStorage.
* If token exists:
* - Enables profile and feed links.
* - Shows log out button.
* If no token:
* - Hides log out button.
* 
* @function linkAuth - Checks auth and updates DOM
*/

export function linkAuth() {
  const token = localStorage.getItem("accessToken");
  if (token) {
    profileLink.classList.remove("disabled");
    feedLink.classList.remove("disabled");
    logOutBtn.style.display = "block"; //here I attempted to create the logout button to only
    //appear while the user is logged in, but it doesn't seem to be working, so I left it here for education purposes.
  } else {
    logOutBtn.style.display = "none";
  }
}

/**
* Redirects to user profile page.
* 
* @function toProfile - Navigates to profile page
*/
function toProfile() {
  window.location.href = `/profile/index.html?id=${loggedInUser}`;
}

// Event listeners
profileLink.addEventListener("click", toProfile);
logOutBtn.addEventListener("click", logOut);

