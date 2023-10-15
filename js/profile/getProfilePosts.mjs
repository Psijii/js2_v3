import { SOCIAL_API_URL } from "../api/APIvariables.mjs";
import { fetchToken } from "../api/fetchToken.mjs";
import { renderPostWall } from "../renders/renderPosts.mjs";
import { delBtn } from "../components/delBtn.mjs";
import { profile } from "./getProfileName.mjs";

const myProfile = profile("profile");

const actionEndpoint =
  `/profiles/${myProfile.name}/posts?_author=true`;
/**
* Fetches all posts from API and renders them.
* Constructs posts API URL using constants.
* Calls fetchToken() to make authorized API request. 
* Parses JSON response into posts array.
* Renders each post to the post wall with repost UI.
* @async
* @function getPosts
* @returns {Promise<Object[]>} Promise resolving to posts array.
*/
export async function getPosts() {
  const postsURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(postsURL);
  const posts = await response.json();
  posts.forEach((post) => renderPostWall(post, true, ".profile_posts"));

  delBtn();

  return posts;
}

