/**
* Logs user out by clearing localStorage and redirecting to home page.
* 
* Removes auth token from localStorage.
* Navigates to home page to complete logout.
* 
* @function logOut - Logs user out
*/

function logOut() {
  localStorage.clear();
  window.location.href = "/";
}

export { logOut };