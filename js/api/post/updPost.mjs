// Support functions for updating a post
import { SOCIAL_API_URL } from "../APIvariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

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
export async function updatePost(post) {
  const updatePostURL = `${SOCIAL_API_URL}${actionEndpoint}/${post.id}`;

  const response = await fetchToken(updatePostURL, {
    method: "PUT",
    body: JSON.stringify(post),
  });

  return await response.json();
}


