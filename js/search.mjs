import { getPosts } from "../js/api/post/getPost.mjs";
import { renderPostWall } from "../js/renders/renderPosts.mjs";
import { tagSearch } from "../js/components/search.mjs";

/**
* Initializes the profile page by fetching and rendering posts for a tag.
* 
* Gets the tag query parameter from the URL. 
* Fetches the posts for that tag using getPosts().
* Renders each post to the post wall without the repost UI.
* 
* @async
* @function init
* @returns {Promise<void>}
*/
export async function init() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const tag = params.get("tag");
  const posts = await getPosts(tag);
  posts.forEach((post) => renderPostWall(post, false, ".profile_posts"));
}

init();
tagSearch();
