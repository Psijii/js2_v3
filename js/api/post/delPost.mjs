import { SOCIAL_API_URL } from "../APIvariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";
/**
* Gets posts from API.
* 
* Constructs API endpoint URL based on tag. 
* Encodes tag string for URL.
* Appends tag query if passed.
* Calls fetchToken() to make authorized request.
* Returns parsed JSON response.
*  
* @async
* @function getPosts - Gets posts from API optionally filtered by tag
* @param {string} [tag] - Filter posts by tag
* @returns {Promise<Object[]>} Promise resolving to array of post objects
*/

export async function delPost(post) {
  const delPostURL = `${SOCIAL_API_URL}${actionEndpoint}/${post.id}`;

  const response = await fetchToken(delPostURL, {
    method: "DELETE",
  });

  const results = await response.json();
  location.reload("/index.html");
  return results;
}

