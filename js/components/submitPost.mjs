import { addPost } from "../api/post/addPost.mjs";
import { prefixTag } from "../utils/prefixTag.mjs";

/** 
* Handles form submission to add a new post.
* 
* Gets form values from input fields.
* Adds hashtag prefix to tags string.
* Creates post object from form values.
* Calls API to add new post, reloading on success.
* 
* @async
* @function submitForm
* @param {Event} e - Form submit event 
*/
async function submitForm(e) {

  e.preventDefault();

  const form = document.getElementById("add-post");

  const title = form.postTitle.value;
  const body = form.postMessage.value;
  const tags = prefixTag(form.postTags.value);
  const media = form.postMedia.value;

  const postToAdd = {
    title,
    body,
    tags,
    media
  };

  try {
    await addPost(postToAdd);
  } catch {
  }

  location.reload("/index.html");

}

/**
* Adds click handler to submit button.
* Calls submitForm function on click.
* 
* @function submitPost
*/
export function submitPost() {
  const submitButton = document.querySelector("#submit-message");
  submitButton.addEventListener("click", submitForm);

}

