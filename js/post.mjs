import { getSinglePost } from "../js/api/post/getSinglePost.mjs";
import { renderPostWall } from "../js/renders/renderPosts.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const post = await getSinglePost(id);

renderPostWall(post, false, ".message_container");
