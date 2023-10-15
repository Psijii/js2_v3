
/**
* Renders a post element using innerHTML.
* 
* Creates a div element and adds styling classes.
* Generates HTML strings for edit/delete or comment/like buttons based on isPrivate flag.
* Sets div innerHTML to rendered post HTML using template literals.
* Inserts post data into template literals. 
* Appends div element to provided parent.
* 
* @function renderPostWall
* @param {Object} post - Post data object
* @param {boolean} isPrivate - Whether to show edit/delete buttons
* @param {string} parentId - Query selector for parent element
*/
export function renderPostWall(post, isPrivate, parentId) {
  const postWall = document.querySelector(parentId);
  let element = document.createElement("div");
  element.classList.add(
    "messages",
    "bg-light",
    "mx-auto",
    "my-5",
    "p-3",
    "shadow-lg",
    "rounded-2"
  );

  /**Having struggling alot with trying to create js functionality to render
   * to html, I decided to give up, and instead go for inline html after all.
   * Even though this is not the best practice, I have spent way too much time
   * trying to make the js work, and I need to move on to other parts of the
   * project. 
   */

  const editbutton = `<a href="/feed/edit.html?id=${post.id}" class="btn w-50 btn-primary rounded-2 m-2">Edit</a>`;
  const deleteButton = `<button id="delete-post" name="${post.id}" class="btn w-50 btn-secondary rounded-2 m-2">Delete</button>`;

  //like and comment are placed educational purposes only. they have no functionality other than to show how the buttons would look like.
  const commentButton =
    '<button class="btn w-50 btn-primary rounded-2 m-2 text-light">Comment</button>';
  const likeButton =
    '<button class="btn w-50 btn-info rounded-2 m-2 text-light">Like</button>';

  const buttons = isPrivate
    ? editbutton + deleteButton
    : commentButton + likeButton;
  element.innerHTML = `
              <div class="d-flex flex-row contact-user mb-2 rounded-2">
                <img class="contact-picture bg-secondary rounded-2" src="${post.author?.avatar}" alt="">
                <div class="text-start m-2">
                  <p class="contact-name m-0">${post.author?.name}</p>
                  <p class="contact-username text-secondary m-0">Post created: ${post.created.substring(0, 10)}</p></div></div>
              <div class="text-start">
              <a href="/feed/post.html?id=${post.id}" class="d-inline-block"><h3>
              ${post.title}</h3></a></div>
                <p class="text-start">${post.body}</p>
                <p class="text-start text-secondary">Tags: ${post.tags.join(" ")}</p>
              <div class="post-media">
              <img class="media-content img-fluid" src="${post.media}"alt=""></div>
              <div class="d-flex message-nav justify-content-center align-items-center">${buttons}</div>
    `;

  postWall.appendChild(element);
}
