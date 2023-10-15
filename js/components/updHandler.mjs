// Purpose: Handle post update form submission
import { getSinglePost } from "../api/post/getSinglePost.mjs";
import { updatePost } from "../api/post/updPost.mjs";

/**
* Handles post update form submission.
* 
* Gets post ID from URL params.
* Fetches post data and populates form fields.
* Adds submit handler to update form.
* Gets updated values from form data.
* Converts tags to array and adds ID.
* Calls updatePost() with updated post object.
* Displays a pop-up message instead of using alert.
* Navigates back to profile page.
*  
* @async
* @function updHandler
*/
export async function updHandler() {
  const updateForm = document.getElementById("update-post");

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const post = await getSinglePost(id);

  updateForm.title.value = post.title;
  updateForm.body.value = post.body;
  updateForm.tags.value = post.tags;
  updateForm.media.value = post.media;

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    post.tags = [post.tags];
    post.id = id;

    updatePost(post);

    const popup = document.createElement("div");
    popup.innerHTML = "<b>Post is updated...</b>";
    popup.className = "popup";
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.style.display = "none";
      window.location.href = `/profile.html`;
    }, 2000); // Adjust the time (in milliseconds) the pop-up is displayed as needed
  });
}
