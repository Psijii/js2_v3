import { SOCIAL_API_URL } from "../APIvariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts?sortOrder=desc&limit=50&_author=true";
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

export async function getPosts(tag) {
  let endpoint = actionEndpoint;
  if (tag) {
    const cleanTag = encodeURIComponent(tag);
    endpoint = actionEndpoint + `&_tag=${cleanTag}`;
  }
  const postsURL = SOCIAL_API_URL + endpoint;

  const response = await fetchToken(postsURL);
  return await response.json();
}

