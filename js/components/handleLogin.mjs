// Purpose: Handles user login form submission.
import { login } from "../api/userLogin.mjs";
/**
* Handles user login form submission.
* 
* Adds submit event listener to login form.
* Gets email and password values from form fields.
* Creates user object from values.
* Calls login() function, passing user object.
* 
* @function userLogin 
*/
export function userLogin() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginForm = event.target;

    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    const user = {
      email,
      password,
    };

    login(user);
  });
}

