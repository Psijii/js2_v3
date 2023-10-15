import { getPosts } from "./api/post/getPost.mjs";
import { tagSearch } from "./components/search.mjs";
import { renderPostWall } from "./renders/renderPosts.mjs";
import { submitPost } from "../js/components/submitPost.mjs";

/**
 * Fetches a list of posts and renders them on a web page.
 * This function fetches posts using the `getPosts` function and renders each post
 * using the `renderPostWall` function. It iterates through the list of posts and
 * renders them in a specified container on the web page.
 */
const posts = await getPosts();
posts.forEach((post) => renderPostWall(post, false, ".message_container"));

submitPost();

tagSearch();

