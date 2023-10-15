import { getSinglePost } from "../js/api/post/getSinglePost.mjs";
import { renderPostWall } from "../js/renders/renderPosts.mjs";

/**
 * Get the query string from the current URL and retrieve the 'id' parameter.
 * @type {string}
 */
const queryString = document.location.search;

/**
 * Create a new URLSearchParams object for the query string.
 * @type {URLSearchParams}
 */
const params = new URLSearchParams(queryString);

/**
 * Get the 'id' parameter value from the query string.
 * @type {string|null}
 */
const id = params.get("id");

/**
 * Retrieve a single post using the provided 'id'.
 * @param {string|null} id - The ID of the post to retrieve.
 * @returns {Promise} - A promise that resolves to the post data.
 */
const post = await getSinglePost(id);

/**
 * Render a single post in the message container.
 * @param {object} post - The post data to render.
 * @param {boolean} [flag] - A boolean indicating whether to use a flag (optional).
 * @param {string} containerSelector - The CSS selector for the message container.
 */
renderPostWall(post, false, ".message_container");


