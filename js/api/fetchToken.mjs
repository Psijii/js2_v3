// Used to make fetch requests with authorization headers
import { load } from "./loadToken.mjs";

/**
* Returns authorization headers object.
*   
* Gets auth token from localStorage.
* Returns headers object with:
* - Content-Type for JSON  
* - Authorization bearer token
* 
* Used to attach headers to fetch requests.
*
* @function addHeaders
* @returns {Object} Headers object
*/
export function addHeaders() {

  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };

}


/**
* Makes fetch request with authorization header.
* 
* Calls fetch() with passed URL and options.
* Spreads options object to include headers.
* Headers include authorization token from addHeaders().
* 
* @async
* @function fetchToken
* @param {string} url - Request URL
* @param {Object} options - Fetch options
* @returns {Promise} Fetch response  
*/
export async function fetchToken(url, options = {}) {

  return fetch(url, {
    ...options,
    headers: addHeaders()
  });

}
