// Initiate user registration
import { register } from "../api/authUser.mjs";

/**
* Registers a new user.
*
* Listens for submit event on registration form.
* Validates user input client-side.
* If validation passes, registers user object.
* 
* @param {Event} event - Form submit event
*/
export function userReg(event) {

  /** @const {HTMLFormElement} */
  const registrationForm = document.getElementById("registerUser");

  /**
   * Form submit event handler.
   * 
   * @param {Event} event - Form submit event
   */
  registrationForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const nameInput = document.getElementById("registerUsername");
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("loginPassword");

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    /** Validation pattern for username */
    const namePattern = /^[\w]+$/;

    /** Validation pattern for email */
    const emailPattern = /^[\w\-.]+@(stud.)?noroff.no$/;

    /** Validation pattern for password */
    const passwordPattern = /^.{8,}$/;

    if (!namePattern.test(name)) {
      document.getElementById("nameError").textContent = "Invalid username. Please use only letters, numbers, and underscores.";
      return;
    }

    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Invalid email address. Please use a valid @noroff.no email.";
      return;
    }

    if (!passwordPattern.test(password)) {
      document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
      return;
    }

    /** User object */
    const user = {
      name,
      email,
      password
    };

    register(user);

  });

}


