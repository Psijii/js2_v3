import { delPost } from "../api/post/delPost.mjs";

/** 
* Adds click handlers to delete buttons.
* 
* Gets all delete buttons from the DOM. 
* Loops through each button.
* Gets the post ID from the button name attribute.
* Calls delPost() with the post ID on click.
* 
* @function delBtn
*/
export const delBtn = () => {

  const delBtns = document.querySelectorAll("#delete-post");

  delBtns.forEach((button) => {

    const { name } = button;

    button.addEventListener("click", async () => {

      delPost({ id: name });

    });

  });

}
