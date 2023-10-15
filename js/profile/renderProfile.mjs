import { profile } from "./getProfileName.mjs";
import { SOCIAL_API_URL } from "../api/APIvariables.mjs";
import { fetchToken } from "../api/fetchToken.mjs";
import { profileTemplate } from "../renders/profileTemplate.mjs";

const user = profile("profile");

const actionEndpoint = `/profiles/${user.name}`;

/**
* Fetches user profile data from API.
* 
* Constructs profile API URL using constants.
* Calls fetchToken() to make authorized API request.
* Parses JSON response into profile object.
* Renders profile data with template. 
* 
* @async
* @function getProfile
* @returns {Promise<Object>} Promise resolving to profile object.
*/
export async function getProfile() {
  const profileURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(profileURL);
  const profile = await response.json();

  profileTemplate(profile);

  return profile;
}

