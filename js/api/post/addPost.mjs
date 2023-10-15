import { SOCIAL_API_URL } from "../APIvariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts?_author=true";

/**
* Sends request to add new post to API.
* 
* Makes POST request to add post endpoint with post data. 
* Uses fetchToken() to attach auth token.
* Returns response JSON on success, logs error on failure.
*  
* @async
* @function addPost
* @param {Object} postData - New post data  
* @returns {Promise} Response JSON object
*/
export async function addPost(postData) {

  const addPostURL = SOCIAL_API_URL + actionEndpoint;

  try {
    const response = await fetchToken(addPostURL, {
      method: "POST",
      body: JSON.stringify(postData)
    });

    return await response.json();

  } catch (error) {
    console.error(error);
  }

}


