/**
* Renders user profile header.
* 
* Creates container div.
* Creates img for profile picture.
* Creates div for name and username.
* Creates name and username paragraphs.
* Appends name and username div to container.
* Appends profile picture and name container to header div.
* 
* @function profileTemplate 
* @param {Object} profile - User profile object
* @param {string} profile.name - User name
* @param {string} profile.email - User email
* @param {string} profile.avatar - URL to avatar image
*/

/**time ran out from me, so I couldn't make the profile work optimal.
 *I tried to show where the logic sohuld be, but..
 */

export function profileTemplate(profile) {

  const profileHeader = document.querySelector(".profile-info");

  const info = document.createElement("div");
  info.classList.add(
    "container",
    "profile-header",
    "bg-light",
    "text-center",
    "p-2",
    "my-4",
    "rounded-2"
  );

  const profilePictureImg = document.createElement("img");
  profilePictureImg.classList.add(
    "profile-picture",
    "mx-auto",
    "my-4",

  );
  profilePictureImg.src = profile.avatar;
  profilePictureImg.alt = "";
  profilePictureImg.style.maxWidth = "250px";

  const nameContainer = document.createElement("div");
  nameContainer.classList.add(
    "name-container",
    "mx-auto",
    "my-4",
    "rounded-2"
  );

  const profileNameP = document.createElement("p");
  profileNameP.classList.add("profile-name");
  profileNameP.textContent = profile.name;

  const profileUsernameP = document.createElement("p");
  profileUsernameP.classList.add(
    "profile-username",
    "fw-bold",
    "text-secondary"
  );
  profileUsernameP.textContent = profile.email;

  nameContainer.appendChild(profileNameP);
  nameContainer.appendChild(profileUsernameP);

  info.appendChild(profilePictureImg);
  info.appendChild(nameContainer);

  profileHeader.appendChild(info);
}
