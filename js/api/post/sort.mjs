import { SOCIAL_API_URL } from "../APIvariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

/**
 * this is the sorting function I tried to create, that onyl shows up
 * with title and text, and nothing else. I've left it in here to show
 * that I tried to make something, and made something that works, but
 * it is not perfect.
 */


const actionEndpoint = "/posts";
/**
* Gets posts from API.
* 
* Constructs API endpoint URL based on tag and sorting.
* Encodes tag string for URL.
* Appends tag and sort order queries if passed.
* Calls fetchToken() to make an authorized request.
* Returns parsed JSON response.
* 
* @async
* @function getPosts - Gets posts from API optionally filtered by tag and sorted.
* @param {string} [tag] - Filter posts by tag
* @param {string} [sort] - Sort order, 'newest' or 'oldest'
* @returns {Promise<Object[]>} Promise resolving to an array of post objects
 */
export async function getPosts(tag, sort, sortByUser) {
  let endpoint = "/posts?limit=50&_author=true";

  if (tag) {
    const cleanTag = encodeURIComponent(tag);
    endpoint += `&_tag=${cleanTag}`;
  }

  if (sort === "newest") {
    endpoint += "&sortOrder=desc";
  } else if (sort === "oldest") {
    endpoint += "&sortOrder=asc";
  }

  if (sortByUser === "A-Z") {
    endpoint += "&sortByUser=asc";
  } else if (sortByUser === "Z-A") {
    endpoint += "&sortByUser=desc";
  }

  const postsURL = SOCIAL_API_URL + endpoint;

  const response = await fetchToken(postsURL);
  return await response.json();
}


document.getElementById("filter-button").addEventListener("click", async () => {
  const tag = document.getElementById("tag").value;
  const sortOrder = document.getElementById("sortOrder").value;
  const sortByUser = document.getElementById("sortByUser").value;

  const posts = await getPosts(tag, sortOrder, sortByUser);

  displayPosts(posts);
});
/**
* Displays posts in the UI.
* 
* Clears existing posts from container.
* Iterates through array of posts.
* Creates post element for each.
* Adds user info if available.
* Adds title, message, tags and media. 
* Appends post element to container.
* 
* @function displayPosts 
* @param {Object[]} posts - Array of post objects to display
*/

function displayPosts(posts) {
  const messageContainer = document.querySelector(".message_container");

  messageContainer.innerHTML = "";

  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    if (post.username) {
      const userElement = document.createElement("div");
      userElement.classList.add("user-info");
      userElement.innerHTML = `
        <img src="${post.userProfilePhoto}" alt="${post.username}" class="user-avatar">
        <span class="username">${post.username}</span>
      `;
      postElement.appendChild(userElement);
    }

    const titleElement = document.createElement("h3");
    titleElement.textContent = post.title;

    const messageElement = document.createElement("p");
    messageElement.textContent = post.message;

    const tagsElement = document.createElement("p");
    tagsElement.textContent = post.tags.join(", ");

    if (post.postMedia) {
      const imageElement = document.createElement("img");
      imageElement.src = post.postMedia;
      imageElement.alt = "Post Image";
      postElement.appendChild(imageElement);
    }

    postElement.appendChild(titleElement);
    postElement.appendChild(messageElement);
    postElement.appendChild(tagsElement);

    messageContainer.appendChild(postElement);
  });
}




