import { SOCIAL_API_URL } from "./APIvariables.mjs";

const formAction = "/auth/register";
/**
* Updates a post.
* 
* Constructs API URL for updating post with ID.
* Makes PUT request with post data as JSON body.
* Returns parsed JSON response.
* 
* @async 
* @function updatePost - Updates a post
* @param {Object} post - Post object to update
* @param {string} post.id - ID of post to update 
* @returns {Promise<Object>} Promise resolving to updated post
*/
export async function register(user) {
  const regURL = SOCIAL_API_URL + formAction;

  try {
    const response = await fetch(regURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      // Redirect to /feed/index.html after 1000 milliseconds(1 second)
      setTimeout(() => {
        window.location.href = "/feed/index.html";
      }, 1000);
    }
  } catch (error) {
    // Handle any potential errors here, if necessary
    //console.error("Registration error: ", error);
  }
}


