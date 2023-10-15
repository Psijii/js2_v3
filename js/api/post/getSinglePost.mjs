import { SOCIAL_API_URL } from "../APIvariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";
/**
* Deletes a post.
* 
* Constructs delete post API endpoint URL with post ID.
* Makes DELETE request to delete post.
* Gets JSON response and reloads page.
* Returns delete results.
*  
* @async
* @function delPost - Deletes a post
* @param {Object} post - Post object to delete 
* @param {string} post.id - ID of post to delete
* @returns {Promise<Object>} Promise resolving to delete results
*/

export async function getSinglePost(postId) {
  const postURL = `${SOCIAL_API_URL}${actionEndpoint}/${postId}?_author=true`;

  const response = await fetchToken(postURL);

  return await response.json();
}

