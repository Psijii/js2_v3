/**
* Gets profile data from localStorage. 
* 
* Retrieves item from localStorage by key.
* Parses JSON string to object.
* Returns parsed profile data object.
* 
* @function profile
* @param {string} key - localStorage key 
* @returns {Object} Parsed profile data object
*/
export function profile(key) {

  const value = localStorage.getItem(key);

  return JSON.parse(value);

}
