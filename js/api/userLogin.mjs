import { SOCIAL_API_URL } from "./APIvariables.mjs";

const formAction = "/auth/login";
 
/**
* Handles user login request to API.
* 
* Sends POST request to login API endpoint.
* Checks response status, handling success and error.
* On success, stores accessToken and profile in localStorage.
* Navigates to profile page on successful login.
* 
* @async
* @function login  
* @param {Object} user - User login credentials
*/
export async function login(user) {
    const loginURL = SOCIAL_API_URL + formAction;

    try {
        const response = await fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const { accessToken, ...profile } = await response.json();

            localStorage.setItem("token", JSON.stringify(accessToken));
            localStorage.setItem("profile", JSON.stringify(profile));
            const successMessage = document.getElementById("successMessage");
            successMessage.style.display = "block";

            // Redirect to /profile.html after 1000 milliseconds (1 second)
            setTimeout(() => {
                window.location.assign("/profile/index.html");
            }, 1000);
        } else {
            // Display the error message only in case of a login failure
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.style.display = "block";
        }
    } catch (error) {
        // Handle any potential errors here, if necessary
        // console.error("Login error: ", error);
    }
}


