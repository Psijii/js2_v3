import { getPosts } from "./profile/getProfilePosts.mjs";
import { getProfile } from "./profile/renderProfile.mjs";
import { tagSearch } from "./components/search.mjs";

getProfile();
getPosts();
tagSearch();
